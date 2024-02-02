import './globals.css'
import { Alef } from 'next/font/google'

const alef = Alef({ weight: '400', subsets: ['hebrew'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alef.className}>{children}</body>
    </html>
  )
}
