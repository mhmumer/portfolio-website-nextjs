'use client'
import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import Image from 'next/image'
import { projectsData } from '@/lib/data'
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'

const ProjectsMob = () => {
  return (
     <section id="projects" className='scroll-mt-28 mb-28'>
        
        <div>
           {
              projectsData.map((project, index) => (
                 <React.Fragment key={index}>
                    <ProjectMob {...project}/>
                 </React.Fragment>
                 
              ))
           }
        </div>
    </section>
  )
}

type ProjectsProp = (typeof projectsData)[number]

function ProjectMob({
   title,
   description,
   tags,
   imageUrl,
   link
}: ProjectsProp) {
   const ref=useRef<HTMLElement>(null)
   

   return <>
      
   <section ref={ref} className='bg-gray-100 sm:hidden antialiased text-gray-900 wrapper'>
      
      <Image src={imageUrl} alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md"/>
      
      <div className="relative px-4 -mt-16  ">
   <div className="bg-white p-6 rounded-lg shadow-lg">
    
    
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{title}</h4>
 
  <p className="mt-1">
    {description} <br /><Link href={link} className='text-blue-600  hover:text-black/[0.7] hover:underline  '>Check it out</Link>
  </p>
       
      
    
  </div>
 </div>
      
      
   </section>
   </>
}

export default ProjectsMob