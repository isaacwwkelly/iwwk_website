"use client";
import { motion } from "framer-motion";

export default function FadeInEffect({ children }) {
  const fadeUpVariant = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0, transition: { duration: 2 } },
  };
  return (
    <motion.div variants={fadeUpVariant} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
}
