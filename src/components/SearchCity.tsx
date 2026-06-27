import { useState } from "react";
import type { CityData, CityDataAPIResponse } from "../types/CityData";

const SearchCity = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<CityData[]>([]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

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

  return (
    <div>
      <input
        className="w-full p-2 border border-gray-300 rounded-md"
        type="text"
        placeholder="Search for a city..."
        value={query}
        onChange={handleSearch}
      />
      <div className="flex flex-col gap-2">
        {results.map((result) => (
          <div key={result.id}>
            {result.name}, {result.country}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCity;
