import { useEffect, useState } from "react";
import type { CityData } from "../types/CityData";
import type { WeatherDataAPIResponse } from "../types/WeatherData";
import { getWeatherCodeDescription } from "../utils/getWeatherCodeDescription";
import { getWeatherCodeIcon } from "../utils/getWeatherCodeIcon";

const WeatherCard = ({ city }: { city: CityData }) => {
  const [weather, setWeather] = useState<WeatherDataAPIResponse | null>(null);

  const fetchWeather = async () => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true`,
    );
    const data: WeatherDataAPIResponse = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div className="flex flex-col gap-2 border border-gray-300 rounded-md p-2 my-2">
      <h1>
        {city.name}, {city.country}
      </h1>
      <p className="text-4xl font-bold">
        {Math.round(weather?.current_weather?.temperature || 0)}
        {weather?.current_weather_units?.temperature}
      </p>
      <p className="text-sm">
        {getWeatherCodeDescription(weather?.current_weather?.weathercode || 0)}
        {getWeatherCodeIcon(weather?.current_weather?.weathercode || 0)}
      </p>
      <p className="text-sm border border-gray-300 rounded-md p-2">
        Wind: {Math.round(weather?.current_weather?.windspeed || 0)}{" "}
        {weather?.current_weather_units?.windspeed}
      </p>
    </div>
  );
};

export default WeatherCard;
