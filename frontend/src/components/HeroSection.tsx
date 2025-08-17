import { ArrowRight, Award, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-escuela-tecnica.jpg';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Estudiantes" },
    { icon: BookOpen, value: "2", label: "Especialidades" },
    { icon: Award, value: "110+", label: "Años de Excelencia" }
  ];

  return (
    <section id="inicio" className="hero-section min-h-screen relative flex items-center pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Escuela Técnica N°7 de Banfield"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-5xl lg:text-7xl leading-tight">
                Formando
                <span className="block text-accent-light">Técnicos</span>
                del Futuro
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-medium leading-relaxed">
                Educación técnica de excelencia en Banfield. Más de 110 años preparando
                profesionales con las competencias que demanda el mundo laboral actual.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Conocé Nuestras Carreras
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 rounded-xl backdrop-blur-sm bg-white/10"
              >
                Tour Virtual
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <stat.icon className="h-8 w-8 mx-auto text-accent-light" />
                  <div className="font-heading font-bold text-2xl lg:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Card */}
          <div className="lg:flex justify-center hidden">
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

              <Button 
                className="w-full bg-accent hover:bg-accent-light text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Inscribite Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-sm animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-1/3 right-20 w-12 h-12 bg-accent/20 rounded-full blur-sm animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-white/20 rounded-full blur-sm animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;