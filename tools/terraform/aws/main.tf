resource "aws_route53_record" "apex" {
  zone_id = var.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.web.domain_name
    zone_id                = aws_cloudfront_distribution.web.hosted_zone_id
  }
}

resource "aws_route53_record" "www" {
  zone_id = var.zone_id
  name    = "www.${var.domain_name}"
  type    = "A"

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.web.domain_name
    zone_id                = aws_cloudfront_distribution.web.hosted_zone_id
  }
}

resource "aws_acm_certificate" "cert" {
  domain_name               = var.domain_name
  subject_alternative_names = ["www.${var.domain_name}"]
  validation_method         = "DNS"

  options {
    certificate_transparency_logging_preference = "ENABLED"
  }

  lifecycle {
    create_before_destroy = true
  }

  tags = var.tags
}

resource "aws_acm_certificate_validation" "cert" {
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert : record.fqdn]
}

resource "aws_route53_record" "cert" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = var.zone_id
}

locals {
  bucket_name = "${var.domain_name}-${random_string.random.result}"
  name        = "waypoints"
}

resource "random_string" "random" {
  length  = 6
  special = false
  upper   = false
}


data "aws_cloudfront_cache_policy" "caching" {
  name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_distribution" "web" {
  aliases = [var.domain_name, "www.${var.domain_name}"]

  custom_error_response {
    error_caching_min_ttl = "0"
    error_code            = "403"
    response_code         = "200"
    response_page_path    = "/403.html"
  }

  custom_error_response {
    error_caching_min_ttl = "0"
    error_code            = "404"
    response_code         = "200"
    response_page_path    = "/404.html"
  }

  default_cache_behavior {
    cache_policy_id            = data.aws_cloudfront_cache_policy.caching.id
    response_headers_policy_id = aws_cloudfront_response_headers_policy.web.id
    allowed_methods            = ["GET", "HEAD"]
    cached_methods             = ["HEAD", "GET"]
    compress                   = "true"
    default_ttl                = "0"
    max_ttl                    = "0"
    min_ttl                    = "0"
    smooth_streaming           = "false"
    target_origin_id           = "S3Origin"
    viewer_protocol_policy     = "redirect-to-https"

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.handle_request.arn
    }
  }

  enabled         = "true"
  http_version    = "http2and3"
  is_ipv6_enabled = "true"

  origin {
    connection_attempts      = "3"
    connection_timeout       = "10"
    domain_name              = module.web_bucket.s3_bucket_bucket_regional_domain_name
    origin_id                = "S3Origin"
    origin_access_control_id = aws_cloudfront_origin_access_control.web.id
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  retain_on_delete = "false"

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.cert.arn
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method       = "sni-only"
  }

  tags = var.tags

}

resource "aws_cloudfront_function" "handle_request" {
  name    = "${local.name}-handler"
  runtime = "cloudfront-js-2.0"
  comment = "Manages index.html routing for directory access."
  publish = true
  code    = <<EOF
function handler(event) {

  // If the request is for a path not a file, tell CF to serve the root
  // index.html file instead.
  if (!hasExtension(event.request.uri)) {
    event.request.uri = '/index.html'
  }

  return event.request;
}

function hasExtension(url) {
  var parts = url.split('?')[0].split('/');
  return parts[parts.length - 1].split('.').length > 1;
}

EOF
}

resource "aws_cloudfront_response_headers_policy" "web" {
  name = "${local.name}-header-policy"

  security_headers_config {
    frame_options {
      frame_option = "DENY"
      override     = true
    }

    strict_transport_security {
      access_control_max_age_sec = 86400
      override                   = true
      include_subdomains         = true
    }
  }
}

resource "aws_cloudfront_origin_access_control" "web" {
  name                              = "${local.name}-origin-access-control"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

module "web_bucket" {
  source = "terraform-aws-modules/s3-bucket/aws"

  bucket = local.bucket_name
  acl    = "private"

  force_destroy           = false
  block_public_acls       = true
  block_public_policy     = true
  restrict_public_buckets = true
  ignore_public_acls      = true

  control_object_ownership = true
  object_ownership         = "BucketOwnerPreferred"

  versioning = {
    enabled = true
  }

  server_side_encryption_configuration = {
    rule = {
      apply_server_side_encryption_by_default = {
        kms_master_key_id = aws_kms_key.web.arn
        sse_algorithm     = "aws:kms"
      }
      bucket_key_enabled = true
    }
  }

  attach_policy = true
  policy = jsonencode({
    "Id" : "PolicyForCloudFrontPrivateContent",
    "Statement" : [
      {
        "Sid" : "1",
        "Action" : "s3:GetObject",
        "Effect" : "Allow",
        "Principal" : {
          "AWS" : "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity ${aws_cloudfront_origin_access_identity.web.id}"
        },
        "Resource" : "${module.web_bucket.s3_bucket_arn}/*"
      },
      {
        "Sid" : "2",
        "Action" : "s3:GetObject",
        "Effect" : "Allow",
        "Principal" : {
          "Service" : "cloudfront.amazonaws.com"
        },
        "Resource" : "${module.web_bucket.s3_bucket_arn}/*",
        "Condition" : {
          "StringEquals" : {
            "AWS:SourceArn" : "${aws_cloudfront_distribution.web.arn}"
          }
        }
      }
    ],
    "Version" : "2008-10-17"
  })
}

resource "aws_cloudfront_origin_access_identity" "web" {
}

resource "aws_kms_key" "web" {
  description         = "Key used to encrypt bucket objects"
  key_usage           = "ENCRYPT_DECRYPT"
  enable_key_rotation = true
  multi_region        = false
}

resource "aws_kms_alias" "web" {
  name          = "alias/${local.name}"
  target_key_id = aws_kms_key.web.key_id
}

resource "aws_kms_key_policy" "web" {
  key_id = aws_kms_key.web.id
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Sid" : "1",
        "Effect" : "Allow",
        "Principal" : {
          "AWS" : "arn:aws:iam::${var.aws_account}:root"
        },
        "Action" : "kms:*",
        "Resource" : "*"
      },
      {
        "Sid" : "2",
        "Effect" : "Allow",
        "Principal" : {
          "AWS" : "arn:aws:iam::${var.aws_account}:root",
          "Service" : "cloudfront.amazonaws.com"
        },
        "Action" : [
          "kms:GenerateDataKey*",
          "kms:Encrypt",
          "kms:Decrypt"
        ],
        "Resource" : "*",
        "Condition" : {
          "StringEquals" : {
            "AWS:SourceArn" : "${aws_cloudfront_distribution.web.arn}"
          }
        }
      }
    ]
  })
}

