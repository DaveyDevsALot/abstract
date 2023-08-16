import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '../app/components/ui/footer/Footer'
import { Header } from '../app/components/ui/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'David R Coulombe',
  description: 'Designer, Developer, Smiley',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
