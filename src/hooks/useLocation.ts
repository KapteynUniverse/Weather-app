import { useState, useEffect } from "react";
import { useWeatherWithCoords } from "./useWeatherWithCoords";
import { getLocation } from "../api/Location";

export function useLocation() {
  const { coords } = useWeatherWithCoords();
  const [place, setPlace] = useState<{ city: string; country: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!coords) return;

    setLoading(true);
    getLocation(coords.lat, coords.lon)
      .then((place) => {
        setPlace(place);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch location");
      })
      .finally(() => setLoading(false));
  }, [coords]);

  return { place, loading, error };
}
