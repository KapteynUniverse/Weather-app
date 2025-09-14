const Header = () => {
  return (
    <header>
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
    </header>
  );
};

export default Header;
