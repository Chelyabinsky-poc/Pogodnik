import React from 'react';
import CityInput from './components/CityInput';
import WeatherCard from './components/WeatherCard';
import TimeDisplay from './components/TimeDisplay';
import { useWeatherContext } from './context/WeatherContext';
import './App.css';

function App() {
  const { weatherData } = useWeatherContext();
  const isWarm = weatherData?.main?.temp > 20;

  return (
    <div className={`app ${isWarm ? 'warm' : 'cool'}`}>
      <TimeDisplay />
      <CityInput /> {}
      <WeatherCard /> {}
    </div>
  );
}

export default App;