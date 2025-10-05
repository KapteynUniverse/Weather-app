import { useEffect, useRef, useState, type FC, type ReactNode } from "react";
import { getLocationWeatherData, getWeatherData } from "../api/Weather";
import { getUserLocation } from "../api/Location";
import type { apiResponse } from "../types/apiTypes";
import type { City, Place } from "../types/contextTypes";
import { WeatherContext } from "./WeatherContext";

export const WeatherProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState<City[]>([]);
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const [weather, setWeather] = useState<apiResponse | null>(null);
  const [place, setPlace] = useState<Place | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDefault, setIsDefault] = useState(false);

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
        const results = await getLocationWeatherData(value);
        if (Array.isArray(results)) {
          setCityData(results);
        } else {
          setCityData([]);
        }
      } catch (err) {
        console.error(err);
        setCityData([]);
      }
    }, 300);
  };

  const fetchWeather = async (cityName: string) => {
    try {
      setLoading(true);
      const results = await getLocationWeatherData(cityName);
      setCityData([]);
      if (!results || results.length === 0) return;

      const { latitude, longitude, name, country } = results[0];
      setCoords({ lat: latitude, lon: longitude });
      setPlace({ name, country });

      const data = await getWeatherData({ lat: latitude, lon: longitude });
      setWeather(data);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported. Showing default location.");
      setIsDefault(true);
      const defaultCoords = { lat: 52.52, lon: 13.405 };
      setCoords(defaultCoords);
      setPlace({ name: "Berlin", country: "Germany" });
      getWeatherData(defaultCoords)
        .then(setWeather)
        .catch(console.error)
        .finally(() => setLoading(false));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, lon: longitude });

        try {
          const userPlace = await getUserLocation(latitude, longitude);
          setPlace(userPlace);
          const data = await getWeatherData({ lat: latitude, lon: longitude });
          setWeather(data);
          setError(null);
        } catch (err) {
          setError("Failed to fetch weather/location");
          console.error(err);
        } finally {
          setLoading(false);
        }
      },
      async (err) => {
        console.warn(err);
        setIsDefault(true);
        const defaultCoords = { lat: 52.52, lon: 13.405 };
        setCoords(defaultCoords);
        setPlace({ name: "Berlin", country: "Germany" });
        try {
          const data = await getWeatherData(defaultCoords);
          setWeather(data);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
    );
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        cityData,
        setCityData,
        searchCities,
        fetchWeather,
        coords,
        weather,
        place,
        loading,
        error,
        isDefault,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
