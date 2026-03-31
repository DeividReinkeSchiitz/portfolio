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
    id: 0,
    year: "2025 - Present",
    title: "Full Stack Developer",
    company: "Fleye",
    image: "/fleye.webp",
    description:
      "Full-stack development for digital products, covering cross-platform mobile apps (React Native/Expo), serverless NestJS backends on AWS, monorepo architecture, CI/CD pipelines, and observability practices.",
    type: "work",
    technologies: [
      "React Native",
      "Expo",
      "NestJS",
      "TypeScript",
      "AWS Lambda",
      "AWS CDK",
      "MongoDB",
      "Docker",
      "Jest",
      "Tailwind",
      "Sentry",
    ],
    location: "Remote / Brazil",
    details: {
      fullDescription:
        "Working as a Full Stack Developer at Fleye, a digital product studio specialized in community-driven applications. The role spans the entire software delivery lifecycle: architecting and building cross-platform mobile apps with React Native and Expo Router, developing NestJS backends following Domain-Driven Design and Clean Architecture, and managing cloud infrastructure with AWS CDK. Operating within a Turborepo monorepo, with multi-environment deployments (dev / staging / production) on a serverless AWS stack. Daily work includes trade-off analysis, code reviews, writing unit and integration tests with TDD practices, configuring CI/CD pipelines, and monitoring production health through Sentry and PostHog.",
      responsibilities: [
        "Developing cross-platform mobile applications with React Native, Expo, and Expo Router",
        "Building and maintaining NestJS backend services following DDD and Clean Architecture principles",
        "Managing AWS infrastructure as code with AWS CDK — Lambda, Cognito, S3, SNS, SQS, and EventBridge",
        "Architecting and evolving a Turborepo monorepo with clear package boundaries and shared tooling",
        "Implementing MongoDB data layers using Mongoose ODM and the Repository Pattern",
        "Writing unit, integration, and E2E tests (Jest, Pactum) and applying TDD concepts",
        "Configuring and maintaining CI/CD pipelines with Docker-based test isolation and multi-environment deployments",
        "Conducting trade-off analysis and driving architecture and design pattern decisions",
        "Performing code reviews and enforcing code quality standards (ESLint, Prettier, strict TypeScript)",
        "Integrating observability tooling (Sentry, PostHog) for error tracking and product analytics",
        "Implementing i18n and accessibility features for mobile applications",
        "Building custom administrative interfaces for dynamic, no-code content management",
      ],
      achievements: [
        "Contributed to the IELB+ app, a streaming platform centralizing music, books, and audio for the Lutheran community",
        "Contributed to construction and development of new features for the Capela app, including Liturgy, meditations, novena, life plan, and many other modules",
        "Implemented a no-code administrative framework allowing clients to manage app content independently",
        "Architected a scalable monorepo with DDD/Clean Architecture that supports multiple products sharing backend logic and mobile UI components",
        "Established a full observability stack (Sentry + PostHog) enabling real-time error tracking and funnel analytics across platforms",
        "Built and standardized CI/CD pipelines with Docker-based test isolation across dev, staging, and production environments",
        "Improved serverless architecture to handle high-concurrency usage events without cold-start bottlenecks",
      ],
      links: [
        { label: "Fleye", url: "https://fleye.com.br/" },
        { label: "Case: IELB+", url: "https://fleye.com.br/our-stories/ielb" },
        {
          label: "Case: Capela",
          url: "https://fleye.com.br/our-stories/capela",
        },
      ],
    },
  },
  {
    id: 1,
    year: "Jul 2024 - Aug 2024",
    title: "Santander Coders — Coding Tank",
    company: "Ada Tech / Santander",
    description:
      "Selected for the Santander Coders Back-End professionalization program, covering Java, OOP, Design Patterns, Networking, and Git.",
    type: "achievement",
    technologies: ["Java", "OOP", "Design Patterns", "Git", "Networking"],
    details: {
      fullDescription:
        "Selected to participate in the Santander Coders program in partnership with Ada Tech, an intensive back-end professionalization bootcamp. The program covered modern back-end development practices, with a focus on Java ecosystem, software architecture, and collaborative development workflows.",
      responsibilities: [
        "Intensive back-end development training with Java",
        "Object-Oriented Programming and Design Patterns",
        "Networking fundamentals and distributed systems concepts",
        "Git versioning and collaborative development workflows",
        "Building back-end projects applying learned concepts",
      ],
      achievements: [
        "Successfully completed the intensive Santander Coders Back-End track",
        "Strengthened back-end development skills with Java and OOP",
        "Applied design patterns to real-world project exercises",
        "Expanded knowledge of networking and systems architecture",
      ],
    },
  },
  {
    id: 2,
    year: "2022 - 2025",
    title: "Computer Science",
    company: "Federal University of Mato Grosso do Sul (UFMS)",
    description:
      "Bachelor's degree in Computer Science at FACOM. Deepened knowledge in algorithms, data structures, software engineering, and distributed systems.",
    type: "education",
    location: "Campo Grande, Brazil",
    details: {
      fullDescription:
        "Pursuing a Bachelor's degree in Computer Science at FACOM — UFMS, one of the leading public universities in Brazil. The program provided a rigorous foundation in theoretical and applied computer science, covering areas from algorithms and data structures to systems programming, networking, and software architecture.",
      responsibilities: [
        "Core coursework in algorithms, data structures, operating systems, and computer networks",
        "Software engineering projects applying design patterns and agile methodologies",
        "Systems programming with C/C++ including virtual machines and low-level development",
        "Database design and management with PostgreSQL and Oracle",
        "Collaborative projects involving full-stack web and mobile development",
      ],
      achievements: [
        "Built a Unix-like virtual machine system in C with full documentation and testing",
        "Developed multiple full-stack applications as part of coursework and personal projects",
        "Gained hands-on experience with cloud platforms, DevOps practices, and Linux servers",
        "Applied theoretical knowledge to real-world SaaS and embedded system projects",
      ],
      links: [
        { label: "UFMS", url: "https://www.ufms.br/" },
        {
          label: "FACOM",
          url: "https://www.facom.ufms.br/",
        },
      ],
    },
  },
  {
    id: 4,
    year: "2022 - 2025",
    title: "Undergraduate Research — LEXA Lab",
    company: "Federal University of Mato Grosso do Sul (UFMS)",
    description:
      "Implemented a Large Neighborhood Search matheuristic for the Course Discipline Allocation Problem, combining destroy-and-repair operators with exact solving for high-quality timetabling solutions.",
    type: "achievement",
    location: "Campo Grande, Brazil",
    details: {
      fullDescription:
        "Conducted undergraduate research at LEXA Lab (UFMS) in combinatorial optimization applied to educational timetabling. Designed and implemented a Large Neighborhood Search (LNS) matheuristic to solve the Course Discipline Allocation Problem, integrating destroy-and-repair operators with exact solving techniques to produce high-quality timetabling solutions.",
      responsibilities: [
        "Designing and implementing a Large Neighborhood Search (LNS) matheuristic for timetabling optimization",
        "Developing destroy-and-repair operators tailored to the Course Discipline Allocation Problem",
        "Integrating exact solving within the LNS framework to improve solution quality",
        "Experimenting with and evaluating the matheuristic on real-world scheduling instances",
      ],
      achievements: [
        "Developed a competitive matheuristic combining LNS and exact solving for educational timetabling",
        "Applied advanced combinatorial optimization techniques to a real-world course scheduling problem",
        "Gained deep expertise in metaheuristics, mathematical programming, and algorithm design",
      ],
    },
  },
  {
    id: 3,
    year: "2021 - 2022",
    title: "Software Developer",
    company: "Brbyte",
    description:
      "Full-stack development for a SaaS platform. Built web and Android solutions, managed backend systems, and handled network infrastructure (NAS, OLT).",
    type: "work",
    technologies: [
      "TypeScript",
      "JavaScript",
      "C",
      "PostgreSQL",
      "React",
      "React Native",
    ],
    location: "Remote / Campo Grande, Brazil",
    details: {
      fullDescription:
        "Worked as a Software Developer at Brbyte, a company specializing in ISP management solutions. Contributed to full-stack development of their SaaS platform, building web and mobile applications, developing backend services, and supporting network infrastructure including NAS and OLT systems. Gained deep experience with systems programming, data structures, and Linux server administration.",
      responsibilities: [
        "Full-stack development of SaaS web applications with React and TypeScript",
        "Building and maintaining mobile applications with React Native",
        "Backend development with Node.js and PostgreSQL",
        "Systems-level programming in C for performance-critical components",
        "Linux server administration and network support (NAS, OLT)",
        "Implementing data structures for efficient data handling",
      ],
      achievements: [
        "Contributed to the full-stack architecture of the company's SaaS platform",
        "Built cross-platform features spanning web and Android applications",
        "Handled network infrastructure support for ISP management systems",
        "Strengthened systems programming skills with C and Linux environments",
      ],
      links: [{ label: "Brbyte", url: "https://controllr.brbyte.com/" }],
    },
  },
  {
    id: 5,
    year: "Jan 2020 - Jul 2021",
    title: "Web Developer",
    company: "Azon",
    description:
      "Full-stack web development, project planning, and hosting management. Built solutions with React, Node.js, and Firebase.",
    type: "work",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Firebase",
      "Figma",
    ],
    location: "Primavera do Leste, Brazil",
    details: {
      fullDescription:
        "First professional role as a Web Developer at Azon. Took on end-to-end responsibility for project planning, full-stack development, and hosting management. Built web applications using modern JavaScript technologies, managed WordPress sites, and handled server infrastructure through cPanel and Firebase.",
      responsibilities: [
        "Full-stack web development using HTML, CSS, JavaScript/TypeScript",
        "Building interactive web applications with React and Node.js",
        "Managing hosting infrastructure with cPanel and Firebase",
        "UI/UX design and prototyping with Figma",
        "WordPress development and site management",
        "Project planning and execution from concept to delivery",
      ],
      achievements: [
        "Successfully delivered multiple web projects from planning to production",
        "Built and managed full hosting infrastructure for client applications",
        "Gained hands-on experience with Firebase for real-time NoSQL databases",
        "Developed strong project management and client communication skills",
      ],
    },
  },
  // {
  //   id: 6,
  //   year: "2020",
  //   title: "Pill Dispenser",
  //   company: "Personal Project",
  //   description:
  //     "Automatic remote pill dispenser with real-time Firebase server, designed to integrate with ESP32/Arduino hardware for medication management.",
  //   type: "project",
  //   technologies: ["Node.js", "Firebase", "React Native", "TypeScript"],
  //   details: {
  //     fullDescription:
  //       "Designed and built a server-side system for an automatic remote pill dispenser. The project uses a real-time Firebase server to manage medication schedules and aims to integrate with hardware dispensers using ESP32, Arduino, or ARM processors. Includes a mobile companion app for remote monitoring and control.",
  //     responsibilities: [
  //       "Designing the server-side architecture with Node.js and Firebase",
  //       "Implementing real-time medication scheduling and notifications",
  //       "Building RESTful web services for hardware-server communication",
  //       "Developing a React Native mobile app for remote monitoring",
  //       "Applying MVC architecture and clean code principles",
  //       "Designing the user interface and experience in Figma",
  //     ],
  //     achievements: [
  //       "Built a fully functional real-time server for medication management",
  //       "Created a cross-platform mobile app for remote pill dispenser control",
  //       "Designed a scalable architecture supporting ESP32 and Arduino hardware",
  //       "Applied professional patterns: MVC, RESTful APIs, and Cloud Firestore",
  //     ],
  //     links: [
  //       {
  //         label: "View in Mobiles",
  //         url: "/Mobiles#pill-dispenser",
  //         linkType: "internal",
  //       },
  //       {
  //         label: "GitHub",
  //         url: "https://github.com/DeividReinkeSchiitz/PillDispenser",
  //         linkType: "external",
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: 7,
  //   year: "2020",
  //   title: "Qacademic",
  //   company: "Personal Project",
  //   description:
  //     "CRUD web scraping API in Node.js that pulls student grades and materials from IFMT's academic system, with a React Native mobile app.",
  //   type: "project",
  //   technologies: ["Node.js", "React Native", "TypeScript"],
  //   details: {
  //     fullDescription:
  //       "Built a complete system to web-scrape and serve student academic data from IFMT's academic portal (academico.ifmt.edu.br). The back-end is a Node.js server that performs web scraping and exposes a CRUD API, while the front-end is a React Native mobile application allowing students to easily view their grades and course materials.",
  //     responsibilities: [
  //       "Developing the web scraping engine with Node.js",
  //       "Building a RESTful CRUD API to serve scraped academic data",
  //       "Creating a React Native mobile app for data visualization",
  //       "Managing NoSQL data storage and hosting services",
  //       "Handling back-end operations and server deployment",
  //     ],
  //     achievements: [
  //       "Delivered a working tool used by fellow students at IFMT",
  //       "Implemented reliable web scraping of dynamic academic portal content",
  //       "Built a polished React Native mobile interface for student data",
  //       "Gained deep experience with back-end operations and web scraping techniques",
  //     ],
  //     links: [
  //       {
  //         label: "View in Mobiles",
  //         url: "/Mobiles#qacademic",
  //         linkType: "internal",
  //       },
  //       {
  //         label: "GitHub",
  //         url: "https://github.com/DeividReinkeSchiitz/Qacademic",
  //         linkType: "external",
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: 8,
  //   year: "2021",
  //   title: "Admin Panel",
  //   company: "Personal Project",
  //   description:
  //     "Firebase-powered React admin panel with offline-first architecture and real-time data synchronization.",
  //   type: "project",
  //   technologies: ["React", "TypeScript", "Firebase", "Material UI"],
  //   details: {
  //     fullDescription:
  //       "Developed a React-based admin panel featuring offline-first data handling and real-time synchronization powered by Firebase Cloud Firestore. The panel provides CRUD operations, real-time monitoring, and cloud storage integration, designed with Material UI for a professional and responsive interface.",
  //     responsibilities: [
  //       "Building the front-end with React, TypeScript, and Material UI",
  //       "Implementing offline-first architecture with Firebase Cloud Firestore",
  //       "Real-time data synchronization and monitoring features",
  //       "CRUD operations and API integration",
  //       "Cloud Storage integration for file management",
  //     ],
  //     achievements: [
  //       "Implemented a robust offline-first architecture with seamless sync",
  //       "Built real-time monitoring dashboards using Cloud Firestore",
  //       "Delivered a clean, responsive admin interface with Material UI",
  //       "Gained expertise in Firebase ecosystem and cloud application development",
  //     ],
  //     links: [
  //       {
  //         label: "View in Websites",
  //         url: "/Websites#admin-panel",
  //         linkType: "internal",
  //       },
  //       {
  //         label: "Live Demo",
  //         url: "https://azonfunction.firebaseapp.com/Login#/",
  //         linkType: "external",
  //       },
  //       {
  //         label: "GitHub",
  //         url: "https://github.com/DeividReinkeSchiitz/AdminPanel",
  //         linkType: "external",
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: 9,
  //   year: "2022",
  //   title: "C/C++ Virtual Machine",
  //   company: "Academic Project",
  //   description:
  //     "Unix-like virtual machine system built in C with custom data structures, bash scripts, static/dynamic libraries, and full documentation.",
  //   type: "project",
  //   technologies: ["C"],
  //   details: {
  //     fullDescription:
  //       "Developed a comprehensive Unix-like virtual machine system entirely in C as an academic project. The project showcases systems programming skills with a well-organized codebase including logs, documentation, bash scripts, binaries, testers, static and dynamic libraries, makefiles, and custom data structures.",
  //     responsibilities: [
  //       "Designing and implementing a virtual machine architecture in C",
  //       "Building custom data structures for efficient VM operations",
  //       "Writing bash scripts for build automation and testing",
  //       "Creating static and dynamic libraries for modular code organization",
  //       "Comprehensive documentation and logging systems",
  //       "Managing the project with Git and GitLab CI/CD",
  //     ],
  //     achievements: [
  //       "Built a fully functional Unix-like VM system from scratch in C",
  //       "Implemented custom data structures optimized for VM operations",
  //       "Created a professional project structure with makefiles, testers, and libraries",
  //       "Demonstrated deep understanding of systems programming and low-level concepts",
  //     ],
  //     links: [
  //       {
  //         label: "View in Others",
  //         url: "/Others#1",
  //         linkType: "internal",
  //       },
  //       {
  //         label: "GitHub",
  //         url: "https://github.com/DeividReinkeSchiitz/vm",
  //         linkType: "external",
  //       },
  //     ],
  //   },
  // },
  {
    id: 10,
    year: "2018 - 2020",
    title: "Electromechanical Technician & High School",
    company: "Federal Institute of Mato Grosso (IFMT)",
    description:
      "Integrated high school and electromechanical technician course. Served as a monitor in Machine Elements.",
    type: "education",
    location: "Mato Grosso, Brazil",
    details: {
      fullDescription:
        "Completed an integrated high school and electromechanical technician program at the Federal Institute of Mato Grosso (IFMT). The program combined traditional high school education with hands-on technical training in electromechanics. Served as a student monitor in the Machine Elements discipline, demonstrating leadership and deep understanding of the subject.",
      responsibilities: [
        "Integrated high school curriculum with electromechanical specialization",
        "Hands-on training in mechanical and electrical systems",
        "Student monitor for Machine Elements coursework",
        "Laboratory practices in electromechanical systems",
        "Technical drawing and engineering fundamentals",
      ],
      achievements: [
        "Successfully completed the integrated technician program",
        "Selected as a monitor for Machine Elements, assisting fellow students",
        "Built a strong foundation in engineering and technical problem-solving",
        "Developed discipline and work ethic through rigorous technical curriculum",
      ],
      links: [{ label: "IFMT", url: "https://ifmt.edu.br/" }],
    },
  },
  {
    id: 11,
    year: "2018 - 2021",
    title: "Advanced English Course",
    company: "Influx Language School",
    description:
      "Completed an advanced English course, reaching C1 proficiency level. Strengthened communication skills for international collaboration.",
    type: "education",
    location: "Brazil",
    details: {
      fullDescription:
        "Attended and completed an intensive Advanced English course at Influx Language School, achieving C1 (Advanced) proficiency. The program covered all language skills including speaking, writing, reading, and listening, preparing for professional and academic communication in English.",
      responsibilities: [
        "Intensive study of English grammar, vocabulary, and pronunciation",
        "Developing professional writing and communication skills",
        "Practicing conversational English for real-world scenarios",
        "Preparing for technical and professional communication in English",
      ],
      achievements: [
        "Achieved C1 (Advanced) English proficiency level",
        "Built confidence in professional English communication",
        "Enabled participation in international tech communities and projects",
      ],
    },
  },
];
