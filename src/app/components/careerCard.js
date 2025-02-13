export default function CareerCard({ company, titleAndDate, bulletpoints }) {
  const bulletPointsWithIndex = bulletpoints.map((point, index) => (
    <li key={index}>{point}</li>
  ));

  return (
    <div className="p-6 m-8 max-w-2xl bg-white rounded-xl flex items-center gap-x-4">
      <div className="shrink-0">
        {/* <img className="size-12" src="/img/logo.svg" alt="ChitChat Logo" /> */}
      </div>
      <div>
        <div className="text-xl font-medium text-black">{company}</div>
        <h3 className="text-slate-500">{titleAndDate}</h3>
        <div className="pt-2 text-black">
          <ul className="list-disc list-inside">{bulletPointsWithIndex}</ul>
        </div>
      </div>
    </div>
  );
}
