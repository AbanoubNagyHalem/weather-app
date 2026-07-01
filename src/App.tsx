import { useState } from "react";
import Header from "./components/Header";
import SearchCity from "./components/SearchCity";
import type { CityData } from "./types/CityData";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [cities, setCities] = useState<CityData[]>([]);

  const handleAddCity = (city: CityData) => {
    setCities((prevCities) => [...prevCities, city]);
  };

  return (
    <div className="flex flex-col px-4 py-6">
      <Header />
      <SearchCity handleAddCity={handleAddCity} />
      <div className="grid grid-cols-2 gap-4">
        {cities.map((city) => (
          <WeatherCard key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
}

export default App;
