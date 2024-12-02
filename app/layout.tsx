import Navigation from '@/components/navigation'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FinDefender',
  description: 'FinDefender is a third party app to help you manage your finances and detect fraudulent transactions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-x-hidden"}>
        <Navigation />
        {children}
        <Toaster />
        <script src="https://home2.primesavey.com/script.js" async></script>
      </body>
    </html>
  )
}

