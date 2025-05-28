import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Professional Nursing Portfolio',
  description: 'BSN Registered Nurse Portfolio showcasing experience and qualifications',
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  themeColor: '#1a237e',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}