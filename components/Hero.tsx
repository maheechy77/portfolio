import Link from "next/link";
import React, { useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I am ${pageInfo.name}`,
      "guy_how_loves_coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-48 w-48 mx-auto object-cover"
        src={urlFor(pageInfo?.profileImage).url()}
        alt={urlFor(pageInfo?.profileImage).url()}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor />
        </h1>
        <div className="pt-5">
          <Link href={"#about"}>
            <button className="heroButtonClass">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButtonClass">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButtonClass">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButtonClass">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
