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
  city: string;
  setCity: (value: string) => void;
  cityData: City[];
  setCityData: (cities: City[]) => void;
  searchCities: (value: string) => void;
  fetchWeather: (cityName: string) => Promise<void>;
  coords: { lat: number; lon: number } | null;
  weather: apiResponse | null;
  place: Place | null;
  loading: boolean;
  error: string | null;
  isDefault: boolean;
};
