import React, { useState } from "react";
import { fetchWeather } from "../services/weatherService";
import WeatherCard from "../components/WeatherCard";

const Home: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    try {
      setError("");
      const data = await fetchWeather(city);
      setWeather({
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      });
    } catch {
      setError("City not found. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Weather App</h1>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter city"
          className="p-2 border rounded-md"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={getWeather}>
          Get Weather
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {weather && <WeatherCard {...weather} />}
    </div>
  );
};

export default Home;
