import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Home, Users, GraduationCap, Book, BarChart, LogOut, Settings, Newspaper, Radio } from 'lucide-react';
import logo from '@/assets/logo.png';
import {motion} from "framer-motion";

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
    <div className="flex h-screen bg-gradient-to-l from-gray-300 to-white">
      {/* Sidebar */}
      <aside className="w-72 md:w-64 lg:w-72 bg-gradient-to-b from-slate-800 to-slate-900 text-white p-4 flex flex-col shadow-2xl border-r border-slate-700">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className="flex flex-col h-full"
        >
          <div className="flex items-center mb-6">
            <Link to="/sistema-gestion" className="flex items-center">
              <div className="p-2 bg-gradient-to-br from-primary to-indigo-600 rounded-lg mr-2 shadow-md">
                <img src={logo} alt="Logo" className="w-auto h-10" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-white">Panel de admin</h1>
                <p className="text-xs text-slate-300">Gestión y administración</p>
              </div>
            </Link>
          </div>

          <nav className="flex-grow">
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`group flex items-center p-3 rounded-lg transition-all duration-200 relative overflow-hidden ${
                      location.pathname === link.to
                        ? 'bg-gradient-to-r from-primary/70 to-indigo-700 shadow-inner'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <span className="flex items-center justify-center h-10 w-10 rounded-md bg-white/5 group-hover:bg-white/7">
                      {React.cloneElement(link.icon as any, { className: 'w-5 h-5 text-white' })}
                    </span>
                    <span className="ml-4 font-medium text-sm text-slate-100">{link.label}</span>
                    {/* Active indicator */}
                    {location.pathname === link.to && (
                      <span className="absolute right-0 h-full w-1 bg-blue-800 rounded-l-md" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="">
            <div className="p-3 rounded-lg bg-gradient-to-b from-slate-800/40 to-transparent border border-slate-700 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">A</div>
                <div>
                  <p className="text-sm font-medium">Administrador</p>
                  <p className="text-xs text-slate-300">admin@ejemplo.com</p>
                </div>
              </div>
              <div>
                <Button onClick={logout} variant="ghost" className="text-amber-400 hover:bg-amber-400/10">
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
