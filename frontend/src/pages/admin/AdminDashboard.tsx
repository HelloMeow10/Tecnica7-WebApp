import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Bienvenido, {user?.firstName || 'Administrador'}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Este es el panel de administración. Desde aquí podrás gestionar el contenido del sitio.</p>
          <p>Selecciona una opción del menú de la izquierda para comenzar.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
