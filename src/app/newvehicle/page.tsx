'use client'
import { BulletTag } from '@/components/BulletTag'
import { motion, useTransform, useScroll } from 'framer-motion'
import { AnimateHeightChange } from '@/components/AnimateHeightChange'
import { useRef } from "react"
import { ContactBox } from '@/components/ContactBox'
import Zoomy from '@/components/Zoomy'
import Link from 'next/link'
import Image from 'next/image'
import MediaQuery, { useMediaQuery } from 'react-responsive';

// Static Images
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
    // IMAGES TOO BIG, OPTIMIZE
    image: function Calcs() {
      return (
        <motion.div layout className="relative w-2/3 md:w-full md:min-h-[498px] inset-0 flex items-center justify-center bg-[#253243] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className="-ml-[15%]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2 }}
          >
            <Zoomy>
              <Image src={calcs} className="w-full max-w-[496px]" alt="Themed finance calculators embedded in dealership websites" />
            </Zoomy>
          </motion.div>
          </motion.div>
      )
    },
  },
  {
    image: function YourDeal() {
      return (
        <motion.div layout className="relative w-2/3 md:w-full md:min-h-[498px] inset-0 flex items-center justify-center bg-[linear-gradient(#29374A_33%,#253243)] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div 
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2 }}
          >
            <Zoomy>
              <Image src={yourDeal} className="w-full m-w-[496px]" alt="The deal page." />
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function Reserve() {
      return (
        <motion.div layout className="relative w-2/3 md:w-full md:min-h-[498px] inset-0 flex items-center justify-center bg-[linear-gradient(#29374A_33%,#253243)] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2 }}
          > 
            <Zoomy>
              <Image src={reserve} className="w-full max-w-[44rem] p-[12%]" alt="Desktop view of a reservation." />
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function VehicleAd() {
      return (
        <motion.div layout className="relative w-2/3 md:w-full md:min-h-[498px] inset-0 flex items-center justify-center bg-[linear-gradient(#29374A_33%,#253243)] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className="p-[18%] h-auto"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2 }}
          >
            <Zoomy>
              <Image src={fpa} className="w-full max-w-[17rem]" alt="Vehicle advert." />
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
  {
    image: function Approved() {
      return (
        <motion.div layout className="relative w-2/3 md:w-full md:min-h-[498px] inset-0 flex items-center justify-center bg-[linear-gradient(#29374A_33%,#253243)] rounded-xl md:rounded-5xl xl:rounded-6xl shadow-lg min-w-[220px] md:min-w-0">
          <motion.div
            className="p-[18%] h-auto"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2 }}
          >
            <Zoomy>
              <Image src={approved} className="w-full max-w-[17rem]" alt="Instant decision on finance applications." />
            </Zoomy>
          </motion.div>
        </motion.div>
      )
    },
  },
]

export default function NewVehicle() {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 768 });
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const initialWindowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const y = useTransform(scrollYProgress, [0, 1], initialWindowWidth <768 ? ["0%", "0%"] : ["0px", "1800px"]);

  return (
    <> 
      <motion.div 
        id="main"
        key="newVehicle" 
        className="relative w-screen mx-auto mt-2 xs:mt-4 md:mt-8 xl:mt-8"
        ref={targetRef}
      >
        <div className="relative mx-auto z-[1]">
          <div className="w-full max-w-screen-2xl flex flex-col gap-0 no-wrap flex-center mx-auto md:flex-row 2xl:gap-4 z-97">

          {/* Left col */}
          <div className="w-full max-w-[800px] order-2 md:order-1">
            <header className="relative w-full px-2 xs:px-4 2xl:pl-4 rounded-4xl mx-auto">
              <div
                className="relative w-full pt-11 md:pt-10 pb-6 md:pb-10 px-4 sm:px-6 md:px-10 bg-cardGrad backdrop-blur shadow-xl rounded-4xl md:rounded-5xl xl:rounded-6xl overflow-hidden">   
                <div className="relative max-w-full items-end flex items-center md:mt-4">
                  <div className="w-full">
                    <motion.div
                      key="contentWorkImage"
                      className="relative z-[99]"
                    >
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: -4 }}
                        whileTap={{ x: -6 }}>
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
                            for Buyer’s to manage their car purchase.
                          </p>
                          <div className="flex flow-row flex-wrap w-full gap-2 mt-4">
                            <BulletTag>From concept</BulletTag><BulletTag>To live product</BulletTag><BulletTag>To optimised experience</BulletTag>
                          </div>
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
                            <Zoomy>
                              <Image src={relationshipMap} loading="lazy" placeholder="blur" className="bg-[#DDDAE3] rounded-lg" alt="research plan" />
                            </Zoomy>  
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
                            <Zoomy>
                              <Image src={researchPlan} loading="lazy" placeholder="blur" className="bg-[#DDDAE3] rounded-lg" alt="Research plan" />
                            </Zoomy>
                          </div>
                          <p className="mt-4 text-lg tracking-tight text-midnight-800">
                            I planned the questions with our team then took to the streets and asked people around Manchester their thoughts.
                          </p>
                          <div className="mt-6 cursor-zoom-in">
                          <Zoomy>
                              <Image src={streetQPlan} loading="lazy" placeholder="blur" className="bg-[#DDDAE3] rounded-lg p-6" alt="Planning for street interviews" />
                          </Zoomy>
                          </div>
                          <p className="mt-4 text-lg tracking-tight text-midnight-800">
                            We then card sorted the results into different types of buyers, then I created personas matching people to shopping behaviours and business opportunities, 
                            which became invaluable when designing many parts of the consumer UI.
                          </p>
                          <div className="mt-6 cursor-zoom-in">
                            <Zoomy>
                              <Image src={personas} loading="lazy" placeholder="blur" className="rounded-lg" alt="Four of the personas created" />
                            </Zoomy>
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
                            <Zoomy>
                              <Image src={wireframeNV} loading="lazy" placeholder="blur" className="rounded-lg" alt="Wireframes of the NV application process" />
                            </Zoomy>
                          </div>
                          <p className="mt-4 text-lg tracking-tight text-midnight-800">
                            Due to the size of the undertaking (quoting, eligibility checking, applications, an account) I formalized a process diagram in Miro to share how everything could fit together.
                          </p>
                          <div className="mt-6 flex flex-row gap-4">
                            <div className="w-1/2">
                            <Zoomy>
                              <Image src={featureMap} loading="lazy" placeholder="blur" className="rounded-lg" alt="A map of how the different vehicle retailing features fit together" />
                            </Zoomy>
                            </div>
                            <div className="w-1/2">
                            <Zoomy>
                              <Image src={flowOptions} loading="lazy" placeholder="blur" className="rounded-lg" alt="Different options placed on the ideas wall." />
                            </Zoomy>
                            </div>
                          </div>
                          <p className="mt-4 text-lg tracking-tight text-midnight-800">
                            After lots of coffee, hundreds of variations and a few review sessions, the first designs for the new finance calculators, applications, and checkout were presented end-to-end. 
                          </p>
                          <div className="mt-6 cursor-zoom-in">
                            <Zoomy>
                              <Image src={productPages} loading="lazy" placeholder="blur" className="rounded-lg" alt="Some samples of pages in the web app." />
                            </Zoomy>
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
                            <Zoomy>
                              <Image src={analyticsNV} loading="lazy" placeholder="blur" className="rounded-lg" alt="Some samples of pages in the web app." />
                            </Zoomy>
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
                            <Zoomy>
                              <Image src={ABWidget} loading="lazy" placeholder="blur" className="rounded-lg" alt="Some samples of pages in the web app." />
                            </Zoomy>
                          </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </header>
          </div>
          {/* Right col */}
            <motion.div 
              className="w-full max-w-full md:max-w-[50%] 2xl:max-w-[40%] order-1 md:order-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 70, delay: initialWindowWidth > 767 ? 1 : 0, duration: 1.5 }}
              >
            <motion.ol 
              style={{ y }}
              role="list" 
              className="rounded-t-xl px-2 py-2 xs:px-4 xs:py-4 w-full flex flex-row gap-2 overflow-x-scroll overflow-y-hidden md:overflow-visible md:gap-4 ease-[cubic-bezier(0.16,0.84,0.44,1)] duration-[600ms] h-1/2 sm:h-2/3 md:h-auto md:relative md:top-0 md:px-0 md:py-0 md:bg-transparent md:shadow-[0] md:border-0 md:flex-col md:pr-4 md:backdrop-blur-[0px]"
              >
              {/* CAUSING HYDRATION ISSUES? */}
              {NVImages.map((images) => (
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
              {isDesktopOrLaptop && ( 
                <ContactBox useContainerQuery={true} flexClass="@xs:flex-row"/>
              )} 
            </motion.ol>
            </motion.div>
          </div>
        </div>
        {!isDesktopOrLaptop && (
        <div className="px-2 xs:px-4">
          <ContactBox useContainerQuery={false} flexClass="md:flex-row" />
        </div>
        )}
      </motion.div>
    </>
  )
}