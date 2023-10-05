"use client";

import React from "react";
import Image from "next/image";
import headshotImg from "@/public/headshot.png";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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
        className="white-text mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">↣ Hi, I'm Sagar! </span>
        <br />
        ↣ Current: Software Engineer @ Atomic Object. <br />
        ↣ Previous: Senior Manager (Business Ops @ IT Staffing) and Research
        Scientist (SCAs & HIV-1). <br />↣ Michigan State Grad.{" "}
        <span className="green-text">Go Green!</span>
      </motion.h1>
    </section>
  );
}
