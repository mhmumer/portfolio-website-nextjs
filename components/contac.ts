"use server";
import sendEmail from "@/lib/sendEmails";

export const action = async (formData: FormData) => {
    
    await sendEmail(formData);
  };
