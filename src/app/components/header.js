"use client";
import { useEffect, useState } from "react";
import ThemeMenu from "./iconStuff/themeMenu";
import SocialLinksMenu from "./iconStuff/socialLinksMenu";

export default function Header({ theme, toggleTheme }) {
  // Fixed vs relative logic, and fade visibility logic
  const [isFixed, setIsFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const landingEl = document.getElementById("landing page");
      const aboutEl = document.getElementById("aboutMe");
      if (!landingEl || !aboutEl) return;

      const landingHeight = landingEl.offsetHeight;
      const aboutHeight = aboutEl.offsetHeight;

      // Stick header to top immediately after landing page leaves viewport
      setIsFixed(window.scrollY > landingHeight);

      // Fade header into existence when the About Me section starts becoming visible at the viewport top
      setIsVisible(window.scrollY > landingHeight - 100);
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
        className={`w-full flex items-center h-10 justify-center sm:justify-start sm:h-16 ${isFixed ? "fixed top-0 left-0" : "relative"} bg-[var(--header-bg)] shadow-lg z-50 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <nav className="flex gap-4 items-end sm:pl-4">
          <a
            className="text-2xl sm:text-4xl font-bold hover:underline hover:underline-offset-4 cursor-pointer"
            onClick={() => smoothScroll("landing page")}
          >
            IWWK
          </a>
          <a
            className="hover:underline hover:underline-offset-4 cursor-pointer"
            onClick={() => smoothScroll("aboutMe")}
          >
            About
          </a>
          <a
            className="hover:underline hover:underline-offset-4 cursor-pointer"
            onClick={() => smoothScroll("career")}
          >
            Career
          </a>
          <a
            className="hover:underline hover:underline-offset-4 cursor-pointer"
            onClick={() => smoothScroll("contact")}
          >
            Contact
          </a>
          <SocialLinksMenu />
          <ThemeMenu theme={theme} toggleTheme={toggleTheme} />
        </nav>
      </header>
    </div>
  );
}
