import './globals.css'
import React from 'react'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import { Footer } from '../app/components/ui/footer/Footer'
import { Header } from '../app/components/ui/header/Header'
import { HealthCheck } from '../app/components/ui/healthCheck/HealthCheck'

const ClockWithNoSSR = dynamic(
  () => import('../app/components/ui/dateTime/DateTime'),
  {
    ssr: false,
  }
)
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'David R Coulombe',
  description: 'Designer, Developer, Smiley',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <Header />
        {children}
        <Footer />
        <ClockWithNoSSR />
        <HealthCheck />
      </body>
    </html>
  )
}
