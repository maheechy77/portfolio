import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col md:flex-row text-left  max-w-full px-10 mx-auto justify-evenly items-center"
    >
      <h3 className="absolute top-24 tracking-[20px] uppercase text-grey-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 p-10 snap-x snap-mandatory overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
