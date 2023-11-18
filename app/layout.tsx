import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import NextTopLoader from "nextjs-toploader";
import Header from './(components)/Header'
import Footer from './(components)/Footer'
import Line from './(components)/Line'


const poppins = Poppins({ subsets: ['latin'], weight:['100','400','700'] })

export const metadata: Metadata = {
  title: 'Pixie Salon',
  description: 'Made by Modubix',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={poppins.className}>
      {/* <NextTopLoader initialPosition={0.2} showSpinner={false} /> */}
      <Header/>
        {children}
      <Line/> 
      <Footer/>      
      </body>
      
    </html>
  )
}
