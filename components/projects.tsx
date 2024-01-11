'use client'
import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll } from 'framer-motion'

const Projects = () => {
  return (
     <section id="projects" className='scroll-mt-28 mb-28'>
        <SectionHeading>Projects</SectionHeading>
        <div>
           {
              projectsData.map((project, index) => (
                 <React.Fragment key={index}>
                    <Project {...project}/>
                 </React.Fragment>
                 
              ))
           }
        </div>
    </section>
  )
}

type ProjectsProp = (typeof projectsData)[number]

function Project({
   title,
   description,
   tags,
   imageUrl,
   link
}: ProjectsProp) {
   const ref=useRef<HTMLElement>(null)
   const {scrollYProgress} = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"]
   })
   return <motion.section  ref={ref} style={{scale:scrollYProgress, opacity:scrollYProgress}} className='bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 group mb-3 sm:mb-8 last:mb-0'>
      <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
      <h3 className='text-2xl font-semibold text-gray-950'>{title}</h3>
      <p className='mt-2 leading-relaxed text-gray-700'>{description} <br /> <Link href={link} className='text-blue-600  hover:text-black/[0.7] hover:underline  '>Check it out</Link></p>
      <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
         {tags.map((tag, index) => (
            <li key={index} className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full '>{tag}</li>
         ))}
         </ul>
         
         <Image src={imageUrl} width={1000} height={1000} alt="Project I worked on" quality={95} className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40' />
      </div>
      
   </motion.section>
   
}

export default Projects