import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const { isAuthenticated, user, isLoading } = useAuth();

  if (isLoading) {
    // Muestra un spinner o un componente de carga mientras se verifica el estado de autenticación
    return <div>Cargando...</div>;
  }

  if (!isAuthenticated) {
    // Si no está autenticado, redirige a la página de login
    return <Navigate to="/login" replace />;
  }

  // Si se especifican roles permitidos, verifica que el usuario tenga uno de esos roles
  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    // Si el usuario no tiene el rol permitido, redirige a una página de "no autorizado" o a la home
    // Por ahora, redirigimos a la home
    return <Navigate to="/" replace />;
  }

  // Si está autenticado y tiene el rol correcto (o no se especificaron roles), renderiza el contenido
  return <Outlet />;
};

export default ProtectedRoute;
