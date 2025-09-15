const Header = () => {
  return (
    <header className="mt-[clamp(1rem,0.296rem+3.005vw,3rem)]">
      <div className="wrapper flex justify-between">
        <a href="#">Weather Now</a>
        <label htmlFor="units" className="sr-only">
          Select measurement units
        </label>
        <select name="units" id="units" defaultValue="">
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
