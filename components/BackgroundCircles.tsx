import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "60%", "20%"],
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute border-2 border-[#E6CBA8] rounded-full h-[400px] w-[400px] mt-52 animate-ping" />
      <div className="absolute border-[6px] border-[#E6CBA8] rounded-full h-60 w-60 mt-56 animate-pulse opacity-20" />
    </motion.div>
  );
};

export default BackgroundCircles;
