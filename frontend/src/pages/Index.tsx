import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CarrerasSection from '@/components/CarrerasSection';
import FeaturesSection from '@/components/FeaturesSection';
import NoticiasSection from '@/components/NoticiasSection';
import TestimoniosSection from '@/components/TestimoniosSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { motion } from 'framer-motion'; // Si usas animaciones

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CarrerasSection />
        <FeaturesSection />
        <NoticiasSection />
        <TestimoniosSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-blue-700"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nuestras Estadísticas
        </motion.h2>

        {/* Contenedor centrado para las estadísticas */}
        <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-12">
          {/* Estadística 1 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-4xl font-bold text-blue-600">500+</h3>
            <p className="text-lg text-gray-700">Estudiantes Activos</p>
          </motion.div>

          {/* Estadística 2 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-4xl font-bold text-blue-600">110+</h3>
            <p className="text-lg text-gray-700">Años de Trayectoria</p>
          </motion.div>

          {/* Estadística 3 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-4xl font-bold text-blue-600">Miles de</h3>
            <p className="text-lg text-gray-700">Egresados en Inicio</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Index;
