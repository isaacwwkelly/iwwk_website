import { Codesvg, Personsvg } from "./littleIcons/codesvg";
import TechIcon from "./techIcon";

export default function About() {
  const techIconInfo = [
    "react",
    "python",
    "javascript",
    "nextjs",
    "csharp",
    "dotnet",
    "angular",
    "html5",
    "sass",
    "gitlab",
    "jira",
    "flask",
    "pandas",
    "bootstrap",
    "css",
  ].map((srcName, index) => {
    return {
      src: srcName,
      key: index,
      invertToWhite: ["sass", "nextjs", "flask"].includes(srcName), // Example condition
    };
  });

  const personalIconInfo = [
    "climber",
    "hiker",
    "book",
    "controller",
    "movie",
  ].map((srcName, index) => {
    return {
      src: srcName,
      key: index,
      invertToWhite: true,
    };
  });

  return (
    <div id="aboutMe" className="p-4 sm:py-8 h-auto">
      <h1>About Me</h1>
      {/* Professional Details Section */}
      <div className="flex sm:hidden gap-1.5 py-2">
        <Codesvg />
        <h2>Professional Details</h2>
      </div>
      <div className="p-4 sm:pl-8 h-auto flex flex-col sm:flex-row justify-evenly gap-2 sm:gap-4">
        <div id="text-box" className="sm:w-2/4 order-1 sm:order-0">
          <div className="hidden sm:flex gap-1.5 py-2">
            <Codesvg />
            <h2>Professional Details</h2>
          </div>

          <div className="">
            <p className="italic">I'm a full-stack software engineer</p>
            <p className="pt-2 sm:pt-2">
              I started my career at Dell Technologies as an intern and moved up
              to Software Engineer II. At Dell, I learned valuable software
              engineering skills and gained real-world experience accross
              multiple teams. For more information, please see my resume.
            </p>
            <p className="pt-2 sm:pt-2">
              I was recently affected by Dell's work force reductions and am now
              looking for software engineering opportunities.
            </p>
            <p className="pt-2 sm:pt-2">
              I created this website to demonstrate some of my abilities and
              gain traction in software engineer job applications.
            </p>
          </div>
        </div>
        <div
          id="icon-box"
          className="sm:w-2/4 h-auto flex flex-wrap content-center justify-between m-2 sm:my-0"
        >
          {techIconInfo.map((element) => (
            <div key={element.key} className="m-2 w-10 sm:w-20">
              <TechIcon
                src={element.src}
                invertToWhite={element.invertToWhite}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Personal Details Section */}
      <div className="flex sm:hidden gap-1.5 py-2">
        <Codesvg />
        <h2>Personal Details</h2>
      </div>
      <div className="py-4">
        <div className="p-4 sm:pl-8 h-auto flex flex-col sm:flex-row justify-evenly gap-2 sm:gap-4">
          <div id="text-box" className="sm:w-2/4 order-1">
            <div className="hidden sm:flex gap-1.5 py-2">
              <Personsvg />
              <h2>Personal Details</h2>
            </div>

            <p className="italic">I work to live, I don't live to work</p>
            <p className="pt-2 sm:pt-1">
              Outside of my 9-5, I'm usually pursuing my hobbies, not coding.
            </p>
            <p className="pt-2 sm:pt-1">
              I like to spend my free time with my wife, where we go rock
              climbing, hiking, or read books together.
            </p>
            <p className="pt-2 sm:pt-1">
              I also enjoy playing video games, watching movies, and playing
              board games with friends.
            </p>
            <p className="pt-2 sm:pt-1">
              My wife and I also love to travel, and we try to go on at least
              one trip a year.
            </p>
          </div>
          <div
            id="icon-box"
            className="sm:w-2/4 h-auto flex flex-wrap content-center justify-between m-2 sm:my-0"
          >
            {personalIconInfo.map((element) => (
              <div key={element.key} className="m-2 w-10 sm:w-20">
                <TechIcon
                  src={element.src}
                  invertToWhite={element.invertToWhite}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
