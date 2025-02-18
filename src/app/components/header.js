"use client";
import { useEffect, useState } from "react";
import ThemeMenu from "./iconStuff/themeMenu";

export default function Header() {
  // Light or Dark theme logic
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // If the user has selected a theme, use that
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
      setTheme(selectedTheme);
    }
    // Else if the users OS preferences prefers dark mode
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");
      setTheme("dark");
    }
    // Else use light mode
    else {
      document.body.classList.add("light");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  // Moving header nav logic
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const landingHeight =
        document.getElementById("landing page").offsetHeight;
      setIsFixed(window.scrollY > landingHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div id="header">
      <div className={`${isFixed ? "h-10 sm:h-16" : "hidden"}`}></div>
      <header
        className={`w-full flex items-center h-10 justify-center sm:justify-start sm:h-16 ${isFixed ? "fixed top-0 left-0" : "relative"} bg-[var(--header-bg)] text-[var(--header-text)] z-1`}
      >
        <nav className="flex gap-4 items-end sm:pl-4">
          <a
            className="text-2xl sm:text-4xl font-bold hover:underline hover:underline-offset-4"
            onClick={() => smoothScroll("landing page")}
          >
            IWWK
          </a>
          <a
            className="hover:underline hover:underline-offset-4"
            onClick={() => smoothScroll("aboutMe")}
          >
            About
          </a>
          <a
            className="hover:underline hover:underline-offset-4"
            onClick={() => smoothScroll("career")}
          >
            Career
          </a>
          <a
            className="hover:underline hover:underline-offset-4"
            onClick={() => smoothScroll("contact")}
          >
            Contact
          </a>
          <ThemeMenu theme={theme} toggleTheme={toggleTheme} />
        </nav>
      </header>
    </div>
  );
}
