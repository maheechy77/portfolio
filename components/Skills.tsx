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
      
      <div className="w-[500px] absolute top-[40%] md:top-[0%] -left-[60%] md:-left-[10%] border-[100px] rounded-full border-[#2146C7]/10 h-[500px]" />
      <div className="w-[500px] absolute top-0 md:top-[55%] left-[55%] md:left-[85%] border-[100px] rounded-full border-[#2146C7]/10 h-[500px]" />
      
      <h3 className="absolute top-20 md:top-24 tracking-[20px] uppercase text-grey-500 text-xl md:text-2xl">
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
