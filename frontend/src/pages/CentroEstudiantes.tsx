import { ArrowUpRight, Calendar, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnidosPorLaLibertad from "@/assets/UnidosPorLaLibertad.jpeg";
import CrearMasLibertad from "@/assets/Crear+Libertad.jpeg";
import AvanceEstudiantil from "@/assets/AvanceEstudiantil.jpg";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CentroEstudiantes = () => {
  const studentCenters = [
    {
      period: "2025",
      name: "Centro de Estudiantes",
      president: "Mateo Fernandez",
      image: AvanceEstudiantil,
    },
    {
      period: "2024-2025",
      name: "Crear + Libertad",
      president: "Lucas Ramos",
      image: CrearMasLibertad,
    },
    {
      period: "2023-2024",
      name: "Unidos por la Libertad",
      president: "Lucas Ramos",
      image: UnidosPorLaLibertad,
    },
    {
      period: "2022-2023",
      name: "Avance Estudiantil",
      president: "Luz Roggerone (Presidente interina Juliana Goux)",
      image: null,
    },
  ].reverse(); // Show most recent first

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white-50 dark:bg-gray-950">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between sm:items-center mb-12"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tighter">
              Centro de Estudiantes
            </h1>
            <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
              Un recorrido por las gestiones estudiantiles.
            </p>
          </div>
          <Button asChild className="mt-4 sm:mt-0">
            <a
              href="http://centro.tecnica7ldz.edu.ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar Blog <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {studentCenters.map((center) => (
            <motion.div
              key={center.period}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-3">
                <div className="md:col-span-1 p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {center.name}
                  </h2>
                  <div className="mt-4 space-y-3 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-3 text-gray-400 dark:text-gray-500" />
                      <span className="font-semibold">{center.period}</span>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 mr-3 mt-1 text-gray-400 dark:text-gray-500" />
                      <div>
                        <span className="font-medium">{center.president}</span>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Presidente/a
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 bg-gray-100 dark:bg-gray-800/50 min-h-[250px] flex items-center justify-center">
                  {center.image ? (
                    <img
                      src={center.image}
                      alt={`Imagen de ${center.name}`}
                      className="max-w-full max-h-[300px] object-contain p-4"
                    />
                  ) : (
                    <div className="text-center text-gray-400 dark:text-gray-500">
                      <p>Sin imagen disponible</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default CentroEstudiantes;
