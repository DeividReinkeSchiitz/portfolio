import phone_svg from "@/../public/phone.svg";
import battery_svg from "@/../public/battery.svg";
import { IconConfig } from "@/app/components/PageHeader/types";
import { ShowcaseProject } from "@/app/Mobiles/components/MobileShowcases/types";
import { colors } from "@/app/colors";

export const mobilesPageConfig = {
  title: "Mobile Projects",
  description:
    "I've built cool <span>Mobile Apps</span> using anything from Native to React Native. Here are some of my <span>favorite</span> projects over the course of my journey.",
  icons: [
    {
      src: phone_svg,
      alt: "Phone",
      className:
        "absolute w-10 h-10 md:w-16 md:h-16 top-[-38px] right-20 md:right-0",
    },
    {
      src: battery_svg,
      alt: "Battery",
      className:
        "absolute w-10 h-10 md:w-16 md:h-16 top-[-38px] md:bottom-[-60px] left-[35px]",
    },
  ] as IconConfig[],
};

export const mobileProjects: ShowcaseProject[] = [
  {
    id: "qacademic",
    name: "Qacademic",
    tagline: "Academic grade tracker & material downloader for students",
    description:
      "Mobile <span>App</span> made to visualize grades and download class material by high school " +
      "students from a Federal Institute in Brazil. The <span>server</span> was built by " +
      "<span>Web Scraping</span> the official website from the Institution, exposing a clean REST API " +
      "that the mobile client consumes. Students can check grades, absences, and download PDF materials " +
      "directly from their phones — replacing a clunky desktop-only portal with a fast, offline-capable " +
      "mobile experience.",
    icon: "qacademic_icon.svg",
    images: ["/qacademic1.svg", "/qacademic2.svg", "/qacademic3.svg"],
    github: "https://github.com/DeividReinkeSchiitz/Qacademic",
    color: colors["Node.js"],
    role: "Full-Stack Developer",
    highlights: [
      "Built a custom web scraping server in Node.js to extract grades and class material from the institution portal",
      "Designed an offline-first architecture so students can check grades without connectivity",
      "Handled authentication flow mirroring the institution's session-based login",
      "Implemented PDF download and local file caching for class materials",
      "Used by students of a Brazilian Federal Institute",
    ],
    stacks: [
      {
        name: "React Native",
        description: "Mobile Framework",
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
        name: "Node.js",
        description: "Backend Runtime",
        icon: "node.svg",
        color: "#3C873A",
      },
      {
        name: "Web Scraping",
        description: "Data Extraction",
        icon: "web_scraping.svg",
        color: "#FF8F00",
      },
      {
        name: "CRUD",
        description: "Create | Read | Update | Delete",
        icon: "crud.svg",
        color: "#5C7CFA",
      },
    ],
  },
  {
    id: "pill-dispenser",
    name: "Pill Dispenser",
    tagline: "IoT medication management with hardware integration",
    description:
      "The Pill Dispenser Medication App is a <span>Mobile</span> project built on a " +
      "<span>Firebase Function</span> backend. It is designed to integrate " +
      "seamlessly with <span>hardware</span> dispensers powered by " +
      "ESP32, Arduino, or ARM processors, ensuring <span>efficient</span> and " +
      "reliable medication management. The app handles scheduling, push notifications, " +
      "dosage tracking, and real-time syncing with physical dispenser units — bridging " +
      "the gap between software and embedded systems.",
    icon: "pill_icon.svg",
    images: ["/pill1.svg", "/pill2.svg", "/pill3.svg"],
    github: "https://github.com/DeividReinkeSchiitz/PillDispenser",
    color: colors["React Native"],
    role: "Full-Stack & IoT Developer",
    highlights: [
      "Integrated with ESP32 / Arduino hardware dispensers via Firebase real-time database",
      "Built serverless backend with Firebase Functions for scheduling and push notifications",
      "Implemented medication schedule management with recurring dosage support",
      "Real-time sync between the app and physical dispenser hardware",
      "Designed intuitive UI with medication history and adherence tracking",
      "Expo-based development for rapid iteration and OTA updates",
    ],
    stacks: [
      {
        name: "React Native",
        description: "Mobile Framework",
        icon: "react.svg",
        color: "#58C4DC",
      },
      {
        name: "Firebase",
        description: "Backend & Realtime DB",
        icon: "firebase.svg",
        color: "#FF8F00",
      },
      {
        name: "TypeScript",
        description: "Javascript Superset",
        icon: "typescript.svg",
        color: "#3178C6",
      },
      {
        name: "Node.js",
        description: "Serverless Functions",
        icon: "node.svg",
        color: "#3C873A",
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
        color: "#F456FF",
      },
      {
        name: "CRUD",
        description: "Create | Read | Update | Delete",
        icon: "crud.svg",
        color: "#5C7CFA",
      },
    ],
  },
  {
    id: "covid-data-view",
    name: "Covid Data View",
    tagline: "Real-time pandemic statistics tracker",
    description:
      "Unofficial App made during quarantine to see Covid <span>Statistics</span> in real time. " +
      "Created over an <span>open source</span> Rapid API interface, pulling live data for cases, " +
      "deaths, recoveries, and vaccination progress across countries. Features include interactive " +
      "charts, country comparison, and historical data visualization — built as a learning project " +
      "that turned into a genuinely useful tool during the pandemic.",
    icon: "covid.svg",
    images: ["/covid1.svg", "/covid2.svg", "/covid3.svg"],
    github: "https://github.com/DeividReinkeSchiitz/covid-19",
    color: colors.Firebase,
    role: "Mobile Developer",
    highlights: [
      "Consumed a public REST API with real-time worldwide pandemic data",
      "Built interactive data visualization with charts and country comparison",
      "Implemented search and filtering across 200+ countries",
      "Created during the COVID-19 quarantine as a practical learning project",
      "Expo-based for quick deployment and cross-platform support",
    ],
    stacks: [
      {
        name: "React Native",
        description: "Mobile Framework",
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
        name: "Expo",
        description: "Ecosystem of Tools",
        icon: "/expo.png",
        color: "#686868",
      },
      {
        name: "CRUD",
        description: "REST API Integration",
        icon: "crud.svg",
        color: "#5C7CFA",
      },
    ],
  },
];
