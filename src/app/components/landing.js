"use client";
import FadeInEffect from "./framerMotion/fadeInEffect";
import TypeWriterEffect from "./framerMotion/typewriterEffect";

export default function Landing() {
  return (
    <div
      id="landing page"
      className="bg-[var(--background)] p-2 sm:p-4 flex flex-col items-center h-screen"
    >
      <div className="flex-grow flex flex-col justify-center w-full sm:w-144">
        <div className="object-center">
          <FadeInEffect>
            <div className="flex flex-col sm:flex-row">
              <h1 className="align-left">Hello,&nbsp;</h1>
              <h1 className="align-left">I'm Isaac Kelly.</h1>
            </div>
            <TypeWriterEffect
              lines={[
                "Software Engineer",
                "Rock Climber",
                "Avid Reader",
                "Open to Work",
              ]}
            />
          </FadeInEffect>
        </div>
      </div>
      <div className="mb-20 sm:mb-8">
        <button
          className="pb-2 object-bottom bg-[var(--button-c)] hover:bg-[var(--button-c-hov)] text-white font-bold py-2 px-4 rounded"
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
  );
}
