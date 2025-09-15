import HourlyForecastCard from "./HourlyForecastCard";

const HourlyForecastList = () => {
  return (
    <section
      aria-labelledby="hourly-forecast"
      className="bg-neutral-800 rounded-[1.5rem]"
    >
      <div className="flex">
        <h4 id="hourly-forecast">Hourly Forecast</h4>
        <label htmlFor="days" className="sr-only">
          Select a day to see hourly forecast
        </label>
        <select name="days" id="days">
          <option value="sunday">Sunday</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
        </select>
      </div>
      <ul className="flex flex-col gap-4">
        <li>
          <HourlyForecastCard />
        </li>
        <li>
          <HourlyForecastCard />
        </li>
        <li>
          <HourlyForecastCard />
        </li>
        <li>
          <HourlyForecastCard />
        </li>
        <li>
          <HourlyForecastCard />
        </li>
        <li>
          <HourlyForecastCard />
        </li>
        <li>
          <HourlyForecastCard />
        </li>
      </ul>
    </section>
  );
};

export default HourlyForecastList;
