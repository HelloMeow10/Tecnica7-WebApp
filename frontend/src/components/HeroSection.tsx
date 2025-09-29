import { ArrowRight, Award, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { fadeUp, staggerContainer, textVariant } from '@/lib/animations';

const HeroSection = () => {
  const handleScroll = () => {
    const section = document.getElementById('carreras');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Users, value: "500+", label: "Estudiantes" },
    { icon: BookOpen, value: "2", label: "Especialidades" },
    { icon: Award, value: "110+", label: "Años de Excelencia" }
  ];

  return (
    <section id="inicio" className="hero-section min-h-screen relative flex items-center pt-24">
      {/* Fondo gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-900 to-gray-900"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-white space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4">
              <motion.h1 variants={textVariant} className="font-heading font-bold text-5xl lg:text-7xl leading-tight">
                Formando Técnicos del Futuro
              </motion.h1>
              <motion.p variants={textVariant} className="text-xl lg:text-2xl text-white/90 font-medium leading-relaxed">
                Educación técnica de excelencia en Banfield. Más de 110 años preparando
                profesionales con las competencias que demanda el mundo laboral actual.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeUp}
            >
              <Button
                size="lg"
                className="bg-black text-primary hover:bg-white/10 font-bold text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={handleScroll}
              >
                Conocé Nuestras Carreras
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/tour-virtual">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-gray hover:bg-transparent hover:text-primary font-bold text-lg px-8 py-6 rounded-xl backdrop-blur-sm bg-white/10"
                >
                  Tour Virtual
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-2"
                  variants={fadeUp}
                >
                  <stat.icon className="h-8 w-8 mx-auto text-accent-light" />
                  <div className="font-heading font-bold text-2xl lg:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-white/80">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Featured Card */}
          <motion.div
            className="lg:flex justify-center hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            <div className="glass p-8 rounded-2xl max-w-md space-y-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white">
                  Inscripciones 2025
                </h3>
                <p className="text-white/90">
                  Iniciá tu futuro profesional en la escuela técnica líder de la zona sur.
                </p>
              </div>

              <div className="space-y-3 text-white/90 text-sm">
                <div className="flex justify-between">
                  <span>Inscripciones:</span>
                  <span className="font-semibold">Febrero - Marzo</span>
                </div>
                <div className="flex justify-between">
                  <span>Inicio de clases:</span>
                  <span className="font-semibold">Marzo 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Modalidad:</span>
                  <span className="font-semibold">Presencial</span>
                </div>
              </div>

              <Link to="/inscripcion" className="w-full">
                <Button
                  className="w-full bg-accent hover:bg-accent-light text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Inscribite Ahora
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;