import { useState } from 'react';
import { Cpu, Building2, Monitor, HardHat, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import VocationalTest from './VocationalTest';
import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { fadeUp, staggerContainer, textVariant } from '@/lib/animations';

const CarrerasSection = () => {
  const [isTestOpen, setIsTestOpen] = useState(false);
  const cicloBasico = {
    icon: Building2,
    title: "Ciclo Básico",
    description: "Primeros 3 años comunes a todas las tecnicaturas. Formación fundamental donde priorizamos el HACER Y REFLEXIONAR SOBRE LO QUE SE HACE.",
    duration: "3 años",
    color: "bg-gradient-primary",
    link: "/ciclo-basico"
  };

  const orientaciones = [
    {
      icon: Cpu,
      title: "Técnico en Programación",
      description: "Desarrollo de software, aplicaciones web, sistemas de gestión y tecnologías de vanguardia. Programación en múltiples lenguajes.",
      duration: "4 años",
      color: "bg-blue-500",
      link: "/programacion"
    },
    {
      icon: Monitor,
      title: "Técnico en Multimedios",
      description: "Creación audiovisual, diseño digital, animación, realización audiovisual y síntesis de imagen para medios digitales.",
      duration: "4 años",
      color: "bg-purple-500",
      link: "/multimedios"
    }
  ];

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  return (
    <section id="carreras" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 variants={textVariant} className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Nuestro <span className="text-primary">Plan de Estudios</span>
          </motion.h2>
          <motion.p variants={textVariant} className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Educación técnica de 7 años con dos orientaciones: 3 años de ciclo básico común
            y 4 años de especialización en la orientación elegida.
          </motion.p>
        </motion.div>

        {/* Ciclo Básico */}
        <motion.div
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-center mb-8">
            <motion.h3 variants={textVariant} className="font-heading font-bold text-2xl text-foreground mb-4">
              Ciclo Básico
            </motion.h3>
            <motion.p variants={textVariant} className="text-muted-foreground">
              Formación común para todas las orientaciones
            </motion.p>
          </div>
          <motion.div
            className="flex justify-center"
            variants={fadeUp}
          >
            <Card className="card-elegant hover:shadow-glow group transition-all duration-500 max-w-md">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${cicloBasico.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <cicloBasico.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="font-heading text-xl text-foreground">
                  {cicloBasico.title}
                </CardTitle>
                <CardDescription className="text-accent font-semibold">
                  Duración: {cicloBasico.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {cicloBasico.description}
                </p>
                <Button asChild variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                  <Link to={cicloBasico.link}>Conocé Más</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Orientaciones */}
        <motion.div
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-center mb-8">
            <motion.h3 variants={textVariant} className="font-heading font-bold text-2xl text-foreground mb-4">
              Orientaciones del Ciclo Superior
            </motion.h3>
            <motion.p variants={textVariant} className="text-muted-foreground">
              Elegí tu especialización para los últimos 4 años
            </motion.p>
          </div>
          <motion.div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" variants={staggerContainer}>
            {orientaciones.map((orientacion, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
              >
                <Card className="card-elegant hover:shadow-glow group transition-all duration-500 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 ${orientacion.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <orientacion.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="font-heading text-xl text-foreground">
                      {orientacion.title}
                    </CardTitle>
                    <CardDescription className="text-accent font-semibold">
                      Duración: {orientacion.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {orientacion.description}
                    </p>
                    <Button asChild variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                      <Link to={orientacion.link}>Ver Detalles</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center space-y-6 bg-gradient-card rounded-2xl p-8 lg:p-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div variants={fadeUp}>
            <HardHat className="h-12 w-12 text-primary mx-auto" />
          </motion.div>
          <motion.h3 variants={textVariant} className="font-heading font-bold text-3xl text-foreground">
            ¿No sabés qué especialidad elegir?
          </motion.h3>
          <motion.p variants={textVariant} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Te ayudamos a descubrir tu vocación. Nuestro equipo de orientación
            educativa te acompañará en la elección de tu futuro profesional.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeUp}
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 font-bold px-8 py-3 btn-glow"
              onClick={() => setIsTestOpen(true)}
            >
              <Lightbulb className="mr-2 h-5 w-5" />
              Test Vocacional
            </Button>
            <Link to="/contacto">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-3"
              >
                Agendar Entrevista
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Tech Logos */}
        <div className="mt-20 mb-8">
          <div className="flex justify-center items-center gap-x-8 gap-y-4 flex-wrap">
            {techLogos.map((logo, index) => (
              <a key={index} href={logo.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <div style={{height: '48px', width: '48px'}}>{logo.node}</div>
                <span>{logo.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <VocationalTest open={isTestOpen} onOpenChange={setIsTestOpen} />
    </section>
  );
};

export default CarrerasSection;