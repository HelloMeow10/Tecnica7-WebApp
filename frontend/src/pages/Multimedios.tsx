import { Monitor, Camera, Palette, Film, Music, Megaphone, Download } from 'lucide-react';
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
import multimediosImg from '@/assets/multimedios.png';
import teatromalvinasImg from '@/assets/teatromalvinas.jpeg';
import fotoalumnosImg from '@/assets/fotoalumnos.png';
import horariosCicloSuperior from '@/assets/Horarios ciclo superior (2).xlsx';
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fast = { duration: 0.2 };

const Multimedios = () => {
  const talleres = [
    "Sistemas Multimediales", "Guión", "Síntesis de Imagen y Animación", 
    "Realización Audiovisual", "Diseño Gráfico", "Edición de Video", 
    "Fotografía Digital", "Audio y Sonido"
  ];

  const areas = [
    {
      icon: Camera,
      title: "Publicidad",
      description: "Creación de campañas publicitarias y contenido promocional para marcas"
    },
    {
      icon: Film,
      title: "Cinematografía",
      description: "Producción audiovisual, cortometrajes y contenido cinematográfico"
    },
    {
      icon: Palette,
      title: "Editorial e Ilustración",
      description: "Diseño editorial, ilustración digital y creación de contenido gráfico"
    },
    {
      icon: Monitor,
      title: "Medios Digitales",
      description: "Desarrollo de contenido para plataformas digitales y redes sociales"
    },
    {
      icon: Music,
      title: "Producción de Audio",
      description: "Grabación, edición y masterización de contenido sonoro"
    },
    {
      icon: Megaphone,
      title: "Comunicación Visual",
      description: "Diseño de identidad visual y estrategias de comunicación"
    }
  ];

  const competencias = [
    "Diseño, supervisión y asistencia en producción de medios digitales",
    "Creación de Medios Digitales innovadores",
    "Diseñar y desarrollar animaciones y videos",
    "Creación de guiones y producción de cortos",
    "Práctica Profesionalizante Externa"
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">

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
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                <Monitor className="h-10 w-10 text-white" />
              </div>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground">
                Técnico en <span className="text-primary">Multimedios</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Una de las especialidades más nuevas de la técnica, enfocada en la creación
                audiovisual y diseño digital con tecnología de vanguardia.
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
                      <Film className="h-8 w-8 text-primary" />
                      <h2 className="font-heading font-bold text-2xl text-foreground">¿Qué es Multimedios?</h2>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      Es una de las especialidades más nuevas de la técnica, sus materias se basan
                      sobre todo en la creación audiovisual y diseño digital. Se integran talleres
                      como: sistemas multimediales, guión, síntesis de imagen y animación, realización
                      audiovisual, diseño gráfico, y más.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Estos talleres cuentan con ordenadores junto a programas, aplicaciones y material
                      de trabajo (cámaras, micrófonos, equipos de sonido, etc), que ayudarán en el
                      desarrollo de las materias.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-xl text-foreground">Talleres Especializados</h3>
                    <div className="flex flex-wrap gap-2">
                      {talleres.map((taller, index) => (
                        <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                          {taller}
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
              <DisenoCurricular filePath="/diseno_curricular_multimedios.md" />
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

            {/* Areas de Trabajo */}
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
                    Áreas de <span className="text-primary">Desarrollo</span>
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Proyectos y disciplinas que podrás dominar durante la tecnicatura
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {areas.map((area, index) => (
                    <Card key={index} className="card-elegant hover:shadow-glow group transition-all duration-500">
                      <CardHeader className="text-center pb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                          <area.icon className="h-6 w-6 text-purple-600" />
                        </div>
                        <CardTitle className="font-heading text-lg text-foreground">
                          {area.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {area.description}
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
                description="El Técnico en Multimedios estará capacitado para diseñar, producir y realizar productos multimediales, integrando conocimientos de diseño gráfico, producción audiovisual, animación y desarrollo web."
                items={[
                  "Capacidad de relevar, seleccionar y clasificar la información necesaria para la redacción de un guión original o adaptado.",
                  "Componer correctamente una fotografía y piezas de diseño a color, entendiendo que el color también comunica.",
                  "Generar producciones simbólicas según criterios que los interpelen en la construcción de ideas propias mediante las alternativas tecnológicas disponibles.",
                  "Aplicar técnicas elementales de sonorización, musicalización, y regrabación de diálogos.",
                  "Planificar y diseñar tareas de realización televisión, cine y multimedios.",
                  "Editar, compaginar y evaluar producciones multimediales."
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
                description="El Técnico en Multimedios puede desempeñarse en una amplia gama de industrias creativas y de comunicación, aplicando sus habilidades en la producción de contenido digital y audiovisual."
                items={[
                  "Productoras de cine y televisión.",
                  "Agencias de publicidad y marketing digital.",
                  "Medios de comunicación (radios, canales de TV, portales de noticias).",
                  "Estudios de diseño gráfico y web.",
                  "Empresas de desarrollo de videojuegos y aplicaciones móviles.",
                  "Postproducción de sonido y video.",
                  "Creación de contenido para redes sociales y plataformas de streaming.",
                  "Emprendimientos propios en el ámbito de la producción multimedial."
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
                  "Olimpíadas de Fotografía y Video.",
                  "Muestras de arte y diseño.",
                  "Proyectos de animación y videojuegos.",
                  "Participación en eventos y festivales de cine."
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
                  multimediosImg,
                  teatromalvinasImg,
                  fotoalumnosImg
                ]}
              />
            </motion.div>

            {/* Competencias */}
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
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <Camera className="h-8 w-8 text-primary" />
                      <h2 className="font-heading font-bold text-2xl text-foreground">Tecnicatura en Multimedios</h2>
                    </div>
                    <p className="text-muted-foreground">
                      Competencias que desarrollarás como Técnico en Multimedios
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <ul className="space-y-3">
                        {competencias.map((competencia, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{competencia}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-heading font-semibold text-lg text-foreground">Herramientas y Equipamiento:</h3>
                      <div className="bg-gradient-card rounded-lg p-6">
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                            <span>Cámaras profesionales y semiprofesionales</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                            <span>Micrófonos y equipos de sonido</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                            <span>Software de edición y animación</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                            <span>Estudio de grabación equipado</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                            <span>Laboratorio de diseño digital</span>
                          </li>
                        </ul>
                      </div>
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
                  <Monitor className="h-16 w-16 text-primary mx-auto" />
                  <h3 className="font-heading font-bold text-3xl text-foreground">
                    ¿Te Apasiona la Creatividad Digital?
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Desarrollá tu talento artístico y técnico en el mundo audiovisual. Contactanos para
                    más información sobre esta especialidad y los proyectos creativos que podrás realizar.
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

export default Multimedios;