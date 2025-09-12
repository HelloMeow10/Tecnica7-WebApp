import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Calendar, ArrowDown, ArrowUp } from "lucide-react";
import { calendarData } from "@/lib/calendarData";
import CalendarMonth from "@/components/CalendarMonth";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const CalendarioAcademico = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    setIsAtBottom(bottom);
    if (window.scrollY > 300) {
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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 pt-32">
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
      <AnimatePresence>
        {showScrollButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Button
              onClick={isAtBottom ? scrollToTop : scrollToBottom}
              className="rounded-full w-14 h-14 shadow-lg bg-gradient-primary hover:opacity-90"
              aria-label={isAtBottom ? "Ir arriba" : "Ir abajo"}
            >
              {isAtBottom ? (
                <ArrowUp className="h-6 w-6" />
              ) : (
                <ArrowDown className="h-6 w-6" />
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default CalendarioAcademico;
