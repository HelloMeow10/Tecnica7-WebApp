import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Ciclo Básico', href: '/ciclo-basico' },
    { name: 'Programación', href: '/programacion' },
    { name: 'Multimedios', href: '/multimedios' },
    { name: 'Historia', href: '/historia' },
    { name: 'Radio', href: '/radio' },
    { name: 'Centro de Estudiantes', href: '/centro-estudiantes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-1 text-xs">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>(011) 4248-6259</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>11 6523-3593</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>eest7banfield@abc.gob.ar</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>Manuel Acevedo 1864, Banfield</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and title */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              E7
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg text-foreground">
                E.E.S.T. N°7
              </h1>
              <p className="text-sm text-muted-foreground font-medium">
                Banfield
              </p>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="link-animated text-foreground hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="default" 
              className="bg-gradient-primary hover:opacity-90 btn-glow font-semibold"
              onClick={() => window.location.href = '/inscripcion'}
            >
              Inscripciones
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="default" 
                className="bg-gradient-primary hover:opacity-90 w-full font-semibold mt-4"
                onClick={() => window.location.href = '/inscripcion'}
              >
                Inscripciones
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;