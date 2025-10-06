import type { apiResponse } from "../types/apiTypes";
import type { Place } from "../types/contextTypes";
import { formatDate } from "../utils/formatDate";

type Props = {
  place: Place;
  weather: apiResponse;
};

const CurrentWeatherCard = ({ place, weather }: Props) => {
  return (
    <div className="custom-bg rounded-[1.5rem] flex flex-col md:flex-row items-center justify-between px-6 py-20">
      <div className="text-center md:text-left">
        <h3 className="text-preset-4 mb-3">
          {place?.name}, {place?.country}
        </h3>
        <p className="text-preset-6">{formatDate(weather?.current.time)}</p>
      </div>
      <div className="flex items-center gap-5">
        <img
          src="./assets/images/icon-sunny.webp"
          alt="sunny"
          width={120}
          height={120}
        />
        <p className="text-preset-1">
          {weather?.current.temperature_2m}
          <abbr title="Fahrenheit degrees">°</abbr>
        </p>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
