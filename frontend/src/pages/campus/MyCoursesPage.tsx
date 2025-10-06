import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MyCourses from "./MyCourses";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const MyClassesPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/campus-virtual" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-6">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Volver al Campus Virtual
          </Link>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-gray-800">
            Mis <span className="text-primary">Cursos</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-2">
            Gestiona tus cursos y accede al material de estudio.
          </p>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <MyCourses />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default MyClassesPage;