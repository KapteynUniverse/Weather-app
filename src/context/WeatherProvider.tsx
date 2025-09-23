import { useRef, useState, type FC } from "react";
import { getLocationWeatherData, getWeatherData } from "../api/Weather";
import { WeatherContext } from "./WeatherContext";
import type { City } from "../types/contextTypes";

export const WeatherProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState<City[]>([]);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const searchCities = (value: string) => {
    setCity(value);
    if (!value) {
      setCityData([]);
      return;
    }

    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(async () => {
      try {
        const data = await getLocationWeatherData(value);
        if (data) setCityData(data);
      } catch (err) {
        console.error(err);
      }
    }, 300);
  };

  const fetchWeather = async (cityName: string) => {
    try {
      const results = await getLocationWeatherData(cityName);
      setCityData([]);
      if (!results || results.length === 0) return;

      const { latitude, longitude } = results[0];
      const weather = await getWeatherData({
        lat: latitude,
        lon: longitude,
        imperial: false,
      });
      console.log(weather);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        cityData,
        searchCities,
        fetchWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
