import { createContext } from "react";
import type { WeatherContextType } from "../types/contextTypes";

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
);
