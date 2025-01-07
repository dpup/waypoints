const fs = require('fs');
const yaml = require('yaml');
const Ajv = require('ajv');
const ajv = new Ajv();

// TODO: Update to scan all rubrics using FS.

const fileContent = fs.readFileSync('./content/rubrics/core/L1.yaml', 'utf8');
const data = yaml.parse(fileContent);

const schema = JSON.parse(fs.readFileSync('./content/rubrics/core/_schema.json', 'utf8'));

const validate = ajv.compile(schema);
const valid = validate(data);

if (valid) {
  console.log('YAML is valid!');
} else {
  console.error('Validation errors:', validate.errors);
}
