'use client'
import { BulletTag } from '@/components/BulletTag';
import { motion, useTransform, useScroll } from 'framer-motion';
import { AnimateHeightChange } from '@/components/AnimateHeightChange';
import { useRef, useEffect } from "react";
import { ContactBox } from '@/components/ContactBox';
import Zoomy from '@/components/HOC/Zoomy';
import Image from 'next/image';
import Link from 'next/link';
import { NextPreviousArticle } from '@/components/NextPreviousArticle';
import MediaQuery, { useMediaQuery } from 'react-responsive';

// Gallery Images
import juhuFPA from '@/images/resources/juhuFPA1.png';
import bdkToJuhu from '@/images/resources/juhuSearchDesign.png';
import juhuFPAs from '@/images/resources/deviceImages/juhuFPAsB.png';
import juhuTabletFPA from '@/images/resources/juhuFPAtablet.png';
import juhuQuotes from '@/images/resources/deviceImages/juhuFinanceWide.png';
import juhuPreApproval from '@/images/resources/deviceImages/juhuPreApproval.png';

// Article Images
import bdkSitemap from '@/images/resources/bdkSitemap.png';
import bdkTaskflow from '@/images/resources/bdktaskFlow.png';
import bdkEEA from '@/images/resources/bdkEEA.png';
import bdkWireframes from '@/images/resources/bdkWireframes.png';
import bdkWireframesToJuhu from '@/images/resources/bdkWireframesToJuhu.png';
import juhuUserTest from '@/images/resources/juhuUserTest.png';
import ABcategories from '@/images/resources/CategoryABResults.png';

// Weird issue where unless I name this image array the same as the NV page, and the functions the same layoutId animations break. As soon
// as I change it to JuhuImages = [], layout animate presence breaks. Zoomy component knows nothing about the names of this array, no idea why it's happening.

// layoutId animation issue:
// 1. it seems highly related to image aspect ratio/size. Feels like the more it has to do when resizing the more broke the animation becomes.
// 2. having a squarish box for all images and adjusting the outer card size seems to work best, but the image isnt as zoomed on click
// 3. Try fixed position images

//Issue is likely incongruent aspect ratio:
//"* If `layout` is set to `"position"`, the size of the component will change instantly and
// * only its position will animate. If `layout` is set to `"size"`, the position of the
// * component will change instantly but its size will animate.
// *
// * If `layout` is set to `"size"`, the position of the component will change instantly and
// * only its size will animate.
// *
// * If `layout` is set to `"preserve-aspect"`, the component will animate size & position if
// * the aspect ratio remains the same between renders, and just position if the ratio changes."

