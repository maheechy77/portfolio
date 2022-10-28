import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative cursor-pointer flex">
      <motion.img
        initial={{
          opacity: 0,
          x: directionLeft ? -200 : 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        src={urlFor(skill.image).url()}
        alt="logo"
        className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out p-1 md-p-4"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-28 md:h-28 rounded-full z-10">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm md:text-lg text-black font-medium  md:font-bold opacity-100">
            {skill.progress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
