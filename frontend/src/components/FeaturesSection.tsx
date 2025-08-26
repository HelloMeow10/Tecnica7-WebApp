import { 
  Users, 
  Award, 
  Briefcase, 
  BookOpen, 
  Laptop, 
  Globe,
  Clock,
  TrendingUp 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Award,
      title: "Excelencia Académica",
      description: "45+ años formando técnicos con los más altos estándares de calidad educativa.",
      stats: "95% de empleabilidad"
    },
    {
      icon: Laptop,
      title: "Tecnología de Vanguardia", 
      description: "Laboratorios y talleres equipados con la última tecnología para el aprendizaje práctico.",
      stats: "6 laboratorios modernos"
    },
    {
      icon: Users,
      title: "Docentes Especializados",
      description: "Profesores con experiencia profesional y académica en cada área técnica.",
      stats: "100+ docentes expertos"
    },
    {
      icon: Briefcase,
      title: "Inserción Laboral",
      description: "Convenios con empresas líderes para prácticas profesionales y empleo.",
      stats: "50+ empresas aliadas"
    },
    {
      icon: Globe,
      title: "Proyección Internacional",
      description: "Programas de intercambio y certificaciones reconocidas internacionalmente.",
      stats: "Certificación ISO"
    },
    {
      icon: TrendingUp,
      title: "Formación Continua",
      description: "Cursos de capacitación y actualización profesional para egresados.",
      stats: "Educación permanente"
    }
  ];

  const achievements = [
    { number: "XX+", label: "Estudiantes Activos" },
    { number: "YY+", label: "Años de Trayectoria" },
    { number: "ZZZZ+", label: "Egresados" },
    { number: "WW%", label: "Empleabilidad" }
  ];

  return (
    <section id="institucional" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            ¿Por qué elegir la <span className="text-primary">E.E.S.T. N°7</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos una institución líder en educación técnica, comprometida con la 
            formación integral de nuestros estudiantes y su inserción exitosa en el mundo laboral.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl bg-gradient-card border border-card-border hover:shadow-custom-lg transition-all duration-500 hover:-translate-y-2"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-black" />
                  </div>
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {feature.stats}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-primary rounded-3xl p-8 lg:p-12 text-black">
          <div className="text-center space-y-6 mb-12">
            <h3 className="font-heading font-bold text-3xl lg:text-4xl">
              Nuestra Trayectoria en Números
            </h3>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Cuatro décadas de compromiso con la educación técnica de calidad, 
              formando profesionales que lideran el desarrollo tecnológico.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="font-heading font-bold text-4xl lg:text-5xl text-black">
                  {achievement.number}
                </div>
                <div className="text-lg font-medium text-black">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center space-y-6">
          <div className="space-y-3">
            <BookOpen className="h-12 w-12 text-primary mx-auto" />
            <h3 className="font-heading font-bold text-3xl text-foreground">
              Comenzá tu futuro técnico hoy
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unite a nuestra comunidad educativa y formá parte de la próxima generación 
              de técnicos especializados.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-primary hover:opacity-90 text-black font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 btn-glow">
              Solicitar Información
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-3 rounded-xl transition-all duration-300">
              Conocer Campus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;