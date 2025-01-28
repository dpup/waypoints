import { z } from 'zod';

import { expectations, baseRubric } from '../_schema.js';

const management = z.object({
  goal: z.string(),
  tips: z.array(z.string()),
  areas: z.array(z.string()),
  measurement: z.array(z.string()),
  pitfalls: z.array(z.string()),
});

const rubric = baseRubric.extend({
  expectations: z.object({
    technical: expectations,
    ownership: expectations,
    impact: expectations,
    collaboration: expectations,
    support: expectations,
    leadership: expectations,
  }),
  management: management,
});

export default rubric;
