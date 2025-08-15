import { Router } from 'express';
import { handleContactForm } from '../controllers/contact.controller';

const router = Router();

// POST /api/contact
// El frontend deberá enviar los datos del formulario a este endpoint.
router.post('/', handleContactForm);

export default router;
