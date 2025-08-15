import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

const AdminLayout: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-8">Panel Admin</h1>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/admin" className="hover:text-gray-300">Dashboard</Link>
            </li>
            <li className="mb-4">
              <Link to="/admin/teachers" className="hover:text-gray-300">Profesores</Link>
            </li>
            {/* Otros enlaces del panel de admin irán aquí */}
          </ul>
        </nav>
        <div className="mt-auto absolute bottom-4">
          <Button onClick={logout} variant="destructive">
            Cerrar Sesión
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
