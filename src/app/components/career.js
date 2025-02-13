import CareerCard from "./careerCard";

export default function Career() {
  return (
    <div className="p-2 sm:p-4 h-auto">
      <h1>My Career</h1>
      <CareerCard
        company={"Dell Technologies"}
        titleAndDate={"Software Engineer II | January 2023 – February 2025"}
        bulletpoints={[
          "Maintained, updated, and improved Dell's largest internal sales application",
          "Primarly used C#, Angular, and .NET in this team",
          "Worked on stories and defects in an agile team",
        ]}
      />
      <CareerCard
        company={"Dell Technologies"}
        titleAndDate={"Software Engineer I | August 2021 – January 2023"}
        bulletpoints={[
          "Created a crucial automation tool for the onboarding process of new hires",
          "Maintained a small internal website for testing participants after certain training modules",
          "Primarily used Python, Pandas, Flask, ReactJS, and SQL in this team",
        ]}
      />
      <CareerCard
        company={"Dell Technologies"}
        titleAndDate={"Software Engineer Intern | June 2020 – August 2020"}
        bulletpoints={[
          "Assited the customer support search team in analyzing the 100,000+ weekly search queries for outliers and trends",
          "Leveraged my analysis to identify room for improvement in the search algorithm",
          "Primarily used Python & Pandas",
        ]}
      />
      <CareerCard
        company={"UTSA"}
        titleAndDate={
          "Supplemental Instruction Leader | January 2019 – Dec 2021"
        }
        bulletpoints={[
          "Conducted study sessions and office hours for students struggling with the Intro to Astronomy class",
          "Guided diverse groups of students & taught effective study skills by identifying individual study traits",
        ]}
      />
    </div>
  );
}
