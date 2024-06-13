'use client'
import { BulletTag } from '@/components/BulletTag';
import { motion, useTransform, useScroll } from 'framer-motion';
import { AnimateHeightChange } from '@/components/AnimateHeightChange';
import React, { useRef } from "react";
import { ContactBox } from '@/components/ContactBox';
import Zoomy from '@/components/HOC/Zoomy';
import Link from 'next/link';
import Image from 'next/image';
import MediaQuery, { useMediaQuery } from 'react-responsive';

// Gallery Images
import fitcheckStart from '@/images/resources/fitCheckStart.png';
import fitcheck1E from '@/images/resources/fitCheck1E.png';
import fitcheck4F from '@/images/resources/fitCheck4F.png';
import fitcheck6F from '@/images/resources/fitcheckp6.png';
import fitcheckSummary from '@/images/resources/fitCheckSummary.png';


// Article Images

import brief from '@/images/resources/fitcheck-brief.png';
import observeTest from '@/images/resources/fitcheck-Observe.png';
import PrototypeA from '@/images/resources/fitcheck1stPrototype.png';
import PrototypeB from '@/images/resources/fitcheck2ndPrototype.png';
import DesignBoard from '@/images/resources/fitcheck-designBoard.png';
import fitcheckUserTest from '@/images/resources/fitcheckuserTesting.png';

