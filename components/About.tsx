import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
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
      className="h-screen relative flex flex-col text-center md:text-left max-w-7xl px-10 justify-center gap-6 mx-auto items-center"
    >
      <h3 className="absolute top-24 tracking-[20px] uppercase text-grey-500 text-2xl">
        About
      </h3>
      <h4 className="text-4xl font-semibold">
        Here is a{" "}
        <span className="underline decoration-[#2146C7]/50">Little</span>{" "}
        Background
      </h4>
      <p className="text-base max-w-2xl text-justify">
        {pageInfo?.backgroundInformation}
      </p>
    </motion.div>
  );
};

export default About;
