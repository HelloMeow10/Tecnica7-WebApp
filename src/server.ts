import app from './app';
import config from './config';
import { createEtherealTestAccount } from './services/mail.service'; // Importar la función

const PORT = config.port;

const startServer = async () => {
  // Crear cuenta de Ethereal si es necesario (solo en desarrollo y si está configurado para Ethereal)
  if (process.env.NODE_ENV !== 'production' && config.mail.host === 'smtp.ethereal.email') {
    await createEtherealTestAccount();
  }

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Access it at http://localhost:${PORT}`);
  });
};

startServer().catch(error => {
  console.error("Failed to start the server:", error);
  process.exit(1);
});

// Manejo de cierre elegante (opcional pero recomendado)
process.on('SIGINT', () => {
  console.log('Server shutting down...');
  // Aquí podrías cerrar conexiones a la base de datos, etc.
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Server shutting down...');
  process.exit(0);
});
