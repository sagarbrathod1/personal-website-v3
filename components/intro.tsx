"use client";

import headshotImg from "@/public/headshot.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import BreathingText from "./breathing-text";
import LetterSwapForward from "./letter-swap-forward";
import Typewriter from "./typewriter";
import { useState } from "react";

export default function Intro() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={headshotImg}
              alt="Sagar's Portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="white-text mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <BreathingText
          label="Hi, I'm Sagar!"
          staggerDuration={0.1}
          fromFontVariationSettings="'wght' 100, 'slnt' 0"
          toFontVariationSettings="'wght' 800, 'slnt' -10"
        />
        <LetterSwapForward
          label="Current: Software Engineer @ Atomic Object"
          reverse={true}
        />
        <span>{"Previous: "}</span>
        <Typewriter
          text={["Senior Manager @ IT Staffing", "Research Scientist (SCAs and HIV-1)", "Policy Debate Coach"]}
          speed={70}
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"_"}
        />
        <br />
        Michigan State Grad.{" "}
        <span 
          className={`${isHovered ? 'text-white' : 'green-text'} cursor-pointer transition-colors duration-300`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Go {isHovered ? "White!" : "Green!"}
        </span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="https://drive.google.com/file/d/1-gHiMc8c_GaUDk-OGD9MY1I9yoGLw-VA/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-green-500 active:scale-105 transition borderBlack"
        >
          Resume
        </a>
        <a
          className="bg-slate-300 p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition borderBlack"
          href="https://www.linkedin.com/in/sagarbrathod1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-slate-300 p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition borderBlack text-[1.35rem] hover:text-gray-950 "
          href="https://github.com/sagarbrathod1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
