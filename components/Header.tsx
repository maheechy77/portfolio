import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Socials } from "../typings";

type Props = {
  socials: Socials[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between mx-auto max-w-7xl z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            className="cursor-pointer"
            fgColor="grey"
            bgColor="transparent"
            url={social.url}
          />
        ))}
      </motion.div>

      <Link href={"#contact"}>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-grey-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="grey"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-grey-400">
            Get in Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
