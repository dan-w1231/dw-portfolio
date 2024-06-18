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
    } & ({ image: () => JSX.Element; video?: never } | { video: string; image?: never })>;
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
        {workImages.map((item, index) => (
          <motion.ul layout
            role="list"
            variants={workContainerVariants}
            whileHover="hover"
            id={item.title}
            key={index}
            className={`w-full  min-h-32 flex items-center justify-center rounded-4xl md:rounded-5xl xl:rounded-6xl ${item.background ? `${item.background}` : 'bg-cardGrad'}`}
          >
            {item.video && (
            <iframe
              src={item.video}
              className="aspect-video w-full h-full rounded-4xl md:rounded-5xl xl:rounded-6xl"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            )}
              {item.image && (
              <>{item.image()}</>
              )}
          </motion.ul>
        ))}
      </section>
    </motion.div>
  )
}

