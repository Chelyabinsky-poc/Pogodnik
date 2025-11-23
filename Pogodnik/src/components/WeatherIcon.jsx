import React from 'react';
import './WeatherIcon.css';

// Анимации через CSS-классы (см. WeatherIcon.css)
export default function WeatherIcon({ code }) {
  // Коды OpenWeather: https://openweathermap.org/weather-conditions#Icon-list
  let animationClass = 'weather-icon';

  if (code.includes('01')) animationClass += ' sun';
  else if (code.includes('02')) animationClass += ' sun-cloud';
  else if (code.includes('03') || code.includes('04')) animationClass += ' cloud';
  else if (code.includes('09')) animationClass += ' rain';
  else if (code.includes('10')) animationClass += ' sun-rain';
  else if (code.includes('11')) animationClass += ' thunder';
  else if (code.includes('13')) animationClass += ' snow';
  else if (code.includes('50')) animationClass += ' mist';

  return <div className={animationClass}></div>;
}