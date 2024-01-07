'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {BsArrowRight, BsLinkedin} from "react-icons/bs"
import { HiDownload } from 'react-icons/hi'
import cv from '@/public/cv.png'
import photo from '@/public/img.png'
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
  return (
     <section id="home" className='mb-28 max-w-[50rem] text-center scroll-mt-28 sm:mb-0'>
        <div className='flex items-center justify-center'>
           <div className='relative'>
              <motion.div
                 initial={{ opacity: 0, scale: 0 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{type:"tween", duration:0.2}}
              >
            <Image src={photo
            
            } alt='Umer Portrait' width="192" height="192" quality="95" priority={true} className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl' />
                 </motion.div>
              <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏼
          </motion.span>
           </div>
        </div>
        <motion.h1 className=' font-mono mb-10 mt-4 px-4  font-medium  sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
            <span className="text-4xl font-bold !leading-[2.5]">Greetings from the digital realm! <br /></span>
        <span className="text-3xl">A spirited developer on a quest to turn dreams into code and ideas into reality</span>
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        >
           <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>Contact me here <BsArrowRight className="group-hover:translate-x-3 transition opacity-70"/>{" "}
           </Link>
           <a href="/cv.png" download={true} className='bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-50 active:scale-105 transition group border border-black/10'>Download CV <HiDownload className="group-hover:translate-y-1 transition opacity-70"/></a>
           <a
          className="bg-white p-4 text-gray-900 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
          href="https://www.linkedin.com/in/muhammad-umer-siraj-3a0b7226a/"
          target="_blank"
        >
          <BsLinkedin />
           </a>
           <a
          className="bg-white p-4 text-gray-900 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 "
          href="https://github.com/mhmumer"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
            </motion.div>

    </section>
  )
}


