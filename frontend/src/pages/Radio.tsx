import { Radio as RadioIcon, Mic, Users, Lightbulb, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Radio = () => {
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
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
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
        </div>

        {/* Objetivos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
        </div>

        {/* Descripción Principal */}
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

        {/* Impacto Educativo */}
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

        {/* Reproductor de Radio */}
        <Card className="card-elegant p-8 text-center mb-16">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <Play className="h-8 w-8 text-primary" />
              <h2 className="font-heading font-bold text-2xl text-foreground">Escuchá Nuestra Radio</h2>
            </div>
            
            <p className="text-muted-foreground">
              Transmisión en vivo y programas grabados por nuestros estudiantes
            </p>
            
            {/* Placeholder para el reproductor */}
            <div className="bg-gradient-card rounded-xl p-8 max-w-md mx-auto">
              <div className="space-y-4">
                <RadioIcon className="h-12 w-12 text-primary mx-auto" />
                <p className="text-muted-foreground text-sm">
                  Reproductor de radio online
                </p>
                <p className="text-xs text-muted-foreground">
                  (Próximamente disponible la transmisión en vivo)
                </p>
                
                {/* Ejemplo de embed iframe - reemplazar URL por la real cuando esté disponible */}
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <RadioIcon className="h-8 w-8 text-muted-foreground mx-auto" />
                    <p className="text-sm text-muted-foreground">
                      Transmisión no disponible
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
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
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-bold px-8">
                Conocé Multimedios
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8">
                Más Información
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Radio;