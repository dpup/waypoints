import { defineCollection, z } from 'astro:content';

import { file, glob } from 'astro/loaders';

import icRubricSchema from '../content/rubrics/ic/_schema';
import managerRubricSchema from '../content/rubrics/manager/_schema';

// Default schema for markdown files.
const mdSchema = z.object({
  title: z.string(),
  description: z.string(),
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

const icRubrics = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './content/rubrics/ic' }),
  schema: icRubricSchema,
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

export const collections = { docs, guides, appendix, icRubrics, managerRubrics, capabilities };
