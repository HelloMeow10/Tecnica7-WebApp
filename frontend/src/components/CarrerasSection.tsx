import { Cpu, Wrench, Zap, Building2, Cog, Monitor, HardHat, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CarrerasSection = () => {
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

  return (
    <section id="carreras" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Nuestro <span className="text-primary">Plan de Estudios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Educación técnica de 7 años con dos orientaciones: 3 años de ciclo básico común 
            y 4 años de especialización en la orientación elegida.
          </p>
        </div>

        {/* Ciclo Básico */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Ciclo Básico</h3>
            <p className="text-muted-foreground">Formación común para todas las orientaciones</p>
          </div>
          <div className="flex justify-center">
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
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  onClick={() => window.location.href = cicloBasico.link}
                >
                  Conocé Más
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Orientaciones */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Orientaciones del Ciclo Superior</h3>
            <p className="text-muted-foreground">Elegí tu especialización para los últimos 4 años</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {orientaciones.map((orientacion, index) => (
              <Card key={index} className="card-elegant hover:shadow-glow group transition-all duration-500">
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
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    onClick={() => window.location.href = orientacion.link}
                  >
                    Ver Detalles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6 bg-gradient-card rounded-2xl p-8 lg:p-12">
          <div className="space-y-4">
            <HardHat className="h-12 w-12 text-primary mx-auto" />
            <h3 className="font-heading font-bold text-3xl text-foreground">
              ¿No sabés qué especialidad elegir?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Te ayudamos a descubrir tu vocación. Nuestro equipo de orientación 
              educativa te acompañará en la elección de tu futuro profesional.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 font-bold px-8 py-3 btn-glow"
            >
              <Lightbulb className="mr-2 h-5 w-5" />
              Test Vocacional
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-3"
            >
              Agendar Entrevista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarrerasSection;