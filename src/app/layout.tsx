import React from 'react';
import { type Metadata } from 'next';
import ModalRoot from '@/components/ModalRoot';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import clsx from 'clsx';
import '@/styles/tailwind.css';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { GridPattern } from '@/components/GridPattern';
import { FlowChart } from '@/components/FlowChart';
import Template from '@/app/template';
import Toasted from '@/components/Toasted'
import { ThemeProvider } from '@/components/HOC/ThemeContext'

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
      <ThemeProvider>
        <html
          lang="en"
          className={clsx(
            'h-full bg-[#E1D4DE] bg-lightBg dark:bg-[#1A1824] dark:bg-darkBg antialiased transition-bg duration-900',
            inter.variable,
          )}
        >
          <head>
          <script dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    var theme = localStorage.getItem("theme");
                    var isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
                    document.documentElement.classList.toggle('dark', isDark);
                    var content = isDark ? '#1A1824' : '#E1D4DE'; 
                    var metaThemeColor = document.querySelector('meta[name=theme-color]');
                    if (!metaThemeColor) {
                      metaThemeColor = document.createElement('meta');
                      metaThemeColor.setAttribute('name', 'theme-color');
                      document.getElementsByTagName('head')[0].appendChild(metaThemeColor);
                    }
                    metaThemeColor.setAttribute('content', content);
                  } catch (error) {
                    console.error('Error applying theme:', error);
                  }
                })();
              `,
            }}>
            </script>
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
            className="relative min-w-screen flex overflow-x-hidden min-h-full flex-col bg-lightBg bg-[#E1D4DE] bg-noisePattern before:absolute before:inset-0 before:content-[''] before:top-0 before:left-0 before:opacity-0 before:dark:opacity-100 before:transition-opacity before:duration-900 before:bg-darkBg z-[1] select-none"
            >
              <ModalRoot />
              <Toasted />
              <div key="gridPattern" className="absolute overflow-hidden w-1/3 top-[-40px] left-0 h-124 text-midnight-900/50 dark:text-ice-900/30 [mask-image:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.05))]">
                <GridPattern x="20%" />
              </div>
              <div key="flowChartPattern" className="absolute overflow-hidden w-3/4 lg:w-1/4 top-[-40px] right-0 lg:right-0 text-midnight-900/50 dark:text-ice-900/40 [mask-image:linear-gradient(rgba(255,255,255,0.2),transparent)]">
                <div className="right-[-90px]">
                  <FlowChart size="100%" />
                </div>
              </div>
              <NavBar />
                <Template>{children}</Template>
                <Analytics />
              <Footer />
            {/* </div>   */}
          </body>
        </html>
      </ThemeProvider>
  )
}
