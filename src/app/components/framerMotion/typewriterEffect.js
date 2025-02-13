"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const LETTER_DELAY = 0.075;
const FADE_DELAY = 3;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 3500;

const TypeWriter = ({ lines }) => {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLineIndex((pv) => (pv + 1) % lines.length);
    }, SWAP_DELAY_IN_MS);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="py-2 sm:py-4 mb-2.5 text-sm font-light">
      <h2>
        {"> "}
        {lines[lineIndex].split("").map((letter, index) => {
          return (
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                delay: FADE_DELAY,
                duration: MAIN_FADE_DURATION,
                ease: "easeInOut",
              }}
              key={`${lineIndex}-${index}`}
              className="relative"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * LETTER_DELAY, duration: 0 }}
              >
                {letter}
              </motion.span>
            </motion.span>
          );
        })}
      </h2>
    </div>
  );
};

const TypeWriterEffect = ({ lines }) => {
  return (
    <div className="w-full max-w-xl space-y-6">
      <div>
        <TypeWriter lines={lines}></TypeWriter>
      </div>
    </div>
  );
};

export default TypeWriterEffect;
