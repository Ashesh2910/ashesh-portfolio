import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import bgStars from "../assets/bg-stars.png";
import mountainsBack from "../assets/mountains-back.png";
import mountainsFront from "../assets/mountains-front.png";
import planetMain from "../assets/planet-main.png";
import astronaut from "../assets/astronaut.png";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const planetY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const mountainsBackY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const astronautY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const mountainsFrontY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <div
      ref={ref}
      className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden flex items-center bg-transparent"
      id="hero"
    >
      {/* 1. Background Stars */}
      <motion.img
        src={bgStars}
        alt="stars"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60 pointer-events-none will-change-transform"
        style={{ y: backgroundY }}
      />

      {/* 2. Moon / Planet - Left Side Framing */}
      <motion.img
        src={planetMain}
        alt="planet"
        className="absolute z-10 object-contain pointer-events-none mix-blend-lighten opacity-90 will-change-transform
        w-[150px] top-[10%] left-[-8%] 
        md:w-[450px] md:top-[20%] md:left-[2%]"
        style={{ y: planetY }}
      />

      {/* 3. Mountains Back */}
      <motion.img
        src={mountainsBack}
        alt="mountains back"
        className="absolute bottom-0 w-full object-cover z-20 pointer-events-none will-change-transform"
        style={{ y: mountainsBackY }}
      />

      {/* 4. Floating Astronaut - Right Side Framing (Aligned with Moon) */}
      {/* 4. Floating Astronaut - Right Side Framing (Aligned with Moon) */}
      <motion.div
        style={{ y: astronautY }}
        className="absolute z-30 pointer-events-none will-change-transform
        w-[150px] top-[10%] right-[-8%] 
        md:w-[450px] md:top-[20%] md:right-[2%]"
      >
        <motion.img
          src={astronaut}
          alt="astronaut"
          animate={{
            y: [0, -24, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="w-full h-full object-contain opacity-90 md:opacity-100"
        />
      </motion.div>

      {/* 5. Mountains Front */}
      <motion.img
        src={mountainsFront}
        alt="mountains front"
        className="absolute bottom-0 w-full object-cover z-40 pointer-events-none will-change-transform"
        style={{ y: mountainsFrontY }}
      />

      {/* 6. Hero Text Overlay - CENTERED NO CARD */}
      <motion.div
        style={{ y: textY }}
        className="absolute z-50 flex flex-col justify-center w-full px-4"
      >
        <div className="absolute 
            left-1/2 -translate-x-1/2 top-[30%] w-full max-w-[360px]
            md:top-[25%] md:max-w-[800px]"
        >
          <div className="
                p-0 mx-auto
                text-center flex flex-col items-center gap-2"
          >
            {/* Line 1: Hi, I'm */}
            <h1 className="text-white font-bold tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] leading-none
                    text-[40px]
                    md:text-[65px]"
            >
              Hi, I’m
            </h1>

            {/* Line 2: Ashesh */}
            <h2 className="font-extrabold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]
                    text-[55px]
                    md:text-[90px]"
            >
              Ashesh
            </h2>

            {/* Line 3: Samrajya */}
            <h2 className="font-extrabold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]
                    text-[55px]
                    md:text-[90px]"
            >
              Samrajya
            </h2>

            <p className="text-gray-100 font-medium leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                    text-[16px] mt-6
                    md:text-[24px] md:mt-8 px-4"
            >
              Data Analyst focused on risk, dashboards, and decision support.
            </p>

            {/* Buttons */}
            <div className="flex gap-6 mt-10 justify-center">
              <a
                href="#projects"
                className="px-8 py-3 bg-white text-black rounded-full font-bold text-sm md:text-lg hover:scale-105 transition-transform shadow-[0_4px_14px_0_rgba(255,255,255,0.39)]"
              >
                Work
              </a>

              <a
                href="#contact"
                className="px-8 py-3 bg-black/30 border border-white/20 text-white rounded-full font-medium text-sm md:text-lg hover:bg-white/10 backdrop-blur-md transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-[150px] z-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;
