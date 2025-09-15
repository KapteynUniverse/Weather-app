const DailyForecastCard = () => {
  return (
    <div className="rounded-xl card-bg">
      <h5>Tue</h5>
      <img
        src="./assets/images/icon-sunny.webp"
        alt="Sunny"
        width={60}
        height={60}
      />
      <div>
        <p aria-label="Temperature">
          68 <abbr title="Fahrenheit degrees">(°)</abbr>
        </p>
        <p aria-label="Fells Like" className="text-neutral-200">
          78 <abbr title="Fahrenheit degrees">(°)</abbr>
        </p>
      </div>
    </div>
  );
};

export default DailyForecastCard;
