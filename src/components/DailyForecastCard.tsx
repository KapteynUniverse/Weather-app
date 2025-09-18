import { getDayName } from "../utils/formatDate";

type DailyForecastListProps = {
  tempMin: number;
  tempMax: number;
  time: string;
  code: number;
  unit: string;
};

const DailyForecastCard = ({
  time,
  tempMin,
  tempMax,
  code,
  unit,
}: DailyForecastListProps) => {
  return (
    <article className="rounded-xl card-bg px-2.5 py-4">
      <h5 className="text-preset-6 text-center">{getDayName(time)}</h5>
      <img
        src="./assets/images/icon-sunny.webp"
        alt="Sunny"
        width={60}
        height={60}
        className="my-4 mx-auto"
      />
      <div className="text-preset-7 flex justify-between">
        <p aria-label="Temperature">
          {tempMax} <abbr title="Fahrenheit degrees">{unit}</abbr>
        </p>
        <p aria-label="Fells Like" className="text-neutral-200">
          {tempMin} <abbr title="Fahrenheit degrees">{unit}</abbr>
        </p>
        <p className="sr-only">{code}</p>
      </div>
    </article>
  );
};

export default DailyForecastCard;
