import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FileText, Shield, Users, BookOpen, Scaling, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ReglamentoInterno = () => {
  const sections = [
    {
      value: "item-1",
      title: "Medidas de Seguridad e Higiene",
      icon: <Shield className="h-6 w-6 text-primary" />,
      content: (
        <>
          <p className="mb-4">Con el propósito de prevenir accidentes recomendamos:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Entrar y salir de la escuela en forma ordenada y sin apuro.</li>
            <li>Cruzar las calles por las esquinas, mirando bien hacia ambos lados.</li>
            <li>Respetar las señales de tránsito y pasos habilitados.</li>
            <li>Evitar distracciones al cruzar calles o vías.</li>
            <li>No viajar en estribos ni sacar brazos por ventanillas.</li>
            <li>No arrojar objetos cortantes en la escuela.</li>
          </ul>
          <p className="mt-4 font-semibold text-primary/90">Recuerda que en todo momento, representas a la Escuela. ¡Haz que tu conducta la prestigie!</p>
        </>
      ),
    },
    {
      value: "item-2",
      title: "Acuerdo Institucional de Convivencia (AIC)",
      icon: <Users className="h-6 w-6 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>El AIC es un acuerdo dinámico creado por toda la comunidad educativa para garantizar una convivencia escolar respetuosa y un clima adecuado para el estudio y trabajo.</p>
          <h4 className="font-semibold text-lg">Principales Objetivos:</h4>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Fomentar el sentido de pertenencia y buenos vínculos.</li>
            <li>Promover el respeto mutuo entre todos los miembros.</li>
            <li>Cuidar el edificio, equipamiento e insumos.</li>
            <li>Fortalecer el abordaje de la Educación Sexual Integral (ESI).</li>
          </ul>
        </div>
      ),
    },
    {
        value: "item-3",
        title: "Pautas Clave de Convivencia",
        icon: <CheckCircle className="h-6 w-6 text-primary" />,
        content: (
          <ul className="list-disc list-inside space-y-3 pl-4">
            <li><strong>Diálogo ante conflictos:</strong> Resolver todo a través del diálogo, evitando cualquier tipo de violencia.</li>
            <li><strong>Respeto:</strong> La relación entre todos debe ser cordial y respetuosa, rechazando el acoso y las agresiones.</li>
            <li><strong>Vestimenta:</strong> Vestir acorde al ámbito escolar, con sugerencia de usar una prenda azul que identifique a la escuela (no obligatorio).</li>
            <li><strong>Trabajo en equipo:</strong> Fomentar la cooperación y motivación, especialmente con quienes tienen dificultades.</li>
            <li><strong>Uso de redes sociales:</strong> Responsabilidad y respeto, sin dañar, discriminar ni invadir la intimidad de otros.</li>
            <li><strong>Cuidado del espacio:</strong> Mantener la higiene y el cuidado del mobiliario y los espacios comunes.</li>
          </ul>
        ),
      },
    {
      value: "item-4",
      title: "Evaluación y Régimen Académico",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>Principales pautas del ciclo lectivo 2024-2025 según el Régimen Académico N° 1650/24.</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>El ciclo lectivo se divide en dos cuatrimestres.</li>
            <li>La materia se aprueba con calificación de 7 a 10 en ambos cuatrimestres.</li>
            <li>Instancias de intensificación en diciembre y febrero para materias no aprobadas.</li>
            <li>Máximo de 5 materias pendientes para pasar de año (4 curriculares y 1 de taller).</li>
            <li>Las materias aprobadas no se recursan.</li>
            <li>Se requiere un 75% de asistencia por materia.</li>
          </ul>
        </div>
      ),
    },
    {
        value: "item-5",
        title: "Consejo Institucional de Convivencia (CIC)",
        icon: <Scaling className="h-6 w-6 text-primary" />,
        content: (
          <div className="space-y-4">
            <p>El CIC es un órgano participativo que asesora al Equipo Directivo sobre acciones para una convivencia basada en el respeto y el diálogo.</p>
            <h4 className="font-semibold text-lg">Composición:</h4>
            <p>Está integrado por representantes de todos los claustros: estudiantes, docentes, preceptores, EOE, personal auxiliar y equipo de conducción, garantizando paridad.</p>
            <h4 className="font-semibold text-lg">Funciones:</h4>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Analizar y deliberar sobre proyectos y asuntos de convivencia.</li>
              <li>Propiciar la difusión y revisión continua del AIC.</li>
              <li>Reunirse periódicamente para abordar las necesidades de la comunidad.</li>
            </ul>
          </div>
        ),
      },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 pt-32">
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-700 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
            <FileText className="h-12 w-12 text-black" />
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Reglamento <span className="text-primary">Interno</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pautas y acuerdos para una convivencia armónica y un entorno de aprendizaje seguro.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {sections.map((section, index) => (
               <motion.div
               key={section.value}
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
             >
              <AccordionItem value={section.value} className="bg-white border-b rounded-lg shadow-sm mb-4">
                <AccordionTrigger className="p-6 text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-4">
                    {section.icon}
                    {section.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-base text-muted-foreground">
                  {section.content}
                </AccordionContent>
              </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReglamentoInterno;
