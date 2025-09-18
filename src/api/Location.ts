export async function getUserLocation(lat: number, lon: number) {
  const apiKey = import.meta.env.VITE_API_KEY_LOCATION;
  const baseUrl = import.meta.env.VITE_LOCATION_API;
  const url = `${baseUrl}?q=${lat}+${lon}&key=${apiKey}&no_annotations=1`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to reverse geocode");

  const data = await res.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("No location found");
  }

  const place = data.results[0].components;

  return {
    city: place.province || "",
    country: place.country || "",
  };
}
