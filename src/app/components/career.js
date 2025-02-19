import CareerCard from "./careerCard";
import TechIcon from "./iconStuff/techIcon";

export default function Career() {
  return (
    <div id="career-container" className="bg-[var(--background)]">
      <div
        id="career"
        className="flex flex-col mx-auto gap-4 items-center p-4 pt-16 sm:pt-32"
      >
        <h1 className="text-center">My Career</h1>
        <button
          className="bg-[var(--header-bg)] hover:bg-[var(--bg-button-on-hov)] shadow-lg text-[var(--foreground)] px-2 py-0.5 cursor-pointer border border-[var(--border-color)] rounded-md"
          onClick={() => window.open("/path/to/resume.pdf", "_blank")}
        >
          Link to Full Resume
        </button>

        <CareerCard
          techicon={<TechIcon src="dell" />}
          company={"Dell Technologies"}
          title={"Software Engineer II"}
          date={"January 2023 – February 2025"}
          bulletpoints={[
            "Maintained, updated, and improved Dell's largest internal sales application",
            "Worked on stories and defects in an Agile framework",
            "Primarly used C#, Angular, and .NET",
          ]}
        />
        <CareerCard
          techicon={<TechIcon src="dell" />}
          company={"Dell Technologies"}
          title={"Software Engineer I"}
          date={"August 2021 – January 2023"}
          bulletpoints={[
            "Created a crucial automation tool for the onboarding process of new hires",
            "Maintained a small internal website for testing participants in certification programs",
            "Primarily used Python, Pandas, Flask, ReactJS, and SQL",
          ]}
        />
        <CareerCard
          techicon={<TechIcon src="dell" />}
          company={"Dell Technologies"}
          title={"Software Engineer Intern"}
          date={"June 2020 – August 2020"}
          bulletpoints={[
            "Processed the 100,000+ weekly search queries on support.dell.com for outliers and trends",
            "Leveraged my analysis to identify room for improvement in the search algorithm",
            "Primarily used Python & Pandas",
          ]}
        />
        <CareerCard
          techicon={<TechIcon src="utsa" />}
          company={"UTSA"}
          title={"Supplemental Instruction Leader"}
          date={"January 2019 – Dec 2021"}
          bulletpoints={[
            "Conducted study sessions and office hours for students in the Intro to Astronomy class",
            "Guided diverse groups & taught effective study skills by identifying individual study traits",
          ]}
        />
      </div>
    </div>
  );
}
