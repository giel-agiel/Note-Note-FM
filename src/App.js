import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { lightTheme } from "./components/Themes";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/WorkPage";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";
import Wall from "./components/Wall";
import OltConfigForm from "./components/OltConfigForm";
import LoginScreen from "./components/LoginScreen";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const isWallRoute = location.pathname === "/wall";

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  };

  return (
    <>
      <GlobalStyle />
      <AnimatePresence mode="wait">
        {isWallRoute ? (
          <Routes location={location} key={location.pathname}>
            <Route path="/wall" element={<Wall />} />
          </Routes>
        ) : !isAuthenticated ? (
          <Routes>
            <Route path="*" element={<LoginScreen onLogin={handleLogin} />} />
          </Routes>
        ) : (
          <ThemeProvider theme={lightTheme}>
            <SoundBar />
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/olt" element={<OltConfigForm />} />
              <Route path="/skills" element={<MySkillsPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/main" element={<Main />} />
              <Route path="/login" element={<Navigate to="/" />} />
            </Routes>
          </ThemeProvider>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
