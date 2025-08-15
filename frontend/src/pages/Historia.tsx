import { BookOpen, School, Calendar, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Historia = () => {
  const hitos = [
    {
      year: "1911",
      title: "Fundación",
      description: "Fundada como Escuela Secundaria de Mujeres Julia Moreno de Moreno el 24 de diciembre"
    },
    {
      year: "1924", 
      title: "Incorporación",
      description: "Se incorpora al Consejo Nacional de Mujeres de la Confederación Nacional de Beneficencia"
    },
    {
      year: "1960",
      title: "Transformación",
      description: "Se modifican los planes de estudio y la escuela pasa a ser E.N.E.T. N°1"
    },
    {
      year: "1965",
      title: "Nueva Sede",
      description: "Se compra la casona en Acevedo 1864 de Banfield, ubicación actual"
    },
    {
      year: "1980",
      title: "Nuevo Edificio",
      description: "El Ministerio de Educación se hace cargo de la construcción del nuevo edificio"
    },
    {
      year: "2000",
      title: "E.E.S.T N°7",
      description: "Finalización de la obra y consolidación como E.E.S.T N°7 de Lomas de Zamora"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
            <BookOpen className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground">
            Nuestra <span className="text-primary">Historia</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Más de un siglo formando generaciones con excelencia educativa y compromiso social.
          </p>
        </div>

        {/* Quienes Somos */}
        <Card className="card-elegant p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <School className="h-8 w-8 text-primary" />
                <h2 className="font-heading font-bold text-2xl text-foreground">¿Quiénes Somos?</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                La E.E.S.T N°7 tiene el propósito de atraer a jóvenes egresados y formarlos con 
                conocimientos útiles mediante talleres especializados y una formación integral 
                que combina teoría y práctica.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Los ciclos electivos tienen las materias comunes, junto a talleres fundamentales 
                para el ciclo básico. En el ciclo superior tendrán la oportunidad de elegir 
                especialización entre <strong className="text-primary">Multimedios</strong> y{' '}
                <strong className="text-primary">Programación</strong>, con talleres específicos 
                de cada tecnicatura.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Durante el último año (7mo) se llevan a cabo las prácticas profesionalizantes 
                (pasantías) para desarrollar sus oportunidades laborales y su futuro profesional.
              </p>
            </div>
            
            <div className="bg-gradient-card rounded-xl p-6">
              <div className="text-center space-y-4">
                <Building className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-heading font-bold text-xl text-foreground">
                  Educación Técnica de Excelencia
                </h3>
                <p className="text-muted-foreground text-sm">
                  Formando técnicos capacitados con conocimientos que demanda el mercado laboral actual
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Línea de Tiempo */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              Un Poco Más de <span className="text-primary">Historia</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Más de un siglo de trayectoria educativa y evolución constante
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hitos.map((hito, index) => (
              <Card key={index} className="card-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-2xl text-primary font-bold">
                    {hito.year}
                  </CardTitle>
                  <CardDescription className="font-semibold text-foreground">
                    {hito.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {hito.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Historia Detallada */}
        <Card className="card-elegant p-8 mb-16">
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-2xl text-foreground text-center mb-8">
              Historia Detallada
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-lg text-foreground">Los Primeros Años</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  La institución originalmente se llamaba Escuela Secundaria de Mujeres Julia Moreno de Moreno, 
                  fundada el 24 de diciembre de 1911. Su objetivo era lograr preparar jóvenes con talleres 
                  como cocina, planchado, corte y confección. Posteriormente se agregaron más talleres como 
                  lencería, florería, encajes, arte y música.
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  El 20 de Julio de 1924 por una iniciativa de la Señora Presidenta Rosa V. la escuela se 
                  incorpora al Consejo Nacional de Mujeres de la Confederación Nacional de Beneficencia. 
                  En 1937 se agregaron taquigrafía, mecanografía, lectura selecta, artística, etc.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-lg text-foreground">Modernización</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  En 1960 se modifican los planes de estudio y la escuela pasa a ser E.N.E.T. N°1. 
                  Cinco años después se compra una vieja casona en Acevedo 1864 de Banfield, que es 
                  donde se encuentra actualmente la escuela.
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  El 21 de Marzo de 1980 el Ministerio de Educación de la Nación se hizo cargo de 
                  la construcción del nuevo edificio, después de 20 años, se finalizó la obra de 
                  la nueva escuela E.E.S.T N°7 de Lomas de Zamora.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="card-elegant bg-gradient-card p-8 text-center">
          <div className="space-y-6">
            <BookOpen className="h-16 w-16 text-primary mx-auto" />
            <h3 className="font-heading font-bold text-3xl text-foreground">
              Formá Parte de Nuestra Historia
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Más de un siglo de excelencia educativa nos respalda. Sumate a las nuevas generaciones 
              de técnicos que continúan escribiendo esta historia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-bold px-8">
                Conocé Nuestras Carreras
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8">
                Contactanos
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Historia;