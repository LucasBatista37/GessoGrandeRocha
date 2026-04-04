import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import GaleriaPage from "../pages/GaleriaPage.jsx";
import CityPage from "../pages/CityPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./index.css";

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/gesso-mongagua" element={<CityPage citySlug="mongagua" />} />
          <Route path="/gesso-itanhaem" element={<CityPage citySlug="itanhaem" />} />
          <Route path="/gesso-praia-grande" element={<CityPage citySlug="praia-grande" />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")).render(app);
