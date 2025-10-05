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
  return (
    // h5 yerine time olabilir
    <article className="bg-neutral-700 outline-neutral-600 outline-1 flex justify-between items-center rounded-lg pl-3 pr-4 py-2.5">
      <div className="flex items-center gap-2">
        <img
          src="./assets/images/icon-sunny.webp"
          alt="Sunny"
          width={40}
          height={40}
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
