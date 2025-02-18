import TechIcon from "./iconStuff/techIcon";

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
    <div className="p-4 w-full max-w-3xl bg-white rounded-xl border border-[var(--border-color)] shadow-lg">
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
