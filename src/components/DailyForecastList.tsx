import DailyForecastCard from "./DailyForecastCard";

const DailyForecastList = () => {
  return (
    <section aria-labelledby="daily-forecast">
      <h4 id="daily-forecast" className="sr-only">
        Daily Forecast
      </h4>
      <ul className="flex gap-4">
        <li>
          <DailyForecastCard />
        </li>
        <li>
          <DailyForecastCard />
        </li>
        <li>
          <DailyForecastCard />
        </li>
        <li>
          <DailyForecastCard />
        </li>
        <li>
          <DailyForecastCard />
        </li>
        <li>
          <DailyForecastCard />
        </li>
        <li>
          <DailyForecastCard />
        </li>
      </ul>
    </section>
  );
};

export default DailyForecastList;
