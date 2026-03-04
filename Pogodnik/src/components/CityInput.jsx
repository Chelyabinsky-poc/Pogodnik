import React, { useState } from 'react';
import { useWeatherContext } from '../context/WeatherContext'; // ← хук

export default function CityInput() {
  const [inputValue, setInputValue] = useState('');
  const { handleCitySubmit } = useWeatherContext(); // ← из контекста

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleCitySubmit(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="city-input">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите город, например: Москва"
        aria-label="Город"
      />
      <button type="submit">🔍 Найти</button>
    </form>
  );
}