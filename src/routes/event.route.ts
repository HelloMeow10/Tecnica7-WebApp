import { Router } from 'express';
import * as ctrl from '../controllers/event.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();
router.get('/', ctrl.listEvents);
router.get('/:id', ctrl.getEvent);
router.post('/', protect(['ADMIN']), ctrl.createEvent);
router.put('/:id', protect(['ADMIN']), ctrl.updateEvent);
router.delete('/:id', protect(['ADMIN']), ctrl.deleteEvent);

export default router;
