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
      
   <section ref={ref} className='max-w-sm sm:hidden rounded overflow-hidden mt-8 shadow-lg top:mt-0'>
       <Image className="w-full" src={imageUrl} alt="project"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base">
      {description}
    </p>
  </div>
         <div className="px-6 pt-4 pb-2">
                     {tags.map((tag, index) => (
    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
    ))}
  </div>
   </section>
   </>
}

export default ProjectsMob