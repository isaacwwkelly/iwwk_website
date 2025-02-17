"use client";
import Header from "./header";
import FadeInEffect from "./framerMotion/fadeInEffect";
import TypeWriterEffect from "./framerMotion/typewriterEffect";

export default function Landing() {
  return (
    <div
      id="landing page"
      className="p-2 sm:p-4 flex flex-col items-center min-h-screen"
    >
      <Header />
      <div className="flex-grow flex flex-col justify-center w-full sm:w-144">
        <div className="object-center">
          <FadeInEffect>
            <h1 className="align-left ">Hello, I'm Isaac Kelly</h1>
            <TypeWriterEffect
              lines={[
                "Software Engineer II",
                "Rock Climber",
                "Avid Reader",
                "Open to Work",
              ]}
            />{" "}
          </FadeInEffect>
        </div>
      </div>
      <div className="mb-4">
        <button
          className="pb-2 object-bottom bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
