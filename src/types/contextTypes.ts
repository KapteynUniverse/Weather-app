export type City = {
  id: string;
  name: string;
  admin1: string;
  latitude: number;
  longitude: number;
};

export type WeatherContextType = {
  city: string;
  setCity: (city: string) => void;
  cityData: City[];
  fetchWeather: (cityName: string) => Promise<void>;
  searchCities: (query: string) => void;
};
