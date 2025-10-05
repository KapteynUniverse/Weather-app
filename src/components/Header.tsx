const Header = () => {
  return (
    <header className="mt-[clamp(1rem,0.296rem+3.005vw,3rem)]">
      <div className="wrapper flex justify-between">
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
          name="units"
          id="units"
          defaultValue=""
          className="bg-neutral-800 px-[clamp(0.625rem,0.267rem+1.527vw,1rem)] py-[clamp(0.5rem,0.261rem+1.018vw,0.75rem)] rounded-md cursor-pointer"
        >
          <option value="" disabled hidden>
            Units
          </option>
          <option value="imperial">Switch to Imperial</option>
          <optgroup label="Temperature">
            <option value="celsius">
              Celsius <span aria-hidden>(°C)</span>
            </option>
            <option value="fahrenheit">
              Fahrenheit <span aria-hidden>(°F)</span>
            </option>
          </optgroup>
          <optgroup label="Wind Speed">
            <option value="km">
              <abbr title="Kilometers per hour">km/h</abbr>
            </option>
            <option value="mph">
              <abbr title="Miles per hour">mph</abbr>
            </option>
          </optgroup>
          <optgroup label="Precipitation">
            <option value="mm">
              Millimeters <span aria-hidden>(mm)</span>
            </option>
            <option value="in">
              Inches <span aria-hidden>(in)</span>
            </option>
          </optgroup>
        </select>
      </div>
    </header>
  );
};

export default Header;
