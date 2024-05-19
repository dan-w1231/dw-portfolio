'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring, useMotionValue} from "framer-motion"
import { useRef, useState, useLayoutEffect, useCallback, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import CircleArrow from '@/images/resources/circleArrow.svg'
import discordImage from '@/images/resources/discord.svg'
import insightsImage from '@/images/resources/insights.png'
import breatheImage from '@/images/resources/breathe.png'
import fitcheckImage from '@/images/resources/fitcheck.png'
import fafmcImage from '@/images/resources/fafmc.png'
import { useScrollPercentage } from "react-scroll-percentage";

const myWork = [
  {
    title: 'Recovery',
    description:
      'Lorem description.',
    image: function BreatheImage() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[linear-gradient(#003842_33%,#001D22)]">
            <motion.div
            className="w-[370px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 100, duration: 1.5 }}
          >
            <Link href="/insights">
              <Image src={breatheImage} className="pointer-events-none" alt="" />
            </Link>
          </motion.div>
          <Image src={CircleArrow} alt="" className="absolute w-auto top-[8px] right-[8px]" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Insights',
    description:
      'Lorem description.',
    image: function InsightsImage() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[radial-gradient(#3C2E97_35%,#5945D6)]">
          <motion.div
            className="w-[370px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 100, duration: 1.5 }}
          >
            <Image src={insightsImage} className="pointer-events-none" alt="" />
          </motion.div>
          <Image src={CircleArrow} alt="" className="absolute w-auto top-[8px] right-[8px]" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Fitness Check',
    description:
      'Lorem description.',
    image: function FitnessCheckImage() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[radial-gradient(#95702A,#FEC351)]">
          <motion.div
            className="w-80"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 100, duration: 1.5 }}
          >
            <Image src={fitcheckImage} className="pointer-events-none" alt="" />
          </motion.div>
          <Image src={CircleArrow} alt="" className="absolute w-auto top-[8px] right-[8px]" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Dealer Platform',
    description:
      'Lorem description.',
    image: function BreatheImage() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[linear-gradient(#003842_33%,#001D22)]">
            <motion.div
            className="w-[370px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 100, duration: 1.5 }}
          >
            <Link href="/insights" className="pointer-events-none">
              <Image src={breatheImage} className="pointer-events-none" alt="" />
            </Link>
          </motion.div>
          <Image src={CircleArrow} alt="" className="absolute w-auto top-[8px] right-[8px]" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Finance Comparison Calculator',
    description:
      'Lorem description.',
    image: function FinanceComparison() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[radial-gradient(#95702A,#FEC351)]">
          <motion.div
            className="w-80"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 100, duration: 1.5 }}
          >
            <Image src={fitcheckImage} className="pointer-events-none" alt="" />
          </motion.div>
          <Image src={CircleArrow} alt="" className="absolute w-auto top-[8px] right-[8px]" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Dealer Platform',
    description:
      'Lorem description.',
    image: function DealerPlatform() {
      return (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-[radial-gradient(#3AC0A8,#45D6BC)]">
          <motion.div
            className="w-80"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 100, duration: 1.5 }}
          >
            <Image src={fafmcImage} className="pointer-events-none" alt="" />
          </motion.div>
          <Image src={CircleArrow} alt="" className="absolute w-auto top-[8px] right-[8px]" unoptimized />
        </div>
      )
    },
  },
]

export function MyWork() {

    // const scrollRef = useRef<HTMLDivElement | null>(null);
  // const ghostRef = useRef<HTMLDivElement | null>(null);
  // const [scrollRange, setScrollRange] = useState<number>(0);
  // const [viewportW, setViewportW] = useState<number>(0);

  // const scrollYProgress = useMotionValue(0); // Replace with useMotionValue

  // useLayoutEffect(() => {
  //   if (scrollRef.current) {
  //     setScrollRange(scrollRef.current.scrollWidth);
  //   }
  // }, [scrollRef]);

  // const onResize = useCallback((entries: ResizeObserverEntry[]) => {
  //   for (let entry of entries) {
  //     setViewportW(entry.contentRect.width);
  //   }
  // }, []);

  // useLayoutEffect(() => {
  //   const resizeObserver = new ResizeObserver((entries) => onResize(entries));
  //   if (ghostRef.current) {
  //     resizeObserver.observe(ghostRef.current);
  //   }
  //   return () => resizeObserver.disconnect();
  // }, [onResize]);

  // const [containerRef, percentage] = useScrollPercentage({
  //   /* Optional options */
  //   threshold: 0.1,
  // });

  // useEffect(() => {
  //   scrollYProgress.set(percentage); // Replace with scrollYProgress.set
  // }, [percentage]);

  // const transform = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   [0, -scrollRange + viewportW]
  // );

  // const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  // const spring = useSpring(transform, physics);

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], window.innerWidth <768 ? ["0%", "0%"] : ["0px", "-2800px"]);

  return (
    <section
      id="myWork"
      aria-labelledby="myWork-title"
      ref={targetRef}
      // className="w-full pt-2 xs:pt-4"
      className="relative mt-2 xs:my-4 md:h-[200vh] lg:h-[300vh] border border-red-400"
      
    >
      <Container size="lg" className="relative w-full md:m-0 md:sticky md:top-0 flex items-center overflow-hidden md:pb-20 md:pt-20 md:-mt-20 md:-mb-20">
        {/* {percentage} */}
        <motion.ol
          // ref={scrollRef}
          // style={{ x: spring }}
          style={{ x }}
          role="list"
          className="w-full ease-[cubic-bezier(0.16,0.84,0.44,1)] duration-[600ms] md:max-w-screen-2xl grid md:grid-flow-col md:grid-cols-[repeat(auto-fill,_minmax(496px,_1fr))] md:auto-cols-[minmax(496px,_1fr)] grid-cols-1 gap-y-2 xs:gap-y-4 md:gap-x-4 md:-my-16 md:-mx-4 md:py-16 md:px-4"
        >
          {myWork.map((work) => (
            <motion.div
              
              // dragConstraints={ref}
              className="md:snap-start md:scroll-mx-0"
              initial={{ opacity: 0, y: 12, rotate: 0 }}
              viewport= {{ once: true, amount: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, duration: 1.5, staggerChildren: 0.5 }}
            >
              <li
                key={work.title}
                className="items-center gap-8 rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg md:grid-cols-3"
              >
                <div className="relative h-[370px] md:h-[496px] sm:h-[496px] w-full md:w-[496px] overflow-hidden rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg sm:h-60">
                  <work.image />
                </div>
              </li>
            </motion.div>
          ))}
        </motion.ol>
      </Container>
      {/* <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" /> */}
    </section>
  )
}