const DailyForecastCard = () => {
  return (
    <article className="rounded-xl card-bg px-2.5 py-4">
      <h5 className="text-preset-6 text-center">Tue</h5>
      <img
        src="./assets/images/icon-sunny.webp"
        alt="Sunny"
        width={60}
        height={60}
        className="my-4 mx-auto"
      />
      <div className="text-preset-7 flex justify-between">
        <p aria-label="Temperature">
          68 <abbr title="Fahrenheit degrees">(°)</abbr>
        </p>
        <p aria-label="Fells Like" className="text-neutral-200">
          78 <abbr title="Fahrenheit degrees">(°)</abbr>
        </p>
      </div>
    </article>
  );
};

export default DailyForecastCard;
