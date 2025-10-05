import { useWeatherContext } from "../hooks/useWeatherContext";

const SearchBar = () => {
  const { city, setCity, cityData, fetchWeather, searchCities } =
    useWeatherContext();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;
    await fetchWeather(city);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col sm:flex-row gap-3 md:gap-4 max-md:w-full md:max-w-[41.125rem] mx-auto text-preset-5-medium mb-[clamp(2rem,0.857rem+2.381vw,3rem)]"
    >
      <div className="flex-1 relative">
        <label htmlFor="search" className="sr-only">
          Search for a place...
        </label>
        <input
          id="search"
          type="search"
          placeholder="Search for a place..."
          className="bg-neutral-800 text-neutral-200 rounded-xl w-full px-6 py-4"
          value={city}
          onChange={(e) => searchCities(e.target.value)}
        />
        {cityData.length > 0 && (
          <ul className="absolute translate-y-[0.625rem] w-full bg-neutral-800 p-2 rounded-xl">
            {cityData.map((c) => (
              <li key={c.id}>
                <button
                  className="w-full px-2 py-[0.625rem] rounded-lg cursor-pointer hover:bg-neutral-600 transition-colors flex justify-between"
                  onClick={() => setCity(c.name)}
                >
                  {c.name} <span>{c.admin1}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className="rounded-xl px-6 py-4 bg-blue-500 hover:bg-blue-700 transition-colors cursor-pointer">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
