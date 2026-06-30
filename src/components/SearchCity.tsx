import { useRef, useState } from "react";
import type { CityData, CityDataAPIResponse } from "../types/CityData";

type Props = {
  handleAddCity: (city: CityData) => void;
};

const SearchCity = ({ handleAddCity }: Props) => {
  const [results, setResults] = useState<CityData[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;

    if (newQuery.length < 3) {
      setResults([]);
      return;
    }

    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${newQuery}`,
    );
    const data: CityDataAPIResponse = await response.json();
    setResults(data.results || []);
  };

  const handleAddCityClick = (city: CityData) => {
    handleAddCity(city);
    setResults([]);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <input
        className="w-full p-2 border border-gray-300 rounded-md"
        type="text"
        placeholder="Search for a city..."
        onChange={handleSearch}
        ref={inputRef}
      />
      {results.length > 0 && (
        <div className="flex flex-col gap-2 border border-gray-300 rounded-md p-2">
          {results.map((result) => (
            <div
              onClick={() => handleAddCityClick(result)}
              key={result.id}
              className="hover:bg-gray-100 cursor-pointer p-1 rounded-md"
            >
              {result.name}, {result.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchCity;
