const HourlyForecastCard = () => {
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
        <h5 className="text-preset-5-medium">3 PM</h5>
      </div>
      <p className="text-preset-7">
        68 <abbr title="Fahrenheit degrees">(°)</abbr>
      </p>
    </article>
  );
};

export default HourlyForecastCard;
