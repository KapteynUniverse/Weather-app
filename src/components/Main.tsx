import CurrentWeatherCard from "./CurrentWeatherCard";
import DailyForecastList from "./DailyForecastList";
import HourlyForecastList from "./HourlyForecastList";
import SearchBar from "./SearchBar";
import WeatherDetailsList from "./WeatherDetailsList";
import { useWeatherWithCoords } from "../hooks/useWeatherWithCoords";
import { useLocation } from "../hooks/useLocation";

const Main = () => {
  const {
    coords,
    weather,
    loading: weatherLoading,
    error: weatherError,
  } = useWeatherWithCoords();
  const {
    place,
    loading: locationLoading,
    error: locationError,
  } = useLocation();

  if (weatherLoading || locationLoading) return <p>Loading...</p>;
  if (weatherError) return <p>{weatherError}</p>;
  if (locationError) return <p>{locationError}</p>;

  console.log(coords);
  console.log(weather);
  console.log(place);

  return (
    <main className="mb-[clamp(3rem,1.092rem+8.142vw,5rem)]">
      <div className="wrapper">
        <h1 className="text-preset-2 text-center my-[clamp(3rem,1.857rem+2.381vw,4rem)]">
          How's the sky looking today?
        </h1>
        <section aria-labelledby="forecast">
          <h2 id="forecast" className="sr-only">
            Forecast of Germany
          </h2>
          <SearchBar />
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div>
              <section
                aria-labelledby="weather-details"
                className="flex flex-col gap-[clamp(1.25rem,0.986rem+1.127vw,2rem)] mb-8 md:mb-12"
              >
                <h3 id="weather-details" className="sr-only">
                  Weather Details
                </h3>
                <CurrentWeatherCard />
                <WeatherDetailsList />
              </section>
              <DailyForecastList />
            </div>
            <HourlyForecastList />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
