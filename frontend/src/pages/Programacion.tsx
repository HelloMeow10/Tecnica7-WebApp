import { Cpu, Code, Smartphone, Globe, Database, Shield, Briefcase, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DisenoCurricular from '@/components/DisenoCurricular';
import PerfilEgreso from '@/components/PerfilEgreso';
import SalidaLaboral from '@/components/SalidaLaboral';
import PracticasProfesionales from '@/components/PracticasProfesionales';
import ProyectosParticipaciones from '@/components/ProyectosParticipaciones';
import ImageGallery from '@/components/ImageGallery';
import programacionImg from '@/assets/programacion.png';
import codificacionImg from '@/assets/codificacion.png';
import fotoalumnosImg from '@/assets/fotoalumnos.png';
import horariosCicloSuperior from '@/assets/Horarios ciclo superior (2).xlsx';
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};
const fast = { duration: 0.2 };

const Programacion = () => {
  const tecnologias = [
    "Visual Basic.NET", "SQL", "HTML", "CSS", "JavaScript", 
    "C#", "PHP", "Arduino", "Python", "React"
  ];

  const competencias = [
    {
      icon: Code,
      title: "Creación de Soluciones",
      description: "Desarrollo de soluciones innovadoras a problemas empresariales complejos"
    },
    {
      icon: Database,
      title: "Sistemas de Gestión",
      description: "Diseño y desarrollo de sistemas integrales de gestión empresarial"
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Creación de aplicaciones para dispositivos móviles multiplataforma"
    },
    {
      icon: Globe,
      title: "Desarrollo Web",
      description: "Construcción de sitios web dinámicos y aplicaciones web modernas"
    },
    {
      icon: Shield,
      title: "Seguridad Informática",
      description: "Implementación de medidas de seguridad en sistemas y aplicaciones"
    },
    {
      icon: Cpu,
      title: "Hardware y Sistemas",
      description: "Explotar funcionalidades de hardware, software y redes"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="min-h-screen pt-32 pb-20">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <motion.div
              className="text-center space-y-6 mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={fast}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <Cpu className="h-10 w-10 text-white" />
              </div>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground">
                Técnico en <span className="text-primary">Programación</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Una de las especialidades más populares de la técnica, enfocada en la creación
                de hardware, software y páginas web con tecnologías de vanguardia.
              </p>
            </motion.div>

            {/* Main Description */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={fast}
            >
              <Card className="card-elegant p-8 mb-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Code className="h-8 w-8 text-primary" />
                      <h2 className="font-heading font-bold text-2xl text-foreground">¿Qué es Programación?</h2>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      Es una de las especialidades más populares de la técnica, sus materias se basan
                      sobre todo en la creación de hardware y software y de páginas web. Se integran
                      talleres como: Procesos industriales, Programación, Diseño web estático y dinámico,
                      Seguridad informática, y más.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Estos talleres cuentan con ordenadores junto a aplicaciones y material necesario
                      para el trabajo (editores de código, programas para crear aplicaciones, etc.),
                      que ayudarán en el desarrollo de las materias.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-xl text-foreground">Tecnologías que Aprenderás</h3>
                    <div className="flex flex-wrap gap-2">
                      {tecnologias.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Diseño Curricular */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={fast}
            >
              <DisenoCurricular filePath="/diseno_curricular_programacion.md" />
            </motion.div>

            {/* Horarios Section */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={fast}
            >
              <Card className="card-elegant p-8 mb-16">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground">Horarios del Ciclo Superior</h3>
                      <p className="text-muted-foreground">Descargá el cronograma de materias y horarios.</p>
                    </div>
                  </div>
                  <Button asChild className="bg-gradient-primary hover:opacity-90 font-bold">
                    <a href={horariosCicloSuperior} download="Horarios Ciclo Superior.xlsx">
                      Descargar Horarios
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Formato de Consultora */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={fast}
            >
              <Card className="card-elegant p-8 mb-16 bg-gradient-card">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="h-8 w-8 text-primary" />
                    <h2 className="font-heading font-bold text-2xl text-foreground">Formato de Consultora Privada</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    En la E.E.S.T. N°7, trabajamos con un enfoque único que simula una consultora privada. Los estudiantes de 4to a 7mo año forman equipos para desarrollar proyectos reales para clientes internos y externos. Esta metodología de aprendizaje basado en proyectos (ABP) permite a los alumnos adquirir experiencia práctica en todo el ciclo de vida del desarrollo de software, desde la toma de requerimientos hasta la implementación y el mantenimiento.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Este modelo no solo mejora las habilidades técnicas de los estudiantes, sino que también fomenta el trabajo en equipo, la comunicación y la resolución de problemas, preparándolos para los desafíos del mundo laboral actual.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Competencias Grid */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={fast}
            >
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                    Competencias del <span className="text-primary">Técnico en Programación</span>
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Capacidades y habilidades que desarrollarás durante la tecnicatura
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {competencias.map((competencia, index) => (
                    <Card key={index} className="card-elegant hover:shadow-glow group transition-all duration-500">
                      <CardHeader className="text-center pb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                          <competencia.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="font-heading text-lg text-foreground">
                          {competencia.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {competencia.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={fast}
            >
              <PerfilEgreso
                title="Perfil del Egresado"
                description="El Técnico en Programación estará capacitado para realizar programas o componentes de sistemas de computación – interpretar especificaciones de diseño, documentar los productos realizados, verificar los componentes programados, buscar causas de malfuncionamiento y corregir los programas o adaptarlos a cambios en las especificaciones – desarrollando las actividades descriptas en el perfil profesional y cumpliendo con los criterios de realización establecidos para las mismas en el marco de un equipo de trabajo organizado por proyecto."
                items={[
                  "Interpretar especificaciones de diseño o requisitos de las asignaciones a programar.",
                  "Planificar su trabajo en el contexto del equipo de desarrollo del proyecto y de la tecnología a utilizar.",
                  "Producir programas, módulos o componentes de sistemas de computación.",
                  "Verificar y depurar el producto desarrollado.",
                  "Realizar revisiones cruzadas de código o de interfaces.",
                  "Realizar la documentación técnica y de usuarios de acuerdo con los requerimientos funcionales y técnicos de las aplicaciones y sistemas.",
                  "Explotar las funcionalidades de los sistemas de información, hardware, software y redes."
                ]}
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={fast}
            >
              <SalidaLaboral
                title="Salida Laboral"
                description="Este técnico se ocupa en organizaciones de diversos tipos que tengan que desarrollar software. Empresas que realizan desarrollo de software por encargo de organizaciones locales o extranjeras, que proveen software junto con otros servicios de asesoramiento y consultoría, y, en menor número, que desarrollan sus propios productos de software para vender en el país o en el exterior."
                items={[
                  "Servicios informáticos para pequeñas y medianas empresas en áreas de análisis y programación de desarrollo y producción de software.",
                  "Empresas de distintos sectores de actividad económica en áreas de informática o de procesamiento de datos.",
                  "Por cuenta propia o en pequeños emprendimientos asociativos de desarrollo y producción de software.",
                  "Empresas de servicios de implantación y mantenimiento de sistemas informáticos.",
                  "Comercialización de equipos y sistemas informáticos.",
                  "Administración pública, en las áreas de mantenimiento y gestión de la información.",
                  "ONGs, en áreas vinculadas con el procesamiento de datos para la gestión.",
                  "Mantenimiento de sistemas informáticos en entornos personales y de redes de área local.",
                  "Asesoramiento técnico y venta de sistemas y aplicaciones informáticas."
                ]}
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={fast}
            >
              <PracticasProfesionales
                title="Prácticas Profesionalizantes"
                description="Las Prácticas Profesionalizantes son aquellas estrategias formativas integradas en la propuesta curricular, con el propósito de que los estudiantes consoliden, integren y amplíen, las capacidades y saberes que se corresponden con el perfil profesional en el que se están formando, organizadas por la institución educativa, referenciadas en situaciones de trabajo y/o desarrolladas dentro o fuera de la escuela."
                items={[
                  "Fortalecer los procesos educativos a través de instancias de encuentro y realimentación mutua con organismos del sector socio productivo y/o entidades de la comunidad.",
                  "Fomentar la apertura y participación de la institución en la comunidad.",
                  "Establecer puentes que faciliten a los estudiantes la transición desde la escuela al mundo del trabajo y a los estudios superiores.",
                  "Impulsar el reconocimiento de las demandas del contexto productivo local."
                ]}
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={fast}
            >
              <ProyectosParticipaciones
                title="Proyectos y Participaciones"
                description="Los estudiantes participan en diversas actividades extracurriculares."
                items={[
                  "Olimpíadas de Informática y Programación.",
                  "Feria de Ciencias y Tecnología.",
                  "Proyectos de robótica y automatización.",
                  "Participación en eventos y conferencias del sector."
                ]}
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={fast}
            >
              <ImageGallery
                title="Imágenes"
                images={[
                  programacionImg,
                  codificacionImg,
                  fotoalumnosImg
                ]}
              />
            </motion.div>

            {/* Detailed Objectives */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={fast}
            >
              <Card className="card-elegant p-8 mb-16">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-heading font-bold text-2xl text-foreground">Objetivos de la Tecnicatura</h2>
                    <p className="text-muted-foreground">
                      El Técnico en Programación estará capacitado para realizar programas o componentes
                      de sistemas de computación, participar en proyectos de desarrollo de software.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="font-heading font-semibold text-lg text-foreground">Capacidades Principales:</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>Interpretar especificaciones de diseño o requisitos de las asignaciones a programar</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>Verificar y depurar el producto desarrollado</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>Explotar las funcionalidades de los sistemas de información, hardware, software y redes</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-heading font-semibold text-lg text-foreground">Desarrollo de Productos:</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          <span>Producir programas, módulos o componentes de sistemas de computación</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          <span>Desarrollar proyectos con la misma o diferente tecnología</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          <span>Crear aplicaciones innovadoras y funcionales</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={fast}
            >
              <Card className="card-elegant bg-gradient-card p-8 text-center">
                <div className="space-y-6">
                  <Cpu className="h-16 w-16 text-primary mx-auto" />
                  <h3 className="font-heading font-bold text-3xl text-foreground">
                    ¿Te Interesa la Programación?
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Desarrollá tu futuro en el mundo de la tecnología. Contactanos para más información
                    sobre esta especialidad y los proyectos que podrás realizar.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-bold px-8">
                      Más Información
                    </Button>
                    <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8">
                      Ver Inscripciones
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Programacion;