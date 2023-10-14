import Navigation from '@/components/system/Navigation/Navigation'
import './globals.css'
import { Inria_Sans } from 'next/font/google'
import { Scrollbar } from '@/components/system/scrollbar/scrollbar'

const inria = Inria_Sans({ subsets: ['latin'],weight: ['300','400','700']})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <meta name="theme-color" content="#D8652D"/>
      <meta name="msapplication-navbutton-color" content="#D8652D"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="#D8652D"/>

      <body className='bg-primary-light' style={inria.style}>
        {/* <Scrollbar elem={'body'} /> */}
        <Navigation />
        {children}
      </body>
    </html>
  )
}
