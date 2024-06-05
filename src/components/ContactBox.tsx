'use client'
import Image from 'next/image'
import toast from "react-hot-toast";
import { GridPattern } from '@/components/GridPattern'
import arrow from '@/images/resources/arrowDown.svg'
import Form from './ContactForm/Form'

export function ContactBox() {

  const email = "dan@dwdesign.io";
  const copyEmail = (event: React.MouseEvent) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      navigator.clipboard.writeText(email);
      toast.success('Email copied to clipboard');
    }
  };

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
        <div className="bg-cardGrad rounded-4xl rounded-tr-8xl backdrop-blur-[60px] shadow-xl pt-px rounded-4xl md:rounded-5xl xl:rounded-6xl">
          <div className="flex flex-col xl:flex-row gap-4 md:gap-10 px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <div
                id="contactIntroText"
                className="w-full xl:w-1/2"
              >
              <div className="font-display text-5xl font-extrabold tracking-tight text-blurple sm:text-6xl">
                <span className="block text-midnight-900">Reach out.</span>
                <span onClick={copyEmail} className="md:underline border-none text-4xl sm:text-6xl cursor-pointer">
                  {email}
                </span>  
              </div>
              <p className="mt-4 text-2xl tracking-tight text-midnight-700 flex gap-2">
                Or fill out this form and I'll get back to you.<Image src={arrow} alt="arrow pointing to form" className="xl:-rotate-90" />
              </p>
            </div>
            <div id="contactFormArea" className="relative w-full md:w-half xl:max-w-[450px] xl:h-auto">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
  
