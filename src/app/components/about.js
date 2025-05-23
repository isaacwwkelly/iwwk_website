"use client";
import { Codesvg, Personsvg } from "./iconStuff/codesvg";
import TechIconContainer from "./iconStuff/techIconContainer";
import TechIcon from "./iconStuff/techIcon";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function About({ theme }) {
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
      key: `tech-${index}`,
      invert: ["sass", "nextjs", "flask"].includes(srcName) && theme === "dark",
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
      key: `personal-${index}`,
      invert: true && theme === "dark",
    };
  });

  return (
    <div id="aboutMe-container" className="bg-[var(--background)]">
      <div
        id="aboutMe"
        className="mx-auto p-4 pt-16 sm:pt-32 sm:px-0 sm:w-3/4 flex justify-center"
      >
        <div className="py-4 max-w-7xl flex flex-col gap-4 sm:border-2 border-[var(--border-color)] shadow-md rounded-2xl ">
          <h1 className="text-center">About Me</h1>
          {/* Professional Details Section */}
          <div>
            <div className="flex md:hidden gap-1.5 py-2">
              <Codesvg />
              <h2>Professional Details</h2>
            </div>
            <div className="p-4 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
              <div
                id="text-box"
                className="order-1 md:order-0 md:w-2/4 max-w-xl"
              >
                <div className="hidden md:flex gap-1.5 py-2">
                  <Codesvg />
                  <h2>Professional Details</h2>
                </div>

                <div className="">
                  <p className="italic">
                    I'm a full-stack Software Engineer II.
                  </p>
                  <p className="pt-2 md:pt-2">
                    I started my career at Dell Technologies as an intern. In
                    the last 3 years, I moved up to Software Engineer II. There,
                    I learned valuable skills and gained real-world experience
                    across multiple teams, including a team that worked on
                    Dell's largest sales application. For more information,
                    please see my resume.
                  </p>
                  <p className="pt-2 md:pt-2">
                    I am currently open to technical job opportunities to take
                    my career to the next level. I created this website to
                    demonstrate some of my abilities and to enhance my job
                    search.
                  </p>
                </div>
              </div>
              <div id="skills-icons" className="w-full md:w-2/4 max-w-xl">
                <TechIconContainer
                  id="tech-icons"
                  listToDisplay={techIconInfo}
                />
              </div>
            </div>
          </div>
          {/* Personal Details Section */}
          <div>
            <div className="flex md:hidden gap-1.5 py-2">
              <Codesvg />
              <h2>Personal Details</h2>
            </div>
            <div className="p-4 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
              <div id="text-box" className="order-1 md:w-2/4 max-w-xl">
                <div className="hidden md:flex gap-1.5 py-2">
                  <Personsvg />
                  <h2>Personal Details</h2>
                </div>

                <p className="italic">I work to live, I don't live to work.</p>
                <p className="pt-2 md:pt-1">
                  Outside of work, I'm usually pursuing my hobbies.
                </p>
                <p className="pt-2 md:pt-1">
                  I like to spend my free time rock climbing, hiking, or reading
                  with my wife.
                </p>
                <p className="pt-2 md:pt-1">
                  I also enjoy playing video games, watching movies, and
                  socializing with friends.
                </p>
                <p className="pt-2 md:pt-1">
                  My wife and I also love to travel, and we try to go somewhere
                  new to us once a year.
                </p>
              </div>
              <div
                id="icon-box"
                className="h-auto flex flex-wrap flex-row content-center justify-between m-2 md:my-0 md:w-2/4 max-w-xl"
              >
                {personalIconInfo.map((element) => (
                  <div key={element.key} className="m-2 w-10 md:w-20">
                    <TechIcon src={element.src} invert={element.invert} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Links Section */}
          <div className="flex flex-row justify-center gap-4">
            <button className="text-[var(--foreground)] hover:bg-[var(--bg-button-on-hov)] flex items-center px-2 py-1 cursor-pointer border-2 border-[var(--border-color)] shadow-md rounded-xl">
              <a
                href="https://www.linkedin.com/in/isaacwwkelly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <LinkedInLogoIcon className="w-8 h-8" />
                LinkedIn
              </a>
            </button>
            <button className="text-[var(--foreground)] hover:bg-[var(--bg-button-on-hov)] flex items-center px-2 py-1 cursor-pointer border-2 border-[var(--border-color)] shadow-md rounded-xl">
              <a
                href="https://github.com/isaacwwkelly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <GitHubLogoIcon className="w-8 h-8" />
                GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
