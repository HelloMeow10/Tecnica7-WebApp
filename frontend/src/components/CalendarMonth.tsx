import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Coffee, Flag } from 'lucide-react';

interface CalendarEvent {
  day: string;
  description: string;
  type: 'holiday' | 'event' | 'recess';
}

interface CalendarMonthProps {
  month: string;
  events: CalendarEvent[];
}

const CalendarMonth: React.FC<CalendarMonthProps> = ({ month, events }) => {
  const getTypeInfo = (type: string) => {
    switch (type) {
      case 'holiday':
        return {
          icon: <Flag className="h-6 w-6 text-red-600" />,
          classes: 'bg-red-50 border-red-200 hover:bg-red-100',
        };
      case 'event':
        return {
          icon: <Calendar className="h-6 w-6 text-blue-600" />,
          classes: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
        };
      case 'recess':
        return {
          icon: <Coffee className="h-6 w-6 text-yellow-600" />,
          classes: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
        };
      default:
        return {
          icon: <Calendar className="h-6 w-6 text-gray-600" />,
          classes: 'bg-gray-50 border-gray-200 hover:bg-gray-100',
        };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-heading text-3xl font-bold mb-6 text-primary border-b-2 border-primary/20 pb-2">
        {month}
      </h2>
      <motion.div
        className="space-y-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {events.map((event, index) => {
          const typeInfo = getTypeInfo(event.type);
          return (
            <motion.div
              key={index}
              className={`p-4 rounded-lg border-2 flex items-center gap-4 transition-colors duration-200 ${typeInfo.classes}`}
              variants={itemVariants}
            >
              <div className="flex-shrink-0">{typeInfo.icon}</div>
              <div className="font-bold text-lg w-28">{event.day}</div>
              <div className="text-gray-800">{event.description}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default CalendarMonth;
