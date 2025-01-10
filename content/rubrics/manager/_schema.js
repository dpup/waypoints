import { z } from 'zod';

import { expectations, baseRubric } from '../_schema.js';

const rubric = baseRubric.extend({
  expectations: z.object({
    strategy: expectations,
    culture: expectations,
    planning: expectations,
    collaboration: expectations,
    leadership: expectations,
    technical: expectations,
  }),
  management: management,
});

export default rubric;
