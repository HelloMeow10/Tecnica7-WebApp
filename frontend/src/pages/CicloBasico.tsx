import { Building2, BookOpen, Users, Target, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import horariosCicloBasico from '@/assets/Horarios ciclo basico (4).xlsx';
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, textVariant } from '@/lib/animations';

const CicloBasico = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="min-h-screen pt-32 pb-20">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <motion.div
              className="text-center space-y-6 mb-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div variants={fadeUp} className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                <Building2 className="h-10 w-10 text-black" />
              </motion.div>
              <motion.h1 variants={textVariant} className="font-heading font-bold text-4xl lg:text-6xl text-foreground">
                Ciclo <span className="text-primary">Básico</span>
              </motion.h1>
              <motion.p variants={textVariant} className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Los primeros 3 años de formación técnica común a todas las especialidades,
                donde priorizamos el <strong>HACER Y REFLEXIONAR SOBRE LO QUE SE HACE</strong>.
              </motion.p>
            </motion.div>

            {/* Main Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 mb-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div variants={fadeUp}>
                <Card className="card-elegant p-8 h-full">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <Target className="h-8 w-8 text-primary" />
                      <h2 className="font-heading font-bold text-2xl text-foreground">¡SABER HACER!</h2>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      En la Escuela de Educación Secundaria Técnica, conforman alternativas de educación obligatoria,
                      con siete años de duración, definidas como unidades pedagógicas y organizativas, están constituidas
                      por dos Ciclos, siendo el primero de ellos Básico (CICLO BÁSICO), de tres años de duración y común
                      a todas las tecnicaturas y el segundo Superior de cuatro años de duración y orientado a cada una
                      de las especialidades implementadas por la Jurisdicción.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      En nuestro caso son la de <strong className="text-primary">Programación</strong> y{' '}
                      <strong className="text-primary">Multimedia</strong>, el alumno recibe el título de Técnico
                      en el área ocupacional específica elegida.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      A raíz de la nueva normativa de la provincia de Buenos Aires, los ciclos básicos de las escuelas técnicas estarán orientados a las especialidades que ofrece la institución. Esto permitirá a los estudiantes tener un primer acercamiento a las áreas de su interés desde el inicio de su formación.
                    </p>
                  </div>
                </Card>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Card className="card-elegant p-8 h-full">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <BookOpen className="h-8 w-8 text-accent" />
                      <h2 className="font-heading font-bold text-2xl text-foreground">Metodología</h2>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      Los contenidos de enseñanza de la Formación Técnica Específica del Ciclo Básico están
                      organizados en módulos que utilizarán preponderantemente la estrategia didáctica de taller,
                      ya que aquí se prioriza el <strong>HACER Y EL REFLEXIONAR SOBRE LO QUE SE HACE</strong>.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Aunque los aprendizajes resulten individuales, el <strong className="text-accent">APRENDER CON EL OTRO</strong>,
                      constituye la clave motivacional, metodológica y organizacional desde donde se diseña y desarrollan
                      las actividades de aprendizaje y su secuenciación didáctica.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid md:grid-cols-3 gap-8 mb-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div variants={fadeUp}>
                <Card className="card-elegant text-center p-6 hover:shadow-glow transition-all duration-300 h-full">
                  <CardHeader>
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="font-heading text-lg">Común a Todas las Especialidades</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Formación base común que respeta la movilidad de estudiantes entre instituciones de la Provincia de Buenos Aires.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Card className="card-elegant text-center p-6 hover:shadow-glow transition-all duration-300 h-full">
                  <CardHeader>
                    <Building2 className="h-12 w-12 text-accent mx-auto mb-4" />
                    <CardTitle className="font-heading text-lg">Estrategia de Taller</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Metodología preponderante que prioriza el hacer práctico y la reflexión sobre la experiencia de aprendizaje.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Card className="card-elegant text-center p-6 hover:shadow-glow transition-all duration-300 h-full">
                  <CardHeader>
                    <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="font-heading text-lg">Articulación al Ciclo Superior</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      En 3er año se vinculan los saberes adquiridos con las especialidades del Ciclo Superior Técnico.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Horarios Section */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Card className="card-elegant p-8 mb-16">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground">Horarios del Ciclo Básico</h3>
                      <p className="text-muted-foreground">Descargá el cronograma de materias y horarios.</p>
                    </div>
                  </div>
                  <Button asChild className="bg-gradient-primary hover:opacity-90 font-bold">
                    <a href={horariosCicloBasico} download="Horarios Ciclo Básico.xlsx">
                      Descargar Horarios
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Important Note */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="card-elegant bg-gradient-card p-8 text-center"
            >
              <motion.div variants={fadeUp}>
                <BookOpen className="h-12 w-12 text-primary mx-auto" />
              </motion.div>
              <motion.h3 variants={textVariant} className="font-heading font-bold text-2xl text-foreground mt-4">
                Continuidad Educativa
              </motion.h3>
              <motion.p variants={textVariant} className="text-muted-foreground max-w-2xl mx-auto mt-4">
                La Formación Técnica Específica en el Ciclo Básico es común a todas las instituciones
                de la Provincia de Buenos Aires, independientemente de la oferta educativa que estas
                tengan en el Ciclo Superior Técnico, respetando así la movilidad de los estudiantes.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 mt-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-bold" asChild>
                  <Link to="/programacion">Programación</Link>
                </Button>
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-bold" asChild>
                  <Link to="/multimedios">Multimedios</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold" asChild>
                  <Link to="/contacto">Contactar</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CicloBasico;