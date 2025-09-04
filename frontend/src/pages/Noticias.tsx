import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Noticias = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Noticias</h1>
          <p className="text-lg text-gray-600">
            Todas las noticias de la comunidad.
          </p>
        </motion.div>
        <div className="text-center">
            <p className="text-2xl text-gray-700">Esta sección se encuentra en construcción.</p>
            <p className="text-gray-500 mt-2">Vuelve pronto para más novedades.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Noticias;
