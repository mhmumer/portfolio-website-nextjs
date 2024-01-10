'use server'
import { Resend } from 'resend'
const resend = new Resend("re_3yPCLHND_4ujaRsKoNYMjQKQqvGU4RV8h")



const sendEmail = async (formData :FormData) => {
   const senderEmail = formData.get('senderEmail')
   const message = formData.get('message')
   console.log(senderEmail)
   console.log(message)

   
   try {
      await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'rawalaumer@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      text: `${message} \n Email By: ${senderEmail}` as string,

   })
   } catch (error) {
      console.log(error)
   }
   
}
export default sendEmail