"use client";
import Header from "./header";
import FadeInEffect from "./framerMotion/fadeInEffect";
import TypeWriterEffect from "./framerMotion/typewriterEffect";

export default function Landing() {
  return (
    <div className="p-2 sm:p-4 flex flex-col items-center h-screen bg-gray-800">
      <Header />
      <div className="flex-grow flex flex-col justify-center w-full sm:w-144">
        <div className="object-center">
          <FadeInEffect>
            <h1 className="align-left ">Hello,</h1>
            <TypeWriterEffect
              lines={[
                "Isaac Kelly",
                "a software engineer",
                "a rock climber",
                "a software developer",
                "an avid reader",
                "looking for a job",
              ]}
            />{" "}
          </FadeInEffect>
        </div>
      </div>
      <button
        className="object-bottom"
        onClick={() => {
          const element = document.getElementById("aboutMe");
          element?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        bottom of div
      </button>
    </div>
  );
}
