import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Noticias = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elfsight.cdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

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
        <div className="elfsight-app-2af9e07a-6b1e-4e25-858b-f53d170ab980" data-elfsight-app-lazy></div>
      </main>
      <Footer />
    </div>
  );
};

export default Noticias;
