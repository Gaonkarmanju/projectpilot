const router = require('express').Router();
const { z } = require('zod');
const validate = require('../middleware/validate');
const { requireAuth } = require('../middleware/auth');
const asyncHandler = require('../lib/asyncHandler');
const ctrl = require('../controllers/projects.controller');

router.use(requireAuth);

const dateString = z.string().refine((v) => !Number.isNaN(Date.parse(v)), 'must be a valid date');

const createSchema = z.object({ ideaId: z.string().min(1), deadline: dateString.optional() });
const updateSchema = z.object({
  status: z.enum(['PLANNING', 'IN_PROGRESS', 'COMPLETED']).optional(),
  deadline: dateString.nullable().optional(),
});
const milestoneSchema = z.object({ isDone: z.boolean() });

router.get('/', asyncHandler(ctrl.listProjects));
router.post('/', validate(createSchema), asyncHandler(ctrl.createProject));
router.get('/:id', asyncHandler(ctrl.getProject));
router.patch('/:id', validate(updateSchema), asyncHandler(ctrl.updateProject));
router.delete('/:id', asyncHandler(ctrl.deleteProject));
router.post('/:id/roadmap', asyncHandler(ctrl.createRoadmap));
router.patch('/:id/milestones/:milestoneId', validate(milestoneSchema), asyncHandler(ctrl.toggleMilestone));

module.exports = router;
