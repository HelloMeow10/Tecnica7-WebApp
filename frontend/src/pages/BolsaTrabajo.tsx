import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Briefcase } from "lucide-react";

const BolsaTrabajo = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
            <Briefcase className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground">
            Bolsa de <span className="text-primary">Trabajo</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubre las oportunidades laborales y de desarrollo profesional que te esperan al egresar de nuestra escuela.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Pasantías */}
          <div className="card-elegant p-6 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Pasantías Educativas</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Nuestros estudiantes de 7º año tienen la oportunidad de realizar pasantías en empresas de primer nivel, aplicando sus conocimientos en un entorno laboral real.
            </p>
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-foreground border-l-4 border-primary pl-4">Empresas Colaboradoras</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>BACOPE S.A.</li>
                <li>Hangar</li>
                <li>CreaPack</li>
                <li>EGEO</li>
                <li>Municipalidad de Lomas de Zamora</li>
              </ul>
            </div>
          </div>

          {/* Oportunidades para Programadores */}
          <div className="card-elegant p-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Oportunidades para Programadores</h2>
            <p className="text-lg text-muted-foreground">
              Recomendamos a nuestros estudiantes de programación iniciar el curso de <a href="https://www.oracle.com/ar/education/oracle-next-education/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Oracle ONE</a>. Este programa les brinda acceso a una bolsa de trabajos exclusiva con empresas aliadas de Oracle, una excelente puerta de entrada al mundo laboral de la tecnología.
            </p>
          </div>

          {/* Actividades y Colaboraciones */}
          <div className="card-elegant p-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Actividades y Colaboraciones</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Fomentamos el contacto directo con el mundo profesional a través de diversas actividades:
            </p>
            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
              <li><b>Junior Achievement:</b> Visitas a empresas líderes como Oracle y capacitaciones.</li>
              <li><b>Colaboraciones con la Municipalidad:</b> Creación de cortometrajes, visitas al teatro y más.</li>
            </ul>
          </div>

          {/* Trabajo Freelance */}
          <div className="card-elegant p-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Trabajo Freelance</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Ambas orientaciones preparan a los estudiantes para el mundo del trabajo independiente.
            </p>
            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
              <li><b>Programadores:</b> Desarrollo y venta de soluciones de software.</li>
              <li><b>Multimedios:</b> Servicios de edición de video para influencers y empresas.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BolsaTrabajo;
