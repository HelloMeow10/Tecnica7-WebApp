import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Calendar } from "lucide-react";
import { calendarData } from "@/lib/calendarData";
import CalendarMonth from "@/components/CalendarMonth";
import { motion } from "framer-motion";

const CalendarioAcademico = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-700 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
            <Calendar className="h-12 w-12 text-white" />
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Calendario <span className="text-primary">Académico 2025</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aquí encontrarás las fechas más importantes del ciclo lectivo 2025.
          </p>
        </motion.div>

        <div className="mt-16">
          {calendarData.map((monthData, index) => (
            <CalendarMonth
              key={index}
              month={monthData.month}
              events={monthData.events}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CalendarioAcademico;
