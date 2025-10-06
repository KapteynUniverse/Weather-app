# Weather App 🌤️

A modern, responsive weather web application built with **React**, **Tailwind CSS**, and **React Context API**. The app fetches current, hourly, and daily weather data for any location using public APIs.

---

## 🚀 Features

1. Automatically detects the user's location and shows local weather.
2. Search weather for any city worldwide.
3. Switch between **Metric** and **Imperial** units (temperature, wind speed, precipitation).
4. Hourly and daily forecasts.
5. Responsive design powered by Tailwind CSS.
6. Custom local fonts for enhanced typography.
7. Minimal, clean user interface.

---

## 🛠️ Tech Stack

- **Frontend:** React, React Context API
- **Styling:** Tailwind CSS
- **APIs:**
  - [Open-Meteo Forecast API](https://api.open-meteo.com/v1/forecast)
  - [Open-Meteo Geocoding API](https://geocoding-api.open-meteo.com/v1/search)
  - [OpenCage Geocoding API](https://api.opencagedata.com/geocode/v1/json)
- **Tooling:** Vite, ES Modules

---

## 🌐 Live Demo

Check out the live version of the app here:  
[Weather App Live Demo](#)

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/KapteynUniverse/Weather-app.git
cd Weather-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file in the root and add your API URLs:

VITE_WEATHER_API=https://api.open-meteo.com/v1/forecast
VITE_WEATHER_LOCATION_API=https://geocoding-api.open-meteo.com/v1/search
VITE_LOCATION_API=https://api.opencagedata.com/geocode/v1/json

4. Start the development server:

```bash
npm run dev
```

5. Open http://localhost:5173 in your browser.

## 📁 Project Structure

public/
├─ assets/
│ ├─ fonts
│ └─ images
src/
├─ api/ # API request functions
├─ components/ # Reusable React components
├─ context/ # Context providers (WeatherContext)
├─ hooks/ # Custom React hooks
├─ types/ # TypeScript types
└─ utils/ # Helper functions

## 🔧 Usage

Search for a city: Type a city name in the search bar and press Enter.

Switch units: Use the dropdown to toggle between Metric and Imperial.

Automatic update: Weather data updates automatically when units or location change.

Checkmarks: Selected units show a checkmark next to the option.

## 🎨 Styling & Fonts

Tailwind CSS for responsive and utility-first styling.

Custom fonts located in public/assets/fonts:

**DM Sans**

**Bricolage Grotesque**

```
@font-face {
  font-family: "DM Sans";
  src: url("/assets/fonts/DMSans-VariableFont_opsz,wght.ttf") format("truetype");
  font-weight: 300 500 600 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Bricolage Grotesque";
  src: url("/assets/fonts/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

## 📝 License

This project is licensed under the MIT License © Asilcan Toper
