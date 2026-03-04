import { createContext, useContext, useState, useCallback } from 'react';
import useWeather from '../hooks/useWeather';

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [city, setCity] = useState('');
  const { data: weatherData, loading, error } = useWeather(city);

  const handleCitySubmit = useCallback((cityName) => {
    setCity(cityName);
  }, []);

  const value = {
    city,
    weatherData,
    loading,
    error,
    handleCitySubmit,
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeatherContext must be used within WeatherProvider');
  }
  return context;
}