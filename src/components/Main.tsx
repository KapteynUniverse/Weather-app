import CurrentWeatherCard from "./CurrentWeatherCard";
import DailyForecastList from "./DailyForecastList";
import HourlyForecastList from "./HourlyForecastList";
import SearchBar from "./SearchBar";
import WeatherDetailsList from "./WeatherDetailsList";

const Main = () => {
  return (
    <main>
      <div className="wrapper">
        <h1 className="text-center my-[clamp(3rem,1.857rem+2.381vw,4rem)] text-preset-2">
          How's the sky looking today?
        </h1>
        <section aria-labelledby="forecast">
          <h2 id="forecast" className="sr-only">
            Forecast of Germany
          </h2>
          <SearchBar />
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <div>
              <section
                aria-labelledby="weather-details"
                className="flex flex-col gap[clamp(1.25rem, 0.986rem + 1.127vw, 2rem)] mb-8 md:mb-12"
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
