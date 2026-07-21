"use client";
import { useEffect, useState } from "react";
import FadeInEffect from "./framerMotion/fadeInEffect";
import TypeWriterEffect from "./framerMotion/typewriterEffect";

export default function Landing({ theme }) {
  const [showButton, setShowButton] = useState(true);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;

      // Handle arrow button visibility
      setShowButton(isAtTop);

      // Handle hero text visibility (fades out after 1.5 seconds of scrolling, returns immediately at top)
      if (isAtTop) {
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
        setShowText(true);
      } else {
        if (showText && !timeoutId) {
          timeoutId = setTimeout(() => {
            setShowText(false);
          }, 1500);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [showText]);

  return (
    <div
      id="landing page"
      className="bg-transparent w-full h-[250vh] relative"
    >
      <div className="h-screen w-full flex flex-col items-center md:items-start justify-between p-2 sm:p-4 relative overflow-hidden">
        {/* Text container positioned in the upper center on mobile (red box) and upper left on desktop (green box) */}
        <div className={`z-10 w-full max-w-7xl flex flex-col items-center md:items-start justify-start pt-24 md:pt-40 md:pl-24 pointer-events-none transition-opacity duration-700 ${showText ? "opacity-100" : "opacity-0"}`}>
          <div>
            <FadeInEffect>
              <div className="flex flex-col sm:flex-row">
                <h1 className="align-left">Hello,&nbsp;</h1>
                <h1 className="align-left">I'm Isaac Kelly.</h1>
              </div>
              <TypeWriterEffect
                lines={[
                  "Software Engineer II",
                  "Rock Climber",
                  "Avid Reader",
                  "Open to Work",
                ]}
              />
            </FadeInEffect>
          </div>
        </div>
        
        <div className="mb-10 sm:mb-8 z-10">
          <button
            className={`pb-2 object-bottom bg-[var(--button-c)] hover:bg-[var(--button-c-hov)] text-white font-bold py-2 px-4 rounded-lg cursor-pointer transition-opacity duration-300 ${showButton ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onClick={() => {
              const element = document.getElementById("aboutMe");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