const fitcheck6Fs = [
  {
    // IMAGES TOO BIG, OPTIMIZE
    image: function IntroScreen() {
      return (
        <motion.div layout className="relative w-2/3 md:w-full md:min-h-[498px] inset-0 flex items-center justify-center bg-[#253337] dark:bg-ice-900/5 transition-bg duration-900 rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
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
        <motion.div layout className="relative w-2/3 md:w-full md:min-h-[498px] inset-0 flex items-center justify-center bg-[#253337] dark:bg-ice-900/5 transition-bg duration-900 rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2 }}
          >
            <Zoomy>
              <Image src={fitcheck1E} className="w-full m-w-[496px] p-[8%]" alt="Warmup screen during fitness check" />
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function MaxIntensity() {
      return (
        <motion.div layout className="relative w-2/3 md:w-full md:min-h-[498px] inset-0 flex items-center justify-center bg-[#253337] dark:bg-ice-900/5 transition-bg duration-900 rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2 }}
          >
            <Zoomy>
              <Image src={fitcheck4F} className="w-full max-w-[44rem] p-[6%]" alt="Max intensity part of the fitness check" />
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function Cooldown() {
      return (
        <motion.div layout className="relative w-2/3 md:w-full md:min-h-[498px] inset-0 flex items-center justify-center bg-[#253337] dark:bg-ice-900/5 transition-bg duration-900 rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2 }}
          >
            <Zoomy>
              <Image src={fitcheck6F} className="w-full max-w-[496px] p-[8%]" alt="Reducing pace with a cool down" />
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function ResultScreen() {
      return (
        <motion.div layout className="relative w-2/3 md:w-full md:min-h-[498px] inset-0 flex items-center justify-center bg-[#253337] dark:bg-ice-900/5 transition-bg duration-900 rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2 }}
          >
            <Zoomy>
              <Image src={fitcheckSummary} className="w-full max-w-[512px]" alt="Result screen" />
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
]

export default function FitnessCheck() {

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
        key="newVehicle"
        className="relative w-screen mx-auto mt-2 xs:mt-4"
        ref={targetRef}
      >
        <div className="relative mx-auto z-[1]">
          <div className="w-full max-w-screen-2xl flex flex-col gap-0 md:gap-4 no-wrap flex-center mx-auto md:flex-row 2xl:gap-4 z-97">

            {/* Left col */}
            <div className="w-full max-w-[800px] md:max-w-[60%] order-2 md:order-1">
              <header className="relative w-full px-2 xs:px-4 md:pr-0 md:pl-4 rounded-4xl mx-auto">
                <div
                  className="relative w-full pt-11 md:pt-10 pb-6 md:pb-10 px-4 sm:px-6 md:px-10 bg-cardGrad dark:bg-cardGradDark backdrop-blur-[140px] shadow-xl dark:shadow-xlD rounded-4xl md:rounded-5xl xl:rounded-6xl overflow-hidden">
                  <div className="relative max-w-full flex items-center md:mt-4">
                    <div className="w-full">
                      <motion.div
                        key="contentWorkImage"
                        className="relative z-[99]"
                      >
                        <h1 className="font-display text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-[#e49744]">
                          Prevayl
                        </h1>
                        <h2 className="font-display text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-midnight-900 dark:text-ice-900 ">
                          FitnessCheck™
                        </h2>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          A guided workout to give a picture of your current health and fitness, and an activity you can use to measure cardio fitness progress.
                        </p>
                        <div className="flex flow-row flex-wrap w-full gap-2 mt-4">
                          <BulletTag>Live user testing</BulletTag><BulletTag>To live product</BulletTag>
                        </div>
                        <h3 className="font-display text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 dark:text-ice-900 mt-10">
                          Goals
                        </h3>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          Using a high accuracy fitness tracker paired with a phone to develop a maximal fitness test, which can be picked up and followed without outside instruction.
                        </p>
                        <h3 className="font-display text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 dark:text-ice-900  mt-10">
                          Scope
                        </h3>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          Create a new app feature for a treadmill fitness test, displaying instructions and current heart rate metrics during the test, and communicate the user's fitness levels in a summary after the workout.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          The result of this test can then be used to determine the user's heart rate training zones and maximum heart rate, instead of estimates, enabling more accurate fitness insights.
                        </p>
                        <div className="flex flow-row flex-wrap w-full gap-2 mt-4">
                          <BulletTag>App feature</BulletTag><BulletTag>Instruction set</BulletTag><BulletTag>Live heart rate data</BulletTag>
                          <BulletTag>Fitness scoring in a summary record</BulletTag>
                        </div>
                        <h3 className="font-display text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 dark:text-ice-900 mt-10">
                          Requirements
                        </h3>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          First was understanding how the test works, and talking with the data scientists who devised the test to understand how it would function under the hood.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          The primary metrics that were being calculated through the test were VO₂ max (maximal oxygen uptake estimate), heart rate recovery (how much your heart rate reduces after intense exercise), and the peak heart rate achieved during the test.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          As these results are partly hereditary, based on age, or based on sex, its important that results are compared against official reference ranges for people of the same age and sex as the user, or compare results against the user's previous results to show personal progress.
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoomy>
                            <Image src={brief} loading="lazy" placeholder="blur" className="bg-ice-800/30 dark:bg-ice-900/5 transition-bg duration-900 rounded-lg object-contain overflow-hidden" alt="Basic feature brief" />
                          </Zoomy>
                        </div>
                        <h3 className="font-display text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 dark:text-ice-900 mt-10">
                          Research
                        </h3>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          This type of test is typically instructed by a trainer or health professional, so it was important that the app communicated to the user in a similar way to enable them to do the test on their own. 
                        </p>
                        <ul className="list-disc list-inside">
                          <li className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500">
                          I observed a number of tests being conducted by a trainer in the on-site gym, to get an idea of how trainers communicate the instructions to the participant.
                          </li>
                          <li className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500">
                          I recorded the ways the trainer would communicate the test, the types of reinforcements, and the cues they would give to the participant at each stage.
                          </li>
                          <li className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500">
                          I recorded the participant's reactions to the test, and whether they changed their pace in line with the instructions.
                          </li>
                        </ul>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoomy>
                            <Image src={observeTest} loading="lazy" placeholder="blur" className="bg-ice-800/30 dark:bg-ice-900/5 transition-bg duration-900 rounded-lg object-contain" alt="Planning for street interviews" />
                          </Zoomy>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          It's crucial that these instructions are followed to get accurate results from the test, so a draft set of instructions were created, mimicing a trainer, that would be used in the initial round of testing the UI. It's crucial that these instructions are followed closely to get accurate results from the test, so I added the initial instructions to a prototype for testing.
                        </p>
                        <h3 className="font-display text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 dark:text-ice-900 mt-10">
                          Prototyping
                        </h3>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          I created a simple layout that could be reused for each phase of the test, with instructions that update depending on the phase.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          The goal was to do a user test with a Figma prototype to see if the instructions could be followed without the trainer.
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoomy>
                            <Image src={PrototypeA} loading="lazy" placeholder="blur" className="bg-ice-800/30 dark:bg-ice-900/5 transition-bg duration-900 rounded-lg object-contain" alt="Four of the personas created" />
                          </Zoomy>
                        </div>
                        <h4 className="font-display text-2xl xl:text-3xl tracking-tight font-bold text-midnight-900 dark:text-ice-900 mt-6">
                          Test observations
                        </h4>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          <span className="font-bold">Observation:</span> Heart rate was being focused on as the central part of the screen over the instructions and time left. Determining the user's maximum heart rate was an important part of the feature, but the time remaining and instructions needed more importance.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          <span className="font-bold">Iteration:</span> Redesign the layout to give more prominence to time and instruction.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          <span className="font-bold">Observation:</span> We needed the user to ramp up their intensity in a specific way, and a single instruction per phase was not enough during the test.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          <span className="font-bold">Iteration:</span> Have a number of instructions per phase that update as time progresses, e.g. for the warmup phase:
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          <span className="font-bold">Observation:</span> The phone was typically placed on the treadmill, and some users struggled to see details when running.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          <span className="font-bold">Iteration:</span> The plan was to have audio instructions for the test, however this was out of scope for the first release, so the UI would be made bigger and bolder for release and audio would be worked on for future iterations.
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoomy>
                            <Image src={PrototypeB} loading="lazy" placeholder="blur" className="bg-ice-800/30 dark:bg-ice-900/5 transition-bg duration-900 rounded-lg object-contain" alt="Four of the personas created" />
                          </Zoomy>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          I made adjustments based on this feedback and retested. The results with this version were much better, with all test participants able to complete the test without the trainer. 
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          This was still a low-fidelity Figma prototype and lacked some of the functionality of the final feature, so I started work with developers to design and implement the final product.
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoomy>
                            <Image src={DesignBoard} loading="lazy" placeholder="blur" className="bg-ice-800/30 dark:bg-ice-900/5 transition-bg duration-900 rounded-lg object-cover" alt="Four of the personas created" />
                          </Zoomy>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          I put together the high-fidelity designs, along with a color scheme for the different types of instructions and feedback.
                        </p>
                        <h3 className="font-display text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 dark:text-ice-900 mt-10">
                          More testing
                        </h3>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          An early version of the feature was built so it was time for testing with the real thing.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          I created a test plan with the following goals:
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          + See how easy/difficult it was for the participant to find and begin the feature.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          + Observe how the participant interacts with the feature, before, during and after.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          + Do they understand the purpose of the feature?
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          + Is the test completed accurately?
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          + Does the participant reach close-to or above their maximum heart rate, as the test requires?
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          + Do they understand the results?
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoomy>
                            <Image src={fitcheckUserTest} loading="lazy" placeholder="blur" className="bg-ice-800/30 dark:bg-ice-900/5 transition-bg duration-900 rounded-lg object-cover" alt="Four of the personas created" />
                          </Zoomy>
                        </div>
                        <h4 className="font-display text-2xl xl:text-3xl tracking-tight font-bold text-midnight-900 dark:text-ice-900 mt-6">
                          Results
                        </h4>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          The results of the test showed participants found the feature reliably.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          They all read the feature introduction screen without instruction, selected the correct gym equipment, and started the test.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          A few participants did not ramp up their workout intensity as expected and commented that they could have pushed harder in the high intensity part of the workout. Domain experts noted to rewrite some instructions for future tests.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          Some participants wanted the instructions to respond dynamically to their current heart rate, so this was noted for future iterations.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          All participants read and understood what the results were communicating to them.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          After a round of text changes, tests were performed again with new people. All participants reached a peak heart rate within the expected range for the test, and 2 participants set a new record maximum in their profiles. 
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          The feature was then released to the public as part of the Prevayl app.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </header>
            </div>
            {/* Right col */}
            <motion.div
              className="relative w-full max-w-full md:max-w-[40%] order-1 md:order-2 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 70, delay: initialWindowWidth > 767 ? 1 : 0, duration: 1.5 }}
            >
              <motion.div
                style={{ y }}
                className="rounded-t-xl px-2 xs:px-4 mb-2 xs:mb-4 md:mb-0 w-full flex flex-row gap-2 overflow-x-scroll overflow-y-hidden md:overflow-visible md:gap-4 ease-[cubic-bezier(0.16,0.84,0.44,1)] duration-[600ms] h-1/2 sm:h-2/3 md:h-auto md:relative md:top-0 md:px-0 md:bg-transparent md:shadow-[0] md:border-0 md:flex-col md:pr-4"
              >
                {/* CAUSING HYDRATION ISSUES? */}
                {fitcheck6Fs.map((images) => (
                  <MediaQuery minWidth={768}>
                    {(matches) =>
                      matches ?
                        <AnimateHeightChange>
                          <images.image />
                        </AnimateHeightChange>
                        :
                        <images.image />
                    }
                  </MediaQuery>
                ))}
              </motion.div>
              {isDesktopOrLaptop && (
                <motion.div
                  className="absolute bottom-0 w-full md:pr-4"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ type: "spring", stiffness: 70, duration: 1.2 }}
                >
                  <ContactBox useContainerQuery={true} parentClass="" flexClass="@xs:flex-row" />
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
        {!isDesktopOrLaptop && (
          <div className="relative px-2 xs:px-4 mt-2 xs:mt-4 sm:mb-16">
            <ContactBox useContainerQuery={false} flexClass="md:flex-row" />
          </div>
        )}
      </motion.div>
    </>
  )
}