import openAIImg from "@/public/openai-avatar.png";
import reactImg from "@/public/react.png";
import spaceInvadersImg from "@/public/spaceinvaders.png";
import typeFastImg from "@/public/type-fast.png";
import React from "react";
import {
  FaAws,
  FaBuilding,
  FaBusinessTime,
  FaDatabase,
  FaNotesMedical,
  FaReact,
  FaRegBuilding,
  FaSchool,
} from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
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
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const projectsData = [
  {
    title: "Typer Racer",
    description: "Race Me.",
    tags: ["TypeScript", "Next.js", "Supabase", "Tailwind CSS"],
    imageUrl: typeFastImg,
    link: "https://racer-typer.vercel.app/",
  },
  {
    title: "Brand AI",
    description:
      "AI SaaS app to generate upbeat snippets and SEO keywords for businesses/brands.",
    tags: ["Python", "AWS", "OpenAI", "TypeScript", "Next.js"],
    imageUrl: openAIImg,
    link: "https://brandai.vercel.app/",
  },
  {
    title: "Automated Resume Parser",
    description:
      "Upload/Server/Dashboard app where applicants can upload their resumes and recruiters can search for qualified candidates.",
    tags: ["React", "Redux", "Node", "Multer", "Tailwind CSS"],
    imageUrl: reactImg,
    link: "https://github.com/sagarbrathod1/resume-parser",
  },
  {
    title: "Space Invaders",
    description:
      "Space Invaders with object-oriented design. Created a user-controlled spaceship, AI enemies, bullets, health tracking, and scorekeeping.",
    tags: ["Python", "Pygame"],
    imageUrl: spaceInvadersImg,
    link: "https://github.com/sagarbrathod1/space-invaders",
  },
] as const;

export const skillsData = [
  "Python",
  "TypeScript",
  "JavaScript",
  "React",
  "React Native",
  "Expo",
  "Next.js",
  "Node.js",
  "HTML/CSS",
  "Java",
  "C++",
  "Go",
  "Swift",
  "Git",
  "AWS",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Docker",
  "Google Firebase",
] as const;

export const experiencesData = [
  {
    title: "Research Scientist",
    location: "Ann Arbor, MI",
    description:
      "Studied Spinocerebellar Ataxias at the University of Michigan.",
    icon: React.createElement(FaSchool),
    date: "Jul. 2013",
  },
  {
    title: "Research Scientist",
    location: "East Lansing, MI",
    description: "Studied HIV at Michigan State University.",
    icon: React.createElement(FaNotesMedical),
    date: "Jun. 2015",
  },
  {
    title: "Asset Manager @ Shakti Estate, LLC",
    location: "Okemos, MI",
    description:
      "Managed a real estate investment portfolio. Conducted market research and financial analysis to identify investment opportunities, resulting in a 200% increase in returns.",
    icon: React.createElement(FaRegBuilding),
    date: "Jan. 2017",
  },
  {
    title: "Manager @ New Vision Resources, INC",
    location: "Detroit, MI",
    description:
      "Managed a technology staffing and consulting company that provided contract, contract-to-hire, and permanent staff augmentation services to Fortune 500 companies, local municipalities, and federal government agencies.",
    icon: React.createElement(FaBuilding),
    date: "May 2018",
  },
  {
    title: "Senior Manager @ New Vision Resources, INC",
    location: "Detroit, MI",
    description:
      "Expanded the staffing company from 3 to 21 employees. Secured contracts to place over 50 skilled software developers and IT specialists.",
    icon: React.createElement(FaBusinessTime),
    date: "Jan. 2020",
  },
  {
    title: "Software Engineering Intern @ Headstarter",
    location: "NYC, NY",
    description:
      "Built features for an e-learning platform (w/ JavaScript, React, and AWS). Deployed serverless APIs (w/ AWS Lambda and DynamoDB).",
    icon: React.createElement(FaAws),
    date: "Jun. 2022",
  },
  {
    title: "Software Engineering Extern @ Plivo",
    location: "Remote",
    description:
      "Developed an omnichannel customer service platform (w/ React, JavaScript, MongoDB, Express.js, and Google Firebase). Implemented an AI chatbot. Won 2nd place in the final project showcase.",
    icon: React.createElement(FaDatabase),
    date: "Aug. 2022",
  },
  {
    title: "Software Engineer @ Atomic Object",
    location: "Ann Arbor, MI",
    description:
      "Spearheaded the migration of an iOS app to React Native (w/ TypeScript, Expo, Redux, and Google Firebase). Developed an Electronic Lab Notebook (w/ Python, Flask, MongoDB, AngularJS, and Docker). Optimized an internal accounting app (w/ Ruby and Sinatra). Practiced Agile and managed Jira backlogs.",
    icon: React.createElement(FaReact),
    date: "Feb. 2023",
  },
] as const;
