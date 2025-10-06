import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ScrollToTop from "./components/ScrollToTop"; // Import the new component
import Index from "./pages/Index";
import CicloBasico from "./pages/CicloBasico";
import Programacion from "./pages/Programacion";
import Multimedios from "./pages/Multimedios";
import Historia from "./pages/Historia";
import Radio from "./pages/Radio";
import NotFound from "./pages/NotFound";
import { LoginPage } from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminTeachersPage from "./pages/admin/TeachersPage";
import AdminStudentsPage from "./pages/admin/StudentsPage";
import CoursesPage from "./pages/admin/CoursesPage";
import ReportsPage from "./pages/admin/ReportsPage";
import BibliotecaDigital from "./pages/BibliotecaDigital";
import BolsaTrabajo from "./pages/BolsaTrabajo";
import CalendarioAcademico from "./pages/CalendarioAcademico";
import CampusVirtual from "./pages/CampusVirtual";
import ReglamentoInterno from "./pages/ReglamentoInterno";
import SistemaGestion from "./pages/SistemaGestion";
import CentroEstudiantes from "./pages/CentroEstudiantes";
import PoliticaDePrivacidad from "./pages/politica-de-privacidad";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import Dashboard from "./pages/Dashboard";
import ContactoPage from "./pages/Contacto";
import InscripcionPage from "./pages/InscripcionPage";
import TourVirtual from "./pages/TourVirtual";
import Noticias from "./pages/Noticias";
import MyGrades from "./pages/campus/MyGrades";
import Materials from "./pages/campus/Materials";
import MyCoursesPage from "./pages/campus/MyCoursesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ciclo-basico" element={<CicloBasico />} />
            <Route path="/programacion" element={<Programacion />} />
            <Route path="/multimedios" element={<Multimedios />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/radio" element={<Radio />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/campus-virtual" element={<CampusVirtual />} />
            <Route path="/biblioteca-digital" element={<BibliotecaDigital />} />
            <Route path="/bolsa-trabajo" element={<BolsaTrabajo />} />
            <Route path="/calendario-academico" element={<CalendarioAcademico />} />
            <Route path="/reglamento-interno" element={<ReglamentoInterno />} />
            <Route path="/sistema-gestion" element={<SistemaGestion />} />
            <Route path="/centro-estudiantes" element={<CentroEstudiantes />} />
            <Route path="/politica-de-privacidad" element={<PoliticaDePrivacidad />} />
            <Route path="/terminos-de-uso" element={<TermsOfUsePage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/inscripcion" element={<InscripcionPage />} />
            <Route path="/tour-virtual" element={<TourVirtual />} />
            <Route path="/noticias" element={<Noticias />} />

            {/* Rutas Protegidas */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/sistema-de-gestion" element={<Dashboard />} />
              <Route path="/campus/mis-cursos" element={<MyCoursesPage />} />
              <Route path="/campus/calificaciones" element={<MyGrades />} />
              <Route path="/campus/materiales" element={<Materials />} />
            </Route>

            {/* Rutas Protegidas de Administración */}
            <Route element={<ProtectedRoute allowedRoles={['DIRECTOR']} />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="teachers" element={<AdminTeachersPage />} />
                <Route path="students" element={<AdminStudentsPage />} />
                <Route path="courses" element={<CoursesPage />} />
                <Route path="reports" element={<ReportsPage />} />
              </Route>
            </Route>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
