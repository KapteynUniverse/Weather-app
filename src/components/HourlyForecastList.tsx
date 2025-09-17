import HourlyForecastCard from "./HourlyForecastCard";

const HourlyForecastList = () => {
  return (
    <section
      aria-labelledby="hourly-forecast"
      className="bg-neutral-800 rounded-[1.5rem] px-[clamp(1rem,0.523rem+2.036vw,1.5rem)] py-[clamp(1.25rem,1.011rem+1.018vw,1.5rem)]"
    >
      <div className="flex justify-between items-center mb-4">
        <h4 id="hourly-forecast" className="text-preset-5">
          Hourly Forecast
        </h4>
        <label htmlFor="days" className="sr-only">
          Select a day to see hourly forecast
        </label>
        <select
          name="days"
          id="days"
          className="px-4 py-2 rounded-lg bg-neutral-600"
        >
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
        <li>
          <HourlyForecastCard />
        </li>
      </ul>
    </section>
  );
};

export default HourlyForecastList;
