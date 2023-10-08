import typeFastImg from "@/public/type-fast.png";
import openAIImg from "@/public/openai-avatar.png";
import reactImg from "@/public/react.png";
import spaceInvadersImg from "@/public/spaceinvaders.png";

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
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const projectsData = [
  {
    title: "Typer Racer",
    description: "Race Me.",
    tags: ["TypeScript", "Next.js", "Supabase", "Tailwind CSS"],
    imageUrl: typeFastImg,
  },
  {
    title: "Brand AI",
    description:
      "AI SaaS app to generate upbeat snippets and SEO keywords for businesses/brands.",
    tags: ["Python", "AWS", "OpenAI", "TypeScript", "Next.js"],
    imageUrl: openAIImg,
  },
  {
    title: "Automated Resume Parser",
    description:
      "Upload/Server/Dashboard app where applicants can upload their resumes and recruiters can search for specific candidates.",
    tags: ["React", "Redux", "Node", "Multer", "Tailwind CSS"],
    imageUrl: reactImg,
  },
  {
    title: "Space Invaders",
    description:
      "Space Invaders with object-oriented design. Created a user-controlled spaceship, AI enemies, bullets, health tracking, and scorekeeping.",
    tags: ["Python", "Pygame"],
    imageUrl: spaceInvadersImg,
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
