import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import biryanimanimg from "@/public/biryaniman.png";
import memorychatbotImg from "@/public/memorychatbot.png";
import portfolioImg from "@/public/portfolio.png";
import essaywriterbot from "@/public/essaywriterbot.png"
import { link } from "fs";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
 
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "A portfolio website built with react & Next.js, Typescript, Tailwind CSS, Framer Motion, React Emails & Resend, Vercel Hosting.",
    tags: ["Next.js","Typescript","Tailwind CSS"],
    imageUrl: portfolioImg,
    link:"#"
  },
  {
    title: "BiryaniMan",
    description:
      "A responsive frontend website developed using HTML, CSS and JavaScript and Animations",
    tags: ["HTML","CSS","JS"],
    imageUrl: biryanimanimg,
    link:"https://mhmumer.github.io/biryaniman/"
  },
  {
    title: "Memory ChatBot",
    description:
      "Memory ChatBot is a generative AI webapp made using python, Streamlit, Langcahin and OpenAI API.",
    tags: ["Python","Streamlit","OpenAI"],
    imageUrl: memorychatbotImg,
    link:""
  },
  {
    title: "Essay Writer Bot",
    description:
      "Essay Writer Bot is a generative AI webapp made using python, Streamlit, Langcahin and OpenAI API.",
    tags: ["Python","Streamlit","OpenAI"],
    imageUrl: essaywriterbot,
    link:"https://essay-writer.streamlit.app/"
  }
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Python",
  "Numpy",
  "Pandas",
  "Streamlit",
  "Shopify",
  
] as const;
export const educationData = [
  {
    title: "Data Analysis with Python",
    description:
      "Data Analysis with Python course authorized by IBM and offered through Coursera",
    link: "https://coursera.org/verify/TN727YUY3XQA",
    date: "2023",
  },
  {
    title: "Python for Data Science, AI & Development",
    
    description:
      "Python for Data Science, AI & Development course authorized by IBM and offered through Coursera",
    link: "https://coursera.org/verify/KAY7J2ZEXAUQ",
    date: "2023",
  },
  {
    title: "AI, Metaverse and Web 3.0 Developer",
    
    description:
      "",
    link: "#",
    date: "Ongoing",
  },
  
] as const;