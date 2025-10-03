import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Seed Roles if empty
  const count = await prisma.roles.count();
  if (count === 0) {
    await prisma.roles.createMany({
      data: [
        { role_name: 'DIRECTOR' },
        { role_name: 'PROFESOR' },
        { role_name: 'ALUMNO' },
      ],
      skipDuplicates: true,
    });
  }

  // Ensure admin user exists (credentials from env)
  const directorRole = await prisma.roles.findFirst({ where: { role_name: 'DIRECTOR' } });
  if (directorRole) {
    const email = process.env.ADMIN_EMAIL || 'admin@example.com';
    const plainPassword = process.env.ADMIN_PASSWORD || 'admin123';
    const firstName = process.env.ADMIN_FIRST_NAME || 'Admin';
    const lastName = process.env.ADMIN_LAST_NAME || 'User';

    const password_hash = await bcrypt.hash(plainPassword, 10);

    await prisma.users.upsert({
      where: { email },
      update: {
        password_hash,
        first_name: firstName,
        last_name: lastName,
        role_id: directorRole.role_id,
      },
      create: {
        email,
        password_hash,
        first_name: firstName,
        last_name: lastName,
        role_id: directorRole.role_id,
      },
    });
  }

  // Seed fixed 17 courses and subjects
  const allowed: Array<{ year: number; division: string }> = [
    { year: 1, division: '1' }, { year: 1, division: '2' }, { year: 1, division: '3' },
    { year: 2, division: '1' }, { year: 2, division: '2' }, { year: 2, division: '3' },
    { year: 3, division: '1' }, { year: 3, division: '2' }, { year: 3, division: '3' },
    { year: 4, division: '2' }, { year: 4, division: '3' },
    { year: 5, division: '2' }, { year: 5, division: '3' },
    { year: 6, division: '2' }, { year: 6, division: '3' },
    { year: 7, division: '2' }, { year: 7, division: '3' },
  ];

  // Provided mapping condensed for seed
  const subjectMap: Record<string, string[]> = {
    '1°1': [
      'Prácticas del Lenguaje','Ciencias Naturales','Lenguaje Tecnológico','Construcción de la Ciudadanía','Matemática','Educación Física','Ciencias Sociales','Inglés','Educación Artística'
    ],
    '1°2': [
      'Ciencias Naturales','Ciencias Sociales','Educación Física','Inglés','Lenguaje Tecnológico','Matemática','Procesos Tecnológicos','Construcción de la Ciudadanía','Educación Artística','Prácticas del Lenguaje','Sistemas Tecnológicos'
    ],
    '1°3': [
      'Inglés','Ciencias Sociales','Matemática','Procesos Tecnológicos','Sistemas Tecnológicos','Construcción de la Ciudadanía','Prácticas del Lenguaje','Educación Artística','Lenguaje Tecnológico'
    ],
    '2°1': [
      'Historia','Prácticas del Lenguaje','Procesos Tecnológicos','Sistemas Tecnológicos','Construcción de la Ciudadanía','Matemática','Inglés','Físico-Química','Lenguaje Tecnológico','Geografía','Educación Física','Educación Artística'
    ],
    '2°2': [
      'Historia','Físico-Química','Prácticas del Lenguaje','Inglés','Procesos Tecnológicos','Matemática','Educación Física','Geografía','Sistemas Tecnológicos','Biología','Lenguaje Tecnológico','Educación Artística'
    ],
    '2°3': [
      'Prácticas del Lenguaje','Inglés','Sistemas Tecnológicos','Construcción de la Ciudadanía','Educación Física','Matemática','Lenguaje Tecnológico','Procesos Tecnológicos','Educación Artística'
    ],
    '3°1': [
      'Inglés','Matemática','Construcción de la Ciudadanía','Educación Física','Físico-Química','Geografía','Sistemas Tecnológicos','Procesos Tecnológicos','Prácticas del Lenguaje','Educación Artística'
    ],
    '3°2': [
      'Físico-Química','Procesos Tecnológicos','Geografía','Matemática','Lenguaje Tecnológico','Prácticas del Lenguaje','Sistemas Tecnológicos','Biología','Educación Física','Historia','Educación Artística'
    ],
    '3°3': [
      'Biología','Prácticas del Lenguaje','Educación Física','Sistemas Tecnológicos','Historia','Matemática','Geografía','Lenguaje Tecnológico','Procesos Tecnológicos','Construcción de la Ciudadanía','Educación Artística'
    ],
    '4°2': [
      'Morfología Visual','Educación Física','Sistemas Operativos','Matemática','Química','Historia','Laboratorio de Hardware','Física','Tecnología Electrónica','Inglés','Geografía','Literatura'
    ],
    '4°3': [
      'Literatura','Matemática','Morfología Visual','Salud y Adolescencia','Geografía','Física','Morfología Sonora','Inglés','Introducción Multimedia','Guion','Educación Física'
    ],
    // 4°4 omitted as not in allowed set
    '5°2': [
      'Sistemas Multimedia','Educación Física','Matemática','Sistemas Digitales','Metodología de la Investigación','Historia','Análisis Matemático','Derecho del Trabajo','Modelos y Sistemas','Geografía','Laboratorio de Redes','Laboratorio de Base de Datos','Bases de Datos','Física','Comunicación'
    ],
    '5°3': [
      'Arte','Geografía','Lenguaje Artístico','Sistemas Multimedia','Filosofía','Inglés','Literatura','Análisis Matemático','Derecho del Trabajo','Educación Física','Matemática Discreta'
    ],
    '6°2': [
      'Laboratorio de Programación','Desarrollo de Web Dinámicas','Sistemas Multimedia','Filosofía','Laboratorio de Procesos Industriales','Sistemas de Gestión y Autogestión','Seguridad Informática','Matemática','Literatura','Sistemas Computacionales','Educación Física','Matemática Discreta','Laboratorio de Redes Informáticas','Tecnología Electrónica','Prácticas Profesionalizantes','Sistemas Multimedia II','Desarrollo de Web Estáticas','Proyectos y Desarrollo de Plataformas Móviles','Diseño e Implementación de Sitios Web','Laboratorio de Hardware'
    ],
    '6°3': [
      'Síntesis de Imagen y Animación','Laboratorio de Programación','Desarrollo de Web Dinámicas','Sistemas Computacionales','Prácticas Profesionalizantes','Realización Audiovisual','Sistemas Multimedia','Tecnología de Sonido','Gestión de Proyectos','Diseño Gráfico','Diseño e Implementación de Sitios Web','Proyectos y Desarrollo de Plataformas Móviles','Sistemas Multimedia II','Laboratorio de Base de Datos','Laboratorio de Redes Informáticas'
    ],
    '7°2': [
      'Arte Digital','Inglés','Prácticas Profesionalizantes','Modelos y Sistemas','Sistemas Computacionales','Organización y Métodos','Evaluación de Proyectos','Empresas e Innovación Productiva','Ética y Deontología','Derecho del Trabajo','Proyectos y Desarrollo de Plataformas Móviles','Diseño e Implementación de Sitios Web','Marketing de Servicios','Realización Audiovisual','Implementación de Sistemas Computacionales','Laboratorio de Programación','Sistemas Digitales','Laboratorio de Diseño Web'
    ],
    '7°3': [
      'Arte Digital','Prácticas Profesionalizantes','Técnicas y Producción Gráfica','Ética y Deontología','Empresas y Producción de Productos','Evaluación de Proyectos','Teoría de la Comunicación','Marketing de Servicios','Realización Audiovisual','Diseño e Implementación de Sitios Web'
    ],
  };

  for (const { year, division } of allowed) {
    const name = `${year}°${division}`;
    const course = await prisma.courses.upsert({
      where: { year_division: { year, division } },
      update: { name },
      create: { name, year, division },
      select: { course_id: true },
    });
    const subjects = subjectMap[name];
    if (subjects && subjects.length) {
      // Insert missing subjects with order
      for (let i = 0; i < subjects.length; i++) {
        const s = subjects[i];
        await prisma.courseSubjects.upsert({
          where: { course_id_name: { course_id: course.course_id, name: s } },
          update: { order_index: i },
          create: { course_id: course.course_id, name: s, order_index: i },
        });
      }
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
