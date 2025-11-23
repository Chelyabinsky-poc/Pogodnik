import React from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export default function TimeDisplay() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = format(time, 'HH:mm:ss', { locale: ru });
  const dateString = format(time, 'EEEE, d MMMM yyyy', { locale: ru });

  return (
    <div className="time-display">
      <div className="time">{timeString}</div>
      <div className="date">{dateString}</div>
    </div>
  );
}