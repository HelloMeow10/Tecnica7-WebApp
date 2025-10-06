import { Radio as RadioIcon, Mic, Users, Lightbulb, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";
import AnimatedBackground from '@/components/ui/AnimatedBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 }
};
const fast = { duration: 0.15 };

const Radio = () => {
  const historicalRadios = [
    { name: "Viveza Criolla", url: "https://www.youtube.com/@VivezaCriolla1204" },
    { name: "Revueltos", url: "https://www.youtube.com/@revueltosoficial" },
    { name: "El Último Remate", url: "https://www.youtube.com/@ElUltimoRemate" },
    { name: "Cortémosla", url: "https://www.youtube.com/@cortemosla" },
    { name: "Multivibes", url: "https://www.youtube.com/@multivibes_tec7" },
    { name: "Voces Rebeldes", url: "https://www.youtube.com/@VocesRebeldes" },
    { name: "Voz Popular", url: "https://www.youtube.com/@vozpopular-pk9oy/" },
  ];

  const objetivos = [
    {
      icon: Users,
      title: "Ampliar Trayectorias",
      description: "Diversificar el horizonte de oportunidades y experiencias educativas para alumnos de Multimedios"
    },
    {
      icon: Lightbulb,
      title: "Herramienta Pedagógica",
      description: "Canal de expresión lúdico y reflexivo para abordar contenidos curriculares con diversos recursos"
    },
    {
      icon: Mic,
      title: "Desarrollo de Estrategias",
      description: "Espacios complementarios que estimulan la investigación, expresión e intercambio educativo"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="flex-grow">
        <div className="min-h-screen pt-32 pb-20">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <motion.div
              className="text-center space-y-6 mb-16"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={fast}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto">
                <RadioIcon className="h-10 w-10 text-white" />
              </div>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground">
                Radio <span className="text-primary">Escolar</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Un espacio donde nuestros estudiantes de Multimedios <strong>toman y dan la palabra</strong>,
                desarrollando sus capacidades comunicativas y creativas.
              </p>
            </motion.div>

            {/* Objetivos */}
            <motion.div
              className="grid md:grid-cols-3 gap-8 mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={fast}
            >
              {objetivos.map((objetivo, index) => (
                <Card key={index} className="card-elegant hover:shadow-glow transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <objetivo.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle className="font-heading text-lg text-foreground">
                      {objetivo.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {objetivo.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            {/* Descripción Principal */}
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
                      <Mic className="h-8 w-8 text-primary" />
                      <h2 className="font-heading font-bold text-2xl text-foreground">Nuestro Proyecto Radial</h2>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      La radio tiene como objetivo ampliar las trayectorias escolares de los alumnos de la
                      tecnicatura de Multimedios diversificando el horizonte de oportunidades y experiencias educativas.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Constituyen una nueva herramienta pedagógica que permite abordar, con diversos recursos,
                      los contenidos curriculares a través de un canal de expresión lúdico y, a la vez, reflexivo.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      El Proyecto propone el desarrollo de diferentes estrategias en tiempos y espacios
                      complementarios a los de la jornada escolar que estimulen la investigación, la expresión
                      y el intercambio entre los alumnos, los educadores y la comunidad.
                    </p>
                  </div>

                  <div className="bg-gradient-card rounded-xl p-6">
                    <div className="text-center space-y-4">
                      <RadioIcon className="h-16 w-16 text-primary mx-auto" />
                      <h3 className="font-heading font-bold text-xl text-foreground">
                        UN LUGAR DONDE TOMAN Y DAN LA PALABRA
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Fortaleciendo el sentido de pertenencia institucional y mejorando la calidad de los aprendizajes
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Impacto Educativo */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={fast}
            >
              <Card className="card-elegant p-8 mb-16">
                <div className="text-center mb-8">
                  <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                    Impacto en la <span className="text-primary">Formación</span>
                  </h2>
                  <p className="text-muted-foreground">
                    Beneficios que aporta la radio a nuestros estudiantes
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-lg text-foreground">Desarrollo Personal</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Ponen en valor sus capacidades comunicativas</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Fortalecen el sentido de pertenencia a la institución</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Promueven nuevas formas de participación</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-lg text-foreground">Aprendizaje Colaborativo</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>Mejoran permanentemente la calidad de los aprendizajes</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>Facilitan el intercambio entre estudiantes y educadores</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>Conectan la escuela con la comunidad</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Reproductor de Radio */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={fast}
            >
              <Card className="card-elegant p-8 text-center mb-16">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-3">
                    <Play className="h-8 w-8 text-primary" />
                    <h2 className="font-heading font-bold text-2xl text-foreground">Escuchá Nuestra Radio</h2>
                  </div>

                  <p className="text-muted-foreground">
                    Transmisión en vivo y programas grabados por nuestros estudiantes
                  </p>

                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Radios Históricas */}
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
                    Radios <span className="text-primary">Históricas</span>
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Proyectos de radio de 7mos años anteriores
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {historicalRadios.map((radio, index) => (
                    <Card key={index} className="card-elegant hover:shadow-glow transition-all duration-300">
                      <CardHeader className="text-center pb-4">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <RadioIcon className="h-6 w-6 text-red-600" />
                        </div>
                        <CardTitle className="font-heading text-xl text-primary font-bold">
                          {radio.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <Button asChild>
                          <a href={radio.url} target="_blank" rel="noopener noreferrer">
                            Ver Canal
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
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
                  <Mic className="h-16 w-16 text-primary mx-auto" />
                  <h3 className="font-heading font-bold text-3xl text-foreground">
                    ¿Te Interesa la Comunicación?
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    En la especialidad de Multimedios podrás participar de este y otros proyectos
                    comunicacionales que te prepararán para el mundo profesional.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-bold px-8" asChild>
                      <Link to="/multimedios">Conocé Multimedios</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8" asChild>
                      <Link to="/contacto">Más Información</Link>
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

export default Radio;