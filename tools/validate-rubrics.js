import { readFileSync, readdir } from 'fs';
import { parse } from 'yaml';
import Ajv from 'ajv';
import { resolve, join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';
const ajv = new Ajv();

const rubricsDir = resolve(dirname(fileURLToPath(import.meta.url)), '../content/rubrics/core');
const schema = JSON.parse(readFileSync(join(rubricsDir, '_schema.json'), 'utf8'));
const validate = ajv.compile(schema);

const hasErrors = false;

readdir(rubricsDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    if (extname(file) === '.yaml' && file !== '_schema.yaml') {
      const filePath = join(rubricsDir, file);
      const fileContent = readFileSync(filePath, 'utf8');
      const data = parse(fileContent);

      const valid = validate(data);

      if (!valid) {
        console.error(`❌ ${file} validation errors:`, validate.errors);
        hasErrors = true;
      }
    }
  });
});

if (hasErrors) process.exit(1);
else console.log('✅ Rubrics are valid');
