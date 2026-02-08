import { TimelineEvent } from "./types";
import { colors } from "@/app/colors";
import path_svg from "@/../public/path.svg";

export const timelinePageConfig = {
  title: "My <span>Journey</span>",
  description:
    "A timeline of my <span>professional experience</span>, education, and key <span>achievements</span> throughout my career.",
  icons: [
    {
      src: path_svg,
      alt: "Path",
      className:
        "absolute w-28 h-28 md:w-32 md:h-32 top-[-80px] right-20 md:right-0",
    },
  ],
};

export const technologyColors: Record<string, string> = colors;

export const timelineData: TimelineEvent[] = [
  {
    id: 1,
    year: "2025 - Present",
    title: "Full Stack Developer",
    company: "Tech Innovators Inc.",
    description:
      "Leading development of scalable web applications and mobile solutions. Architecting microservices and mentoring junior developers.",
    type: "work",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "React Native"],
    location: "Remote",
    details: {
      fullDescription:
        "As a Senior Full Stack Developer, I lead a team of 5 developers building enterprise-level applications serving 100K+ users. My focus is on creating scalable architectures, implementing best practices, and fostering a culture of continuous improvement.",
      responsibilities: [
        "Architecting and implementing microservices using Node.js and AWS Lambda",
        "Leading frontend development with React and Next.js",
        "Mentoring junior developers through code reviews and pair programming",
        "Designing and optimizing database schemas for PostgreSQL and DynamoDB",
        "Implementing CI/CD pipelines with GitHub Actions and AWS CodePipeline",
      ],
      achievements: [
        "Reduced API response time by 60% through caching strategies and query optimization",
        "Increased test coverage from 45% to 85% across the codebase",
        "Led migration from monolith to microservices, improving deployment frequency by 10x",
        "Mentored 3 junior developers who were promoted to mid-level positions",
      ],
      links: [
        { label: "Company Website", url: "https://techinnovators.example.com" },
        { label: "Architecture Blog Post", url: "https://blog.example.com" },
      ],
    },
  },
  {
    id: 2,
    year: "2023",
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    description:
      "Built and maintained multiple client-facing applications. Implemented CI/CD pipelines and improved deployment efficiency by 40%.",
    type: "work",
    technologies: ["Next.js", "PostgreSQL", "Docker", "GraphQL"],
    location: "São Paulo, Brazil",
    details: {
      fullDescription:
        "Worked on customer-facing web applications for e-commerce and fintech clients. Focused on performance optimization, user experience, and building robust backend APIs.",
      responsibilities: [
        "Developing responsive web applications using Next.js and React",
        "Building GraphQL APIs with Apollo Server and PostgreSQL",
        "Implementing automated testing with Jest and Cypress",
        "Containerizing applications with Docker and Docker Compose",
        "Setting up CI/CD pipelines using GitLab CI",
      ],
      achievements: [
        "Improved deployment efficiency by 40% through automation",
        "Reduced page load time by 50% using Next.js SSR and image optimization",
        "Implemented real-time features with WebSockets, increasing user engagement by 25%",
        "Built a design system used across 5+ projects",
      ],
      links: [
        { label: "Portfolio Project", url: "https://project.example.com" },
      ],
    },
  },
  {
    id: 3,
    year: "2022",
    title: "Mobile App Launch",
    company: "Personal Project",
    description:
      "Successfully launched a mobile application with 10,000+ downloads. Featured in the App Store's 'New Apps We Love' section.",
    type: "achievement",
    technologies: ["React Native", "Firebase", "Redux"],
    details: {
      fullDescription:
        "Designed and developed a cross-platform mobile application from concept to launch. The app helps users track their daily habits and build positive routines through gamification and social features.",
      responsibilities: [
        "Full product development from ideation to deployment on iOS and Android",
        "Implementing real-time sync with Firebase Firestore",
        "Designing and building responsive UI components",
        "Setting up push notifications and analytics",
        "Managing app store submissions and updates",
      ],
      achievements: [
        "Reached 10,000+ downloads within first 3 months",
        "Featured in App Store's 'New Apps We Love' section",
        "Maintained 4.7-star rating with 500+ reviews",
        "Built and engaged a community of 2,000+ active daily users",
      ],
      links: [
        { label: "App Store", url: "https://apps.apple.com/app/example" },
        {
          label: "Google Play",
          url: "https://play.google.com/store/apps/example",
        },
      ],
    },
  },
  {
    id: 4,
    year: "2021 - 2022",
    title: "Frontend Developer",
    company: "StartUp Hub",
    description:
      "Developed responsive web interfaces and collaborated closely with UX designers to create intuitive user experiences.",
    type: "work",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Figma"],
    location: "Remote",
    details: {
      fullDescription:
        "Worked in a fast-paced startup environment building web applications for multiple clients across different industries. Collaborated with designers, backend developers, and product managers to deliver high-quality user interfaces.",
      responsibilities: [
        "Building responsive web applications with React and Tailwind CSS",
        "Translating Figma designs into pixel-perfect implementations",
        "Implementing state management with React Context and hooks",
        "Collaborating with UX designers to improve user experience",
        "Writing unit and integration tests with React Testing Library",
      ],
      achievements: [
        "Improved mobile responsiveness across 10+ client projects",
        "Reduced CSS bundle size by 40% through Tailwind optimization",
        "Implemented component library used by 4 development teams",
        "Achieved 100% Lighthouse accessibility scores on key pages",
      ],
      links: [
        { label: "Company Website", url: "https://startuphub.example.com" },
      ],
    },
  },
  {
    id: 5,
    year: "2020 - 2021",
    title: "Junior Developer",
    company: "Code Academy",
    description:
      "Started professional journey building web applications. Gained expertise in modern JavaScript frameworks and backend development.",
    type: "work",
    technologies: ["JavaScript", "Node.js", "MongoDB", "Express"],
    location: "Curitiba, Brazil",
    details: {
      fullDescription:
        "First professional role as a software developer. Focused on learning best practices, writing clean code, and contributing to full-stack web applications. Worked on internal tools and client projects under senior developer mentorship.",
      responsibilities: [
        "Developing REST APIs using Node.js and Express",
        "Building interactive web interfaces with vanilla JavaScript and jQuery",
        "Working with MongoDB for data persistence and queries",
        "Participating in code reviews and daily standups",
        "Fixing bugs and implementing new features based on tickets",
      ],
      achievements: [
        "Successfully delivered 15+ features across 3 projects",
        "Reduced bug count by 30% through improved testing practices",
        "Built authentication system used in multiple internal tools",
        "Received 'Most Improved Developer' award in Q4 2020",
      ],
      links: [
        { label: "Code Academy", url: "https://codeacademy.example.com" },
      ],
    },
  },
  {
    id: 6,
    year: "2018 - 2022",
    title: "Computer Science Degree",
    company: "Federal University",
    description:
      "Bachelor's degree in Computer Science with focus on Software Engineering and Distributed Systems. Graduated with honors.",
    type: "education",
    location: "Brazil",
    details: {
      fullDescription:
        "Completed a comprehensive Computer Science program with emphasis on software engineering principles, algorithms, and distributed systems. Engaged in research projects and collaborated on open-source contributions.",
      responsibilities: [
        "Core coursework in algorithms, data structures, and software design",
        "Research project on distributed systems and microservices architecture",
        "Teaching assistant for Introduction to Programming course",
        "Contributing to university's open-source projects",
        "Participating in academic competitions and hackathons",
      ],
      achievements: [
        "Graduated with honors (GPA: 3.8/4.0)",
        "Published research paper on microservices optimization",
        "Led student developer community with 50+ active members",
        "Won 'Best Final Project' award for distributed task scheduler",
      ],
      links: [
        { label: "University Website", url: "https://university.example.edu" },
        { label: "Research Paper", url: "https://research.example.com" },
      ],
    },
  },
  {
    id: 7,
    year: "2019",
    title: "Hackathon Winner",
    company: "Tech Summit 2019",
    description:
      "First place in a 48-hour hackathon. Built an innovative solution for sustainable urban mobility.",
    type: "achievement",
    technologies: ["Python", "Machine Learning", "Flutter"],
    details: {
      fullDescription:
        "Competed with 50+ teams in a 48-hour hackathon focused on smart city solutions. Led a team of 4 developers to create an AI-powered app that optimizes urban transportation routes to reduce carbon emissions.",
      responsibilities: [
        "Leading team strategy and project planning",
        "Developing machine learning model for route optimization using Python",
        "Building cross-platform mobile app with Flutter",
        "Integrating real-time traffic data APIs",
        "Presenting solution to judges and investors",
      ],
      achievements: [
        "Won 1st place among 50+ competing teams",
        "Developed working prototype in 48 hours",
        "Achieved 25% estimated reduction in travel time and emissions",
        "Received seed funding offer from local VC firm",
      ],
      links: [
        { label: "Event Details", url: "https://techsummit2019.example.com" },
        { label: "Project Demo", url: "https://demo.example.com" },
      ],
    },
  },
];
