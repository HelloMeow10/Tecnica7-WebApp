import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin } from 'lucide-react';
import fotoLucas from '@/assets/fotoperfilgato.jpg';
import fotoAbril from '@/assets/ftotoperfilAgua.jpg';
import fotoAlejo from '@/assets/fotoperfilworms.jpg';
import fotoJuan from '@/assets/fotoperfilzorro.jpg';
import {motion} from 'framer-motion';

const TestimoniosSection = () => {
  const testimonios = [
    {
      nombre: "Lucas Ramos",
      rol: "Desarrollador Scratch y fundador de la página",
      testimonio: "Egresar de la Técnica 7 fue una de las mejores decisiones de mi vida. La formación que recibí me abrió las puertas al mundo laboral y me dio las herramientas para co-fundar la página de la escuela. ¡Una experiencia inolvidable!",
      avatar: fotoLucas,
      linkedin: "https://www.linkedin.com/in/lucas-sebastian-ramos/",
    },
    {
      nombre: "Abril Lezcano",
      rol: "Desarrolladora Backend",
      testimonio: "En la Técnica 7 descubrí mi pasión por el desarrollo backend y las bases de datos. Los conocimientos en SQL y programación que adquirí me permitieron diseñar e implementar la arquitectura del servidor y la base de datos de esta página. La escuela me dio las herramientas fundamentales para mi desarrollo profesional en el mundo del backend.",
      avatar: fotoAbril,
      linkedin: "https://www.linkedin.com/in/abril-lezcano-98b39633b/",
    },
    {
      nombre: "Alejo Mirarchi",
      rol: "Desarrollador Front-End principal",
      testimonio: "La Técnica 7 no solo me formó como programador, sino que también me enseñó a trabajar en equipo y a liderar proyectos. Estoy orgulloso de haber egresado en 2025 y de contribuir al desarrollo de la página de mi querida escuela.",
      avatar: fotoAlejo,
      linkedin: "https://www.linkedin.com/in/alejo-mirarchi-b0a13b370/",
    },
    {
      nombre: "Juan Zapata",
      rol: "Web Development Manager",
      testimonio: "El camino hacia ser Web Development Manager nació en la Tecnica 7, donde la disciplina y el trabajo en equipo marcaron mi forma de liderar. Hoy aplico esas lecciones para transformar ideas en realidades digitales.",
      avatar: fotoJuan,
      linkedin: "https://www.linkedin.com/in/juan-perez/",
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
              <CardHeader className="flex flex-row items-center gap-1 pb-4">
                <Avatar>
                  <AvatarImage src={testimonio.avatar} alt={testimonio.nombre} />
                  <AvatarFallback>{testimonio.nombre.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2 mb-1 ">
                    <CardTitle className="font-bold text-lg">{testimonio.nombre}</CardTitle>
                    <a href={testimonio.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-6 w-6 text-primary hover:text-primary/80" />
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
