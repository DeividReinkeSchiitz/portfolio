"use server";

const { TECH_COLORS } = require("@/app/config/colors");

export interface Root {
  frameworks: Framework[];
  websites: Website[];
  mobiles: Mobile[];
  others: Other[];
  social_medias: SocialMedia[];
}

export interface Framework {
  name: string;
  icon: string;
  color: string;
}

export interface Website {
  name: string;
  description: string;
  image: string;
  live: string;
  github: string;
  stacks: Stack[];
}

export interface Stack {
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Mobile {
  name: string;
  description: string;
  icon: string;
  images: string[];
  github: string;
  stacks: Stack[];
}

export interface Other {
  name: string;
  description: string;
  image: string;
  stacks: string[];
  live: string;
  github: string;
  color: string;
}

export interface SocialMedia {
  name: string;
  description: string;
  icon: string;
  link: string;
}

export default async function getStaticData() {
  return {
    frameworks: [
      {
        name: "Postgres",
        icon: "postgres.svg",
        color: TECH_COLORS.Postgres,
      },
      {
        name: "Docker",
        icon: "docker.svg",
        color: TECH_COLORS.Docker,
      },
      {
        name: "Node.js",
        icon: "node.svg",
        color: TECH_COLORS["Node.js"],
      },
      {
        name: "React",
        icon: "react.svg",
        color: TECH_COLORS.React,
      },
      {
        name: "TypeScript",
        icon: "typescript.svg",
        color: TECH_COLORS.TypeScript,
      },
      {
        name: "Golang",
        icon: "golang.svg",
        color: TECH_COLORS.Golang,
      },
      {
        name: "C",
        icon: "c.svg",
        color: TECH_COLORS.C,
      },
      {
        name: "Git",
        icon: "git.svg",
        color: TECH_COLORS.Git,
      },
    ],
    websites: [
      {
        name: "Administrator Panel",
        description:
          "Administrative panel model developed to <span> meet the need </span/> to save weekly reports and artwork related to each client.",
        image: "admin_panel.svg",
        live: "https://azonfunction.firebaseapp.com/Login#/",
        github: "https://github.com/DeividReinkeSchiitz/AdminPanel",
        stacks: [
          {
            name: "Firebase",
            description: "Backend Tool",
            icon: "firebase.svg",
            color: TECH_COLORS.Firebase,
          },
          {
            name: "React",
            description: "Javascript Library",
            icon: "react.svg",
            color: TECH_COLORS.React,
          },
          {
            name: "Material UI",
            description: "React UI Framework",
            icon: "materialui.svg",
            color: TECH_COLORS["Material UI"],
          },
          {
            name: "Styled-Components",
            description: "CSS in JS",
            icon: "styled.svg",
            color: TECH_COLORS["Styled-Components"],
          },
          {
            name: "TypeScript",
            description: "Javascript Superset",
            icon: "typescript.svg",
            color: TECH_COLORS.TypeScript,
          },
        ],
      },
      {
        name: "Portfolio",
        description:
          "My personal developer portfolio, designed to showcase my <span>projects</span> and the technologies I <span>specialize </span>in.",
        image: "portfolio.svg",
        live: "https://schiitz.com",
        github: "https://github.com/DeividReinkeSchiitz/portpofio",
        stacks: [
          {
            name: "React",
            description: "Javascript Library",
            icon: "react.svg",
            color: TECH_COLORS.React,
          },
          {
            name: "TypeScript",
            description: "Javascript Superset",
            icon: "typescript.svg",
            color: TECH_COLORS.TypeScript,
          },
          {
            name: "Tailwind CSS",
            description: "Utility-first CSS framework",
            icon: "tailwind.svg",
            color: TECH_COLORS["Tailwind CSS"],
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
            color: TECH_COLORS["Oracle Cloud"],
          },
        ],
      },
      {
        name: "Twitter Clone",
        description:
          "Twitter clone project created to learn new technologies, libraries and project structure.",
        image: "twitter_clone.svg",
        live: "https://stoic-northcutt-31c14a.netlify.app/",
        github: "https://github.com/DeividReinkeSchiitz/TwitterClone",
        stacks: [
          {
            name: "React",
            description: "Javascript Library",
            icon: "react.svg",
            color: TECH_COLORS.React,
          },
          {
            name: "Styled-Components",
            description: "CSS in JS",
            icon: "styled.svg",
            color: TECH_COLORS["Styled-Components"],
          },
          {
            name: "TypeScript",
            description: "Javascript Superset",
            icon: "typescript.svg",
            color: TECH_COLORS.TypeScript,
          },
        ],
      },
    ],
    mobiles: [
      {
        name: "Qacademic",
        description:
          "Mobile <span>App</span> made to visualize grades and download class material by high school " +
          "students from a Federal Institute in Brazil. The <span>server</span> was made " +
          "<span>Web Scrapping </span>the official website from the Institution.",
        icon: "qacademic_icon.svg",
        images: ["/qacademic1.svg", "/qacademic2.svg", "/qacademic3.svg"],
        github: "https://github.com/DeividReinkeSchiitz/Qacademic",
        stacks: [
          {
            name: "React Native",
            description: "Mobile Framework",
            icon: "react.svg",
            color: TECH_COLORS["React Native"],
          },
          {
            name: "TypeScript",
            description: "Javascript Superset",
            icon: "typescript.svg",
            color: TECH_COLORS.TypeScript,
          },
          {
            name: "Node.js",
            description: "Javascript Runtime",
            icon: "node.svg",
            color: TECH_COLORS["Node.js"],
          },
          {
            name: "Web Scraping",
            description: "Data Extraction",
            icon: "web_scraping.svg",
            color: "#FF8F00",
          },
          {
            name: "CRUD",
            description: "Create|Update|Update|Delete",
            icon: "crud.svg",
            color: "#5C7CFA",
          },
        ],
      },
      {
        name: "Pill Dispenser",
        description:
          "The Pill Dispenser Medication App is a <span>Mobile</span> project built on a" +
          "<span> Firebase Function </span> backend. It is designed to integrate " +
          "seamlessly with <span>hardware</span> dispensers powered by" +
          " ESP32, Arduino, or ARM processors, ensuring <span>efficient</span> and" +
          " reliable medication management.",
        icon: "pill_icon.svg",
        images: ["/pill1.svg", "/pill2.svg", "/pill3.svg"],
        github: "https://github.com/DeividReinkeSchiitz/PillDispenser",
        stacks: [
          {
            name: "Firebase",
            description: "Backend Tool",
            icon: "firebase.svg",
            color: TECH_COLORS.Firebase,
          },
          {
            name: "TypeScript",
            description: "Javascript Superset",
            icon: "typescript.svg",
            color: TECH_COLORS.TypeScript,
          },
          {
            name: "Node.js",
            description: "Javascript Runtime",
            icon: "node.svg",
            color: TECH_COLORS["Node.js"],
          },
          {
            name: "React Native",
            description: "Mobile Framework",
            icon: "react.svg",
            color: TECH_COLORS["React Native"],
          },
          {
            name: "Expo",
            description: "Ecosystem of Tools",
            icon: "/expo.png",
            color: "#000000",
          },

          {
            name: "Styled-Components",
            description: "CSS in JS",
            icon: "styled.svg",
            color: TECH_COLORS["Styled-Components"],
          },
          {
            name: "CRUD",
            description: "Create|Update|Update|Delete",
            icon: "crud.svg",
            color: "#5C7CFA",
          },
        ],
      },
      {
        name: "Covid Data VIew",
        description:
          "Unofficial App made during quarantine to see Covid <span>Statistics</span>. Created \n" +
          "over a <span>open source </span> rapid api interface.",
        icon: "covid.svg",
        images: ["/covid1.svg", "/covid2.svg", "/covid3.svg"],
        github: "https://github.com/DeividReinkeSchiitz/covid-19",
        stacks: [
          {
            name: "React Native",
            description: "Mobile Framework",
            icon: "react.svg",
            color: TECH_COLORS["React Native"],
          },
          {
            name: "TypeScript",
            description: "Javascript Superset",
            icon: "typescript.svg",
            color: TECH_COLORS.TypeScript,
          },
          {
            name: "Expo",
            description: "Ecosystem of Tools",
            icon: "/expo.png",
            color: "#686868",
          },
          {
            name: "CRUD",
            description: "Create|Update|Update|Delete",
            icon: "crud.svg",
            color: "#5C7CFA",
          },
        ],
      },
    ],
    others: [
      {
        name: "Structured C code",
        description:
          "Foundation is crucial. Creation of a well-structured C project that adheres to Unix-style. Logs, Test, error handler, bash scripts, bins, static and dynamic libraries, make files and Data Structures.",
        image: "/c_code.png",
        icon: "c.svg",
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
        live: "",
        github: "https://github.com/DeividReinkeSchiitz/vm",
        color: "#00C7FF",
      },
      {
        name: "Comportc",
        description: `This software is built using Electron and a C++ library with Node.js native addons. It allows for reading and writing to a serial COM port, similar to the Arduino IDE’s monitor, but it is not integrated. It is useful for testing software on ARM, Arduino, and ESP devices.`,
        image: "/comportc.png",
        icon: "/comportc_icon.png",
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
        color: "#7F6FED",
      },
      {
        name: "Firebase Functions Template",
        description: `Firebase Functions template includes the necessary setup for writing, deploying, and testing serverless functions. It uses the Cloud Functions for Firebase SDK to handle events triggered by Firebase services`,
        image: "/firebase.png",
        icon: "firebase.svg",
        stacks: [
          "Firebase",
          "Javascript",
          "Controller",
          "Authentication",
          "CRUD",
        ],
        live: "",
        github:
          "https://github.com/DeividReinkeSchiitz/FirebaseFunctionsTemplate",
        color: TECH_COLORS.Firebase,
      },
      {
        name: "Postgres Node.js Template",
        description: `This template provides a structure for a Node.js application that connects to a PostgreSQL database using the pg library. It includes basic CRUD operations, an environment configuration setup, and a lightweight structure for scalability.`,
        image: "/sql_node.svg",
        icon: "postgres.svg",
        stacks: [
          "Postgres",
          "Node.js",
          "javascript",
          "Backend",
          "PG",
          "Express",
          "CRUD",
          "Environment",
          "sequelize",
        ],
        live: "",
        github:
          "https://github.com/DeividReinkeSchiitz/FirebaseFunctionsTemplate",
        color: "linear-gradient(to right, #3C873A  0%, #008BB9 100%) 1",
      },

      {
        name: "Window NPM Package",
        description: `An NPM package built with a Node.js addon written in C++ that integrates functionalities from the Windows API (windows.h). This package provides tools for advanced Windows system manipulation, including posting messages, writing values to memory, capturing screenshots, moving the mouse, setting windows to the foreground, and more.`,
        image: "npm_back.svg",
        icon: "npm.svg",
        stacks: [
          "C++",
          "Node.js",
          "Node Addons",
          "NPM Package",
          "Memory",
          "Window Manipulation",
        ],
        live: "https://www.npmjs.com/package/windowcpp",
        github: "",
        color: "#D50000",
      },
    ],
    social_medias: [
      {
        name: "LinkedIn",
        description: "deividrs",
        icon: "linkedin.svg",
        link: "https://www.linkedin.com/in/deividrs/",
      },
      {
        name: "Instagram",
        description: "_deivid.rs_",
        icon: "instagram.svg",
        link: "https://www.instagram.com/_deivid.rs_/",
      },
      {
        name: "GitHub",
        description: "DeividReinkeSchiitz",
        icon: "github.svg",
        link: "https://github.com/DeividReinkeSchiitz",
      },
      {
        name: "Email",
        description: "deivid@schiitz.com",
        icon: "email.svg",
        link: "mailto:deivid@schiitz.com?subject=Hello&body=I%20wanted%20to%20reach%20out.",
      },
    ],
  };
}
