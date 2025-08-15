import { Cpu, Code, Smartphone, Globe, Database, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
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
        </div>

        {/* Main Description */}
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

        {/* Competencias Grid */}
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

        {/* Detailed Objectives */}
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

        {/* Call to Action */}
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
      </div>
    </div>
  );
};

export default Programacion;