import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NoticiasSection = () => {
  const noticias = [
    {
      id: 1,
      title: "Nuevos Equipos para el Laboratorio de Computación",
      excerpt: "La escuela recibió una donación de 30 computadoras de última generación para mejorar la formación en programación y desarrollo de software.",
      author: "Dirección",
      date: "15 Enero 2025",
      readTime: "3 min",
      category: "Infraestructura",
      featured: true
    },
    {
      id: 2,
      title: "Estudiantes de Electrónica Ganan Concurso Regional",
      excerpt: "El equipo de 6° año obtuvo el primer lugar en el concurso de robótica organizado por la Universidad Tecnológica Nacional.",
      author: "Prof. Martínez",
      date: "12 Enero 2025", 
      readTime: "2 min",
      category: "Logros"
    },
    {
      id: 3,
      title: "Convenio con Empresa de Energías Renovables",
      excerpt: "Se firmó un acuerdo para que estudiantes de Electromecánica realicen prácticas profesionales en proyectos de energía solar.",
      author: "Secretaría Académica",
      date: "8 Enero 2025",
      readTime: "4 min", 
      category: "Convenios"
    },
    {
      id: 4,
      title: "Jornada de Puertas Abiertas 2025",
      excerpt: "Los días 20 y 21 de febrero se realizará la tradicional jornada para que futuros estudiantes conozcan nuestras instalaciones.",
      author: "Coordinación",
      date: "5 Enero 2025",
      readTime: "2 min",
      category: "Eventos"
    }
  ];

  return (
    <section id="noticias" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Últimas <span className="text-primary">Noticias</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mantente al día con las novedades, logros y eventos más importantes 
            de nuestra comunidad educativa.
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          <Card className="card-elegant overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-primary p-8 flex items-center justify-center">
                <div className="text-center text-white space-y-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <span className="inline-block bg-accent px-3 py-1 rounded-full text-sm font-semibold">
                      Destacado
                    </span>
                    <div className="text-sm opacity-90">
                      {noticias[0].category}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{noticias[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{noticias[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{noticias[0].readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-heading font-bold text-2xl lg:text-3xl text-foreground">
                    {noticias[0].title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {noticias[0].excerpt}
                  </p>
                  
                  <Link to="/noticias">
                    <Button className="bg-gradient-primary hover:opacity-90 btn-glow">
                      Leer Más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {noticias.slice(1).map((noticia) => (
            <Link to="/noticias" key={noticia.id}>
            <Card className="card-elegant group cursor-pointer h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {noticia.category}
                  </span>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{noticia.date}</span>
                  </div>
                </div>
                <CardTitle className="font-heading text-lg group-hover:text-primary transition-colors duration-300">
                  {noticia.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {noticia.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{noticia.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{noticia.readTime}</span>
                    </div>
                  </div>
                  
                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link to="/noticias">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-3"
            >
              Ver Todas las Noticias
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoticiasSection;