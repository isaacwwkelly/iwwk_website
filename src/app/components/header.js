"use client";
import { useEffect, useState } from "react";
import ThemeMenu from "./iconStuff/themeMenu";

export default function Header({ theme, toggleTheme }) {
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

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.add(selectedTheme);
    toggleTheme(selectedTheme);
  }, [toggleTheme]);

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
        className={`w-full flex items-center h-10 justify-center sm:justify-start sm:h-16 ${isFixed ? "fixed top-0 left-0" : "relative"} bg-[var(--header-bg)] shadow-lg z-1`}
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
