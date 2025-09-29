import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { FileText, Files, CalendarDays, Phone, ThumbsUp, Users, Clock } from 'lucide-react';

const sidebarItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Inscripción", href: "#inscripcion" },
  { label: "Documentos", href: "#documentacion" },
  { label: "Fechas", href: "#fechas" },
  { label: "Contacto", href: "#contacto" },
  { label: "Vacantes", href: "#vacantes" },
];

const cardData = [
  {
    id: "inscripcion",
    icon: FileText,
    title: "Planilla de inscripción",
    content: "Imprimir la planilla de inscripción que se adjunta en la página, completar y firmar.",
    action: {
      href: "/PlanillaInscripcion.pdf",
      text: "Descargar Planilla",
    }
  },
  {
    id: "documentacion",
    icon: Files,
    title: "Documentación requerida",
    content: "Documentación que debe presentar junto con la planilla de inscripción:",
    list: [
      "DNI del alumno (Original y Fotocopia).",
      "Constancia de CUIL del alumno.",
      "Partida de nacimiento del alumno (Original y Fotocopia).",
      "Vacunas (Original y Fotocopia).",
      "Título de Primaria o Constancia de finalización de 6° Grado. (Original y Fotocopia).",
      "Certificado de ANALITICO INCOMPLETO EN TRAMITE (Para ingresantes en 2°, 3° o 4° AÑO).",
      "DNI del Padre/Madre o Tutor (Original y Fotocopia).",
      "Dos Folios tamaño oficio."
    ]
  },
  {
    id: "fechas",
    icon: CalendarDays,
    title: "Fechas importantes",
    content: "Fechas de inscripción:",
    list: [
      "Inscripción presencial: del 10 al 20 de noviembre.",
      "Horario: 8:30 a 12:00 y 13:30 a 16:00 hs.",
      "Consultas: Secretaría de la escuela."
    ]
  },
  {
    id: "contacto",
    icon: Phone,
    title: "Contacto y consultas",
    content: "¿Dudas o consultas? Puedes comunicarte con la Secretaría:",
    list: [
      "Teléfono: (011) 4248-6259",
      "Email: eet7lz@yahoo.com.ar",
      "Dirección: Manuel Acevedo 1864, Banfield"
    ]
  },
  {
    id: "recomendaciones",
    icon: ThumbsUp,
    title: "Recomendaciones",
    content: "Recomendaciones para la inscripción:",
    list: [
        "Verifica que toda la documentación esté completa antes de presentarla.",
        "Trae fotocopias legibles y originales.",
        "Consulta por vacantes y requisitos específicos según el año de ingreso."
    ]
  },
  {
    id: "vacantes",
    icon: Users,
    title: "Vacantes y cupos",
    content: "Las vacantes se asignan por orden de llegada y cumplimiento de requisitos. En caso de no obtener vacante, puedes consultar por lista de espera."
  },
  {
    id: "turnos",
    icon: Clock,
    title: "Turnos y horarios",
    content: "Turnos disponibles:",
    list: [
        "Turno mañana: 8:00 a 12:30 hs.",
        "Turno tarde: 13:00 a 17:30 hs."
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const InscripcionPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-1/4 sticky top-28 h-fit bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Navegación</h2>
            <nav>
              <ul className="space-y-3">
                {sidebarItems.map(item => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block text-gray-600 hover:text-primary font-medium transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <section id="inicio" className="lg:w-3/4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-16 text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Inscripciones <span className="text-primary">2025</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Inscribite y comenzá tu camino técnico en la E.E.S.T N°7. Encuentra toda la información que necesitas para completar tu inscripción.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cardData.map((card) => (
                <motion.div
                  key={card.id}
                  id={card.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <card.icon className="w-6 h-6 mr-3 text-primary" />
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{card.content}</p>
                  {card.list && (
                    <ul className="list-disc pl-6 text-left text-gray-600 space-y-2 mb-4 flex-grow">
                      {card.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {card.action && (
                    <div className="mt-auto">
                      <a href={card.action.href} download className="inline-block bg-blue-600 text-white rounded-md px-6 py-2 font-semibold hover:bg-blue-700 transition-colors duration-300">
                        {card.action.text}
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InscripcionPage;