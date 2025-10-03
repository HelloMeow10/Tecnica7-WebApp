import { Router } from 'express';
import { protect } from '../middleware/auth.middleware';
import {
  listCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  enrollStudent,
  unenrollStudent,
  getReports,
} from '../controllers/course.controller';

const router = Router();

router.use(protect(['DIRECTOR']));

router.get('/reports', getReports);

router.route('/')
  .get(listCourses)
  .post(createCourse);

router.route('/:id')
  .get(getCourse)
  .put(updateCourse)
  .delete(deleteCourse);

router.post('/:id/enroll', enrollStudent);
router.delete('/:id/enroll/:studentId', unenrollStudent);

export default router;
