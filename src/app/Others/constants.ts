import phone_svg from "@/../public/phone.svg";
import website_svg from "@/../public/website.svg";
import battery_svg from "@/../public/battery.svg";
import { IconConfig } from "@/app/components/PageHeader/types";
import { Project } from "./types";

export const othersPageConfig = {
  title: "Other Projects",
  description:
    "I've created <span>templates</span> and backend projects that truly <span>spark</span> my curiosity. Here are a few of my all-time favorites that I'm proud to share!",
  icons: [
    {
      src: phone_svg,
      alt: "Phone",
      className:
        "absolute w-10 h-10 md:w-16 md:h-16 top-[-38px] right-10 md:right-0",
    },
    {
      src: website_svg,
      alt: "Website Projects",
      className:
        "absolute w-10 h-10 md:w-16 md:h-16 bottom-[-20px] md:bottom-[-80px] right-10 md:right-0",
    },
    {
      src: battery_svg,
      alt: "Battery",
      className:
        "absolute w-10 h-10 md:w-16 md:h-16 bottom-20 md:top-[-45px] left-[0px]",
    },
  ] as IconConfig[],
};

// All projects from getStaticData
export const projectsData: Project[] = [
  {
    id: 1,
    name: "Structured C code",
    description:
      "Foundation is crucial. Creation of a well-structured C project that adheres to <span>Unix-style</span>. Logs, Test, error handler, bash scripts, bins, static and dynamic libraries, make files and <span>Data Structures</span>.",
    category: "backend",
    image: "/c_code.png",
    icon: "/c.svg",
    color: "#00C7FF",
    stacks: [
      "C",
      "Unix",
      "Backend",
      "Makefile",
      "Bash",
      "Data Structures",
      "Static Libraries",
      "Dynamic Libraries",
      "Logs",
      "Google Test",
      "Error Handler",
      "Valgrind",
      "GDB",
    ],
    github: "https://github.com/DeividReinkeSchiitz/vm",
    details: {
      fullDescription:
        "A comprehensive C project demonstrating professional software engineering practices with Unix-style architecture. This project showcases proper project structure, testing frameworks, debugging tools, and library management.",
      features: [
        "Well-organized Unix-style project structure",
        "Static and dynamic library implementations",
        "Comprehensive logging system",
        "Google Test integration for unit testing",
        "Custom error handling mechanisms",
        "Makefile automation for build process",
        "Bash scripts for development workflows",
        "Memory leak detection with Valgrind",
        "Advanced debugging with GDB",
      ],
      challenges: [
        "Implementing robust error handling in C",
        "Managing memory efficiently without leaks",
        "Creating reusable static and dynamic libraries",
        "Writing comprehensive test coverage",
      ],
      learnings: [
        "Deep understanding of C memory management",
        "Unix system programming practices",
        "Professional code organization and structure",
        "Advanced debugging techniques",
      ],
    },
  },
  {
    id: 2,
    name: "Comportc",
    description:
      "This software is built using <span>Electron</span> and a C++ library with Node.js native addons. It allows for reading and writing to a serial COM port, similar to the <span>Arduino IDE's</span> monitor, but it is not integrated. It is useful for testing software on ARM, Arduino, and ESP devices.",
    category: "tool",
    image: "/comportc.png",
    icon: "/comportc_icon.png",
    color: "#7F6FED",
    stacks: [
      "C++",
      "Node.js",
      "Electron",
      "Node Addons",
      "Windows",
      "Hardware",
      "Npm Package",
    ],
    live: "https://github.com/DeividReinkeSchiitz/Comportc/releases/tag/v1.2.2",
    github: "https://github.com/DeividReinkeSchiitz/Comportc",
    details: {
      fullDescription:
        "A desktop application combining Electron with native C++ Node.js addons to provide serial communication capabilities for hardware development. Perfect for debugging and testing microcontroller projects.",
      features: [
        "Serial COM port communication",
        "Cross-platform desktop application with Electron",
        "Native C++ performance through Node.js addons",
        "Real-time data monitoring",
        "Support for ARM, Arduino, and ESP devices",
        "User-friendly interface for hardware debugging",
      ],
      challenges: [
        "Bridging C++ native code with Node.js",
        "Managing serial port communication reliably",
        "Creating a responsive Electron UI",
        "Handling different hardware protocols",
      ],
      learnings: [
        "Node.js native addon development",
        "Electron desktop application architecture",
        "Serial communication protocols",
        "Cross-platform compatibility considerations",
      ],
    },
  },
  {
    id: 3,
    name: "Firebase Functions Template",
    description:
      "Firebase Functions template includes the necessary setup for writing, deploying, and testing <span>serverless functions</span>. It uses the Cloud Functions for Firebase SDK to handle events triggered by <span>Firebase services</span>.",
    category: "template",
    image: "/firebase.png",
    icon: "/firebase.svg",
    color: "#FFCA28",
    stacks: [
      "Firebase",
      "Javascript",
      "Controller",
      "Authentication",
      "CRUD",
    ],
    github:
      "https://github.com/DeividReinkeSchiitz/FirebaseFunctionsTemplate",
    details: {
      fullDescription:
        "A production-ready template for Firebase Cloud Functions that provides a solid foundation for building serverless backend applications. Includes authentication, CRUD operations, and proper project structure.",
      features: [
        "Pre-configured Firebase Functions setup",
        "Authentication middleware",
        "CRUD operation templates",
        "Controller-based architecture",
        "Environment configuration management",
        "Error handling patterns",
        "Testing setup",
      ],
      challenges: [
        "Designing scalable serverless architecture",
        "Implementing efficient cold start strategies",
        "Managing Firebase service integrations",
      ],
      learnings: [
        "Serverless architecture patterns",
        "Firebase ecosystem integration",
        "Cloud function optimization",
      ],
    },
  },
  {
    id: 4,
    name: "Postgres Node.js Template",
    description:
      "This template provides a structure for a <span>Node.js application</span> that connects to a PostgreSQL database using the pg library. It includes basic <span>CRUD operations</span>, an environment configuration setup, and a lightweight structure for scalability.",
    category: "template",
    image: "/sql_node.svg",
    icon: "/postgres.svg",
    color: "linear-gradient(to right, #3C873A  0%, #008BB9 100%) 1",
    stacks: [
      "Postgres",
      "Node.js",
      "Javascript",
      "Backend",
      "PG",
      "Express",
      "CRUD",
      "Environment",
      "Sequelize",
    ],
    github:
      "https://github.com/DeividReinkeSchiitz/FirebaseFunctionsTemplate",
    details: {
      fullDescription:
        "A comprehensive Node.js template for PostgreSQL-based applications. Features Express server setup, database connection management, CRUD operations, and Sequelize ORM integration for scalable backend development.",
      features: [
        "PostgreSQL connection with pg library",
        "Express.js server configuration",
        "Sequelize ORM integration",
        "Complete CRUD operation examples",
        "Environment variable management",
        "Database migration support",
        "RESTful API structure",
      ],
      challenges: [
        "Designing efficient database schemas",
        "Implementing connection pooling",
        "Managing database migrations",
      ],
      learnings: [
        "PostgreSQL advanced features",
        "ORM patterns and best practices",
        "Database performance optimization",
      ],
    },
  },
  {
    id: 5,
    name: "Window NPM Package",
    description:
      "An NPM package built with a <span>Node.js addon</span> written in C++ that integrates functionalities from the Windows API (windows.h). This package provides tools for advanced <span>Windows system manipulation</span>, including posting messages, writing values to memory, capturing screenshots, moving the mouse, setting windows to the foreground, and more.",
    category: "library",
    image: "/npm_back.svg",
    icon: "/npm.svg",
    color: "#D50000",
    stacks: [
      "C++",
      "Node.js",
      "Node Addons",
      "NPM Package",
      "Memory",
      "Window Manipulation",
    ],
    live: "https://www.npmjs.com/package/windowcpp",
    details: {
      fullDescription:
        "A powerful NPM package that bridges Node.js with Windows API through native C++ addons, enabling advanced Windows system manipulation and automation directly from JavaScript/TypeScript applications.",
      features: [
        "Windows API integration via C++ addons",
        "Window manipulation (foreground, position, size)",
        "Mouse and keyboard automation",
        "Memory reading and writing capabilities",
        "Screenshot capture functionality",
        "Message posting to Windows",
        "Published on NPM for easy installation",
      ],
      challenges: [
        "Integrating Windows API with Node.js safely",
        "Managing memory across JavaScript and C++ boundaries",
        "Ensuring cross-version Windows compatibility",
        "Handling permissions and security considerations",
      ],
      learnings: [
        "Windows API programming",
        "Advanced C++ and Node.js integration",
        "NPM package development and publishing",
        "System-level programming concepts",
      ],
    },
  },
];

