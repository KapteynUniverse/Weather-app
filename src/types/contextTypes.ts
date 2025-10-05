import type { apiResponse } from "./apiTypes";

export type City = {
  id: string;
  name: string;
  admin1: string;
  latitude: number;
  longitude: number;
};

export type Place = { name: string; country: string };

export type WeatherContextType = {
  fetchWeather: (cityName: string) => Promise<void>;
  coords: { lat: number; lon: number } | null;
  weather: apiResponse | null;
  place: Place | null;
  loading: boolean;
  error: string | null;
  isDefault: boolean;
};
