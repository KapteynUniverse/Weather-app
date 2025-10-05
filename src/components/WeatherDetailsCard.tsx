type Props = {
  title: string;
  value: number;
  unit: string;
};

const WeatherDetailsCard = ({ title, value, unit }: Props) => {
  return (
    <article className="rounded-xl card-bg p-5">
      <h4 className="text-neutral-200 text-preset-6 mb-6">{title}</h4>
      <p className="text-preset-3">
        {value}
        <abbr title="Fahrenheit degrees">{unit}</abbr>
      </p>
    </article>
  );
};

export default WeatherDetailsCard;
