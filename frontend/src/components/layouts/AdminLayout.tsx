import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Home, Users, GraduationCap, Book, BarChart, LogOut, Settings, Newspaper, Radio } from 'lucide-react';

const AdminLayout: React.FC = () => {
  const { logout } = useAuth();
  const location = useLocation();

  const navLinks = [
    { to: "/admin", icon: <Home className="w-5 h-5" />, label: "Dashboard" },
    { to: "/admin/students", icon: <Users className="w-5 h-5" />, label: "Alumnos" },
    { to: "/admin/teachers", icon: <GraduationCap className="w-5 h-5" />, label: "Profesores" },
    { to: "/admin/courses", icon: <Book className="w-5 h-5" />, label: "Cursos" },
    { to: "/admin/news", icon: <Newspaper className="w-5 h-5" />, label: "Noticias" },
    { to: "/admin/radio", icon: <Radio className="w-5 h-5" />, label: "Radio" },
    { to: "/admin/reports", icon: <BarChart className="w-5 h-5" />, label: "Reportes" },
    { to: "/admin/settings", icon: <Settings className="w-5 h-5" />, label: "Ajustes" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white text-gray-800 p-4 flex flex-col shadow-lg border-r border-gray-200">
        <div className="flex items-center mb-8">
          <div className="p-2 bg-primary rounded-lg mr-3">
            <Book className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
        </div>
        <nav className="flex-grow">
          <ul>
            {navLinks.map(link => (
              <li key={link.to} className="mb-2">
                <Link
                  to={link.to}
                  className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                    location.pathname === link.to
                      ? 'bg-primary text-white shadow-md'
                      : 'hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {link.icon}
                  <span className="ml-4 font-medium">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto">
          <Button onClick={logout} variant="ghost" className="w-full justify-start p-3 text-red-500 hover:bg-red-500/10 hover:text-red-600">
            <LogOut className="w-5 h-5 mr-4" />
            <span className="font-medium">Cerrar Sesión</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
