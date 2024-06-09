import React from 'react';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import '@/styles/tailwind.css';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { GridPattern } from '@/components/GridPattern';
import { FlowChart } from '@/components/FlowChart';
import Template from '@/app/template';
import { Toaster } from 'react-hot-toast';
import { LightDarkToggle, useTheme } from '@/components/HOC/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Dan Wallace',
  description:
    'Digital Product / UX Designer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LightDarkToggle>
      <html
        lang="en"
        className={clsx(
          'h-full scroll-smooth bg-white antialiased dark:bg-darkBg',
          inter.variable,
        )}
      >
        <head>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <link
            rel="preconnect"
            href="https://cdn.fontshare.com"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
          />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
            />
          <link
            href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body
          className="relative min-w-screen flex overflow-x-hidden min-h-full flex-col bg-lightBg bg-[#E1D4DE] dark:bg-[#1A1824] dark:bg-darkBg bg-noisePattern"
          >
          <Toaster 
            position="bottom-center"
            toastOptions={{
              success: {  
                style: {
                  fontFamily: "Cabinet Grotesk",
                  alignItems: "flex-start",
                  letterSpacing: "-0.025em",
                  padding: "24px",
                  borderRadius: "38px",
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid #2AC355",
                },
              },
              error: {  
                style: {
                  fontFamily: "Cabinet Grotesk",
                  alignItems: "flex-start",
                  letterSpacing: "-0.025em",
                  padding: "24px",
                  borderRadius: "38px",
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid #FF3257",
                },
              }
          }}
          />
          <div key="gridPattern" className="absolute overflow-hidden w-1/3 top-[-40px] left-0 h-96 text-midnight-900/20 dark:text-ice-900/20 [mask-image:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.05))]">
            <GridPattern x="20%" />
          </div>
          <div key="flowChartPattern" className="absolute overflow-hidden w-3/4 lg:w-1/4 top-[-40px] right-0 lg:right-0 text-midnight-900/50 dark:text-ice-900/40 [mask-image:linear-gradient(rgba(255,255,255,0.2),transparent)]">
            <div className="right-[-90px]">
              <FlowChart size="100%" />
            </div>
          </div>
          <NavBar />
            <Template>{children}</Template>
          <Footer />
        </body>
      </html>
    </LightDarkToggle>
  )
}
