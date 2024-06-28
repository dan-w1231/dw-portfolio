'use client'
import { motion, useTransform, useScroll } from 'framer-motion';
import React, { useRef, useEffect } from "react";
import { ContactBox } from '@/components/ContactBox';
import Zoomy from '@/components/HOC/Zoomy';
import Image from 'next/image';
import { GalleryHero } from '@/components/GalleryHero';
import { useMediaQuery } from 'react-responsive';
import { Gallery } from '@/components/Gallery';
import { NextPreviousArticle } from '@/components/NextPreviousArticle';
import { useIsMobile } from '@/app/utils/useIsMobile';

// Gallery Images
import JDEFLogin from '@/images/resources/jdefLogin.png';
import JDEFRecord from '@/images/resources/jdefRecord.png';
import JDEFInProgress from '@/images/resources/jdefInProgress.png';
import CWMedical from '@/images/resources/connectedWorker-Medical.png';
import CWIndustry from '@/images/resources/jdefConceptDark.png';
import CWTesting from '@/images/resources/connectedWTesting.png';
import CWTestingB from '@/images/resources/connectedWTesting2.png';


// Article Images

const workImages = [
  {
    title: 'Login',
    description:
      'Logging in to the JDEF app.',
    background: 'bg-cardGradDark',
    image: function Login() {
      const isMobile = useIsMobile();
      return (
        <motion.li
          key="login"
          role="listitem"
          className="relative w-full h-full flex items-center justify-center p-8"
        >
          <Zoomy>
            <motion.div layoutId="JDEFLogin" layout="preserve-aspect" key="556" className="w-full h-full">
              <Image src={JDEFLogin} width={ isMobile ? 768 : 1457} objectFit="contain" className="h-full object-contain translate-z-0" alt="" />
            </motion.div>
          </Zoomy>
        </motion.li>
      )
    },
  },
  {
    title: 'In progress',
    description:
      'A job in progress.',
    background: 'bg-cardGradDark',
    image: function InProgress() {
      const isMobile = useIsMobile();
      return (
        <motion.li
          key="title2"
          role="listitem"
          className="relative w-full h-full flex items-center justify-center p-8"
        >
          <Zoomy>
            <motion.div layoutId="JDEFInProgress" layout="preserve-aspect" key="557" className="w-full h-full">
              <Image src={JDEFInProgress} width={ isMobile ? 768 : 1457} objectFit="contain" className="h-full object-contain translate-z-0" alt="" />
            </motion.div>
          </Zoomy>
        </motion.li>
      )
    },
  },
  {
    title: 'Testing.',
    description:
      'Testing the MVP.',
    background: 'bg-cardGradDark',
    image: function Testing() {
      const isMobile = useIsMobile();
      return (
        <motion.li
          className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-4xl md:rounded-5xl xl:rounded-6xl"
        >
          <Zoomy>
            <motion.div layoutId="CWTesting" layout="preserve-aspect" key="558" className="w-full h-full">
              <Image src={CWTesting} width={ isMobile ? 768 : 1457} objectFit="contain" className="object-cover translate-z-0" alt="" />
            </motion.div>
          </Zoomy>
        </motion.li>
      )
    },
  },
  {
    title: 'Testing2',
    description:
      'Testing the MVP.',
    background: 'bg-cardGradDark',
    image: function CWTesting2() {
      const isMobile = useIsMobile();
      return (
        <motion.li
          className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-4xl md:rounded-5xl xl:rounded-6xl"
        >
          <Zoomy>
            <motion.div layoutId="CWTestingB" layout="preserve-aspect" key="559" className="w-full h-full">
              <Image src={CWTestingB} width={ isMobile ? 768 : 1457} objectFit="contain" className="object-cover translate-z-0" alt="" />
            </motion.div>
          </Zoomy>
        </motion.li>
      )
    },
  },
  {
    title: 'JobRecordConcept',
    description:
      'Concept for the job record.',
    background: 'bg-cardGradDark',
    image: function JobRecord() {
      const isMobile = useIsMobile();
      return (
        <motion.li
          key="title3"
          role="listitem"
          className="relative w-full h-full flex items-center justify-center p-8"
        >
          <Zoomy>
            <motion.div layoutId="JDEFRecord" layout="preserve-aspect" key="560" className="w-full h-full">
              <Image src={JDEFRecord} width={ isMobile ? 768 : 1457} objectFit="contain" className="h-full object-contain translate-z-0" alt="" />
            </motion.div>
          </Zoomy>
        </motion.li>
      )
    },
  },
  {
    title: 'ActivityScreen',
    description:
      'Concept for viewing the activity screen.',
    background: 'bg-cardGradDark',
    image: function ActivityScreen() {
      const isMobile = useIsMobile();
      return (
        <motion.li
          key="title4"
          role="listitem"
          className="relative w-full h-full flex items-center justify-center p-8"
        >
          <Zoomy>
            <motion.div layoutId="CWMedical" layout="preserve-aspect" key="561" className="w-full h-full">
              <Image src={CWMedical} width={ isMobile ? 768 : 1457} objectFit="contain" className="h-full object-contain translate-z-0" alt="" />
            </motion.div>
          </Zoomy>
        </motion.li>
      )
    },
  },
  {
    title: 'UserRecord',
    description:
      'Concept for viewing the user record.',
    background: 'bg-cardGradDark',
    image: function UserRecord() {
      const isMobile = useIsMobile();
      return (
        <motion.li
          key="title5"
          role="listitem"
          className="relative w-full h-full flex items-center justify-center p-8"
        >
          <Zoomy>
            <motion.div layoutId="CWIndustry" layout="preserve-aspect" key="562" className="w-full h-full">
              <Image src={CWIndustry} width={ isMobile ? 768 : 1457} objectFit="contain" className="h-full object-contain translate-z-0" alt="" />
            </motion.div>
          </Zoomy>
        </motion.li>
      )
    },
  },

]

export default function ConnectedWorker() {

  const previousArticle = {
    href: '/fitnesscheck',
    text: 'Previous',
  };

  const nextArticle = {
    href: '/dealerplatform',
    text: 'Next',
  };

  // Scroll to top on load due to next/link conflict with framer motion
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);
  }, []);

  return (
    <>
      <motion.div
        id="main"
        key="jobdemands"
        className="relative w-screen mx-auto mt-2 xs:mt-4"
      >
        <div className="relative mx-auto mt-2 xs:mt-4 xl:mt-4" key={4}>
          <motion.div
            key="contentHero"
          >
            <GalleryHero title="Connected Worker" description="A project with the materials science company Gore, to provide insight into workplace injury in high risk-factor industries, and empower companies to reduce it." />
          </motion.div>
          <motion.div
            key="contentGallery"
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true, amount: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, delay: 1.4, duration: 1.5, staggerChildren: 0.5 }}
            className="w-full max-w-screen-2xl mx-auto mt-2 xs:mt-4"
          >
            <Gallery workImages={workImages} />
          </motion.div>
          <motion.div
            className="relative z-50"
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, duration: 1.5 }}
          >
            <NextPreviousArticle previousArticle={previousArticle} nextArticle={nextArticle} />
            <ContactBox useContainerQuery={false} parentClass="mt-2 sm:pb-16 xs:mt-4 px-2 xs:px-4" flexClass="md:flex-row" />
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}