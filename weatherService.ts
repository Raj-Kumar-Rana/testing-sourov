import axios from "axios";

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
