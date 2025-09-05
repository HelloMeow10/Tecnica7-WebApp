import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import BlurText from '@/components/ui/BlurText';
import MagicBento from '@/components/ui/MagicBento';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};
const fast = { duration: 0.3 };

const bentoCards = [
  {
    title: "¿Cómo inscribirse?",
    content: (
      <>
        <BlurText
          text="Inscribite y comenzá tu camino técnico en la E.E.S.T N°7"
          delay={120}
          animateBy="words"
          direction="top"
          className="text-lg text-muted-foreground leading-relaxed mb-2"
        />
        <h1 className="font-heading font-bold text-3xl text-foreground mb-2">
          Inscripciones <span className="text-primary">2025</span>
        </h1>
      </>
    ),
  },
  {
    title: "Planilla de inscripción",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Planilla de inscripción</h3>
        <p>Imprimir la planilla de inscripción que se adjunta en la página, completar y firmar.</p>
        <div className="flex justify-center mt-4">
          <a href="/PlanillaInscripcion.pdf" download className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition">Descargar Inscripción</a>
        </div>
      </>
    ),
  },
  {
    title: "Documentación requerida",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Documentación que debe presentar junto con la planilla de inscripción:</h3>
        <ul className="list-disc pl-6 text-left">
          <li>DNI del alumno (Original y Fotocopia).</li>
          <li>Constancia de CUIL del alumno.</li>
          <li>Partida de nacimiento del alumno (Original y Fotocopia).</li>
          <li>Vacunas (Original y Fotocopia).</li>
          <li>Título de Primaria o Constancia de finalización de 6° Grado. (Original y Fotocopia).</li>
          <li>Certificado de <b>ANALITICO INCOMPLETO EN TRAMITE</b> (Para ingresantes en 2°, 3° o 4° AÑO).</li>
          <li>DNI del Padre/Madre o Tutor (Original y Fotocopia).</li>
          <li>Dos Folios tamaño oficio.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Fechas importantes",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Fechas de inscripción</h3>
        <ul className="list-disc pl-6 text-left">
          <li>Inscripción presencial: del 10 al 20 de noviembre.</li>
          <li>Horario: 8:30 a 12:00 y 13:30 a 16:00 hs.</li>
          <li>Consultas: Secretaría de la escuela.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Contacto y consultas",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">¿Dudas o consultas?</h3>
        <p>Puedes comunicarte con la Secretaría:</p>
        <ul className="list-disc pl-6 text-left">
          <li>Teléfono: (011) 4248-6259</li>
          <li>Email: eet7lz@yahoo.com.ar</li>
          <li>Dirección: Manuel Acevedo 1864, Banfield</li>
        </ul>
      </>
    ),
  },
  {
    title: "Recomendaciones",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Recomendaciones para la inscripción</h3>
        <ul className="list-disc pl-6 text-left">
          <li>Verifica que toda la documentación esté completa antes de presentarla.</li>
          <li>Trae fotocopias legibles y originales.</li>
          <li>Consulta por vacantes y requisitos específicos según el año de ingreso.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Vacantes y cupos",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Información sobre vacantes</h3>
        <p>Las vacantes se asignan por orden de llegada y cumplimiento de requisitos.</p>
        <p>En caso de no obtener vacante, puedes consultar por lista de espera.</p>
      </>
    ),
  },
  {
    title: "Turnos y horarios",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Turnos disponibles</h3>
        <ul className="list-disc pl-6 text-left">
          <li>Turno mañana: 8:00 a 12:30 hs.</li>
          <li>Turno tarde: 13:00 a 17:30 hs.</li>
        </ul>
      </>
    ),
  },
];

const InscripcionPage = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Fondo animado suave */}
      <motion.div
        className="absolute inset-0 -z-10 w-full h-full pointer-events-none"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Círculo azul */}
        <motion.div
          className="absolute top-[-120px] left-[-120px] bg-blue-200 rounded-full"
          style={{ width: 400, height: 400, filter: "blur(80px)" }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        {/* Círculo amarillo */}
        <motion.div
          className="absolute bottom-[-140px] right-[-140px] bg-yellow-200 rounded-full"
          style={{ width: 350, height: 350, filter: "blur(80px)" }}
          animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        />
        {/* Círculo celeste */}
        <motion.div
          className="absolute top-1/2 left-1/2 bg-blue-100 rounded-full"
          style={{ width: 300, height: 300, filter: "blur(60px)", transform: "translate(-50%, -50%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </motion.div>

      <Header />
      <main className="flex-grow">
        <div className="min-h-screen pt-32 pb-6">
          <div className="container mx-auto px-4">
            {/* MagicBento Section con más bloques */}
            <section className="w-full max-w-6xl mx-auto mb-8">
              <MagicBento
                cards={bentoCards}
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="132, 0, 255"
              />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InscripcionPage;
