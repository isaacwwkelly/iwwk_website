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
    <div
      id="aboutMe"
      className="flex flex-col mx-auto gap-4 p-4 sm:pt-24 sm:px-0 sm:w-3/4 "
    >
      <h1 className="text-center">About Me</h1>
      {/* Professional Details Section */}
      <div>
        <div className="flex sm:hidden gap-1.5 py-2">
          <Codesvg />
          <h2>Professional Details</h2>
        </div>
        <div className="p-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <div id="text-box" className="order-1 sm:order-0 sm:w-2/4 max-w-xl">
            <div className="hidden sm:flex gap-1.5 py-2">
              <Codesvg />
              <h2>Professional Details</h2>
            </div>

            <div className="">
              <p className="italic">I'm a full-stack software engineer.</p>
              <p className="pt-2 sm:pt-2">
                I started my career at Dell Technologies as an intern and moved
                up to Software Engineer II. At Dell, I learned valuable skills
                and gained real-world experience across multiple teams. For more
                information, please see my resume.
              </p>
              <p className="pt-2 sm:pt-2">
                I was recently affected by Dell's work force reductions and am
                now looking for technical job opportunities.
              </p>
              <p className="pt-2 sm:pt-2">
                I created this website to demonstrate some of my abilities and
                to enhance my job search.
              </p>
            </div>
          </div>
          <div
            id="icon-box"
            className="flex flex-col items-center px-2 w-full sm:px-0 sm:w-2/4 max-w-xl"
          >
            <div className="flex">
              {techIconInfo.slice(0, 5).map((element) => (
                <div key={element.key} className="m-2 w-10 sm:w-20 sm:mx-4">
                  <TechIcon
                    src={element.src}
                    invertToWhite={element.invertToWhite}
                  />
                </div>
              ))}
            </div>
            <div className="flex">
              {techIconInfo.slice(5, 10).map((element) => (
                <div key={element.key} className="m-2 w-10 sm:w-20 sm:mx-4">
                  <TechIcon
                    src={element.src}
                    invertToWhite={element.invertToWhite}
                  />
                </div>
              ))}
            </div>
            <div className="flex">
              {techIconInfo.slice(10, 15).map((element) => (
                <div key={element.key} className="m-2 w-10 sm:w-20 sm:mx-4">
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
      {/* Personal Details Section */}
      <div>
        <div className="flex sm:hidden gap-1.5 py-2">
          <Codesvg />
          <h2>Personal Details</h2>
        </div>
        <div className="p-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <div id="text-box" className="order-1 sm:w-2/4 max-w-xl">
            <div className="hidden sm:flex gap-1.5 py-2">
              <Personsvg />
              <h2>Personal Details</h2>
            </div>

            <p className="italic">I work to live, I don't live to work.</p>
            <p className="pt-2 sm:pt-1">
              Outside of my 9-5, I'm usually pursuing my hobbies.
            </p>
            <p className="pt-2 sm:pt-1">
              I like to spend my free time rock climbing, hiking, or reading
              with my wife.
            </p>
            <p className="pt-2 sm:pt-1">
              I also enjoy playing video games, watching movies, and socializing
              with friends.
            </p>
            <p className="pt-2 sm:pt-1">
              My wife and I also love to travel, and we try to go somewhere new
              to us once a year.
            </p>
          </div>
          <div
            id="icon-box"
            className="h-auto flex flex-wrap content-center justify-between m-2 sm:my-0 sm:w-2/4 max-w-xl"
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
