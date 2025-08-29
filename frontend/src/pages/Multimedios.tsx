import { Monitor, Camera, Palette, Film, Music, Megaphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="min-h-screen pt-32 pb-20">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center space-y-6 mb-16">
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
            </div>

            {/* Main Description */}
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

            {/* Areas de Trabajo */}
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

            {/* Competencias */}
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

            {/* Call to Action */}
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Multimedios;