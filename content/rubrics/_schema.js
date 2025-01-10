import { z } from 'zod';

export const expectations = z.object({
  exceeds: z.string(),
  meets: z.string(),
  misses: z.string(),
});

export const baseRubric = z.object({
  title: z.string(),
  description: z.string(),
  responsibilities: z.array(z.string()),
  traits: z.array(z.string()),
});
