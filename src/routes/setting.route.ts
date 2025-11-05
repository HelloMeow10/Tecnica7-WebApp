import { Router } from 'express';
import * as ctrl from '../controllers/setting.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();
router.get('/', ctrl.listSettings);
router.get('/:key', ctrl.getSetting);
// Permitir a DIRECTOR y ADMIN modificar ajustes
router.post('/', protect(['ADMIN', 'DIRECTOR']), ctrl.upsertSetting);
router.delete('/:key', protect(['ADMIN', 'DIRECTOR']), ctrl.deleteSetting);

export default router;
