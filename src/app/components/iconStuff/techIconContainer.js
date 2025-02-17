"use client";
import { useEffect, useState } from "react";
import TechIcon from "./techIcon";

export default function TechIconContainer({ listToDisplay }) {
  const [numRows, setNewRows] = useState(3);

  useEffect(() => {
    const updateRows = () => {
      const screenWidth = window.innerWidth;
      let rows = 3;
      if (screenWidth >= 992) {
        rows = 3;
      } else if (screenWidth >= 768) {
        rows = 4;
      } else if (screenWidth >= 640) {
        rows = 5;
      }
      setNewRows(rows);
    };

    updateRows();
    window.addEventListener("resize", updateRows);

    return () => {
      window.removeEventListener("resize", updateRows);
    };
  }, []);

  const itemsPerRow = Math.ceil(listToDisplay.length / numRows);

  return (
    <div className="flex flex-col gap-1 sm:gap-2">
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className="flex w-full justify-center gap-4 sm:gap-2"
        >
          {listToDisplay
            .slice(rowIndex * itemsPerRow, rowIndex * itemsPerRow + itemsPerRow)
            .map((element) => (
              <div key={element.key} className="flex justify-center">
                <TechIcon
                  src={element.src}
                  invertToWhite={element.invertToWhite}
                />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

// export default function TechIconContainer({ id, listToDisplay }) {
//     const [rows, setRows] = useState(0);

//     useEffect(() => {
//       const updateRows = () => {
//         const screenWidth = window.innerWidth;
//         let newRows = 3;
//         if (screenWidth >= 1200) {
//           newRows = 3;
//         } else if (screenWidth >= 992) {
//           newRows = 2;
//         } else if (screenWidth >= 768) {
//           newRows = 1;
//         } else if (screenWidth >= 640) {
//           newRows = 5;
//         } else {
//           newRows = 3;
//         }
//         setRows(newRows);
//       };

//       updateRows();
//       window.addEventListener("resize", updateRows);

//       return () => {
//         window.removeEventListener("resize", updateRows);
//       };
//     }, []);

//     return (
//       <div id={id} className="flex flex-wrap justify-evenly ">
//         {listToDisplay.map((element) => (
//           <div key={element.key} className="flex-grow">
//             <TechIcon src={element.src} invertToWhite={element.invertToWhite} />
//           </div>
//         ))}
//       </div>
//     );
//   }
