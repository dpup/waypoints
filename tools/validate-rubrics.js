import fs from 'fs';
import yaml from 'yaml';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';
import { fromError, isZodErrorLike } from 'zod-validation-error';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let hasError = false;

const dirs = ['ic', 'manager'];

await Promise.all(
  dirs.map(async (dir) => {
    const { default: schema } = await import('../content/rubrics/' + dir + '/_schema.js');
    const directoryPath = join(__dirname, '../content/rubrics/', dir);
    const yamlFiles = getYamlFiles(directoryPath);

    yamlFiles.forEach((file) => {
      const filePath = join(directoryPath, file);
      if (!validateYamlFile(filePath, schema)) {
        hasError = true;
      }
    });
  }),
);

if (hasError) {
  process.exit(1);
} else {
  console.log('✅ All rubrics are valid');
}

function validateYamlFile(filePath, schema) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.parse(fileContents);
    schema.parse(data);
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
