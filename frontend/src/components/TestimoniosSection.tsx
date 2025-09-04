import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin } from 'lucide-react';
import fotoalumnos from '@/assets/fotoalumnos.png';

const TestimoniosSection = () => {
  const testimonios = [
    {
      nombre: "Lucas Ramos",
      rol: "Desarrollador Full-Stack",
      testimonio: "Egresar de la Técnica 7 fue una de las mejores decisiones de mi vida. La formación que recibí me abrió las puertas al mundo laboral y me dio las herramientas para co-fundar la página de la escuela. ¡Una experiencia inolvidable!",
      avatar: fotoalumnos,
      linkedin: "https://www.linkedin.com/in/lucas-sebastian-ramos/",
    },
    {
      nombre: "Abril Lezcano",
      rol: "Diseñadora UX/UI",
      testimonio: "La especialidad de Multimedios me permitió explorar mi creatividad y potenciar mis habilidades en diseño. Hoy, como egresada y desarrolladora de la página, puedo decir que la escuela me dio las bases para mi carrera profesional.",
      avatar: fotoalumnos,
      linkedin: "https://www.linkedin.com/in/abril-lezcano-98b39633b/",
    },
    {
      nombre: "Alejo Mirarchi",
      rol: "Desarrollador Back-End",
      testimonio: "La Técnica 7 no solo me formó como programador, sino que también me enseñó a trabajar en equipo y a liderar proyectos. Estoy orgulloso de haber egresado en 2025 y de contribuir al desarrollo de la página de mi querida escuela.",
      avatar: fotoalumnos,
      linkedin: "https://www.linkedin.com/in/alejo-mirarchi-b0a13b370/",
    },
    {
      nombre: "Juan Zavala",
      rol: "Web Development Manager",
      testimonio: "El camino hacia ser Web Development Manager nació en la Tecnica 7, donde la disciplina y el trabajo en equipo marcaron mi forma de liderar. Hoy aplico esas lecciones para transformar ideas en realidades digitales.",
      avatar: fotoalumnos,
      linkedin: "https://www.linkedin.com/in/juan-perez/",
    },
    {
      nombre: "Matias Martinez",
      rol: "Ingeniero DevOps",
      testimonio: "Egresar de la Técnica 7 me impulsó a crecer como profesional. Hoy, como Ingeniero DevOps, valoro todo lo aprendido y me enorgullece haber aportado a la página de la escuela.",
      avatar: fotoalumnos,
      linkedin: "https://www.linkedin.com/in/juan-picha/",
    },
    {
      nombre: "Gabriel Voss",
      rol: "Rol",
      testimonio: "...",
      avatar: fotoalumnos,
      linkedin: "https://www.linkedin.com/in/juan-picha/",
    },

  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
            Testimonios de <span className="text-primary">Nuestros Egresados</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ex-estudiantes egresados en 2025 y desarrolladores de esta página
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <Card key={index} className="card-elegant hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <Avatar>
                  <AvatarImage src={testimonio.avatar} alt={testimonio.nombre} />
                  <AvatarFallback>{testimonio.nombre.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <CardTitle className="font-bold text-lg">{testimonio.nombre}</CardTitle>
                    <a href={testimonio.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 text-primary hover:text-primary/80" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonio.rol}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">"{testimonio.testimonio}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSection;
