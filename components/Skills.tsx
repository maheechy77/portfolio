import React from "react";
import { motion } from "framer-motion";
import SkillComponent from "./Skill";
import { Skill } from "../typings";

type Props = {
  skills: Skill[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div className="h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 tracking-[20px] uppercase text-grey-500 text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <SkillComponent directionLeft={true} key={skill._id} skill={skill} />
        ))}

        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <SkillComponent key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
