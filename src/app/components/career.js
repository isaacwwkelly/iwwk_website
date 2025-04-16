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
          className="hover:bg-[var(--bg-button-on-hov)] shadow-lg text-[var(--foreground)] px-2 py-0.5 cursor-pointer border-2 border-[var(--border-color)] rounded-lg"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/15D_9ovUF-rH4iZxEX4TEg5yq_BO-Me8u/view?usp=sharing",
              "_blank"
            )
          }
        >
          Link to Full Resume
        </button>

        <CareerCard
          techicon={<TechIcon src="dell" />}
          company={"Dell Technologies"}
          title={"Software Engineer II"}
          date={"January 2023 – February 2025"}
          bulletpoints={[
            "Enhanced Dell's largest internal sales application in the quote space by improving user efficiency, back-end reliability, resolving user interface issues, and supporting launches",
            "Contributed to Dell's increasing revenue (8% increase from FY24 to FY25) by supporting the sales department’s business requirements & improving the sales application UI/UX & functionality",
            "Migrated from legacy systems to restructure into a micro-service and micro-frontend system design",
            "Primarly used C#, Javascript, Angular, and ASP.NET",
          ]}
        />
        <CareerCard
          techicon={<TechIcon src="dell" />}
          company={"Dell Technologies"}
          title={"Software Engineer I"}
          date={"August 2021 – January 2023"}
          bulletpoints={[
            "Designed a new-hire-to-job matching algorithm to assist the onboarding of large recent-grad new-hire cohorts, cutting out manual processes and reducing the onboarding timeline by 50%",
            "Owned, maintained, and enhanced an internal evaluation portal, built with React Typescript and Flask (Python web framework), for trainings that 10,000 employees used annually",
            "Created an automated matching algorithm and email solution from the ground up, saving team members 600 hours of repeatable work each quarter",
          ]}
        />
        <CareerCard
          techicon={<TechIcon src="dell" />}
          company={"Dell Technologies"}
          title={"Software Engineer Intern"}
          date={"June 2020 – August 2020"}
          bulletpoints={[
            "Utilized language models to process 100,000+ weekly search queries (support.dell.com) for outliers & trends",
            "Discovered improvements to the search algorithm to produce useful results for said outlier search queries",
            "Increased customer satisfaction for customers that used unconventional search queries by 9%",
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
