import TechIcon from "./techIcon";

export default function CareerCard({
  techicon,
  company,
  title,
  date,
  bulletpoints,
}) {
  const bulletPointsWithIndex = bulletpoints.map((point, index) => (
    <li key={index}>{point}</li>
  ));

  return (
    <div className="p-4 m-4 max-w-3xl bg-white rounded-xl flex items-center">
      <div>
        <div className="flex gap-2">
          <div className="content-center w-14">{techicon}</div>
          <div>
            <div className="text-xl font-medium text-black">{company}</div>
            <div className="flex flex-col sm:flex-row text-slate-500">
              <h3>{title}</h3>
              <p className="hidden sm:inline">&nbsp;|&nbsp;</p>
              <h3>{date}</h3>
            </div>
          </div>
        </div>
        <div className="pt-2 text-black">
          <ul className="list-disc list-inside">{bulletPointsWithIndex}</ul>
        </div>
      </div>
    </div>
  );
}
