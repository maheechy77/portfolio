import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg justify-center items-center space-x-2 space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 mt-28 md:mt-0 pr-6">
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
        className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={urlFor(experience.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((tech) => (
            <img
              key={tech._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(tech.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started at {experience.dateStarted} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : `Ended at ${experience.dateEnded}`}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab08]">
          {experience.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
