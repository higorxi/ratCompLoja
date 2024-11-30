import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Cart } from '@/components/cart'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rat Comp - Thai Shirts and Sports Articles',
  description: 'Quality Thai shirts and sports articles for the fashion-forward athlete',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Cart />
      </body>
    </html>
  )
}

