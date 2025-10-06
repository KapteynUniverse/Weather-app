export function getWeatherIcon(code: number): { src: string; alt: string } {
  if (code === 0)
    return { src: "/assets/images/icon-sunny.webp", alt: "Clear sky" };

  if ([1, 2, 3].includes(code))
    return {
      src: "/assets/images/icon-partly-cloudy.webp",
      alt: "Partly cloudy or overcast",
    };

  if ([45, 48].includes(code))
    return { src: "/assets/images/icon-fog.webp", alt: "Fog" };

  if ([51, 53, 55].includes(code))
    return { src: "/assets/images/icon-drizzle.webp", alt: "Drizzle" };

  if ([56, 57].includes(code))
    return {
      src: "/assets/images/icon-freezing-drizzle.webp",
      alt: "Freezing drizzle",
    };

  if ([61, 63, 65].includes(code))
    return { src: "/assets/images/icon-rain.webp", alt: "Rain" };

  if ([66, 67].includes(code))
    return {
      src: "/assets/images/icon-freezing-drizzle.webp",
      alt: "Freezing rain",
    };

  if ([71, 73, 75].includes(code))
    return { src: "/assets/images/icon-snow.webp", alt: "Snowfall" };

  if (code === 77)
    return { src: "/assets/images/icon-snow.webp", alt: "Snow grains" };

  if ([80, 81, 82].includes(code))
    return { src: "/assets/images/icon-rain.webp", alt: "Rain showers" };

  if ([85, 86].includes(code))
    return { src: "/assets/images/icon-snow.webp", alt: "Snow showers" };

  if ([95, 96, 99].includes(code))
    return { src: "/assets/images/icon-storm.webp", alt: "Thunderstorm" };

  return { src: "/assets/images/icon-unknown.webp", alt: "Unknown weather" };
}
