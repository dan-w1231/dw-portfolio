'use client'
import { motion, useTransform, useScroll } from 'framer-motion';
import React, { useRef } from "react";
import { ContactBox } from '@/components/ContactBox';
import Zoomy from '@/components/HOC/Zoomy';
import Image from 'next/image';
import { GalleryHero } from '@/components/GalleryHero';
import { useMediaQuery } from 'react-responsive';
import { Gallery } from '@/components/Gallery';

// Gallery Images
import fitcheckStart from '@/images/resources/fitCheckStart.png';


// Article Images

const fitcheck6Fs = [
  {
    // IMAGES TOO BIG, OPTIMIZE
    image: function IntroScreen() {
      return (
        <motion.div layout className="relative w-[370px] md:w-[496px] h-[370px] md:h-[496px] flex items-center justify-center bg-[#253337] dark:bg-ice-900/5 transition-bg duration-900 rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2 }}
          >
            <Zoomy>
              <Image src={fitcheckStart} className="w-full max-w-[496px]" alt="Introduction screen for fitness check" />
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function Warmup() {
      return (
        <motion.div layout className="relative w-[370px] md:w-[496px] h-[370px] md:h-[496px] flex items-center justify-center bg-[#253337] dark:bg-ice-900/5 transition-bg duration-900 rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2 }}
          >
            <Zoomy>
              <Image src={fitcheckStart} className="w-full m-w-[496px] p-[8%]" alt="Warmup screen during fitness check" />
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function MaxIntensity() {
      return (
        <motion.div layout className="relative w-[370px] md:w-[496px] h-[370px] md:h-[496px] flex items-center justify-center bg-[#253337] dark:bg-ice-900/5 transition-bg duration-900 rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2 }}
          >
            <Zoomy>
              <Image src={fitcheckStart} className="w-full max-w-[44rem] p-[6%]" alt="Max intensity part of the fitness check" />
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function Cooldown() {
      return (
        <motion.div layout className="relative w-[370px] md:w-[496px] h-[370px] md:h-[496px] flex items-center justify-center bg-[#253337] dark:bg-ice-900/5 transition-bg duration-900 rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2 }}
          >
            <Zoomy>
              <Image src={fitcheckStart} className="w-full max-w-[496px] p-[8%]" alt="Reducing pace with a cool down" />
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function ResultScreen() {
      return (
        <motion.div layout className="relative w-[370px] md:w-[496px] h-[370px] md:h-[496px] flex items-center justify-center bg-[#253337] dark:bg-ice-900/5 transition-bg duration-900 rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2 }}
          >
            <Zoomy>
              <Image src={fitcheckStart} className="w-full max-w-[512px]" alt="Result screen" />
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
]

export default function JobDemands() {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const initialWindowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const y = useTransform(scrollYProgress, [0, 1], initialWindowWidth < 768 ? ["0%", "0%"] : ["0px", "1800px"]);

  return (
    <>
      <motion.div
        id="main"
        key="jobdemands"
        className="relative w-screen mx-auto mt-2 xs:mt-4"
        ref={targetRef}
      >
        <div className="relative mx-auto mt-2 xs:mt-4 xl:mt-4" key={4}>
          <motion.div
            key="contentHero"
          >
            <GalleryHero />
          </motion.div>
          <motion.div
            key="contentGallery"
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true, amount: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, delay: 1.4, duration: 1.5, staggerChildren: 0.5 }}
            className="w-full max-w-screen-2xl mx-auto"
          >
            <Gallery />
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}