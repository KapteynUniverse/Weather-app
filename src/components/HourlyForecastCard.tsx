const HourlyForecastCard = () => {
  return (
    // h5 yerine time olabilir
    <div className="flex items-center">
      <img
        src="./assets/images/icon-sunny.webp"
        alt="Sunny"
        width={40}
        height={40}
      />
      <h5>3 PM</h5>
      <p>
        68 <abbr title="Fahrenheit degrees">(°)</abbr>
      </p>
    </div>
  );
};

export default HourlyForecastCard;
