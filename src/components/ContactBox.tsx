'use client'
import Image from 'next/image'
import toast from "react-hot-toast";
import { GridPattern } from '@/components/GridPattern'
import arrow from '@/images/resources/arrowDown.svg'
import Form from './ContactForm/Form'
import { processClasses } from '@/app/utils/processClasses'

export function ContactBox({ useContainerQuery, flexClass }: { useContainerQuery?: boolean, flexClass?: string}) {

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
      className="max-w-screen-2xl mt-2 xs:mt-4 sm:pb-16 m-auto w-full"
    >
      <div className="absolute pointer-events-none inset-x-0 bottom-0 top-1/2 text-midnight-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative">
        <div className={processClasses(`@container bg-cardGrad rounded-4xl rounded-tr-8xl backdrop-blur-[140px] shadow-xl rounded-4xl md:rounded-5xl xl:rounded-6xl`, useContainerQuery)}>
          <div className={processClasses(`flex flex-col xl:flex-row gap-4 md:gap-10 px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32`, useContainerQuery)}>
            <div
                id="contactStart"
                className={processClasses(`w-full xl:w-1/2`, useContainerQuery)}
              >
              <div className={processClasses(`font-display text-5xl font-extrabold tracking-tight text-blurple sm:text-6xl`, useContainerQuery)}>
                <span className="block text-midnight-900">Reach out.</span>
                <span onClick={copyEmail} className={processClasses(`md:underline border-none text-4xl sm:text-6xl cursor-pointer`, useContainerQuery)}>
                  {email}
                </span>  
              </div>
              <p className="mt-4 text-2xl tracking-tight text-midnight-700 flex gap-2">
                Or fill out this form and I'll get back to you.<Image src={arrow} alt="arrow pointing to form" className={processClasses(`xl:-rotate-90`, useContainerQuery)}/>
              </p>
            </div>
            <div id="contactFormArea" className={processClasses(`relative w-full md:w-half xl:max-w-[580px] xl:h-auto`, useContainerQuery)}>
              <Form useContainerQuery={useContainerQuery} flexClass={flexClass}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
  
