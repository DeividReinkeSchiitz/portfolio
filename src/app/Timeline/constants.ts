import { TimelineEvent } from "./types";

export const technologyColors: Record<string, string> = {
  React: "#58C4DC",
  "React Native": "#58C4DC",
  "Node.js": "#3C873A",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  "Next.js": "#868686",
  PostgreSQL: "#008BB9",
  Docker: "#1D63ED",
  GraphQL: "#E535AB",
  AWS: "#FF9900",
  "Tailwind CSS": "#0ea5e9",
  Figma: "#F24E1E",
  MongoDB: "#47A248",
  Express: "#d4d4d4",
  Python: "#3776AB",
  "Machine Learning": "#FF6F00",
  Flutter: "#02569B",
  Firebase: "#FF8F00",
  Redux: "#764ABC",
};

export const timelineData: TimelineEvent[] = [
  {
    id: 1,
    year: "2024 - Present",
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    description:
      "Leading development of scalable web applications and mobile solutions. Architecting microservices and mentoring junior developers.",
    type: "work",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "React Native"],
    location: "Remote",
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
  },
];
