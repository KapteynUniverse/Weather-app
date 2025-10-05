import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export const useWeatherContext = () => {
  const ctx = useContext(WeatherContext);
  if (!ctx)
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  return ctx;
};
