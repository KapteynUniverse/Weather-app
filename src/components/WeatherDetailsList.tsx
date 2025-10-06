import type { apiResponse } from "../types/apiTypes";
import WeatherDetailsCard from "./WeatherDetailsCard";

type Props = {
  weather: apiResponse;
};

const WeatherDetailsList = ({ weather }: Props) => {
  const formatUnit = (unit: string) => {
    if (unit === "°C" || unit === "°F") return "°";
    if (unit === "km/h" || unit === "mp/h" || unit === "mm" || unit === "inch")
      return ` ${unit}`;
    return unit;
  };
  const weatherDetails = [
    {
      title: "Feels Like",
      value: weather.current.apparent_temperature,
      unit: formatUnit(weather.current_units.apparent_temperature),
    },
    {
      title: "Humidity",
      value: weather.current.relative_humidity_2m,
      unit: formatUnit(weather.current_units.relative_humidity_2m),
    },
    {
      title: "Wind",
      value: weather.current.wind_speed_10m,
      unit: formatUnit(weather.current_units.wind_speed_10m),
    },
    {
      title: "Precipitation",
      value: weather.current.precipitation,
      unit: formatUnit(weather.current_units.precipitation),
    },
  ];

  return (
    <ul className="flex gap-[clamp(1rem,0.824rem+0.751vw,1.5rem)] flex-wrap">
      {weatherDetails.map((detail) => (
        <li key={detail.title} className="grow">
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
