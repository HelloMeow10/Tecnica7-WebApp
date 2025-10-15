import { Router } from 'express';
import * as ctrl from '../controllers/studentCenter.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();
router.get('/', ctrl.listCenters);
router.get('/:id', ctrl.getCenter);
router.post('/', protect(['ADMIN']), ctrl.createCenter);
router.put('/:id', protect(['ADMIN']), ctrl.updateCenter);
router.delete('/:id', protect(['ADMIN']), ctrl.deleteCenter);

export default router;
