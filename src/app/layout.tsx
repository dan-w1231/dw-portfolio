import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/tailwind.css'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

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
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
      )}
    >
      <head>
        <meta name="theme-color" content="#E1D4DE"/>
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
      <body className="relative min-w-screen flex overflow-x-hidden min-h-full flex-col bg-noise-pattern bg-radial-bg">
      <NavBar />
        {children}
      <Footer />
      </body>
    </html>
  )
}
