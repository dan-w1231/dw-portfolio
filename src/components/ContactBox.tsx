'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { GridPattern } from '@/components/GridPattern'
import { Form } from './ContactForm/Form'
import arrow from '@/images/resources/arrowDown.svg'
import avatarImage from '@/images/avatars/avatar.png'

function TwitterIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" {...props}>
      <path d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066" />
    </svg>
  )
}

export function ContactBox() {
  return (
    <section
      id="contactBox"
      aria-labelledby="contactBox-Title"
      className="max-w-screen-2xl mt-2 xs:mt-4 px-2 xs:px-4 sm:pb-16 m-auto"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-midnight-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative">
        <div className="bg-white/60 rounded-4xl rounded-tr-8xl backdrop-blur shadow-lg pt-px rounded-4xl md:rounded-5xl xl:rounded-6xl">
          {/* AVATAR IMAGE
          <div className="absolute top-[0] right-[0px] h-24 w-24 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute top-0 right-0 inset-0 h-full w-full object-cover"
              src={avatarImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div> */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <div
                id="contactIntroText"
                className="w-full md:w-half"
                // className="w-full md:w-half px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32"
              >
              <div className="mt-8 font-display text-5xl font-extrabold tracking-tight text-blurple sm:text-6xl">
                <span className="block text-midnight-900">Feel free to reach out</span>
                <span className="block underline text-5xl sm:text-6xl">dan@dwdesign.io</span>
              </div>
              <p className="mt-4 text-2xl tracking-tight text-midnight-700 flex gap-2">
                Or fill out this nifty form and I'll get back to you<Image src={arrow} alt="arrow pointing to form" className="md:-rotate-90" />
              </p>
              <p className="mt-8">
                <Link
                  href="#"
                  className="inline-flex items-center text-base font-medium tracking-tight text-blue-600"
                >
                  <TwitterIcon className="h-10 w-10 fill-current" />
                  <span className="ml-4">Remove link put contact box instead</span>
                </Link>
              </p>
            </div>
            {/* <div id="contactFormArea" className="w-full md:w-half max-w-[450px]">
              <Form />
            </div> */}
            <div id="contactFormAreaTemp" className="w-full h-[280px] md:w-half max-w-[450px] bg-black bg-opacity-[0.06] rounded-3xl flex items-center justify-center">
              form with sendgrid wip
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
