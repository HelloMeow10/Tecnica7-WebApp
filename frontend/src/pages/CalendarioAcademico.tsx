import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Calendar, ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { calendarData } from "@/lib/calendarData";
import CalendarMonth from "@/components/CalendarMonth";
import { Button } from "@/components/ui/button";

const CalendarioAcademico = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    setIsAtBottom(bottom);

    if (window.scrollY > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
            <Calendar className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-heading font-bold text-5xl lg:text-6xl text-foreground">
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
      {showScrollButton && (
        <Button
          onClick={isAtBottom ? scrollToTop : scrollToBottom}
          className="fixed bottom-8 right-8 h-16 w-16 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-110"
        >
          {isAtBottom ? (
            <ArrowUpCircle className="h-8 w-8" />
          ) : (
            <ArrowDownCircle className="h-8 w-8" />
          )}
        </Button>
      )}
    </div>
  );
};

export default CalendarioAcademico;
