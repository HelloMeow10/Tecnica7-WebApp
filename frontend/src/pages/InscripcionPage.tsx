import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import BlurText from '@/components/ui/BlurText';
import MagicBento from '@/components/ui/MagicBento';

const sidebarItems = [
  { label: "Inicio", href: "/" },
  { label: "Inscripción", href: "/inscripcion" },
  { label: "Documentos", href: "/documentos" },
  { label: "Fechas", href: "/fechas" },
  { label: "Contacto", href: "/contacto" },
  { label: "Vacantes", href: "/vacantes" },
];

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
      <Header />
      <main className="flex-grow flex flex-row">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-56 min-w-48 max-w-xs bg-gradient-to-b from-gray-100 to-gray-200 border-r border-gray-300 py-8 px-4 sticky top-0 h-[calc(100vh-64px)] z-20">
          <nav>
            <ul className="space-y-4">
              {sidebarItems.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block text-gray-700 hover:text-primary font-medium transition-colors px-2 py-1 rounded hover:bg-gray-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        {/* MagicBento y contenido principal */}
        <section className="flex-1 flex flex-col items-center justify-start">
          <div className="w-full max-w-[1800px] px-2 pt-32 pb-6 mx-auto">
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
              glowColor="0,0,0"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InscripcionPage;
