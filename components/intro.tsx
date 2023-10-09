"use client";

import headshotImg from "@/public/headshot.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
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
        <span>↣ Hi, I'm Sagar! 👋🏾</span>
        <br />↣ <span className="underline">Current</span>: Software Engineer @
        Atomic Object. <br />↣ <span className="underline">Previous</span>:
        Senior Manager{" "}
        <span className="italic">(Business Ops @ IT Staffing)</span> & Research
        Scientist <span className="italic">(SCAs & HIV-1)</span>.<br />↣
        Michigan State Grad. <span className="green-text">Go Green!</span>
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
          href="https://github.com/sagarbrathod1/resume/blob/main/Resume%20-%20Sagar%20Rathod.pdf/"
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
