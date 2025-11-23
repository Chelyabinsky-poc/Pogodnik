import React, { useState } from 'react';
import CityInput from './components/CityInput';
import WeatherCard from './components/WeatherCard';
import TimeDisplay from './components/TimeDisplay';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCitySubmit = (cityName) => {
    setCity(cityName);
  };

  const isWarm = weatherData?.main?.temp > 20;

  return (
    <div className={`app ${isWarm ? 'warm' : 'cool'}`}>
      <TimeDisplay />
      <CityInput onSubmit={handleCitySubmit} />
      <WeatherCard
        city={city}
        onWeatherUpdate={setWeatherData}
        onError={setError}
        onLoadingChange={setLoading}
      />
    </div>
  );
}

export default App;