import React from 'react';
import { useWeatherContext } from '../context/WeatherContext'; // ← хук
import WeatherIcon from './WeatherIcon';

export default function WeatherCard() {
  const { weatherData, loading, error, city } = useWeatherContext(); // ← из контекста

  if (loading) {
    return <div className="weather-card">Загрузка погоды...</div>;
  }

  if (error) {
    return (
      <div className="weather-card error">
        ⚠️ Ошибка: {error.message || error || 'Не удалось загрузить погоду'}
      </div>
    );
  }

  if (!weatherData || !city) {
    return <div className="weather-card hint">Введите город выше 👆</div>;
  }

  const name = weatherData.name || '—';
  const main = weatherData.main || {};
  const weather = Array.isArray(weatherData.weather) ? weatherData.weather : [];
  const wind = weatherData.wind || {};

  const condition = weather[0] || {};
  const iconCode = condition.icon || '01d';
  const description = condition.description || '—';
  const temp = typeof main.temp === 'number' ? Math.round(main.temp) : '—';
  const feelsLike = typeof main.feels_like === 'number' ? Math.round(main.feels_like) : '—';
  const humidity = main.humidity || '—';
  const windSpeed = wind.speed || '—';

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="weather-info">
        <div className="icon">
          <WeatherIcon code={iconCode} />
        </div>
        <div className="temp">{temp}°C</div>
        <div className="details">
          <p>Ощущается как: {feelsLike}°C</p>
          <p>Влажность: {humidity}%</p>
          <p>Ветер: {windSpeed} м/с</p>
          <p className="desc">{description}</p>
        </div>
      </div>
    </div>
  );
}