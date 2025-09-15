const CurrentWeatherCard = () => {
  return (
    <div className="custom-bg rounded-[1.5rem]">
      <h3>Berlin, Germany</h3>
      <p>Tuesday, Aug 5, 2025</p>
      <img
        src="./assets/images/icon-sunny.webp"
        alt="sunny"
        width={120}
        height={120}
      />
      <p>
        68 <abbr title="Fahrenheit degrees">(°)</abbr>
      </p>
    </div>
  );
};

export default CurrentWeatherCard;
