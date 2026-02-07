import website_svg from "@/../public/website.svg";
import { IconConfig } from "@/app/components/PageHeader/types";
import { WebShowcaseProject } from "@/app/components/WebsiteShowcase/types";

export const websitesPageConfig = {
  title: "Website Projects",
  description:
    "Every backend needs a amazing interface. Here are a few of my all-time favorites that I'm proud to share!",
  icons: [
    {
      src: website_svg,
      alt: "Website Projects",
      className:
        "absolute w-10 h-10 md:w-20 md:h-20 mb-3 ml-2  top-[-40] right-10",
    },
  ] as IconConfig[],
};

export const websiteProjects: WebShowcaseProject[] = [
  {
    id: "admin-panel",
    name: "Administrator Panel",
    tagline: "Client management dashboard for weekly reports & artwork",
    description:
      "Administrative panel model developed to <span>meet the need</span> to save weekly reports and " +
      "artwork related to each client. Features a clean dashboard with data tables, file uploads, " +
      "user authentication, and role-based access control — all powered by a Firebase backend " +
      "with real-time data sync and cloud storage integration.",
    image: "admin_panel.svg",
    live: "https://azonfunction.firebaseapp.com/Login#/",
    github: "https://github.com/DeividReinkeSchiitz/AdminPanel",
    color: "#FF8F00",
    role: "Front-End Developer",
    highlights: [
      "Built a full CRUD dashboard for managing client reports and artwork assets",
      "Implemented Firebase Auth with role-based access for admin and viewer roles",
      "Real-time data synchronization using Firestore listeners",
      "Material UI design system for a polished, consistent interface",
      "File upload pipeline with Firebase Storage for artwork management",
    ],
    stacks: [
      {
        name: "Firebase",
        description: "Backend Tool",
        icon: "firebase.svg",
        color: "#FF8F00",
      },
      {
        name: "React",
        description: "Javascript Library",
        icon: "react.svg",
        color: "#58C4DC",
      },
      {
        name: "Material UI",
        description: "React UI Framework",
        icon: "materialui.svg",
        color: "#0073E6",
      },
      {
        name: "Styled-Components",
        description: "CSS in JS",
        icon: "styled.svg",
        color: "#F456FF",
      },
      {
        name: "TypeScript",
        description: "Javascript Superset",
        icon: "typescript.svg",
        color: "#3178C6",
      },
    ],
  },
  {
    id: "portfolio",
    name: "Portfolio",
    tagline: "Personal developer portfolio with stunning animations",
    description:
      "My personal developer portfolio, designed to showcase my <span>projects</span> and the " +
      "technologies I <span>specialize</span> in. Built with Next.js and deployed on Oracle Cloud, " +
      "featuring smooth page transitions, responsive design, animated backgrounds with motion, " +
      "and a carefully crafted UI that represents my work and personality as a developer.",
    image: "portfolio.svg",
    live: "https://schiitz.com",
    github: "https://github.com/DeividReinkeSchiitz/portpofio",
    color: "#0ea5e9",
    role: "Full-Stack Developer",
    highlights: [
      "Server-side rendered with Next.js for optimal performance and SEO",
      "Custom animated background using Three.js and React Three Fiber",
      "Framer Motion page transitions and micro-interactions throughout",
      "Self-hosted on Oracle Cloud with custom domain and CI/CD pipeline",
      "Fully responsive design from mobile to ultrawide displays",
    ],
    stacks: [
      {
        name: "React",
        description: "Javascript Library",
        icon: "react.svg",
        color: "#58C4DC",
      },
      {
        name: "TypeScript",
        description: "Javascript Superset",
        icon: "typescript.svg",
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS",
        icon: "tailwind.svg",
        color: "#0ea5e9",
      },
      {
        name: "Next.js",
        description: "React Framework",
        icon: "next.svg",
        color: "#212121",
      },
      {
        name: "Oracle Cloud",
        description: "Cloud Service",
        icon: "oracle.svg",
        color: "#f22327",
      },
    ],
  },
  {
    id: "twitter-clone",
    name: "Twitter Clone",
    tagline:
      "Full-featured social media clone for learning modern web patterns",
    description:
      "Twitter clone project created to learn new technologies, libraries and project structure. " +
      "Implements the core Twitter experience: a timeline feed, tweet creation, likes, retweets, " +
      "user profiles, and a responsive layout that mirrors the real platform — all built with " +
      "React and Styled-Components to master component architecture at scale.",
    image: "twitter_clone.svg",
    live: "https://stoic-northcutt-31c14a.netlify.app/",
    github: "https://github.com/DeividReinkeSchiitz/TwitterClone",
    color: "#58C4DC",
    role: "Front-End Developer",
    highlights: [
      "Replicated core Twitter UI: timeline, tweet compose, user profiles, likes & retweets",
      "Component-driven architecture with reusable, composable React components",
      "Styled-Components for scoped CSS with theme support",
      "Responsive layout matching the real Twitter breakpoints",
      "Deployed on Netlify with continuous deployment from GitHub",
    ],
    stacks: [
      {
        name: "React",
        description: "Javascript Library",
        icon: "react.svg",
        color: "#58C4DC",
      },
      {
        name: "Styled-Components",
        description: "CSS in JS",
        icon: "styled.svg",
        color: "#F456FF",
      },
      {
        name: "TypeScript",
        description: "Javascript Superset",
        icon: "typescript.svg",
        color: "#3178C6",
      },
    ],
  },
];
