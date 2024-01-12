'use client'
import React from 'react'
import { educationData } from '@/lib/data';


export default function Education() {
  return (
     <section className='mb-8 sm:mb-8'>
        <h2 className="text-3xl  font-medium capitalize mb-8 text-center">Education</h2>
        
           {
              educationData.map((item, index) => (
                 <React.Fragment key={index}>
                    
                       



<div className="max-w-lg p-10 mb-10 bg-[#eceaea] border border-gray-200 rounded-lg shadow">
    
        <h5 className="mb-2 text-2xl font-bold text-gray-900">{item.title}</h5>
    
    <p className="mb-3 font-normal text-gray-700">{item.description}</p>
    <a href={item.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
        Verify
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
                       </a>
                       
</div>


           </React.Fragment>))
           }
                 
    </section>
  )
}
