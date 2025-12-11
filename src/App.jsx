import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import { DiscoverTiffin } from "./pages/discover-tiffins/DiscoverTiffin.jsx";
import { HomePage } from "./pages/home-page/HomePage.jsx";
import { SubscriptionsPage } from "./pages/subscriptions-page/SubscriptionsPage.jsx";
import { AboutPage } from "./pages/about-page/AboutPage.jsx";
import { initScrollToTop } from "./utils/scrollUtils.js";

export function App() {
   const { pathname } = useLocation();

  // Disable browser scroll memory
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Scroll to top on reload
  useEffect(() => {
    initScrollToTop();
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="discover-tiffin" element={<DiscoverTiffin />} />
        <Route path="subscriptions-page" element={<SubscriptionsPage />} />
        <Route path="about-page" element={<AboutPage />} />
      </Routes>
    </>
  );
}
