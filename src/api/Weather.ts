export async function getWeatherData({
  lon,
  lat,
  units,
}: {
  lon: number;
  lat: number;
  units: { temperature: string; speed: string; precipitation: string };
}) {
  const baseUrl = import.meta.env.VITE_WEATHER_API;

  if (!baseUrl) throw new Error("VITE_WEATHER_API is not defined");

  const url = `${baseUrl}?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&temperature_unit=${units.temperature}&wind_speed_unit=${units.speed}&precipitation_unit=${units.precipitation}`;

  const res = await fetch(url);
  if (!res.ok) {
    const errText = await res.text();
    console.error("Weather API error:", errText);
    throw new Error("Failed to fetch weather");
  }
  return res.json();
}

export async function getLocationWeatherData(cities: string) {
  const baseUrl = import.meta.env.VITE_WEATHER_LOCATION_API;
  const url = `${baseUrl}?name=${cities}&count=10&language=en&format=json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch location");
  const data = await res.json();
  return data.results;
}
