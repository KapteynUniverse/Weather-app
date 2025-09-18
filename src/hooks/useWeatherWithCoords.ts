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

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
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
        setError("Unable to retrieve location.");
        setLoading(false);
        console.error(err);
      }
    );
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function fetchWeather() {
      if (!coords) return;

      try {
        setLoading(true);
        const data = await getWeatherData({ lat: coords.lat, lon: coords.lon });
        if (!cancelled) setWeather(data);
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

  return { coords, weather, loading, error };
}
