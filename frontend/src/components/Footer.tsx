import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube,
  ExternalLink,
  Heart
} from 'lucide-react';

const Footer = () => {
  const especialidades = [
    "Técnico en Programación",
    "Técnico en Multimedios"
  ];

  const linksUtiles = [
    { name: "Campus Virtual", href: "/campus-virtual" },
    { name: "Biblioteca Digital", href: "/biblioteca-digital" },
    { name: "Sistema de Gestión", href: "/sistema-gestion" },
    { name: "Bolsa de Trabajo", href: "/bolsa-trabajo" },
    { name: "Calendario Académico", href: "/calendario-academico" },
    { name: "Reglamento Interno", href: "/reglamento-interno" }
  ];

  const redesSociales = [
    { icon: Facebook, name: "Facebook", href: "#", color: "hover:text-blue-500" },
    { icon: Instagram, name: "Instagram", href: "#", color: "hover:text-pink-500" },
    { icon: Youtube, name: "YouTube", href: "#", color: "hover:text-red-500" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="font-bold text-lg text-primary">E7</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl">E.E.S.T. N°7</h3>
                  <p className="text-primary-foreground/80">Banfield</p>
                </div>
              </div>
              <p className="text-primary-foreground/90 leading-relaxed">
                Formando técnicos especializados desde 1911. Comprometidos con la
                excelencia educativa y la inserción laboral exitosa de nuestros egresados.
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="font-heading font-semibold">Seguinos en:</h4>
              <div className="flex space-x-3">
                {redesSociales.map((red, index) => (
                  <a
                    key={index}
                    href={red.href}
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center ${red.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                    aria-label={red.name}
                  >
                    <red.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Especialidades */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-lg">Especialidades</h4>
            <ul className="space-y-3">
              {especialidades.map((especialidad, index) => (
                <li key={index}>
                  <a 
                    href="#carreras"
                    className="text-primary-foreground/80 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    {especialidad}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Útiles */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-lg">Enlaces Útiles</h4>
            <ul className="space-y-3">
              {linksUtiles.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-lg">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-primary-foreground/90">
                  <p>Manuel Acevedo 1864</p>
                  <p>Banfield, Provincia de Buenos Aires</p>
                  <p className="text-sm text-primary-foreground/70 mt-1">
                    a 4 cuadras de la estación
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/90">
                  <p>(011) 4242-8950</p>
                  <p>(011) 4242-8951</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/90">
                  <p>eest7banfield@abc.gob.ar</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white/5 rounded-lg p-4 space-y-2">
              <h5 className="font-semibold text-accent">Horarios de Atención</h5>
              <div className="text-sm text-primary-foreground/80 space-y-1">
                <p>Lunes a Viernes: 8:00 - 18:00</p>
                <p>Sábados: 8:00 - 12:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-primary-foreground/70">
              <p>© 2025 E.E.S.T. N°7 Banfield. Todos los derechos reservados.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Política de Privacidad
                </a>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Términos de Uso
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-primary-foreground/70">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-accent fill-current" />
              <span>para la educación técnica</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;