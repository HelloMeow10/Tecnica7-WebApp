import { Router } from 'express';
import {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} from '../controllers/teacher.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();

// Todas las rutas de profesores requieren el rol de 'DIRECTOR'
router.use(protect(['DIRECTOR']));

router.route('/')
  .get(getAllTeachers)
  .post(createTeacher);

router.route('/:id')
  .get(getTeacherById)
  .put(updateTeacher)
  .delete(deleteTeacher);

export default router;
