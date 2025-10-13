import { Router } from 'express';
import * as ctrl from '../controllers/setting.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();
router.get('/', ctrl.listSettings);
router.get('/:key', ctrl.getSetting);
router.post('/', protect(['ADMIN']), ctrl.upsertSetting);
router.delete('/:key', protect(['ADMIN']), ctrl.deleteSetting);

export default router;
