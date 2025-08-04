import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ahmed Alfey Sani - FullStack Developer & Software Engineer',
  description: 'Portfolio of Ahmed Alfey Sani, a passionate FullStack Developer and Software Engineering student specializing in AI/ML technologies and modern web development.',
  keywords: 'Ahmed Alfey Sani, FullStack Developer, Software Engineer, AI/ML, React, Node.js, Spring Boot, Portfolio',
  authors: [{ name: 'Ahmed Alfey Sani' }],
  openGraph: {
    title: 'Ahmed Alfey Sani - FullStack Developer & Software Engineer',
    description: 'Portfolio showcasing innovative projects in web development and AI/ML applications',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}