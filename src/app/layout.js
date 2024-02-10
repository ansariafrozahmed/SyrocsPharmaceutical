import { Inter } from 'next/font/google'
import './globals.css'
// import { Header } from '@/components/HeaderAndFooter/Header'
import Footer from '@/components/HeaderAndFooter/Footer'
import NewHeader from '@/components/HeaderAndFooter/NewHeader'
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Syrocs',
  description: 'Syrocs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
          showSpinner={false}
          easing="ease"
        />
        <NewHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
