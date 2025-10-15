import { Router } from 'express';
import * as newsController from '../controllers/news.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();

// Public
router.get('/', newsController.listNews);
router.get('/:id', newsController.getNews);

// Protected (admin/editor)
router.post('/', protect(['ADMIN']), newsController.createNews);
router.put('/:id', protect(['ADMIN']), newsController.updateNews);
router.delete('/:id', protect(['ADMIN']), newsController.deleteNews);

export default router;
