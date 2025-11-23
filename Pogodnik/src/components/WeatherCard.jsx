import React from 'react';
import useWeather from '../hooks/useWeather';
import WeatherIcon from './WeatherIcon';

export default function WeatherCard({
  city,
  onWeatherUpdate,
  onError,
  onLoadingChange,
}) {
  const { data, loading, error } = useWeather(city);

 React.useEffect(() => {
  onWeatherUpdate(data);
  onError(error);
  onLoadingChange(loading);
}, [data, error, loading, city, onWeatherUpdate, onError, onLoadingChange]);

  // === Loading / Error states ===
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

  if (!data) {
    return <div className="weather-card hint">Введите город выше 👆</div>;
  }

  // === Validate & extract weather data safely ===
  const name = data.name || '—';
  const main = data.main || {};
  const weather = Array.isArray(data.weather) ? data.weather : [];
  const wind = data.wind || {};

  const condition = weather[0] || {};
  const iconCode = condition.icon || '01d'; // fallback: clear sky
  const description = condition.description || '—';
  const temp = typeof main.temp === 'number' ? Math.round(main.temp) : '—';
  const feelsLike = typeof main.feels_like === 'number' ? Math.round(main.feels_like) : '—';
  const humidity = main.humidity || '—';
  const windSpeed = wind.speed || '—';

  // Debug (можно убрать в продакшене)
  // console.log('[WeatherCard] Data:', { name, iconCode, temp, condition });

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