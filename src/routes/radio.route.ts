import { Router } from 'express';
import * as ctrl from '../controllers/radio.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();
router.get('/', ctrl.listRadios);
router.get('/:id', ctrl.getRadio);
router.post('/', protect(['ADMIN']), ctrl.createRadio);
router.put('/:id', protect(['ADMIN']), ctrl.updateRadio);
router.delete('/:id', protect(['ADMIN']), ctrl.deleteRadio);

export default router;
