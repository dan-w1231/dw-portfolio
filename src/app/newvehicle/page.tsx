'use client'
import { FlowChart } from '@/components/FlowChart'
import { GridPattern } from '@/components/GridPattern'
import { BulletTag } from '@/components/BulletTag'
import { motion, useTransform, useScroll, AnimatePresence } from 'framer-motion'
import { useRef, useEffect } from "react"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Link from 'next/link'
import Image from 'next/image'


import yourDeal from '@/images/resources/deviceImages/yourDeal-flat.png'
import relationshipMap from '@/images/resources/relationshipMap.png'
import researchPlan from '@/images/resources/researchPlan.png'
import streetQPlan from '@/images/resources/streetInterviewQPlan.png'
import personas from '@/images/resources/personas.png'
import wireframeNV from '@/images/resources/wireframingNV.png'
import featureMap from '@/images/resources/fullFeatureMap.png'
import flowOptions from '@/images/resources/flowOptions.png'
import productPages from '@/images/resources/productPages.png'
import analyticsNV from '@/images/resources/analyticsNV.png'
import ABWidget from '@/images/resources/ABWidget.png'
import calcs from '@/images/resources/productPagesCalcs.png'
import fpa from '@/images/resources/fpa.png'
import reserve from '@/images/resources/reserve-wide.png'
import approved from '@/images/resources/approved.png'

