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

  // ✅ Определяем тему НА ОСНОВЕ АКТУАЛЬНЫХ данных
  const isWarm = weatherData?.main?.temp > 20;

  return (
    <div className={`app ${isWarm ? 'warm' : 'cool'}`}>
      <TimeDisplay />
      <CityInput onSubmit={handleCitySubmit} />
      <WeatherCard
        city={city}
        /* ❌ УДАЛИ эти 4 пропса — они больше не нужны: */
        // weatherData={weatherData}
        // error={error}
        // loading={loading}
        onWeatherUpdate={setWeatherData}
        onError={setError}
        onLoadingChange={setLoading}
      />
    </div>
  );
}

export default App;