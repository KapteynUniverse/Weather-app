import CurrentWeatherCard from "./CurrentWeatherCard";
import DailyForecastList from "./DailyForecastList";
import HourlyForecastList from "./HourlyForecastList";
import SearchBar from "./SearchBar";
import WeatherDetailsList from "./WeatherDetailsList";

const Main = () => {
  return (
    <main>
      <div className="wrapper max-w">
        <h1>How's the sky looking today?</h1>
        <section aria-labelledby="forecast">
          <h2 id="forecast" className="sr-only">
            Forecast of Germany
          </h2>
          <SearchBar />
          <div className="flex">
            <div>
              <section aria-labelledby="weather-details">
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
