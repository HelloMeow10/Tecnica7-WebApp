import { Router } from 'express';
import { getMetrics } from '../controllers/admin.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();

// Only director/admins
router.use(protect(['DIRECTOR']));

router.get('/metrics', getMetrics);

export default router;
