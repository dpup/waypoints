import { defineCollection, z } from 'astro:content';

import { file, glob } from 'astro/loaders';

import coreRubricSchema from '../content/rubrics/core/_schema';
import managerRubricSchema from '../content/rubrics/manager/_schema';

// Default schema for markdown files.
const mdSchema = z.object({
  title: z.string(),
  order: z.number(),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/docs' }),
  schema: mdSchema,
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/guides' }),
  schema: mdSchema,
});

const appendix = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/appendix' }),
  schema: mdSchema,
});

const coreRubrics = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './content/rubrics/core' }),
  schema: coreRubricSchema,
});

const managerRubrics = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './content/rubrics/manager' }),
  schema: managerRubricSchema,
});

const capabilities = defineCollection({
  loader: file('./content/rubrics/capabilities.yaml'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { docs, guides, appendix, coreRubrics, managerRubrics, capabilities };
