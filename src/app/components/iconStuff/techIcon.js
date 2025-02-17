import Image from "next/image";
import reactsvg from "../../../../public/images/react.svg";
import pythonsvg from "../../../../public/images/python.svg";
import javascriptsvg from "../../../../public/images/javascript.svg";
import nextsvg from "../../../../public/images/nextjs.svg";
import csharpsvg from "../../../../public/images/c-sharp.svg";
import netsvg from "../../../../public/images/NET.svg";
import angularsvg from "../../../../public/images/angular.svg";
import htmlsvg from "../../../../public/images/html.svg";
import sasssvg from "../../../../public/images/sass.svg";
import gitlabsvg from "../../../../public/images/gitlab.svg";
import jirasvg from "../../../../public/images/jira.svg";
import flasksvg from "../../../../public/images/flask.svg";
import pandassvg from "../../../../public/images/pandas.svg";
import bootstrapsvg from "../../../../public/images/bootstrap.svg";
import csssvg from "../../../../public/images/css.svg";
import climber from "../../../../public/images/climber.svg";
import hiker from "../../../../public/images/hiker.svg";
import book from "../../../../public/images/book.svg";
import controller from "../../../../public/images/controller.svg";
import movie from "../../../../public/images/movie.svg";
import dell from "../../../../public/images/dell-logo.svg";
import utsa from "../../../../public/images/UTSA.svg";

export default function TechIcon({ src, invertToWhite }) {
  const srcDict = {
    react: reactsvg,
    javascript: javascriptsvg,
    nextjs: nextsvg,
    csharp: csharpsvg,
    dotnet: netsvg,
    angular: angularsvg,
    html5: htmlsvg,
    sass: sasssvg,
    gitlab: gitlabsvg,
    jira: jirasvg,
    python: pythonsvg,
    flask: flasksvg,
    pandas: pandassvg,
    bootstrap: bootstrapsvg,
    css: csssvg,
    climber: climber,
    hiker: hiker,
    book: book,
    controller: controller,
    movie: movie,
    dell: dell,
    utsa: utsa,
  };

  const srcPath = srcDict[src];
  return (
    <Image
      priority
      src={srcPath}
      alt={`${srcPath} icon`}
      className={`w-12 h-12 sm:w-16 sm:h-16  xl:w-20 xl:h-20 ${invertToWhite ? "invert" : ""}`}
      as="image"
    />
  );
}
