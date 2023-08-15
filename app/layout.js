import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/app/components/ui/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'David R Coulombe',
  description: 'Designer, Developer, Smiley',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}