const NVImages = [
  {
    image: function Calcs() {
      return (
        <div className="relative w-2/3 md:w-full inset-0 flex items-center justify-center bg-[#253243] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            // className="w-80 md:w-[496px] md:mr-[10%]"
            className="mr-[10%]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.2 }}
          >
            <Zoom>
              <Image src={calcs} className="w-full max-w-[496px]" alt="Themed finance calculators embedded in dealership websites" />
            </Zoom>
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function YourDeal() {
      return (
        <div className="relative w-2/3 md:w-full inset-0 flex items-center justify-center bg-[linear-gradient(#29374A_33%,#253243)] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.2 }}
          >
            <Zoom>
              <Image src={yourDeal} className="w-full m-w-[496px]" alt="The deal page." />
            </Zoom>
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function Reserve() {
      return (
        <div className="relative w-2/3 md:w-full inset-0 flex items-center justify-center bg-[linear-gradient(#29374A_33%,#253243)] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.2 }}
          > 
            <Zoom>
              <Image src={reserve} className="w-full max-w-[44rem] p-[12%]" alt="Desktop view of a reservation." />
            </Zoom>
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function VehicleAd() {
      return (
        <div className="relative w-2/3 md:w-full inset-0 flex items-center justify-center bg-[linear-gradient(#29374A_33%,#253243)] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.2 }}
          >
            <Zoom>
              <Image src={fpa} className="w-full max-w-[17rem] p-[18%]" alt="Vehicle advert." />
            </Zoom>
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function Approved() {
      return (
        <div className="relative w-2/3 md:w-full inset-0 flex items-center justify-center bg-[linear-gradient(#29374A_33%,#253243)] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.2 }}
          >
            <Zoom>
              <Image src={approved} className="w-full max-w-[17rem] p-[18%]" alt="Instant decision on finance applications." />
            </Zoom>
          </motion.div>
        </div>
      )
    },
  },
]

export default function NewVehicle() {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const initialWindowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const y = useTransform(scrollYProgress, [0, 1], initialWindowWidth <768 ? ["0%", "0%"] : ["0px", "1800px"]);

  return (
    <> 
      <div id="main" className="relative w-screen mx-auto">
        <div key="gridPattern" className="absolute overflow-hidden w-1/3 top-[-40px] left-0 h-96 text-midnight-900/10 [mask-image:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.05))]">
          <GridPattern x="20%" />
        </div>
        <div key="flowChartPattern" className="absolute overflow-hidden w-3/4 lg:w-1/4 top-[-40px] right-0 lg:right-0 text-midnight-900/10 [mask-image:linear-gradient(rgba(255,255,255,0.5),transparent)]">
          <div className="right-[-90px]">
            <FlowChart size="100%" />
          </div>
        </div>
        <div className="relative mx-auto mt-2 xs:mt-4 xl:mt-14">
          <motion.div
            className="w-full max-w-screen-2xl flex flex-col gap-0 no-wrap flex-center mx-auto md:flex-row 2xl:gap-4 z-97"
            ref={targetRef}
            initial={{ opacity: 0, y: 50 }}
            viewport= {{ once: true, amount: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, duration: 1.5 }}
          >
          {/* Left col */}
          <div className="w-full max-w-[800px]">
            <header className="relative w-full px-2 xs:px-4 2xl:pl-4 rounded-4xl mx-auto">
              <div
                className="relative w-full pt-11 md:pt-10 pb-6 md:pb-10 px-4 sm:px-6 md:px-10 bg-cardGrad backdrop-blur shadow-lg rounded-4xl md:rounded-5xl xl:rounded-6xl overflow-hidden">   
                <div className="relative max-w-full items-end flex items-center md:mt-10">
                  <div className="w-full">
                  <AnimatePresence>
                    <motion.div
                      key="contentWorkImage"
                      className="relative z-[99]"
                      initial={{ opacity: 0, y: 80 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 80, delay: 0.4, duration: 3, staggerChildren: 0.5 }}
                      exit={{ opacity: 0, y: 80 }}
                    >
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: -4 }}>
                        <Link
                          href="/"
                          className="text-base font-medium text-blurple hover:text-midnight-900"
                        >
                          <span aria-hidden="true">&larr;</span> Back 
                        </Link>
                      </motion.div>
                      <h1 className="mt-6 font-display text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-blurple">
                        NewVehicle
                      </h1>
                      <h2 className="font-display text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-midnight-900">
                        Buy Online
                      </h2>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          A vehicle purchase experience that can be embedded into dealership websites, and a secure checkout 
                          website for Buyer’s to manage their car purchase.
                        </p>
                        <div className="flex flow-row flex-wrap w-full gap-2 mt-4">
                          <BulletTag>From concept</BulletTag><BulletTag>To live product</BulletTag><BulletTag>To optimised experience</BulletTag>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          A vehicle purchase experience that can be embedded into dealership websites, and a secure checkout 
                          website for Buyer’s to manage their car purchase.
                        </p>
                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 mt-10">
                          Goals
                        </h3>
                        <h4 className="font-display font-bold text-2xl xl:text-3xl tracking-tight font-extrabold text-midnight-900 mt-6">
                          For car buyers
                        </h4>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          Whether buying a car with cash or on finance, create an online purchasing experience that’s as transparent and seamless as possible.
                        </p>
                        <h4 className="font-display font-bold text-2xl xl:text-3xl tracking-tight font-extrabold text-midnight-900 mt-6">
                          For car sellers
                        </h4>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          Generate and display high quality leads by making a frictionless car purchase experience for buyers, themed to fit each retailer’s 
                          branding. Working from the philosophy that the better the experience is for the buyer, the more cars dealers will sell.
                        </p>
                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 mt-10">
                          Scope
                        </h3>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          Leverage the business’s existing vehicle quoting technology by creating themeable lead generating tools, focused on helping buyers 
                          who want to get the best finance deal for their new vehicle.
                        </p>
                        <div className="flex flow-row flex-wrap w-full gap-2 mt-4">
                          <BulletTag>Finance quote comparison tool</BulletTag><BulletTag>Finance eligibility checking</BulletTag><BulletTag>Finance applications</BulletTag>
                          <BulletTag>Instant feedback on application decision</BulletTag><BulletTag>Dealer lead management system</BulletTag>
                        </div>
                        <div className="mt-6 cursor-zoom-in" >
                          <Zoom>
                            <Image src={relationshipMap} loading="lazy" placeholder="blur" className="bg-white rounded-lg" alt="research plan" />
                          </Zoom>  
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          At it’s core we wanted a finance comparison tool that dealers could integrate into their websites. Buyers can compare finance products 
                          for the vehicle they want, then continue on to NewVehicle.com to check their eligibility or apply. Sellers are then notified of the lead 
                          within a lead management system so they can take action.
                        </p>
                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 mt-10">
                          Research
                        </h3>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          At the beginning I wanted to better understand how people felt about buying cars, in particular about buying on finance. There seemed to be a
                          wealth of knowledge about the behaviour of car buyers online, but much less about finance specifically.
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoom>
                            <Image src={researchPlan} loading="lazy" placeholder="blur" className="bg-white rounded-lg" alt="Research plan" />
                          </Zoom>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          I planned the questions with our team then took to the streets and asked people around Manchester their thoughts.
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                        <Zoom>
                            <Image src={streetQPlan} loading="lazy" placeholder="blur" className="bg-white rounded-lg p-6" alt="Planning for street interviews" />
                        </Zoom>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          We then card sorted the results into different types of buyers, then I created personas matching people to shopping behaviours and business opportunities, 
                          which became invaluable when designing many parts of the consumer UI.
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoom>
                            <Image src={personas} loading="lazy" placeholder="blur" className="rounded-lg" alt="Four of the personas created" />
                          </Zoom>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                        One of the common worries that respondents expressed with buying online was <span className="font-bold">trust and security.</span> Finance applications inherently require very sensitive customer data (from employment history to bank details), and respondents commented that they’d need to trust a 3rd party website for them to enter this kind of information with confidence.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                        A <span className="font-bold">lack of transparency</span> with the finance process was also commonly expressed, with some respondents commenting on how they sometimes felt “left in the dark” when it comes to a finance deal. Some claimed sales staff may emphasise the <span className="italic">monthly payment</span> while glossing over <span className="italic">interest rates, payment schedules, final payments</span> and potential <span className="italic">penalty fees</span> for going over the mileage limits of a PCP finance deal.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">

                        From this one of the goals became <span className="font-bold">compliance, security</span> at every stage of the process.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                        Other take-aways included having clear and detailed vehicle information, the ability to save your progress during the application, and having the dealer information available from any step of the purchase.
                        </p>
                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 mt-10">
                          Wireframing
                        </h3>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          The next sessions I brought devs together to brainstorm user flows, while I scribbled on the (WriteOn) walls.
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoom>
                            <Image src={wireframeNV} loading="lazy" placeholder="blur" className="rounded-lg" alt="Wireframes of the NV application process" />
                          </Zoom>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          Due to the size of the undertaking (quoting, eligibility checking, applications, an account) I formalized a process diagram in Miro to share how everything could fit together.
                        </p>
                        <div className="mt-6 flex flex-row gap-4">
                          <div className="w-1/2">
                          <Zoom>
                            <Image src={featureMap} loading="lazy" placeholder="blur" className="rounded-lg" alt="A map of how the different vehicle retailing features fit together" />
                          </Zoom>
                          </div>
                          <div className="w-1/2">
                          <Zoom>
                            <Image src={flowOptions} loading="lazy" placeholder="blur" className="rounded-lg" alt="Different options placed on the ideas wall." />
                          </Zoom>
                          </div>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          After lots of coffee, hundreds of variations and a few review sessions, the first designs for the new finance calculators, applications, and checkout were presented end-to-end. 
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoom>
                            <Image src={productPages} loading="lazy" placeholder="blur" className="rounded-lg" alt="Some samples of pages in the web app." />
                          </Zoom>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          Given that trust was a big factor, it was important to create a seamless experience for users 
                          transitioning from dealership websites to our checkout process. I sat down with developers to create 
                          a themeing guide that would allow each dealership to customize their checkout to their own brand, ensuring 
                          customers still felt at home when leaving the retailer’s site. A separate 'NewVehicle.com' UI guide was 
                          also created that could be expanded on if the business decided to have parts of the site unthemed and unrelated to dealerships.
                        </p>
                        <h3 className="font-display font-bold text-3xl xl:text-4xl tracking-tight font-extrabold text-midnight-900 mt-10">
                          Analytics and Optimisations
                        </h3>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          After release the product was a huge success shipping live to 800+ dealerships in the UK, with the number of
                          leads generated up around ~35%. The following year I spent a lot of time burried in Google Analytics and Hotjar, setting it up, searching for weak performing pages and presenting
                          hypotheses of ways we could make the process simpler and improve conversion rates on different pages.
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoom>
                            <Image src={analyticsNV} loading="lazy" placeholder="blur" className="rounded-lg" alt="Some samples of pages in the web app." />
                          </Zoom>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          One example of improvement was a change to the finance calculator and its following page. The calculator was the one area embedded on the retailer's vehicle page
                           and received the highest number of impressions of any stage. Each quote had a "Learn More" call to action which lead
                          to a "Finance Details" page with 2 options: Check Eligibility or Apply.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          Drop-offs were highest at these two steps, so the hypothesis was to add a more direct call to action on each quote ("Apply Now" and "Check Eligibility") and move the finance details 
                          into the calculator, removing the need for the page inbetween a quote and applying or checking eligbility.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          The change was beta tested to select retailers, and the results showed both an increase in engagement on the quotes, 
                          and considerably less dropoffs during the checkout, so the change was subsequently rolled out to all retailers.
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoom>
                            <Image src={ABWidget} loading="lazy" placeholder="blur" className="rounded-lg" alt="Some samples of pages in the web app." />
                          </Zoom>
                        </div>
                    </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </header>
          </div>
          {/* Right col */}
            <div className="w-full max-w-full md:max-w-[50%] 2xl:max-w-[40%]">
              <h3 className="font-display md:hidden font-bold text-3xl xl:text-4xl px-4 tracking-tight font-extrabold text-midnight-900 mt-10">
              Final product
              </h3>
            <motion.ol 
              style={{ y }}
              role="list" 
              className="rounded-t-xl py-4 px-4 w-full flex flex-row gap-2 overflow-x-scroll overflow-y-hidden md:overflow-visible md:gap-4 ease-[cubic-bezier(0.16,0.84,0.44,1)] duration-[600ms] h-1/2 sm:h-2/3 md:h-auto md:relative md:top-0 md:px-0 md:py-0 md:bg-transparent md:shadow-[0] md:border-0 md:flex-col md:pr-4 md:backdrop-blur-[0px]"
              >
              {NVImages.map((images) => (
                  <images.image />
              ))}
            </motion.ol>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}