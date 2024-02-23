import { Manrope } from 'next/font/google'

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tim Vernaeve',
  description: 'Creative Web Developer'
}

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${manrope.className} no-scrollbar`}>
      <body>{children}</body>
    </html>
  )
}
