import React from 'react';

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
  const getTypeClasses = (type: string) => {
    switch (type) {
      case 'holiday':
        return 'border-destructive';
      case 'event':
        return 'border-primary';
      case 'recess':
        return 'border-yellow-500';
      default:
        return 'border-muted';
    }
  };

  return (
    <div className="mb-12 animate-slide-in-from-top">
      <h2 className="text-4xl font-heading font-bold mb-6 text-foreground border-b-2 border-primary pb-2">
        {month}
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <div
            key={index}
            className={`card-elegant p-4 rounded-lg border-l-4 flex items-start space-x-4 transition-all duration-300 transform hover:-translate-y-1 ${getTypeClasses(event.type)}`}
          >
            <div className="font-bold text-lg text-primary w-20 text-center bg-primary/10 rounded-md p-2">
              {event.day}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarMonth;
