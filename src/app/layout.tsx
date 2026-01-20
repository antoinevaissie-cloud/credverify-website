import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CredVerify Global | Healthcare Credential Verification',
  description: 'Fast, reliable cross-border healthcare credential verification. Reduce credentialing time from months to weeks with our hybrid tech + services platform.',
  keywords: 'healthcare credentialing, medical credential verification, cross-border credentialing, primary source verification, PSV, healthcare compliance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
