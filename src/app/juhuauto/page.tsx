'use client'
import { FlowChart } from '@/components/FlowChart'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Hero } from '@/components/Hero'
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

const NVImages = [
  {
    image: function YourDeal() {
      return (
        <div className="relative w-full inset-0 flex items-center justify-center bg-[linear-gradient(#003842_33%,#001D22)] rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg">
          <motion.div
            className="w-[496px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.5 }}
          >
            <Image src={yourDeal} className="" alt="" />
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function ImageTwo() {
      return (
        <div className="relative w-full inset-0 flex items-center justify-center bg-[linear-gradient(#003842_33%,#001D22)] rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg">
          <motion.div
            className="w-[496px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.5 }}
          >
            <Image src={yourDeal} className="" alt="" />
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function ImageThree() {
      return (
        <div className="relative w-full inset-0 flex items-center justify-center bg-[linear-gradient(#003842_33%,#001D22)] rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg">
          <motion.div
            className="w-[496px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.5 }}
          >
            <Image src={yourDeal} className="" alt="" />
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function ImageFour() {
      return (
        <div className="relative w-full inset-0 flex items-center justify-center bg-[linear-gradient(#003842_33%,#001D22)] rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg">
          <motion.div
            className="w-[496px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.5 }}
          >
            <Image src={yourDeal} className="" alt="" />
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function ImageFive() {
      return (
        <div className="relative w-full inset-0 flex items-center justify-center bg-[linear-gradient(#003842_33%,#001D22)] rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg">
          <motion.div
            className="w-[496px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.5 }}
          >
            <Image src={yourDeal} className="" alt="" />
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function ImageSix() {
      return (
        <div className="relative w-full inset-0 flex items-center justify-center bg-[linear-gradient(#003842_33%,#001D22)] rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg">
          <motion.div
            className="w-[496px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.5 }}
          >
            <Image src={yourDeal} className="" alt="" />
          </motion.div>
        </div>
      )
    },
  },
  {
    image: function YourDeal() {
      return (
        <div className="relative w-full inset-0 flex items-center justify-center bg-[linear-gradient(#003842_33%,#001D22)] rounded-4xl md:rounded-5xl xl:rounded-6xl shadow-lg">
          <motion.div
            className="w-[496px]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: false, amount: 0.25 }}
            transition={{  stiffness: 100, duration: 1.5 }}
          >
            <Image src={yourDeal} className="" alt="" />
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
  const y = useTransform(scrollYProgress, [0, 1], initialWindowWidth <768 ? ["0%", "0%"] : ["0px", "-400px"]);

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
            className="w-full max-w-screen-2xl flex flex-row gap-[40px] no-wrap flex-center mx-auto"
            ref={targetRef}
            initial={{ opacity: 0, y: 50 }}
            viewport= {{ once: true, amount: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, duration: 1.5 }}
          >
          {/* Left col */}
          <div className="w-full max-w-[768px]">
            <header className="relative w-full px-2 xs:px-4 rounded-4xl mx-auto">
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
                      <Link
                        href="/"
                        className="text-base font-medium text-blurple hover:text-midnight-900"
                      >
                        <span aria-hidden="true">&larr;</span> Back 
                      </Link>
                      <h1 className="mt-6 font-display text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-blurple">
                        Juhu Auto
                      </h1>
                      <h2 className="font-display text-5xl md:text-6xl xl:text-7xl tracking-tight font-extrabold text-midnight-900">
                        A/B Testing
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
                          At the beginning we wanted to understand how people felt about buying cars, in particular about buying on finance.
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
                        One of the common worries that respondents expressed with buying online was <span className="font-bold">Trust and Security.</span> Finance applications inherently require very sensitive customer data (from employment history to bank details), and respondents commented that they’d need to trust a 3rd party website for them to enter this kind of information with confidence.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                        A lack of <span className="font-bold">Transparency</span> with the finance process was also commonly expressed, with some respondents commenting on how they sometimes felt “left in the dark” when it comes to a finance deal. Some claimed sales staff may emphasise the Monthly Payment while glossing over interest rates, payment schedules, final payments and potential penalty fees for going over the mileage limits of a PCP finance deal.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">

                        From this one of the goals became <span className="font-bold">compliance, security</span> at every stage of the process.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                        Other take-aways included <span className="font-bold">clear and detailed vehicle information</span>, the ability to <span className="font-bold">save your progress</span> during the application, and having the <span className="font-bold">dealer information available from any step of the purchase.</span>
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
                          After lots of coffee, hundreds of variations and some review sessions, the first designs for finance calculators, applications, and checkout were presented end-to-end. 
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-midnight-800">
                          Given that trust was a big factor, we wanted users transitioning between the dealership website 
                          to our checkout experience to be as seamless as possible. I sat down with developers to create a themeing guide 
                          that would allow each dealership to customize their checkout to their own needs, making their customers still feel at home when leaving
                          the retailer's website. A separate 'NewVehicle.com' specific brand guide was also created that could be expanded on if the business decided 
                          to have parts of the site unthemed and unrelated to dealerships.
                        </p>
                        <div className="mt-6 cursor-zoom-in">
                          <Zoom>
                            <Image src={productPages} loading="lazy" placeholder="blur" className="rounded-lg" alt="Some samples of pages in the web app." />
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
          <motion.ol 
            style={{ y }}
            role="list" 
            className="sticky top-10 w-full flex flex-col gap-6 ease-[cubic-bezier(0.16,0.84,0.44,1)] duration-[600ms]"
            >
            {NVImages.map((images) => (
                <images.image />
            ))}
          </motion.ol>
          </motion.div>
        </div>
      </div>
    </>
  )
}