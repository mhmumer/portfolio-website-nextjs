import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'M. Umer | Portfolio Website',
  description: "Muhammad Umer's portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${inter.className} bg-[#f3eeef] text-gray-900 relative pt-28 sm:pt-36`} >
        <div className='bg-[#f8cccf] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#cec8fa] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <Header/>
        {children}
        
      </body>
    </html>
  )
}
