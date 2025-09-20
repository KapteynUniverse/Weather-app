import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ForecastProvider } from "./context/ForecastProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ForecastProvider>
      <App />
    </ForecastProvider>
  </StrictMode>
);
