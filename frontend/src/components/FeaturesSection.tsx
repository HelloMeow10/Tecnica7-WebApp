import { 
  Users, 
  Award, 
  Briefcase, 
  BookOpen, 
  Laptop, 
  Globe,
  TrendingUp 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: BookOpen,
    title: "Ciclo Básico",
    description: (
      <>
        <span className="font-semibold">Duración: 3 años</span>
        <br />
        Primeros 3 años comunes a todas las tecnicaturas. Formación fundamental donde priorizamos el <span className="font-semibold">HACER Y REFLEXIONAR SOBRE LO QUE SE HACE.</span>
      </>
    ),
    stats: "Común a todas"
  },
  {
    icon: Award,
    title: "Excelencia Académica",
    description: "110+ años formando técnicos con los más altos estándares de calidad educativa.",
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
  { number: "500+", label: "Estudiantes Activos" },
  { number: "110+", label: "Años de Trayectoria" },
  { number: "Miles de", label: "Egresados" },
  { number: "100+", label: "Docentes y Técnicos" }
];

const FeaturesSection = () => {
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
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg bg-white h-full"
              >
                <Icon className="w-10 h-10 text-black mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <div className="text-gray-700 mb-2">{feature.description}</div>
                <div className="text-sm text-blue-600 font-semibold">{feature.stats}</div>
              </div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-primary rounded-3xl p-8 lg:p-12 text-black">
          <div className="text-center space-y-6 mb-12">
            <h3 className="font-heading font-bold text-3xl lg:text-4xl">
              Nuestra Trayectoria en Números
            </h3>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Más de un siglo de compromiso con la educación técnica de calidad,
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
            <Link to="/contacto" className="bg-gradient-primary hover:opacity-90 text-black font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 btn-glow">
              Solicitar Información
            </Link>
            <Link to="/tour-virtual" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-3 rounded-xl transition-all duration-300">
              Conocer Campus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;