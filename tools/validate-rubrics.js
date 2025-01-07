import fs from 'fs';
import yaml from 'yaml';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';
import { fromError, isZodErrorLike } from 'zod-validation-error';

import coreSchema from '../content/rubrics/core/_schema.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const directoryPath = join(__dirname, '../content/rubrics/core');
const yamlFiles = getYamlFiles(directoryPath);

let hasError = false;

yamlFiles.forEach((file) => {
  const filePath = join(directoryPath, file);
  if (!validateYamlFile(filePath)) {
    hasError = true;
  }
});

if (hasError) {
  process.exit(1);
} else {
  console.log('✅ All rubrics are valid');
}

function validateYamlFile(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.parse(fileContents);
    coreSchema.parse(data);
    return true;
  } catch (err) {
    if (isZodErrorLike(err)) {
      console.error(`❌ ${basename(filePath)}:`, fromError(err).toString());
    } else {
      console.error(`❌ ${basename(filePath)}:`, err.toString());
    }
    return false;
  }
}

function getYamlFiles(dir) {
  return fs.readdirSync(dir).filter((file) => extname(file) === '.yaml');
}
