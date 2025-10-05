import { useState, useEffect } from "react";
import { getWeatherData } from "../api/Weather";
import type { apiResponse } from "../types/apiTypes";

export function useWeatherWithCoords() {
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const [weather, setWeather] = useState<apiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDefault, setIsDefault] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.warn("Geolocation not supported, using Berlin as default.");
      setCoords({ lat: 52.52, lon: 13.41 });
      setIsDefault(true);
      setError("Geolocation is not supported, showing Berlin instead.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (err) => {
        console.warn("Geolocation denied, using Berlin as default.");
        console.error(err);
        setCoords({ lat: 52.52, lon: 13.41 });
        setIsDefault(true);
        setError("Unable to retrieve location, showing Berlin instead.");
      }
    );
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function fetchWeather() {
      if (!coords) return;

      try {
        setLoading(true);
        const data = await getWeatherData({
          lat: coords.lat,
          lon: coords.lon,
          imperial: false,
        });
        if (!cancelled) {
          setWeather(data);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) setError((err as Error).message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchWeather();

    return () => {
      cancelled = true;
    };
  }, [coords]);

  return { coords, weather, loading, error, isDefault };
}
