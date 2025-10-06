import { useState, useMemo } from "react";
import type { apiResponse } from "../types/apiTypes";
import HourlyForecastCard from "./HourlyForecastCard";

type Props = {
  weather: apiResponse;
};

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const HourlyForecastList = ({ weather }: Props) => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());

  const hourlyForSelectedDay = useMemo(() => {
    return weather.hourly.time
      .map((time, index) => ({
        time,
        temp: weather.hourly.temperature_2m[index],
        code: weather.hourly.weather_code[index],
      }))
      .filter(({ time }) => {
        const hourDate = new Date(time);
        return hourDate.getDay() === selectedDay;
      });
  }, [weather, selectedDay]);

  return (
    <section
      aria-labelledby="hourly-forecast"
      className="bg-neutral-800 rounded-[1.5rem] px-[clamp(1rem,0.523rem+2.036vw,1.5rem)] py-[clamp(1.25rem,1.011rem+1.018vw,1.5rem)] flex-1"
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
          value={selectedDay}
          onChange={(e) => setSelectedDay(Number(e.target.value))}
          className="px-4 py-2 w-fit rounded-lg bg-neutral-600 cursor-pointer"
        >
          {daysOfWeek.map((day, index) => (
            <option key={index} value={index}>
              {day}
            </option>
          ))}
        </select>
      </div>

      <ul className="flex flex-col gap-4 max-h-[36.75rem] overflow-y-auto -mx-[clamp(1rem,0.523rem+2.036vw,1.5rem)] px-[clamp(1rem,0.523rem+2.036vw,1.5rem)] custom-scroll">
        {hourlyForSelectedDay.map(({ time, temp, code }, index) => (
          <li key={index}>
            <HourlyForecastCard time={time} temp={temp} code={code} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HourlyForecastList;
