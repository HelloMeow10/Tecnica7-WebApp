import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

import escuela from '@/assets/escuela.jpeg';
import paisaje1 from '@/assets/paisaje1.png';
import paisaje2 from '@/assets/paisaje2.png';
import paisaje3 from '@/assets/paisaje3.png';
import paisaje4 from '@/assets/paisaje4.png';
import teatromalvinas from '@/assets/teatromalvinas.jpeg';
import hero from '@/assets/hero-escuela-tecnica.jpg';

const images = [
  { src: hero, alt: 'Entrada de la escuela' },
  { src: escuela, alt: 'Frente de la escuela' },
  { src: teatromalvinas, alt: 'Teatro Malvinas' },
  { src: paisaje1, alt: 'Paisaje 1' },
  { src: paisaje2, alt: 'Paisaje 2' },
  { src: paisaje3, alt: 'Paisaje 3' },
  { src: paisaje4, alt: 'Paisaje 4' },
];

const TourVirtual = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Tour Virtual</h1>
          <p className="text-lg text-gray-600">
            Un recorrido por nuestras instalaciones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
              <div className="p-4 bg-white">
                <p className="text-gray-700">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TourVirtual;