const NVImages = [
  {
    image: function Calcs() {
      return (
        <motion.div key="Calcs" className="relative w-full flex items-center justify-center min-w-[220px] md:min-w-0 md:min-h-[498px] bg-ice-800/30 rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg dark:bg-ice-900/5">
          <motion.div key="112" className="" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.2 }}>
            <Zoomy initialScale={1.3}>
              <motion.div layoutId="nvImgA" layout="preserve-aspect" key="456B" className="w-full h-full">
                <Image key="calcsImg" priority src={juhuFPA} className="h-[316px] md:w-[630px] md:h-full transform-gpu max-h-[85vh] object-cover py-4 pointer-events-none z-[99] overflow-visible" alt="One of my designs for the juhu vehicle advert page" />
              </motion.div> 
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function DealSummary() {
      const imageRef = useRef<HTMLDivElement | null>(null);
      return (
        <motion.div key="DealSummary" className="relative overflow-hidden w-32 md:w-full md:min-h-[498px] inset-0 flex items-center justify-center bg-ice-800/30 dark:bg-ice-900/5 transition-bg duration-900 rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[320px] md:min-w-0">
          <motion.div className="w-auto h-full" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.2 }}>
            <Zoomy initialScale={1.2}>
              <motion.div layoutId="nvImgC" layout="preserve-aspect" key="458" className="w-auto h-full">
                <Image key="dealSummary" priority src={juhuFPAs} objectFit="contain" className="relative w-[310px] md:w-[640px] transform-gpu max-h-[85vh] object-contain py-2 pointer-events-none z-[99]" alt="The vehicle advert page." />
              </motion.div>
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function YourDeal() {
      return (
        <motion.div key="YourDeal" className="relative w-full flex items-center justify-center min-w-[320px] md:min-h-[498px] md:min-w-0 bg-ice-800/30 rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg dark:bg-ice-900/5">
          <motion.div className="w-auto h-full" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.2 }}>
            <Zoomy initialScale={1.2}>
              <motion.div layoutId="nvImgB" layout="preserve-aspect" key="457" className="w-auto h-full">
                <Image key="dealImg" src={bdkToJuhu} priority objectFit="contain" className="relative w-[310px] md:w-[640px] transform-gpu max-h-[85vh] object-contain py-4 pointer-events-none z-[99]" alt="Wireframes before and after branding" />
              </motion.div>
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function Reserve() {
      return (
        <motion.div key="Reserve" className="relative w-32 md:w-full md:min-h-[498px] inset-0 flex items-center justify-center bg-ice-800/30 dark:bg-ice-900/5 transition-bg duration-900 rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[320px] md:min-w-0 overflow-hidden">
          <motion.div className="w-auto h-full" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.2 }}>
            <Zoomy initialScale={1.4}>
              <motion.div layoutId="nvImgD" layout="preserve-aspect" key="459" className="w-auto h-full">
                <Image key="reserveB" src={juhuPreApproval} objectFit="contain" className="relative h-full md:w-[640px] transform-gpu max-h-[85vh] object-contain py-4 pointer-events-none z-[99]" alt="Getting pre-approved" />
              </motion.div>
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function VehicleAd() {
      return (
        <motion.div key="VehicleAd" className="relative w-full overflow-hidden md:w-full md:min-h-[498px] inset-0 flex items-center justify-center bg-ice-800/30 dark:bg-ice-900/5 transition-bg duration-900 rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[500px] md:min-w-0">
          <motion.div className="w-auto h-full" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.2 }}>
            <Zoomy>
              <motion.div layoutId="nvImgE" layout="preserve-aspect" key="460" className="w-auto h-full">
                <Image key="fpa" src={juhuTabletFPA} className="relative md:left-16 w-[720px] md:w-[640px] md:max-w-none h-full transform-gpu max-h-[85vh] object-contain py-2 select-none z-[999]" alt="Viewing finance quotes on a laptop." />
              </motion.div>
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
]

export default function NewVehicle() {

  const previousArticle = {
    href: '/newvehicle',
    text: 'Previous',
  };

  const nextArticle = {
    href: '/fitnesscheck',
    text: 'Next',
  };

  // Scroll to top on load due to next/link conflict with framer motion
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);
  }, []);

  const targetRef = useRef<HTMLDivElement | null>(null);
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const initialWindowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const y = useTransform(scrollYProgress, [0, 1], initialWindowWidth < 768 ? ["0%", "0%"] : ["0px", "412px"]);

  return (
    <>
      <motion.div
        id="main"
        key="juhuAuto"
        className="relative w-screen mx-auto mt-2 xs:mt-4"
        ref={targetRef}
      >
        <div className="relative mx-auto z-[1]">
          <div className="w-full max-w-screen-2xl flex flex-col gap-0 md:gap-4 no-wrap flex-center mx-auto md:flex-row 2xl:gap-4 z-97"
          >
            {/* Left col */}
            <div className="w-full max-w-[800px] md:max-w-[60%] order-2 md:order-1">
              <header className="relative w-full px-2 xs:px-4 md:pr-0 md:pl-4 rounded-4xl mx-auto">
                <div
                  className="relative w-full pt-11 md:pt-10 pb-6 md:pb-10 px-4 sm:px-6 md:px-10 bg-ice-800/30 dark:bg-ice-900/5 transition-bg duration-900 backdrop-blur-[140px] shadow-xl dark:shadow-xlD rounded-4xl md:rounded-5xl xl:rounded-6xl overflow-hidden">
                  <div className="relative max-w-full flex items-center md:mt-4">
                    <div className="w-full">
                      <motion.div
                        key="contentWorkImage"
                        className="relative z-[99]"
                      >
                        <h1 className="font-display text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-[#01A516]">
                          Juhu Auto
                        </h1>
                        <h2 className="font-display text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-midnight-900 dark:text-ice-900 ">
                          Car marketplace in Germany
                        </h2>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          Create a finance-focused vehicle marketplace for buyers and sellers in Germany, on behalf of Bank Deutsches Kraftfahrzeuggewerbe (BDK).
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          Combining lessons learned from designing online retailing tools including vehicle search, finance calculators, applications and eligibility checking, brought together into a simple yet engaging way to buy a car.
                        </p>
                        <div className="flex flow-row flex-wrap w-full gap-2 mt-4">
                          <BulletTag>From concept</BulletTag><BulletTag>To live product</BulletTag><BulletTag>Post-release User & A/B Testing</BulletTag>
                        </div>
                        <h3 className="font-displaytext-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 dark:text-ice-900 mt-10">
                          Goals
                        </h3>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          Use research conducted in the UK market and German market experts to create a bespoke vehicle marketplace for Germany, with a goal to optimise post-release.
                        </p>
                        <h3 className="font-display text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 dark:text-ice-900 mt-10">
                          Scope
                        </h3>
                        <div className="flex flow-row flex-wrap w-full gap-2 mt-4">
                          <BulletTag>Find a car</BulletTag><BulletTag>Contact seller</BulletTag>
                          <BulletTag>Get Pre-Approved</BulletTag><BulletTag>Book a test drive</BulletTag>
                        </div>
                        <h3 className="font-display text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 dark:text-ice-900 mt-10">
                          Ideation
                        </h3>
                        <h4 className="font-display font-bold text-2xl xl:text-3xl tracking-tight text-midnight-900 dark:text-ice-900  mt-6">
                          Task Flows
                        </h4>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          Leveraging research from previous projects I developed user task flows for the primary task "Finding a car", outlining how
                          buyers at different stages of the purchase journey could complete their tasks.
                        </p>
                        <div className="mt-6 flex flex-row gap-4">
                          <div className="w-1/2">
                            <Zoomy>
                              <motion.div layoutId="bdkEEA">
                                <Image src={bdkEEA} loading="lazy" placeholder="blur" className="bg-[#DDDAE3] rounded-lg max-h-[85vh] pointer-events-none object-contain" alt="research plan" />
                              </motion.div>
                            </Zoomy>
                          </div>
                          <div className="w-1/2">
                            <Zoomy>
                              <motion.div layoutId="bdkTaskflow">
                                <Image src={bdkTaskflow} loading="lazy" placeholder="blur" className="bg-[#DDDAE3] rounded-lg max-h-[85vh] pointer-events-none object-contain" alt="Research plan" />
                              </motion.div>
                            </Zoomy>
                          </div>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          People who know exactly which model they want can quickly get to the evaluation stage, while those still unsure need ways to explore and browse potential options.
                        </p>
                        <h4 className="font-display font-bold text-2xl xl:text-3xl tracking-tight text-midnight-900 dark:text-ice-900 mt-6">
                          Navigation
                        </h4>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          Based on the requirements and task flows I created a simple sitemap.
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoomy>
                            <motion.div layoutId="bdkSitemap">
                              <Image src={bdkSitemap} loading="lazy" placeholder="blur" className="bg-[#DDDAE3] rounded-lg p-6  max-h-[85vh] pointer-events-none object-contain" alt="Planning for street interviews" />
                            </motion.div>
                          </Zoomy>
                        </div>
                        <h4 className="font-display font-bold text-2xl xl:text-3xl tracking-tight text-midnight-900 dark:text-ice-900 mt-6">
                          Wireframing & Prototyping
                        </h4>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoomy>
                            <motion.div layoutId="bdkWireframes">
                            <Image src={bdkWireframes} loading="lazy" placeholder="blur" className="rounded-lg max-h-[85vh] pointer-events-none object-contain" alt="Four of the personas created" />
                            </motion.div>
                          </Zoomy>
                        </div>
                        <p className="mt-6 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          After a few rounds of testing and tweaking the prototypes, I spent time with translators converting the wireframes into German, then the wireframes were used by a 3rd-party branding agency in Germany to create the consumer brand "Juhu Auto". I then made some adjustments to the branded designs, and the product was built.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          My work would continue a few months after release to test and optimise the product.
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoomy>
                            <motion.div layoutId="bdkWireframesToJuhu">
                              <Image src={bdkWireframesToJuhu} loading="lazy" placeholder="blur" className="rounded-lg max-h-[85vh] pointer-events-none object-contain" alt="Four of the personas created" />
                            </motion.div>
                          </Zoomy>
                        </div>
                        <h3 className="font-display text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900  dark:text-ice-900 mt-10">
                          User Testing
                        </h3>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          <span className="font-bold">Goal:</span> Understand how users navigate the site to purchase a car, and discover the common pain points.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          <span className="font-bold">Type:</span> Unmoderated test using Loop11.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          <span className="font-bold">Method:</span> Initially I planned and built the test in English, then was later translated by my German-speaking colleague.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          I used TestingTime to recruit German participants who recently bought a car or were actively searching for one.
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoomy>
                            <motion.div layoutId="juhuUserTest">
                              <Image src={juhuUserTest} loading="lazy" placeholder="blur" className="rounded-lg max-h-[85vh] pointer-events-none object-contain" alt="Wireframes of the NV application process" />
                            </motion.div>
                          </Zoomy>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          <span className="font-bold">Discovery:</span> Participants mentioned they were interested in a particular bodystyle during pre-task questions i.e. Kleinwagen (Small car) but did not type this into the search box.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          <span className="font-bold">Solution:</span> Create an A/B test that presents categories on the homepage that can be quickly tapped to display those results.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          <span className="font-bold">Discovery:</span> Participants using the budget filter accidentally entered their 'maximum budget' into the 'minimum price' field, displaying only vehicles exceeding their price range.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          <span className="font-bold">Solution:</span> Redesigned and deployed a new budget filter to be more focused on a maximum budget.
                        </p>

                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight text-midnight-900 dark:text-ice-900 mt-10">
                          A/B Testing
                        </h3>
                        <h4 className="font-display font-bold text-2xl xl:text-3xl tracking-tight text-midnight-900 dark:text-ice-900 mt-6">
                          Hypothesis
                        </h4>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          Providing users with one-click ‘Bodystyle Categories’ on the homepage will increase conversion from the homepage to vehicle results.
                        </p>
                        <h4 className="font-display font-bold text-2xl xl:text-3xl tracking-tight text-midnight-900 dark:text-ice-900 mt-6">
                          Traffic
                        </h4>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800 dark:text-ice-500 ">
                          22,000 users over 2 weeks, traffic split 50/50 between the Control and Variation homepage.
                        </p>
                        <h4 className="font-display font-bold text-2xl xl:text-3xl tracking-tight text-midnight-900 dark:text-ice-900 mt-6">
                          Results
                        </h4>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoomy>
                            <motion.div layoutId="ABcategories">
                              <Image src={ABcategories} loading="lazy" placeholder="blur" className="bg-[#DDDAE3] rounded-lg p-2 max-h-[85vh] pointer-events-none object-contain" alt="Wireframes of the NV application process" />
                            </motion.div>
                          </Zoomy>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </header>
              <NextPreviousArticle previousArticle={previousArticle} nextArticle={nextArticle} />
            </div>
            {/* Right col */}
            <motion.div
              className="relative w-full max-w-full md:max-w-[40%] order-1 md:order-2 overflow-hidden z-[4]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 70, delay: initialWindowWidth > 767 ? 1 : 0, duration: 1.5 }}
            >
              <motion.div
                style={{ y }}
                className="rounded-t-xl px-2 xs:px-4 mb-2 xs:mb-4 md:mb-0 w-full flex flex-row gap-2 overflow-x-scroll overflow-y-hidden md:overflow-visible md:gap-4 ease-[cubic-bezier(0.16,0.84,0.44,1)] duration-[600ms] sm:h-2/3 h-[360px] md:max-h-auto md:h-auto md:relative md:top-0 md:px-0 md:bg-transparent md:shadow-[0] md:border-0 md:flex-col md:pr-4"
              >
                {/* CAUSING HYDRATION ISSUES? */}
                {NVImages.map((images, index) => (
                  <MediaQuery minWidth={768}>
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