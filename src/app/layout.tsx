import './globals.css'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'

const inter = Sora({ subsets: ['latin'], weight: ['100', '300', '400', '700'] })

export const metadata: Metadata = {
  title: 'Victor Gomez Portfolio',
  description: 'Victor Gomez portfolio'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
