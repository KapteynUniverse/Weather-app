import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { apiResponse } from "../types/apiTypes";

export type ForecastContextType = {
  weatherData: apiResponse | null;
  setWeatherData: Dispatch<SetStateAction<apiResponse | null>>;
};

export const ForecastContext = createContext<ForecastContextType | undefined>(
  undefined
);
