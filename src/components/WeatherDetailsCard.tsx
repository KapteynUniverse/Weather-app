const WeatherDetailsCard = () => {
  // maple
  return (
    <article className="rounded-xl card-bg p-5">
      <h4 className="text-neutral-200 text-preset-6 mb-6">Feels Like</h4>
      <p className="text-preset-3">
        64 <abbr title="Fahrenheit degrees">(°)</abbr>
      </p>
    </article>
  );
};

export default WeatherDetailsCard;
