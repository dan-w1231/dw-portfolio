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
import { useIsMobile } from '../utils/useIsMobile';

// Gallery Images
import Dashboard from '@/images/resources/dealerPlatformDash.png';
import CustomerRecord from '@/images/resources/dealerPlatformCustomer.png';
import Order from '@/images/resources/dealerPlatformOrder.png';
import BuildDeal from '@/images/resources/dealerPlatformSendDeal.png';
import SentDeal from '@/images/resources/dealerPlatformSent.png';

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
    title: 'Dashboard',
    description:
      'New dashboard homescreen.',
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
            <motion.div layoutId="Dashboard" layout="preserve-aspect" key="656" className="w-full h-full">
              <Image src={Dashboard} width={ isMobile ? 768 : 1457} objectFit="contain" className="h-full object-contain translate-z-0" alt="" />
            </motion.div>
          </Zoomy>
        </motion.li>
      )
    },
  },
  {
    title: 'Customer record',
    description:
      'A customer record showing vehicles of interest and activity.',
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
            <motion.div layoutId="CustomerRecord" layout="preserve-aspect" key="657" className="w-full h-full">
              <Image src={CustomerRecord} width={ isMobile ? 768 : 1457} objectFit="contain" className="h-full object-contain translate-z-0" alt="" />
            </motion.div>
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
      const isMobile = useIsMobile();
      return (
        <motion.li
          key="title2"
          role="listitem"
          className="relative w-full h-full flex items-center justify-center p-8"
        >
          <Zoomy>
            <motion.div layoutId="Order" layout="preserve-aspect" key="658" className="w-full h-full">
              <Image src={Order} width={ isMobile ? 768 : 1457} objectFit="contain" className="h-full object-contain translate-z-0" alt="" />
            </motion.div>
          </Zoomy>
        </motion.li>
      )
    },
  },
  {
    title: 'Send deal',
    description:
      'Building a deal to email to send to a customer account.',
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
            <motion.div layoutId="BuildDeal" layout="preserve-aspect" key="659" className="w-full h-full">
              <Image src={BuildDeal} width={ isMobile ? 768 : 1457} objectFit="contain" className="h-full object-contain translate-z-0" alt="" />
            </motion.div>
          </Zoomy>
        </motion.li>
      )
    },
  },
  {
    title: 'Deal sent',
    description:
      'Deal sent.',
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
            <motion.div layoutId="SentDeal" layout="preserve-aspect" key="660" className="w-full h-full">
              <Image src={SentDeal} width={ isMobile ? 768 : 1457} objectFit="contain" className="h-full object-contain translate-z-0" alt="" />
            </motion.div>
          </Zoomy>
        </motion.li>
      )
    },
  },
]

export default function DealerPlatform() {

  const previousArticle = {
    href: '/connectedworker',
    text: 'Previous',
  };

  // const nextArticle = {
  //   href: '/dealerplatform',
  //   text: 'Next',
  // };

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
            <GalleryHero
              title="iVendi Transact"
              description="An online showroom and deal management system I designed allowing retailers to view leads and manage deals, winning a number of innovation of the year awards."
              linkPreamble="This was designed as the retailer system for the "
              linkText="NewVehicle consumer platform."
              link="/newvehicle"
            />
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
            <NextPreviousArticle previousArticle={previousArticle} />
            <ContactBox useContainerQuery={false} parentClass="mt-2 sm:pb-16 xs:mt-4 px-2 xs:px-4" flexClass="md:flex-row" />
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}