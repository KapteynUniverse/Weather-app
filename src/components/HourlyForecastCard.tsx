import { getWeatherIcon } from "../utils/getWeatherIcon";

type HourlyForecastListProps = {
  temp: number;
  time: string;
  code: number;
};

const HourlyForecastCard = ({ time, temp, code }: HourlyForecastListProps) => {
  const formattedTime = new Date(time).toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
  });
  const { src, alt } = getWeatherIcon(Array.isArray(code) ? code[0] : code);
  return (
    // h5 yerine time olabilir
    <article className="bg-neutral-700 outline-neutral-600 outline-1 flex justify-between items-center rounded-lg pl-3 pr-4 py-2.5">
      <div className="flex items-center gap-2">
        <img
          src={src}
          alt={alt}
          width={320}
          height={320}
          className="w-10 h-auto"
        />
        <h5 className="text-preset-5-medium">{formattedTime}</h5>
      </div>
      <p className="text-preset-7">
        {temp}
        <abbr title="Fahrenheit degrees">°</abbr>
      </p>
      <p className="sr-only">{code}</p>
    </article>
  );
};

export default HourlyForecastCard;
