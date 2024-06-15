'use client'
import Image from 'next/image';
import Link from 'next/link';
import { ContactBox } from '@/components/ContactBox';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Container } from '@/components/Container';
import { Arrow } from '@/components/Arrow';
import Zoomy from '@/components/HOC/Zoomy';
interface GalleryProps {
  workImages: Array<{
    title: string;
    description: string;
    background: string;
    image: () => JSX.Element;
  }>;
}

export function Gallery({ workImages }: GalleryProps) {
  const workContainerVariants = {
    default: { scale: 1, y: 0 },
    hover: { scale: 0.98, y: -2 },
  };

  return (
    <motion.div key={2}>
      <section
        id="gallery"
        className="relative px-2 xs:px-4 w-full grid grid-cols-1 gap-2 xs:gap-4"
      >
        {workImages.map((images, index) => (
          <motion.ul layout
            role="list"
            variants={workContainerVariants}
            whileHover="hover"
            id={images.title}
            key={index}
            className={`w-full flex items-center justify-center rounded-4xl md:rounded-5xl xl:rounded-6xl ${images.background ? `${images.background}` : 'bg-cardGrad'}`}
          >
            <images.image />
          </motion.ul>
        ))}
      </section>
    </motion.div>
  )
}