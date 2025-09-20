import { useState } from "react";
import { getLocationWeatherData, getWeatherData } from "../api/Weather";

const SearchBar = () => {
  const [city, setCity] = useState<string>("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;

    try {
      const cityData = await getLocationWeatherData(city);
      if (!cityData) return;

      const { latitude: lat, longitude: lon } = cityData;

      const weatherData = await getWeatherData({ lat, lon, imperial: false });
      console.log(weatherData);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col sm:flex-row gap-3 md:gap-4 max-md:w-full md:max-w-[41.125rem] mx-auto text-preset-5-medium mb-[clamp(2rem,0.857rem+2.381vw,3rem)]"
    >
      <label htmlFor="search" className="sr-only">
        Search for a place...
      </label>
      <input
        id="search"
        type="search"
        placeholder="Search for a place..."
        className="bg-neutral-800 text-neutral-200 rounded-xl flex-1 px-6 py-4"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="bg-blue-500 rounded-xl px-6 py-4">Search</button>
    </form>
  );
};

export default SearchBar;
