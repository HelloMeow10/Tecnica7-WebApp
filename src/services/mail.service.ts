import nodemailer from 'nodemailer';
import config from '../config';

interface MailOptions {
  to: string | string[]; // Destinatario o destinatarios
  subject: string;
  text?: string; // Cuerpo del correo en texto plano
  html?: string; // Cuerpo del correo en HTML
}

// Crear un transporter de nodemailer
// Usaremos Ethereal para pruebas si no hay configuración específica
const transporter = nodemailer.createTransport({
  host: config.mail.host,
  port: config.mail.port,
  secure: config.mail.secure, // true for 465, false for other ports like 587 (STARTTLS)
  auth: {
    user: config.mail.auth.user,
    pass: config.mail.auth.pass,
  },
});

// Función para verificar la conexión con el servidor SMTP (opcional, útil para diagnóstico)
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to mail server:', error);
    // Si estás usando Ethereal y no has configurado credenciales, esto podría fallar.
    // Ethereal a menudo funciona sin autenticación explícita si se usa su host y puerto.
    // Para producción, asegúrate de que las credenciales son correctas.
    if (config.mail.host === 'smtp.ethereal.email') {
        console.warn('Ethereal mail server selected. Ensure you have an Ethereal account if auth is required, or check logs for preview URL.');
    }
  } else {
    console.log('Mail server is ready to take our messages');
  }
});

export const sendMail = async (options: MailOptions): Promise<string | false> => {
  try {
    const mailDetails = {
      from: `"Tecnica 7 Web App" <${config.mail.from}>`,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    };

    const info = await transporter.sendMail(mailDetails);
    console.log('Message sent: %s', info.messageId);

    // Si estás usando Ethereal, nodemailer.getTestMessageUrl(info) te da la URL para ver el correo
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log('Preview URL: %s', previewUrl);
      return previewUrl; // Devuelve la URL de vista previa para Ethereal
    }
    return info.messageId; // Devuelve el ID del mensaje para otros transportes
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Ejemplo de cómo obtener una cuenta de prueba de Ethereal (solo para desarrollo)
export const createEtherealTestAccount = async () => {
  if (config.mail.host === 'smtp.ethereal.email' && (!config.mail.auth.user || !config.mail.auth.pass)) {
    try {
      const testAccount = await nodemailer.createTestAccount();
      console.log('Ethereal test account created:');
      console.log('User:', testAccount.user);
      console.log('Pass:', testAccount.pass);
      console.log('Host:', testAccount.smtp.host);
      console.log('Port:', testAccount.smtp.port);
      console.log('Secure:', testAccount.smtp.secure);
      console.log('------------------------------------');
      console.log('Update your .env file with these Ethereal credentials for MAIL_USER and MAIL_PASS to ensure mail sending works.');
      console.log('Alternatively, nodemailer will use these automatically if no auth is provided for smtp.ethereal.email');
      console.log('------------------------------------');
      // Actualiza la configuración del transporter para usar esta cuenta de prueba si es necesario
      (transporter.options as any).auth = { user: testAccount.user, pass: testAccount.pass };
      config.mail.auth.user = testAccount.user; // actualiza en config para que se use en sendMail
      config.mail.auth.pass = testAccount.pass;
    } catch (error) {
      console.error('Failed to create Ethereal test account:', error);
    }
  }
};

// Llama a esta función al inicio si quieres generar una cuenta Ethereal automáticamente
// createEtherealTestAccount();
