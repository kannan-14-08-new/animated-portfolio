"use client";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroContent() {
  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-40 md:mt-40 w-full z-[20] gap-12"
    >
      <div className="flex flex-col gap-5 max-w-full md:max-w-[600px] text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-3 border border-[#7842f88b] opacity-90 inline-flex items-center rounded"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h1 className="Welcome-text text-xs md:text-sm font-medium">
            Frontend Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-full leading-tight md:leading-[80px]"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project Experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-4 max-w-full md:max-w-[600px]"
        >
          &apos;A Frontend Developer with experience in Website, Mobile, and
          Software development. Check out my projects and skills.&apos;
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-6 bg-gradient-to-r from-purple-600 to-cyan-600 text-white cursor-pointer rounded-lg max-w-[200px] text-center hover:scale-105 transition-transform duration-300"
          href="#about"
        >
          Learn More
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full max-w-[650px] flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          width={650}
          height={650}
          className="w-full h-auto object-contain"
          priority={true}
        />
      </motion.div>
    </motion.div>
  );
}
