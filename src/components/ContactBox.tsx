'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import toast from "react-hot-toast";
import { GridPattern } from '@/components/GridPattern';
import { Arrow } from '@/components/Arrow';
import Form from './ContactForm/Form';
import { processClasses } from '@/app/utils/processClasses';
import { useIsMobile } from '@/app/utils/useIsMobile';

export function ContactBox({ useContainerQuery, parentClass, flexClass }: { useContainerQuery?: boolean, parentClass?: string, flexClass?: string}) {

  const isMobile = useIsMobile();

  const email = "dan@dwdesign.io";
  
  const copyEmail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigator.clipboard.writeText(email);
    toast.success('Email copied to clipboard');
  };

  return (
    <section
      id="contactBox"
      aria-labelledby="contactBox-Title"
      className={`max-w-screen-2xl m-auto w-full ${parentClass}`}
    >
      <div className="absolute pointer-events-none h-[308px] inset-x-0 bottom-0 top-1/2 text-midnight-900/10 dark:text-ice-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative">
        <div className={processClasses(`@container bg-cardGrad dark:bg-cardGradDark rounded-tr-8xl backdrop-blur-[140px] shadow-xl dark:shadow-xlD rounded-4xl md:rounded-5xl xl:rounded-6xl`, useContainerQuery)}>
          <div className={processClasses(`flex flex-col xl:flex-row gap-4 md:gap-10 px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32`, useContainerQuery)}>
            <div
                id="contactStart"
                className={processClasses(`w-full xl:w-1/2`, useContainerQuery)}
              >
              <div className={processClasses(`font-display text-5xl font-extrabold tracking-tight text-blurple-900 sm:text-6xl`, useContainerQuery)}>
                <div id="contactText">
                  <span className="block text-midnight-900 dark:text-ice-900 no-underline">Reach out.</span>
                </div>
                
                <div id="contactEmail" className="flex flex-row items-center justify-start">
                {isMobile ? ( 
                  <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                    <a href={`mailto:${email}`} className={processClasses(`underline border-none text-4xl sm:text-6xl cursor-pointer`, useContainerQuery)}>
                      {email}
                    </a>
                    <button onClick={copyEmail} className="font-sans text-sm tracking-wide font-normal py-1 px-3 rounded-full bg-transparent text-blurple-900 border border-blurple-900">
                        COPY
                    </button>
                  </div>
                  ) : (  
                    <span onClick={copyEmail} className={processClasses(`underline border-none text-4xl sm:text-6xl cursor-pointer`, useContainerQuery)}>
                      {email}
                    </span>
                  )}
                </div>
              </div>
              <p className="mt-4 text-2xl tracking-tight text-midnight-700 dark:text-ice-700 flex items-center gap-2">
                Or fill out this form and I'll get back to you<Arrow className={processClasses(`xl:-rotate-90 text-midnight-900 dark:text-ice-900` , useContainerQuery)}/>
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
  
