
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'BankBuster.net - Stop Overpaying on Your Mortgage',
  description: 'Professional mortgage consulting service. Get expert analysis of your loan documents for just $20. Save thousands on fees, rates, and closing costs.',
  keywords: 'mortgage consulting, loan analysis, closing costs, interest rates, credit repair, mortgage fees',
  authors: [{ name: 'BankBuster.net' }],
  openGraph: {
    title: 'BankBuster.net - Stop Overpaying on Your Mortgage',
    description: 'Professional mortgage consulting service. Get expert analysis for just $20.',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: 'favicon.ico', // 👈 Add this line for the favicon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
