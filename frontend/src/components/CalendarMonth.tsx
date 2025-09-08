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
        return 'bg-red-100 border-red-500';
      case 'event':
        return 'bg-blue-100 border-blue-500';
      case 'recess':
        return 'bg-yellow-100 border-yellow-500';
      default:
        return 'bg-gray-100 border-gray-500';
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-primary">{month}</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border-l-4 flex items-center ${getTypeClasses(event.type)}`}
          >
            <div className="font-bold text-lg w-24">{event.day}</div>
            <div>{event.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarMonth;
