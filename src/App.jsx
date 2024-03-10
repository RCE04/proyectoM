import './App.css'
import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Inicio from "./inicio";
import Madera from "./madera";
import Nosotros from "./nosotros";
import Contactanos from "./contactanos";

function ScrollToTopOnNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    navigate(location.pathname);
  }, [navigate, location.pathname]);

  return null;
}

function App() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <ScrollToTopOnNavigation />
            <Inicio />
          </>
        }
      />
      <Route
        path="/madera/*"
        element={
          <>
            <ScrollToTopOnNavigation />
            <Madera />
          </>
        }
      />
      <Route
        path="/nosotros/*"
        element={
          <>
            <ScrollToTopOnNavigation />
            <Nosotros />
          </>
        }
      />
      <Route
        path="/contactanos/*"
        element={
          <>
            <ScrollToTopOnNavigation />
            <Contactanos />
          </>
        }
      />
    </Routes>
  );
}

export default App;