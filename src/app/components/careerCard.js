import { motion } from "framer-motion";

export default function CareerCard({
  techicon,
  company,
  title,
  date,
  bulletpoints,
}) {
  const bulletPointsWithIndex = bulletpoints.map((point, index) => {
    if (typeof point === "object" && point !== null) {
      return (
        <li key={index}>
          {point.text}
          {point.subpoints && (
            <ul className="list-disc list-inside pl-6 pt-1 space-y-0.5">
              {point.subpoints.map((sub, subIndex) => (
                <li key={subIndex}>{sub}</li>
              ))}
            </ul>
          )}
        </li>
      );
    }
    return <li key={index}>{point}</li>;
  });

  return (
    <motion.div
      whileHover={{ scale: 1.003 }}
      className="p-4 w-full max-w-3xl bg-[var(--card-bg)] backdrop-blur-xl rounded-2xl border-2 border-[var(--border-color)] shadow-lg"
    >
      <div>
        <div className="flex gap-2">
          <div className="content-center w-14">{techicon}</div>
          <div>
            <div className="text-xl font-medium text-[var(--foreground)]">{company}</div>
            <div className="flex flex-col sm:flex-row text-slate-400">
              <h3>{title}</h3>
              <p className="hidden sm:inline">&nbsp;|&nbsp;</p>
              <h3>{date}</h3>
            </div>
          </div>
        </div>
        <div className="pt-2 text-[var(--foreground)]">
          <ul className="list-disc list-inside">{bulletPointsWithIndex}</ul>
        </div>
      </div>
    </motion.div>
  );
}
