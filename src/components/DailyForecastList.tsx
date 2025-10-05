import type { apiResponse } from "../types/apiTypes";
import DailyForecastCard from "./DailyForecastCard";

type Props = {
  weather: apiResponse;
};

const DailyForecastList = ({ weather }: Props) => {
  return (
    <section aria-labelledby="daily-forecast">
      <h4 id="daily-forecast" className="text-preset-5 mb-5">
        Daily Forecast
      </h4>
      <ul className="flex flex-wrap gap-4">
        {weather.daily.time.map((t, index) => (
          <li key={index} className="flex-1">
            <DailyForecastCard
              time={t}
              tempMax={weather.daily.temperature_2m_max[index]}
              tempMin={weather.daily.temperature_2m_min[index]}
              code={weather.daily.weather_code[index]}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DailyForecastList;
