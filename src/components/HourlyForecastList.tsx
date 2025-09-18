import type { apiResponse } from "../types/apiTypes";
import HourlyForecastCard from "./HourlyForecastCard";

type Props = {
  weather: apiResponse;
};

const HourlyForecastList = ({ weather }: Props) => {
  const now = new Date();

  const todayHourly = weather.hourly.time
    .map((time, index) => ({
      time,
      temp: weather.hourly.temperature_2m[index],
      code: weather.hourly.weather_code[index],
    }))
    .filter(({ time }) => {
      const hourDate = new Date(time);
      return (
        hourDate >= now &&
        hourDate.getDate() === now.getDate() &&
        hourDate.getMonth() === now.getMonth() &&
        hourDate.getFullYear() === now.getFullYear()
      );
    });

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
        {todayHourly.map(({ time, temp, code }, index) => (
          <li key={index}>
            <HourlyForecastCard
              time={time}
              temp={temp}
              code={code}
              unit={weather.current_units.temperature_2m}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HourlyForecastList;
