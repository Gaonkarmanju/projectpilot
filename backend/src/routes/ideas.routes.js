const router = require('express').Router();
const { z } = require('zod');
const validate = require('../middleware/validate');
const asyncHandler = require('../lib/asyncHandler');
const ctrl = require('../controllers/ideas.controller');

const listQuery = z.object({
  domain: z.string().trim().optional(),
  difficulty: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']).optional(),
  maxWeeks: z.coerce.number().int().min(1).max(52).optional(),
  q: z.string().trim().max(100).optional(),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(60).default(24),
});

// Ideas are public so students can browse before signing up
router.get('/', validate(listQuery, 'query'), asyncHandler(ctrl.listIdeas));
router.get('/filters', asyncHandler(ctrl.getFilters)); // must come before /:id
router.get('/:id', asyncHandler(ctrl.getIdea));

module.exports = router;
