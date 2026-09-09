import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

// TODO: set this to your deployed domain so social share cards resolve correctly.
const SITE_URL = 'https://ahmedalfeysani.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Ahmed Alfey Sani — Full-Stack Developer & AI Engineer',
  description:
    'Ahmed Alfey Sani is a Full-Stack Developer and AI Engineer building production software for Unilever, bKash and Olympic at Intelligent Machines. Software Engineering @ IUT, graduating 2026.',
  keywords: [
    'Ahmed Alfey Sani',
    'Full-Stack Developer',
    'AI Engineer',
    'Software Engineer',
    'React',
    'Next.js',
    'Node.js',
    'Spring Boot',
    'Machine Learning',
    'Portfolio',
    'Bangladesh',
  ],
  authors: [{ name: 'Ahmed Alfey Sani' }],
  creator: 'Ahmed Alfey Sani',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ahmed Alfey Sani — Full-Stack Developer & AI Engineer',
    description:
      'Portfolio of Ahmed Alfey Sani — full-stack and AI engineering work, research, and projects.',
    url: SITE_URL,
    siteName: 'Ahmed Alfey Sani',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Alfey Sani — Full-Stack Developer & AI Engineer',
    description:
      'Portfolio of Ahmed Alfey Sani — full-stack and AI engineering work, research, and projects.',
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#f8fafc',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[10001] focus:rounded-lg focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
