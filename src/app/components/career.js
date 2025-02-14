import CareerCard from "./careerCard";
import TechIcon from "./techIcon";

export default function Career() {
  return (
    <div id="career" className="p-2 sm:p-4 h-auto">
      <h1>My Career</h1>
      <CareerCard
        techicon={<TechIcon src="dell" />}
        company={"Dell Technologies"}
        title={"Software Engineer II"}
        date={"January 2023 – February 2025"}
        bulletpoints={[
          "Maintained, updated, and improved Dell's largest internal sales application",
          "Primarly used C#, Angular, and .NET",
          "Worked on stories and defects in an Agile framework",
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
  );
}
