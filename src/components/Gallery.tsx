'use client'
import Image from 'next/image';
import Link from 'next/link';
import { ContactBox } from '@/components/ContactBox';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Container } from '@/components/Container';
import { Arrow } from '@/components/Arrow';
import Zoomy from '@/components/HOC/Zoomy';

import JDEFLogin from '@/images/resources/jdefLogin.png';
import JDEFRecord from '@/images/resources/jdefRecord.png';
import JDEFRecordDark from '@/images/resources/jdefConceptDark.png';
import JDEFInProgress from '@/images/resources/jdefInProgress.png';
import CWMedical from '@/images/resources/connectedWorker-Medical.png';
import CWIndustry from '@/images/resources/jdefConceptDark.png';
import CWTesting from '@/images/resources/connectedWTesting.png';
import CWTestingB from '@/images/resources/connectedWTesting2.png';
import fitcheckImage from '@/images/resources/fitcheckp6.png';


const workImages = [
  {
    title: 'Login',
    description:
      'Logging in to the JDEF app.',
    background: 'bg-cardGradDark',
    image: function Login() {
      return (
        <motion.li
          key="login"
          role="listitem"
          className="relative w-full h-full flex items-center justify-center p-8"
        >
          <Zoomy>
            <Image src={JDEFLogin} className="h-[115%] object-contain translate-z-0" alt="" />
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
      return (
        <motion.li
          key="title2"
          role="listitem"
          className="relative w-full h-full flex items-center justify-center p-8"
        >
          <Zoomy>
            <Image src={JDEFInProgress} className="h-[115%] object-contain translate-z-0" alt="" />
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
      return (
        <motion.li
          className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-4xl md:rounded-5xl xl:rounded-6xl"
        >
          <Zoomy>
            <Image src={CWTesting} className="object-cover translate-z-0" alt="" />
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
      return (
        <motion.li
          className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-4xl md:rounded-5xl xl:rounded-6xl"
        >
          <Zoomy>
            <Image src={CWTestingB} className="object-cover translate-z-0" alt="" />
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
      return (
        <motion.li
          key="title3"
          role="listitem"
          className="relative w-full h-full flex items-center justify-center p-8"
        >
          <Zoomy>
            <Image src={JDEFRecord} className="h-[115%] object-contain translate-z-0" alt="" />
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
      return (
        <motion.li
          key="title4"
          role="listitem"
          className="relative w-full h-full flex items-center justify-center p-8"
        >
          <Zoomy>
            <Image src={CWMedical} className="h-[115%] object-contain translate-z-0" alt="" />
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
      return (
        <motion.li
          key="title4"
          role="listitem"
          className="relative w-full h-full flex items-center justify-center p-8"
        >
          <Zoomy>
            <Image src={CWIndustry} className="h-[115%] object-contain translate-z-0" alt="" />
          </Zoomy>
        </motion.li>
      )
    },
  },

]

export function Gallery() {

  const workContainerVariants = ({
    default: { scale: 1, y: 0 },
    hover: { scale: 0.98, y: -2 },
  })

  return (
    <motion.div key={2}>
      <section
        id="gallery"
        className="relative px-2 xs:px-4 w-full grid grid-cols-1 gap-2 xs:gap-4"
      >
        {workImages.map((images) => (
          <motion.ul layout
            role="list"
            variants={workContainerVariants}
            whileHover="hover"
            id={images.title}
            key={images.title}
            className={`w-full flex items-center justify-center rounded-4xl md:rounded-5xl xl:rounded-6xl ${images.background ? `${images.background}` : 'bg-cardGrad'}`}
          >
            <images.image />
          </motion.ul>
        ))}
      </section>
    </motion.div>
  )
}