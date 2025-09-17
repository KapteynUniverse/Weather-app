import WeatherDetailsCard from "./WeatherDetailsCard";

const WeatherDetailsList = () => {
  return (
    <ul className="flex gap-[clamp(1rem,0.824rem+0.751vw,1.5rem)]">
      <li className="flex-1">
        <WeatherDetailsCard />
      </li>
      <li className="flex-1">
        <WeatherDetailsCard />
      </li>
      <li className="flex-1">
        <WeatherDetailsCard />
      </li>
      <li className="flex-1">
        <WeatherDetailsCard />
      </li>
    </ul>
  );
};

export default WeatherDetailsList;
