import { useWeatherContext } from "../hooks/useWeatherContext";

const Header = () => {
  const { units, setUnits } = useWeatherContext();

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    switch (value) {
      case "imperial":
        setUnits({
          temperature: "fahrenheit",
          speed: "mph",
          precipitation: "inch",
        });
        break;
      case "metric":
        setUnits({
          temperature: "celsius",
          speed: "kmh",
          precipitation: "mm",
        });
        break;
      case "celsius":
        setUnits({ ...units, temperature: "celsius" });
        break;
      case "fahrenheit":
        setUnits({ ...units, temperature: "fahrenheit" });
        break;
      case "km":
        setUnits({ ...units, speed: "kmh" });
        break;
      case "mph":
        setUnits({ ...units, speed: "mph" });
        break;
      case "mm":
        setUnits({ ...units, precipitation: "mm" });
        break;
      case "inch":
        setUnits({ ...units, precipitation: "inch" });
        break;
      default:
        break;
    }
  };

  return (
    <header className="mt-[clamp(1rem,0.296rem+3.005vw,3rem)]">
      <div className="wrapper flex justify-between items-center">
        <a href="#">
          <img
            src="./assets/images/logo.svg"
            alt="Home"
            width={197}
            height={40}
          />
        </a>

        <label htmlFor="units" className="sr-only">
          Select measurement units
        </label>
        <select
          id="units"
          value=""
          onChange={handleUnitChange}
          className="bg-neutral-800 px-[clamp(0.625rem,0.267rem+1.527vw,1rem)] py-[clamp(0.5rem,0.261rem+1.018vw,0.75rem)] rounded-md cursor-pointer"
        >
          <option value="" disabled hidden>
            Units
          </option>
          <option
            value={
              units.temperature === "celsius" &&
              units.speed === "kmh" &&
              units.precipitation === "mm"
                ? "imperial"
                : "metric"
            }
          >
            {units.temperature === "celsius" &&
            units.speed === "kmh" &&
            units.precipitation === "mm"
              ? "Switch to Imperial"
              : "Switch to Metric"}
          </option>
          <optgroup label="Temperature">
            <option value="celsius">
              Celsius (°C) {units.temperature === "celsius" && <span>✔</span>}
            </option>
            <option value="fahrenheit">
              Fahrenheit (°F){" "}
              {units.temperature === "fahrenheit" && <span>✔</span>}
            </option>
          </optgroup>
          <optgroup label="Wind Speed">
            <option value="km">
              km/h {units.speed === "kmh" && <span>✔</span>}
            </option>
            <option value="mph">
              mph {units.speed === "mph" && <span>✔</span>}
            </option>
          </optgroup>
          <optgroup label="Precipitation">
            <option value="mm">
              Millimeters (mm) {units.precipitation === "mm" && <span>✔</span>}
            </option>
            <option value="inch" className="text-left">
              Inches (in) {units.precipitation === "inch" && <span>✔</span>}
            </option>
          </optgroup>
        </select>
      </div>
    </header>
  );
};

export default Header;
