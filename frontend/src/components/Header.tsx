import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, LogOut, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../assets/logo.png';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

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

  const UserNav = () => {
    if (!isAuthenticated || !user) {
      return (
        <Button asChild>
          <Link to="/login">Login</Link>
        </Button>
      );
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarFallback>{user.email.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none capitalize">{user.role}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to="/dashboard" className="flex items-center">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Cerrar sesión</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

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
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-12 w-12" />
            <div>
              <h1 className="font-heading font-bold text-lg text-foreground">
                E.E.S.T. N°7
              </h1>
              <p className="text-sm text-muted-foreground font-medium">
                Banfield
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
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
              asChild
              variant="default" 
              className="bg-gradient-primary hover:opacity-90 btn-glow font-semibold"
            >
              <Link to="/inscripcion">Inscripciones</Link>
            </Button>
            <UserNav />
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
                asChild
                variant="default" 
                className="bg-gradient-primary hover:opacity-90 w-full font-semibold mt-4"
              >
                <Link to="/inscripcion">Inscripciones</Link>
              </Button>
              <div className="pt-4 border-t border-border">
                {isAuthenticated && user ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{user.email.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none capitalize">{user.role}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={logout}>
                      <LogOut className="h-5 w-5" />
                    </Button>
                  </div>
                ) : (
                  <Button asChild className="w-full">
                    <Link to="/login">Login</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;