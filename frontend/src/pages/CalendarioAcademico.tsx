import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Calendar } from "lucide-react";
import { calendarData } from "@/lib/calendarData";
import CalendarMonth from "@/components/CalendarMonth";

const CalendarioAcademico = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
            <Calendar className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground">
            Calendario <span className="text-primary">Académico 2025</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aquí encontrarás las fechas más importantes del ciclo lectivo 2025 para el nivel secundario.
          </p>
        </div>

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
