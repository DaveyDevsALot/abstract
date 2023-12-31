import './globals.css'
import React from 'react'
import dynamic from 'next/dynamic'
import localFont from 'next/font/local'
import { Footer } from '../app/components/ui/footer/Footer'
import { Header } from '../app/components/ui/header/Header'
import { HealthCheck } from '../app/components/ui/healthCheck/HealthCheck'
import { MainWrapper } from '../app/components/ui/mainWrapper/MainWrapper'
const ClockWithNoSSR = dynamic(
  () => import('../app/components/ui/dateTime/DateTime'),
  {
    ssr: false,
  }
)

const FrankFont = localFont({
  src: '../public/duecredit2-regular-webfont.woff2',
  variable: '--font-frank',
})

export const metadata = {
  title: 'David R Coulombe',
  description: 'Designer, Developer, Smiley',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col ${FrankFont.variable} font-sans tracking-wide`}
      >
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
        <ClockWithNoSSR />
        <HealthCheck />
      </body>
    </html>
  )
}
