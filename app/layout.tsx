import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import '../src/index.css'

export const metadata: Metadata = {
  title: 'Omkar Mondkar - Full Stack Developer Portfolio',
  description: 'Full Stack Developer & Software Engineer with 5+ years of experience in React, Node.js, Python, and cloud solutions.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} bg-[#050505]`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-[#050505] text-white" suppressHydrationWarning>{children}</body>
    </html>
  )
}
