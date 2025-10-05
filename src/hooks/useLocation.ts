import { useState, useEffect } from "react";
import { useWeatherWithCoords } from "./useWeatherWithCoords";
import { getUserLocation } from "../api/Location";

export function useLocation() {
  const { coords, isDefault } = useWeatherWithCoords();
  const [place, setPlace] = useState<{ city: string; country: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!coords) return;
    if (isDefault) {
      setPlace({ city: "Berlin", country: "Germany" });
      setLoading(false);
      return;
    }

    setLoading(true);
    getUserLocation(coords.lat, coords.lon)
      .then((place) => {
        setPlace(place);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch location");
        getUserLocation(coords.lat, coords.lon).then((place) => {
          setPlace(place);
          setError(null);
        });
      })
      .finally(() => setLoading(false));
  }, [coords, isDefault]);

  return { place, loading, error };
}
