import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '../app/components/ui/footer/Footer'
import { Header } from '../app/components/ui/header/Header'
import dynamic from 'next/dynamic'

const NoSSR = dynamic(() => import('../app/components/ui/dateTime/DateTime'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'David R Coulombe',
  description: 'Designer, Developer, Smiley',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Header />
        </nav>
          {children}
        <footer>
          <Footer />
          <NoSSR />
        </footer>
      </body>
    </html>
  )
}