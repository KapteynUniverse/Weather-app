import type { apiResponse } from "../types/apiTypes";
import WeatherDetailsCard from "./WeatherDetailsCard";

type Props = {
  weather: apiResponse;
};

const WeatherDetailsList = ({ weather }: Props) => {
  const weatherDetails = [
    {
      title: "Feels Like",
      value: weather.current.apparent_temperature,
      unit: weather.current_units.apparent_temperature,
    },
    {
      title: "Humidity",
      value: weather.current.relative_humidity_2m,
      unit: weather.current_units.relative_humidity_2m,
    },
    {
      title: "Wind",
      value: weather.current.wind_speed_10m,
      unit: weather.current_units.wind_speed_10m,
    },
    {
      title: "Precipitation",
      value: weather.current.precipitation,
      unit: weather.current_units.precipitation,
    },
  ];

  return (
    <ul className="flex gap-[clamp(1rem,0.824rem+0.751vw,1.5rem)]">
      {weatherDetails.map((detail) => (
        <li key={detail.title} className="flex-1">
          <WeatherDetailsCard
            title={detail.title}
            value={detail.value}
            unit={detail.unit}
          />
        </li>
      ))}
    </ul>
  );
};

export default WeatherDetailsList;
