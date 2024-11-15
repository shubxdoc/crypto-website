import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./mordern-normalize.css";
import "./index.css";
import axios from "axios";
import CoinProvider from "./context/CoinContext.jsx";

axios.defaults.baseURL = "https://api.coingecko.com/api/v3";
axios.defaults.headers.common["Accept"] = "application/json";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CoinProvider>
      <App />
    </CoinProvider>
  </StrictMode>
);
