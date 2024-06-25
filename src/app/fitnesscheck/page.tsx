'use client'
import { BulletTag } from '@/components/BulletTag';
import { motion, useTransform, useScroll } from 'framer-motion';
import { AnimateHeightChange } from '@/components/AnimateHeightChange';
import { useRef, useEffect } from "react";
import { ContactBox } from '@/components/ContactBox';
import Zoomy from '@/components/HOC/Zoomy';
import Image from 'next/image';
import { NextPreviousArticle } from '@/components/NextPreviousArticle';
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


const fitcheckImages = [
  {
    image: function FitCheckIntroduction() {
      return (
        <motion.div className="relative w-full md:w-full md:min-h-[498px] flex items-center justify-center bg-[#253337] dark:bg-ice-900/5 transition-bg duration-900 rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[266px] md:min-w-0">
          <motion.div className="" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.2 }}>
            <Zoomy initialScale={1.4}>
              <motion.div layoutId="fitcheckStart" layout="preserve-aspect" key="456" className="w-full h-full">
                <Image key="fitcheckStart" priority src={fitcheckStart} objectFit="contain" className="object-cover md:object-contain h-[410px] md:h-full transform-gpu max-h-[85vh] py-4 pointer-events-none z-[99]" alt="Introduction screen for fitness check" />
              </motion.div>
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function FitCheckWarmupScreen() {
      return (
        <motion.div className="relative w-full md:w-full md:min-h-[498px] flex items-center justify-center bg-[#253337] dark:bg-ice-900/5 transition-bg duration-900 rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[266px] md:min-w-0">
          <motion.div className="" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.2 }}>
            <Zoomy initialScale={1.2}>
              <motion.div layoutId="fitcheck1E" layout="preserve-aspect" key="457" className="w-full h-full">
                <Image key="fitcheck1E" priority src={fitcheck1E}  className="object-cover md:object-contain h-[410px] md:h-full transform-gpu max-h-[85vh] py-4 pointer-events-none z-[99]" alt="Warmup screen during fitness check" />
              </motion.div>
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function FitCheckMaxIntensityScreen() {
      return (
        <motion.div className="relative w-full md:w-full md:min-h-[498px] flex items-center justify-center bg-[#253337] dark:bg-ice-900/5 transition-bg duration-900 rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[266px] md:min-w-0">
          <motion.div className="" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.2 }}>
            <Zoomy initialScale={1.2}>
              <motion.div layoutId="fitcheck4F" key="458" layout="preserve-aspect" className="w-full h-full">
                <Image key="fitcheck4F" priority src={fitcheck4F} objectFit="contain" className="object-cover md:object-contain h-[410px] md:h-full transform-gpu max-h-[85vh] py-4 pointer-events-none z-[99]" alt="Max intensity part of the fitness check" />
              </motion.div>
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function FitCheckCooldownScreen() {
      return (
        <motion.div className="relative w-full md:w-full md:min-h-[498px] flex items-center justify-center bg-[#253337] dark:bg-ice-900/5 transition-bg duration-900 rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[266px] md:min-w-0">
          <motion.div className="" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.2 }}>
            <Zoomy initialScale={1.2}>
              <motion.div layoutId="fitcheck6F" key="459" layout="preserve-aspect" className="w-full h-full">
                <Image key="fitcheck6F" src={fitcheck6F} objectFit="contain" className="object-cover md:object-contain h-[410px] md:h-full transform-gpu max-h-[85vh] py-4 pointer-events-none z-[99]" alt="Reducing pace with a cool down" />
              </motion.div>
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function FitCheckResultsScreen() {
      return (
        <motion.div className="relative w-2/3 md:min-h-[490px] md:w-full inset-0 flex items-center justify-center bg-[#253337] dark:bg-ice-900/5 transition-bg duration-900 backdrop-blur-[140px] rounded-4xl md:rounded-5xl xl:rounded-6xl min-w-[240px] md:min-w-0">
          <motion.div className="" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.2 }}>
            <Zoomy initialScale={1.2}>
              <motion.div layoutId="fitcheckSummary" key="460" layout="preserve-aspect" className="w-full h-full">
                <Image key="fitcheckSummary" src={fitcheckSummary} objectFit="contain" className="object-cover md:object-contain h-[410px] md:h-full transform-gpu max-h-[85vh] py-4 pointer-events-none z-[99]" alt="FitnessCheck result screen" />
              </motion.div>
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
]

export default function FitnessCheck() {

  const previousArticle = {
    href: '/juhuauto',
    text: 'Previous',
  };

  const nextArticle = {
    href: '/connectedworker',
    text: 'Next',
  };


  // Scroll to top on load due to next/link conflict with framer motion
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

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
        key="fitcheck"
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
                            <motion.div layoutId="brief" key="456" className="w-full h-full">
                              <Image src={brief} loading="lazy" placeholder="blur" className="bg-ice-800/30 dark:bg-ice-900/5 transition-bg duration-900 rounded-lg max-h-[85vh] pointer-events-none object-contain overflow-hidden" alt="Basic feature brief" />
                            </motion.div>
                          </Zoomy>
                        </div>
                        <h3 className="font-display text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 dark:text-ice-900 mt-10">
                          Research
                        </h3>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          This type of test is typically instructed by a trainer or health professional, so it was important that the app communicated to the user in a similar way to enable them to do the test on their own.
                        </p>
                        <ul className="list-disc list-inside">
                          <li key="1" className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500">
                            I observed a number of tests being conducted by a trainer in the on-site gym, to get an idea of how trainers communicate the instructions to the participant.
                          </li>
                          <li key="2" className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500">
                            I recorded the ways the trainer would communicate the test, the types of reinforcements, and the cues they would give to the participant at each stage.
                          </li>
                          <li key="3" className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500">
                            I recorded the participant's reactions to the test, and whether they changed their pace in line with the instructions.
                          </li>
                        </ul>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoomy>
                            <motion.div layoutId="observeTest" key="456" className="w-full h-full">
                              <Image src={observeTest} loading="lazy" placeholder="blur" className="bg-ice-800/30 dark:bg-ice-900/5 transition-bg duration-900 rounded-lg max-h-[85vh] pointer-events-none object-contain" alt="Planning for street interviews" />
                            </motion.div>
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
                            <motion.div layoutId="PrototypeA" key="456" className="w-full h-full">
                              <Image src={PrototypeA} loading="lazy" placeholder="blur" className="bg-ice-800/30 dark:bg-ice-900/5 transition-bg duration-900 rounded-lg max-h-[85vh] pointer-events-none object-contain" alt="Four of the personas created" />
                            </motion.div>
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
                          <span className="font-bold">Iteration:</span> Add multiple prompts per phase that update as time progresses. Rather than a single 'Warmup' instruction, the Warmup phase was given 6 prompts that build up their pace gradually. Each phase was given 1 prompt per 30seconds.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          <span className="font-bold">Observation:</span> The phone was typically placed on the treadmill, and some users struggled to see details when running.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          <span className="font-bold">Iteration:</span> The plan was to have audio instructions for the test, however this was out of scope for the first release, so the UI would be made bigger and bolder for release and audio would be worked on for future iterations.
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoomy>
                            <motion.div layoutId="PrototypeB" key="456" className="w-full h-full">
                              <Image src={PrototypeB} loading="lazy" placeholder="blur" className="bg-ice-800/30 dark:bg-ice-900/5 transition-bg duration-900 rounded-lg max-h-[85vh] pointer-events-none object-contain" alt="Four of the personas created" />
                            </motion.div>
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
                            <motion.div layoutId="DesignBoard" key="456" className="w-full h-full">
                              <Image src={DesignBoard} loading="lazy" placeholder="blur" className="bg-ice-800/30 dark:bg-ice-900/5 transition-bg duration-900 rounded-lg max-h-[85vh] pointer-events-none object-contain" alt="Four of the personas created" />
                            </motion.div>
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

                        <ul className="list-disc list-inside">
                          <li key="4" className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500">
                            See how easy/difficult it was for the participant to find and begin the feature.
                          </li>
                          <li key="5" className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500">
                            Observe how participants interact with the feature, before, during and after.
                          </li>
                          <li key="6" className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500">
                            Do they understand the purpose of the feature?
                          </li>
                          <li key="7" className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500">
                            Is the test completed accurately?
                          </li>
                          <li key="8" className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500">
                            Does the participant reach close-to or above their maximum heart rate, as the test requires?
                          </li>
                          <li key="9" className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500">
                            Do they understand their results?
                          </li>
                        </ul>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoomy>
                            <motion.div layoutId="fitcheckUserTest" key="456" className="w-full h-full">
                              <Image src={fitcheckUserTest} loading="lazy" placeholder="blur" className="bg-ice-800/30 dark:bg-ice-900/5 transition-bg duration-900 rounded-lg max-h-[85vh] pointer-events-none object-cover" alt="Four of the personas created" />
                            </motion.div>
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
                          After a round of text changes, tests were performed again with new people. All participants reached a peak heart rate within the expected range for the test, and a number of participants set a new record maximum heart rate during the test.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          The feature was then released to the public as part of the Prevayl app.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </header>
              <NextPreviousArticle previousArticle={previousArticle} nextArticle={nextArticle} />
            </div>
            {/* Right col */}
            <motion.div
              className="relative w-full max-w-full md:max-w-[40%] order-1 md:order-2 overflow-x-scroll overflow-y-hidden md:overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 70, delay: initialWindowWidth > 767 ? 1 : 0, duration: 1.5 }}
            >
              <motion.div
                style={{ y }}
                className="rounded-t-xl px-2 xs:px-4 mb-2 xs:mb-4 md:mb-0 w-full flex flex-row gap-2 overflow-x-scroll overflow-y-hidden md:overflow-visible md:gap-4 ease-[cubic-bezier(0.16,0.84,0.44,1)] duration-[600ms] sm:h-2/3 h-[360px] md:max-h-auto md:h-auto md:relative md:top-0 md:px-0 md:bg-transparent md:shadow-[0] md:border-0 md:flex-col md:pr-4"
              >
                {fitcheckImages.map((images, index) => (
                  <MediaQuery minWidth={768} key={index}>
                    {(matches) =>
                      matches ?
                        <AnimateHeightChange key={index}>
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