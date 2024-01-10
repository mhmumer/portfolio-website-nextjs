
import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import sendEmail from '@/lib/sendEmails'


export const Contact = () => {
   
   const action = async (formData: FormData) => {
      "use server"
      await sendEmail(formData)
   }

  return (
     <section id='contact' className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'>
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-gray-700 -mt-6'>Please Contact me directly at <a className='underline' href="mailto:rawalaumer@gmail.com">rawalaumer@gmail.com</a> or through this form</p>

        <form action={action} className='mt-10 flex  flex-col' >
           <input placeholder='Enter Your Email' className='h-14 px-4 rounded-lg border border-black/10 ' type="email" name="senderEmail" required maxLength={500}/>
           <textarea  placeholder='Enter Your Message' className='h-52 my-3 rounded-lg border border-black/10 p-4' name="message" id="" cols={30} required rows={10} maxLength={5000}></textarea>
           <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950'>Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/></button>
        </form>
    </section>
  )
}
