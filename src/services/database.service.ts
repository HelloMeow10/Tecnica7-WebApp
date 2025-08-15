import { Pool } from 'pg';
import { dbConfig } from '../config';

// Crea un pool de conexiones a la base de datos.
// El pool gestiona eficientemente las conexiones, reutilizándolas
// para mejorar el rendimiento y la escalabilidad.
const pool = new Pool({
  user: dbConfig.user,
  host: dbConfig.host,
  database: dbConfig.database,
  password: dbConfig.password,
  port: dbConfig.port,
});

// Exportamos un objeto con un método `query` para ejecutar consultas.
// Este es el único punto de entrada para interactuar con la base de datos,
// lo que centraliza la lógica y facilita el manejo de errores y la depuración.
export const db = {
  query: (text: string, params?: any[]) => pool.query(text, params),
};

// Opcional: Escuchar el evento 'connect' para confirmar la conexión
pool.on('connect', () => {
  console.log('Cliente conectado al pool de la base de datos');
});

// Opcional: Escuchar el evento 'error' para capturar errores del pool
pool.on('error', (err, client) => {
  console.error('Error inesperado en el cliente del pool de la base de datos', err);
  process.exit(-1);
});
