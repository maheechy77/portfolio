import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
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
      className="h-screen relative flex overflow-hidden flex-col md:flex-row text-left max-w-full z-0 mx-auto justify-evenly items-center"
    >
      <h3 className="absolute top-24 tracking-[20px] uppercase text-grey-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#f7ab0a]">
        {projects.map((project) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-40 h-screen"
          >
            <motion.img
              initial={{
                opacity: 0,
                y: -300,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              viewport={{
                once: true,
              }}
              src={urlFor(project.image).url()}
              className="h-52 w-52 bg-cover bg-center"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/90">
                  {project.title}
                </span>{" "}
              </h4>
              <div className="flex justify-center items-center space-x-4">
                {project.technologies.map((tech) => (
                  <img
                    className="rounded-full border border-gray-500 object-cover w-12 h-12 filter group-hover:grayscale transition duration-300 ease-in-out p-1"
                    key={tech._id}
                    src={urlFor(tech.image).url()}
                    alt=""
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {project.summery}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
