// src/context/ForecastProvider.tsx
import { useState } from "react";
import type { ReactNode } from "react";
import type { apiResponse } from "../types/apiTypes";
import { ForecastContext } from "./ForecastContext";

export const ForecastProvider = ({ children }: { children: ReactNode }) => {
  const [weatherData, setWeatherData] = useState<apiResponse | null>(null);

  return (
    <ForecastContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </ForecastContext.Provider>
  );
};
