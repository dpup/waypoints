variable "aws_account" {
  description = "AWS Account ID"
}

variable "aws_region" {
  description = "AWS Region"
}

variable "domain_name" {
  description = "Domain name where the site is hosted"
  default     = "waypnts.com"
}

variable "zone_id" {
  description = "Route53 Zone ID"
}

variable "tags" {
  description = "Tags to apply to resources"
  type        = map(string)
}
