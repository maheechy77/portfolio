import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg justify-start items-center space-x-1 md:space-x-2 space-y-7 flex-shrink-0 w-fit md:w-[600px] xl:w-[900px] snap-start md:snap-center p-10 bg-[#292929] hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 mt-28 md:mt-0 pr-6">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="w-12 h-12 md:w-32 md:h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={urlFor(experience.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-lg md:text-4xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-semibold md:font-bold text-base md:text-2xl mt-1">
          {experience.company}
        </p>
        <div className="flex space-x-1 md:space-x-2 my-2">
          {experience.technologies.map((tech) => (
            <img
              key={tech._id}
              className="h-6 w-6 md:h-10 md:w-10 rounded-full"
              src={urlFor(tech.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300 text-xs md:text-lg">
          Started at {experience.dateStarted} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : `Ended at ${experience.dateEnded}`}
        </p>
        <ul className="marker:text-white list-disc pl-5 space-y-4 text-xs text-justify md:text-lg max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab08]">
          {experience.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
