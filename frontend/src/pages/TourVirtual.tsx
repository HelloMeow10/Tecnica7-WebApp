import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

import escuela from '@/assets/escuela.jpeg';
import patioColegio from '@/assets/patioColegio.jpg';
import paisaje2 from '@/assets/paisaje2.png';
import paisaje3 from '@/assets/paisaje3.png';
import paisaje4 from '@/assets/paisaje4.png';
import teatromalvinas from '@/assets/teatromalvinas.jpeg';
import hero from '@/assets/hero-escuela-tecnica.jpg';

type AccentKey = 'blue' | 'violet' | 'emerald' | 'amber' | 'cyan' | 'rose';

const images: { src: string; alt: string; accent: AccentKey }[] = [
  { src: hero, alt: 'Entrada de la escuela', accent: 'blue' },
  { src: escuela, alt: 'Frente de la escuela', accent: 'cyan' },
  { src: teatromalvinas, alt: 'Teatro Malvinas', accent: 'violet' },
  { src: patioColegio, alt: 'Patio del colegio', accent: 'emerald' },
  { src: paisaje2, alt: 'zoom del colegio', accent: 'cyan' },
  { src: paisaje3, alt: 'Paisaje 3', accent: 'amber' },
  { src: paisaje4, alt: 'Paisaje 4', accent: 'rose' },
];

const accents: Record<AccentKey, { gradient: string; ring: string; borderHover: string; badge: string }> = {
  blue:   { gradient: 'from-blue-700/60 via-blue-400/20 to-transparent',   ring: 'ring-blue-400/30 group-hover:ring-blue-500/50',     borderHover: 'group-hover:border-blue-500/60',     badge: 'bg-blue-100 text-blue-800' },
  violet: { gradient: 'from-violet-700/60 via-violet-400/20 to-transparent', ring: 'ring-violet-400/30 group-hover:ring-violet-500/50', borderHover: 'group-hover:border-violet-500/60',   badge: 'bg-violet-100 text-violet-800' },
  emerald:{ gradient: 'from-emerald-700/60 via-emerald-400/20 to-transparent',ring:'ring-emerald-400/30 group-hover:ring-emerald-500/50',borderHover:'group-hover:border-emerald-500/60',  badge: 'bg-emerald-100 text-emerald-800' },
  amber:  { gradient: 'from-amber-700/60 via-amber-400/20 to-transparent',  ring: 'ring-amber-400/30 group-hover:ring-amber-500/50',   borderHover: 'group-hover:border-amber-500/60',    badge: 'bg-amber-100 text-amber-900' },
  cyan:   { gradient: 'from-cyan-700/60 via-cyan-400/20 to-transparent',    ring: 'ring-cyan-400/30 group-hover:ring-cyan-500/50',     borderHover: 'group-hover:border-cyan-500/60',     badge: 'bg-cyan-100 text-cyan-800' },
  rose:   { gradient: 'from-rose-700/60 via-rose-400/20 to-transparent',    ring: 'ring-rose-400/30 group-hover:ring-rose-500/50',     borderHover: 'group-hover:border-rose-500/60',     badge: 'bg-rose-100 text-rose-800' },
};

const TourVirtual = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="relative flex-grow container mx-auto px-4 py-20">
        {/* Fondos suaves animados */}
        <motion.div
          className="absolute inset-0 -z-10 w-full h-full pointer-events-none"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute -top-24 -left-24 bg-blue-200 rounded-full"
            style={{ width: 420, height: 420, filter: 'blur(90px)' }}
            animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-28 -right-28 bg-emerald-200 rounded-full"
            style={{ width: 380, height: 380, filter: 'blur(85px)' }}
            animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 bg-amber-100 rounded-full"
            style={{ width: 320, height: 320, filter: 'blur(80px)', transform: 'translate(-50%, -50%)' }}
            animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
          />
        </motion.div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className={`relative group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 overflow-hidden ring-1 ${accents[image.accent].ring} ${accents[image.accent].borderHover}`}
            >
              <div className="relative w-full h-64">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06] group-hover:brightness-[0.95]"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${accents[image.accent].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end`}> 
                  <span className="w-full text-center text-[1.05rem] font-semibold text-white pb-4 drop-shadow-lg tracking-wide">
                    {image.alt}
                  </span>
                </div>
                {/* Badge sutil en esquina superior izquierda */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium shadow-sm backdrop-blur-sm bg-white/60 ${accents[image.accent].badge}`}>
                    Vista #{index + 1}
                  </span>
                </div>
                {/* Borde decorativo */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-2xl border-2 border-white/10"></div>
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
