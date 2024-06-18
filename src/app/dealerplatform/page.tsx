'use client'
import { motion, useTransform, useScroll } from 'framer-motion';
import React, { useRef, useEffect } from "react";
import { ContactBox } from '@/components/ContactBox';
import Zoomy from '@/components/HOC/Zoomy';
import Image from 'next/image';
import { GalleryHero } from '@/components/GalleryHero';
import { useMediaQuery } from 'react-responsive';
import { Gallery } from '@/components/Gallery';

// Gallery Images
import CustomerRecord from '@/images/resources/dealerPlatformCustomer.png';
import Order from '@/images/resources/dealerPlatformOrder.png';



// Article Images

const workImages = [
  {
    title: 'Transact',
    description:
      'A deal management system for vehicle retailers.',
    background: 'bg-cardGradDark',
    video: 'https://www.youtube.com/embed/PymHk-nW25w',
  },
  {
    title: 'Customer record',
    description:
      'A customer record showing vehicles of interest and activity.',
    background: 'bg-cardGradDark',
    image: function Login() {
      return (
        <motion.li
          key="login"
          role="listitem"
          className="relative w-full h-full flex items-center justify-center p-8"
        >
          <Zoomy>
            <Image src={CustomerRecord} className="h-[115%] object-contain translate-z-0" alt="" />
          </Zoomy>
        </motion.li>
      )
    },
  },
  {
    title: 'Order form',
    description:
      'A summary of an order showing current application status',
    background: 'bg-cardGradDark',
    image: function InProgress() {
      return (
        <motion.li
          key="title2"
          role="listitem"
          className="relative w-full h-full flex items-center justify-center p-8"
        >
          <Zoomy>
            <Image src={Order} className="h-[115%] object-contain translate-z-0" alt="" />
          </Zoomy>
        </motion.li>
      )
    },
  },
]

export default function DealerPlatform() {

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
        key="dealerplatform"
        className="relative w-screen mx-auto mt-2 xs:mt-4"
      >
        <div className="relative mx-auto mt-2 xs:mt-4 xl:mt-4" key={4}>
          <motion.div
            key="contentHero"
          >
            <GalleryHero title="iVendi Dealer Platform" description="An online showroom and deal management system I designed allowing retailers to view leads and manage deals, winning a number of innovation of the year awards." />
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
                viewport= {{ once: true, amount: 0.25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 70, duration: 1.5 }}
              >
              <ContactBox useContainerQuery={false} parentClass="mt-2 sm:pb-16 xs:mt-4 px-2 xs:px-4" flexClass="md:flex-row" />
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}