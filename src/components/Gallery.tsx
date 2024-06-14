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
import fitcheckImage from '@/images/resources/fitcheckp6.png';


const workImages = [
  {
    title: 'Title',
    description:
      'Description.',
    type: 'Type',
    background: 'bg-cardGradDark',
    image: function NVBuyNow() {
      return (
        <motion.li
          key="title1"
          role="listitem"
          className="relative w-full h-full flex items-center justify-center"
        >
          <Zoomy>
            <Image src={JDEFLogin} className="h-[115%] object-contain" alt="" />
          </Zoomy>
        </motion.li>
      )
    },
  },
  {
    title: 'Title2',
    description:
      'Description2.',
    type: 'Type2',
    background: 'bg-cardGradDark',
    image: function NVBuyNow() {
      return (
        <motion.li
          key="title2"
          role="listitem"
          className="relative w-full h-full flex items-center justify-center"
        >
          <Zoomy>
            <Image src={JDEFInProgress} className="h-[115%] object-contain" alt="" />
          </Zoomy>
        </motion.li>
      )
    },
  },
  {
    title: 'Title3',
    description:
      'Description3.',
    type: 'Type3',
    background: 'bg-cardGradDark',
    image: function NVBuyNow() {
      return (
        <motion.li
          key="title3"
          role="listitem"
          className="relative w-full h-full flex items-center justify-center"
        >
          <Zoomy>
            <Image src={JDEFRecord} className="h-[115%] object-contain" alt="" />
          </Zoomy>
        </motion.li>
      )
    },
  },
  {
    title: 'Title4',
    description:
      'Description4.',
    type: 'Type4',
    background: 'bg-cardGradDark',
    image: function NVBuyNow() {
      return (
        <motion.li
          key="title4"
          role="listitem"
          className="relative w-full h-full flex items-center justify-center"
        >
          <Zoomy>
            <Image src={CWMedical} className="h-[115%] object-contain" alt="" />
          </Zoomy>
        </motion.li>
      )
    },
  },
  {
    title: 'Title5',
    description:
      'Description5.',
    type: 'Type5',
    background: 'bg-cardGradDark',
    image: function NVBuyNow() {
      return (
        <motion.li
          className="relative w-full h-full flex items-center justify-center"
        >
          <Zoomy>
            <Image src={JDEFRecord} className="h-[115%] object-contain" alt="" />
          </Zoomy>
        </motion.li>
      )
    },
  },

]

export function Gallery() {

  // const workContainerVariants = ({
  //   default: { scale: 1, y: 0 },
  //   hover: { scale: 0.98, y: -2 },
  // })

  return (
    <motion.div key={2}>
      <section
        id="gallery"
        className="relative px-2 xs:px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-8"
      >
        {workImages.map((images) => (
          <motion.ul layout
            role="list"
            id={images.title}
            key={images.title}
            className={`w-full h-[496px] flex items-center justify-center rounded-4xl md:rounded-5xl xl:rounded-6xl ${images.background ? `${images.background}` : 'bg-cardGrad'}`}
          >
            <images.image />
          </motion.ul>
        ))}
      </section>
    </motion.div>
  )
}