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

        <div className="mt-16 space-y-12">
          {/* Pasantías */}
          <div className="space-y-4">
            <h2 className="font-heading font-bold text-3xl text-foreground">Pasantías Educativas</h2>
            <p className="text-lg text-muted-foreground">
              Nuestros estudiantes de 7º año tienen la oportunidad de realizar pasantías en empresas de primer nivel del municipio de Lomas de Zamora, aplicando sus conocimientos en un entorno laboral real. Algunas de las empresas con las que colaboramos son:
            </p>
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-foreground">BACOPE S.A.</h3>
              <p className="text-muted-foreground">Fundada en 1960, se especializa en la fabricación de unidades condensadoras, motocompresores y equipos comerciales de refrigeración. Pioneros en el desarrollo de dispensers de agua frío-calor en Argentina.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-foreground">Hangar</h3>
              <p className="text-muted-foreground">Un centro de servicios para el mantenimiento de vehículos que además cuenta con un local de comidas, ofreciendo una experiencia integral a sus clientes.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-foreground">CreaPack</h3>
              <p className="text-muted-foreground">Empresa dedicada a la creación y fabricación de soluciones de packaging innovadoras y a medida para diversos productos.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-foreground">EGEO</h3>
              <p className="text-muted-foreground">Líderes en el sector de equipamiento e instrumental odontológico, proveyendo a profesionales de la salud con tecnología de punta.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-foreground">Municipalidad de Lomas de Zamora</h3>
              <p className="text-muted-foreground">Ofrece a los estudiantes la oportunidad de experimentar el funcionamiento interno de la gestión pública y participar en proyectos de impacto comunitario.</p>
            </div>
          </div>

          {/* Oportunidades para Programadores */}
          <div className="space-y-4">
            <h2 className="font-heading font-bold text-3xl text-foreground">Oportunidades para Programadores</h2>
            <p className="text-lg text-muted-foreground">
              Recomendamos a nuestros estudiantes de programación iniciar el curso de <a href="https://www.oracle.com/ar/education/oracle-next-education/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Oracle ONE</a>. Este programa les brinda acceso a una bolsa de trabajos exclusiva con empresas aliadas de Oracle, una excelente puerta de entrada al mundo laboral de la tecnología.
            </p>
          </div>

          {/* Actividades y Colaboraciones */}
          <div className="space-y-4">
            <h2 className="font-heading font-bold text-3xl text-foreground">Actividades y Colaboraciones</h2>
            <p className="text-lg text-muted-foreground">
              Fomentamos el contacto directo con el mundo profesional a través de diversas actividades:
            </p>
            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
              <li><b>Junior Achievement:</b> Visitas a empresas líderes como Oracle y capacitaciones que acercan a los estudiantes a la realidad del sector.</li>
              <li><b>Colaboraciones con la Municipalidad:</b> Los estudiantes de multimedios participan en proyectos reales como la creación de cortometrajes, visitas al teatro municipal y la realización de presentaciones, ganando experiencia práctica invaluable.</li>
            </ul>
          </div>

          {/* Trabajo Freelance */}
          <div className="space-y-4">
            <h2 className="font-heading font-bold text-3xl text-foreground">Trabajo Freelance</h2>
            <p className="text-lg text-muted-foreground">
              Además de las oportunidades tradicionales, ambas orientaciones preparan a los estudiantes para el mundo del trabajo independiente.
            </p>
            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
              <li><b>Programadores:</b> Muchos de nuestros egresados desarrollan y venden soluciones de software por su cuenta.</li>
              <li><b>Multimedios:</b> Es común que nuestros estudiantes ofrezcan servicios de edición de video para influencers, youtubers y empresas.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BolsaTrabajo;
