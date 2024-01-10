'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

const About = () => {
  return (
    
     <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
     >
         <SectionHeading>Personal Saga</SectionHeading>
        <p className="mb-3 text-xl font-medium font-mono">
        {`Hi, I'm Muhammad Umer, a developer exploring the wonders of coding. Proficient in Python, JavaScript, and TypeScript, I love building with Next.js. Recently, I've been diving into the world of generative AI, finding joy in its intricacies.`}</p>
        <p className="mt-4 text-xl font-medium font-mono">{`Beyond the screen, I'm just a teenager with a curious mind, always eager to learn and create. My portfolio is a humble showcase of my projects. Take a look, and let's chat about tech, coding, or anything else that sparks your interest!`}</p>
      

    </motion.section>
  )
}

export default About