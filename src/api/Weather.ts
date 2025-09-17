import type { apiProps } from "../types/apiTypes";

export async function getWeather({ lon, lat, imperial }: apiProps) {
  const baseUrl = import.meta.env.VITE_WEATHER_API;
  const url = `${baseUrl}?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code${
    imperial
      ? "&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch"
      : ""
  }`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch weather");
  return res.json();
}
