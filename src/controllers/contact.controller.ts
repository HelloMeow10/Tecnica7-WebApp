import { Request, Response, NextFunction } from 'express';
import prisma from '../services/prisma.service';
import { sendMail } from '../services/mail.service';
import config from '../config';

interface ContactRequestBody {
  Email?: string;
  nombre?: string;
  comentario?: string;
  nombre2?: string; // Este campo estaba en el PHP original, lo incluimos por si acaso
}

export const handleContactForm = async (req: Request, res: Response, next: NextFunction) => {
  const { Email, nombre, comentario, nombre2 } = req.body as ContactRequestBody;

  // Validación básica
  if (!Email || !nombre || !comentario) {
    return res.status(400).json({ message: 'Email, nombre y comentario son campos requeridos.' });
  }

  try {
    // 1. Guardar en la base de datos con Prisma
    const created = await prisma.contactSubmissions.create({
      data: { email: Email, name: nombre, message: comentario },
      select: { id: true }
    });
    const newSubmissionId = created.id;
    console.log('Contact form submission saved to DB:', newSubmissionId);

    // 2. Enviar correo electrónico
    const mailContent = `Nuevo mensaje de contacto:
Nombre: ${nombre}
Email: ${Email}
Mensaje: ${comentario}
${nombre2 ? `Nombre2 (campo adicional): ${nombre2}` : ''}
ID de Registro en BD: ${newSubmissionId}`;

    const mailSent = await sendMail({
      to: config.mail.to,
      subject: `Nuevo Contacto Web de: ${nombre}`,
      text: mailContent,
    });

    if (mailSent) {
      const responseMessage = typeof mailSent === 'string' && mailSent.startsWith('http') 
        ? 'Formulario enviado con éxito. Email de prueba visible en: ' + mailSent 
        : 'Formulario enviado con éxito. Email enviado.';
      return res.status(200).json({ 
        message: responseMessage, 
        submissionId: newSubmissionId,
        mailPreviewUrl: typeof mailSent === 'string' && mailSent.startsWith('http') ? mailSent : undefined
      });
    } else {
      console.error(`Failed to send contact email for submission ${newSubmissionId}, but data was saved to DB.`);
      return res.status(200).json({ 
        message: 'Formulario guardado, pero hubo un problema al enviar el correo de notificación.',
        submissionId: newSubmissionId
      });
    }

  } catch (error: any) {
    console.error('Error processing contact form:', error);
    // Prisma unique violation
    if (error.code === 'P2002') {
      return res.status(409).json({ message: 'Este email ya ha sido registrado.' });
    }
    next(error); // Pasa a middleware de error global
  }
};
