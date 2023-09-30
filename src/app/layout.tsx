import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';


export const metadata: Metadata = {
  title: 'Portfolio | Home',
  description: 'Welcome to my digital playground, where imagination meets execution.',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}<Analytics /></body>
    </html>
  )
}
