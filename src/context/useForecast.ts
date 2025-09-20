import { useContext } from "react";
import { ForecastContext } from "./ForecastContext";

export const useForecast = () => {
  const context = useContext(ForecastContext);
  if (!context) {
    throw new Error("useForecast must be used inside ForecastProvider");
  }
  return context;
};
