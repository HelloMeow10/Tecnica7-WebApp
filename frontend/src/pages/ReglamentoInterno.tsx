import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FileText, Shield, Users, BookOpen, Scaling, CheckCircle } from "lucide-react";
import { animate, motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedBackground from "@/components/ui/AnimatedBackground";


const ReglamentoInterno = () => {
  const sections = [
    {
      value: "item-1",
      title: "Medidas de Seguridad e Higiene",
      icon: <Shield className="h-6 w-6 text-primary" />,
      content: (
        <>
          <div className="bg-blue-50 rounded-lg p-4 mb-6 border-l-4 border-blue-400">
            <p className="font-medium text-blue-800 mb-4">Con el propósito de prevenir accidentes recomendamos:</p>
          </div>
          <div className="space-y-3">
            {[
              "Entrar y salir de la escuela en forma ordenada y sin apuro.",
              "Cruzar las calles por las esquinas, mirando bien hacia ambos lados.",
              "Respetar las señales de tránsito y pasos habilitados.",
              "Evitar distracciones al cruzar calles o vías.",
              "No viajar en estribos ni sacar brazos por ventanillas.",
              "No arrojar objetos cortantes en la escuela."
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="font-semibold text-green-700 text-center">
              💫 Recuerda que en todo momento, representas a la Escuela. ¡Haz que tu conducta la prestigie!
            </p>
          </motion.div>
        </>
      ),
    },
    {
      value: "item-2",
      title: "Acuerdo Institucional de Convivencia (AIC)",
      icon: <Users className="h-6 w-6 text-primary" />,
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-400">
            <p className="text-purple-800 leading-relaxed">
              El AIC es un acuerdo dinámico creado por toda la comunidad educativa para garantizar una convivencia escolar respetuosa y un clima adecuado para el estudio y trabajo.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5">
            <h4 className="font-bold text-lg text-purple-800 mb-4 flex items-center gap-2">
              🎯 Principales Objetivos:
            </h4>
            <div className="grid gap-3">
              {[
                { icon: "🤝", text: "Fomentar el sentido de pertenencia y buenos vínculos." },
                { icon: "💚", text: "Promover el respeto mutuo entre todos los miembros." },
                { icon: "🏫", text: "Cuidar el edificio, equipamiento e insumos." },
                { icon: "📚", text: "Fortalecer el abordaje de la Educación Sexual Integral (ESI)." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-700 flex-1">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
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
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 pt-32 relative z-10">
        <motion.div
          className="text-center space-y-8 mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="relative mx-auto w-fit"
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <motion.div
              className="w-28 h-28 bg-gradient-to-br from-blue-400 via-blue-500 to-purple-400 rounded-3xl flex items-center justify-center mx-auto shadow-xl relative overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                animate={{ x: [-100, 200] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
              <FileText className="h-14 w-14 text-white relative z-10" />
            </motion.div>
        
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-foreground mb-4">
              Reglamento <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">Interno</span>
            </h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pautas y acuerdos para una <span className="font-semibold text-green-600">convivencia armónica</span> y un entorno de aprendizaje <span className="font-semibold text-blue-600">seguro</span>.
            </p>
          </motion.div>
        </motion.div>

        {/* Elementos flotantes decorativos */}
        <motion.div
          className="fixed top-20 right-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60 z-0"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <motion.div
          className="fixed bottom-32 left-10 w-6 h-6 bg-green-400 rounded-full opacity-50 z-0"
          animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="fixed top-1/2 right-5 w-3 h-3 bg-blue-400 rounded-full opacity-70 z-0"
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <Accordion type="single" collapsible className="w-full">
            {sections.map((section, index) => (
               <motion.div
               key={section.value}
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               whileHover={{ y: -4, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)" }}
               className="group"  
             >
              <AccordionItem value={section.value} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg mb-6 overflow-hidden hover:bg-white/90 transition-all duration-300">
                <AccordionTrigger 
                  className="p-8 text-lg font-semibold hover:no-underline relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.div
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-6 w-full cursor-pointer relative z-10"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg"
                    >
                      <div className="text-white">
                        {section.icon}
                      </div>
                    </motion.div>
                    <div className="text-left">
                      <div className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                        {section.title}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Haz click para expandir
                      </div>
                    </div>
                  </motion.div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8 pt-4">
                  <motion.div
                    initial={{ opacity: 0, y: -15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-inner border border-gray-100"
                  >
                    <div className="prose prose-sm max-w-none text-gray-700">
                      {section.content}
                    </div>
                  </motion.div>
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
