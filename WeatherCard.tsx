import React from "react";

interface WeatherProps {
  city: string;
  temperature: number;
  description: string;
  icon: string;
}

const WeatherCard: React.FC<WeatherProps> = ({ city, temperature, description, icon }) => {
  return (
    <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md text-center w-80">
      <h2 className="text-xl font-bold">{city}</h2>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
      <p className="text-2xl font-semibold">{temperature}°C</p>
      <p className="capitalize">{description}</p>
    </div>
  );
};

export default WeatherCard;
