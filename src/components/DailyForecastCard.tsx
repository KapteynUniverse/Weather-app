import { getDayName } from "../utils/formatDate";
import { getWeatherIcon } from "../utils/getWeatherIcon";

type DailyForecastListProps = {
  tempMin: number;
  tempMax: number;
  time: string;
  code: number;
};

const DailyForecastCard = ({
  time,
  tempMin,
  tempMax,
  code,
}: DailyForecastListProps) => {
  const { src, alt } = getWeatherIcon(Array.isArray(code) ? code[0] : code);
  return (
    <article className="rounded-xl card-bg px-2.5 py-4">
      <h5 className="text-preset-6 text-center">{getDayName(time)}</h5>
      <img
        src={src}
        alt={alt}
        width={320}
        height={320}
        className="my-4 mx-auto w-[3.75rem] h-auto"
      />
      <div className="text-preset-7 flex justify-between">
        <p aria-label="Temperature">
          {tempMax}
          <abbr title="Fahrenheit degrees">°</abbr>
        </p>
        <p aria-label="Fells Like" className="text-neutral-200">
          {tempMin}
          <abbr title="Fahrenheit degrees">°</abbr>
        </p>
        <p className="sr-only">{code}</p>
      </div>
    </article>
  );
};

export default DailyForecastCard;
