"use client";
import { useEffect, useState } from "react";
import Header from "./components/header";
import About from "./components/about";
import Career from "./components/career";
import Contact from "./components/contact";
import Landing from "./components/landing";
import Footer from "./components/footer";
import SolarSystemCanvas from "./components/solarSystemCanvas";

export default function Home() {
  // Light or Dark theme logic
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (typeof document !== "undefined") {
      const selectedTheme = localStorage.getItem("theme") || "dark";
      document.body.classList.add(selectedTheme);
      setTheme(selectedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    if (typeof document !== "undefined") {
      document.body.classList.remove(theme);
      document.body.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
    }
  };

  return (
    <div className="relative">
      {/* Global Solar System Background */}
      <SolarSystemCanvas theme={theme} />

      {/* Landing Page */}
      <Landing theme={theme} />
      {/* Header Nav */}
      <Header theme={theme} toggleTheme={toggleTheme} />
      {/* About */}
      <About theme={theme} />
      {/* Career */}
      <Career />
      {/* Contact */}
      <Contact />
      {/* Spacer to scroll and view the full global canvas at the bottom */}
      <div className="h-[75vh] w-full pointer-events-none"></div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
