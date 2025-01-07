import { z } from 'zod';

const expectations = z.object({
  exceeds: z.string(),
  meets: z.string(),
  misses: z.string(),
});

const management = z.object({
  goal: z.string(),
  tips: z.array(z.string()),
  areas: z.array(z.string()),
  measurement: z.array(z.string()),
  pitfalls: z.array(z.string()),
});

const rubric = z.object({
  title: z.string(),
  description: z.string(),
  responsibilities: z.array(z.string()),
  expectations: z.object({
    technical: expectations,
    ownership: expectations,
    impact: expectations,
    collaboration: expectations,
    support: expectations,
    leadership: expectations,
  }),
  traits: z.array(z.string()),
  management: management,
});

export default rubric;
