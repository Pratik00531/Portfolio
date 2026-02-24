// index.js

export const servicesData = [
  {
    title: "Full Stack Development",
    description:
      "I build scalable, production-ready web applications with strong backend architecture and modern frontend systems. My focus is clean code, performance, and long-term maintainability—not quick hacks.",
    items: [
      {
        title: "Frontend Engineering",
        description: "(React 18, TypeScript, Vite, TailwindCSS, shadcn/ui)",
      },
      {
        title: "Backend Systems",
        description: "(FastAPI, REST APIs, JWT Auth, Pydantic Validation)",
      },
      {
        title: "Database Architecture",
        description: "(Supabase, PostgreSQL, API Integrations, Secure Data Models)",
      },
    ],
  },
  {
    title: "AI-Powered Applications",
    description:
      "I design intelligent systems by integrating LLMs, computer vision, and real-time processing into practical applications—especially in healthcare and nutrition.",
    items: [
      {
        title: "LLM Integration",
        description: "(Groq AI, AI Medical Chat Systems, Prompt Engineering)",
      },
      {
        title: "Computer Vision",
        description: "(OpenCV, pyzbar, Barcode Scanning, Image Processing)",
      },
      {
        title: "AI Health Intelligence",
        description: "(Nutrition Scoring, Medical Image Analysis, Smart Insights)",
      },
    ],
  },
  {
    title: "Healthcare Web Platforms",
    description:
      "I specialize in building secure, user-focused health-tech platforms with authentication, dashboards, analytics, and intelligent workflows.",
    items: [
      {
        title: "Medical Consultation Systems",
        description: "(AI Chat, Voice Support, Smart Diagnostic Interfaces)",
      },
      {
        title: "Location-Based Services",
        description: "(Doctor Discovery, Geo Filtering Systems)",
      },
      {
        title: "Analytics & Dashboards",
        description: "(Recharts, Data Visualization, Real-Time Health Metrics)",
      },
    ],
  },
  {
    title: "Performance & System Design",
    description:
      "Beyond features, I care about system performance, scalability, and secure architecture. Every product I build is structured for growth.",
    items: [
      {
        title: "Secure Authentication",
        description: "(JWT, Password Hashing, Role-Based Access)",
      },
      {
        title: "API Optimization",
        description: "(Structured Validation, Error Handling, Clean Endpoints)",
      },
      {
        title: "Modern Dev Workflow",
        description: "(Git, ESLint, Prettier, Modular Code Architecture)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "NutriLens",
    description:
      "AI-powered nutrition intelligence platform that scans product barcodes, analyzes ingredients, calculates health scores, and provides personalized health recommendations.",
    href: "https://nutrilens-alpha.vercel.app/",
    image: "/assets/projects/nutrilens.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React 18" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "FastAPI" },
      { id: 4, name: "OpenCV" },
      { id: 5, name: "OpenFoodFacts API" },
      { id: 6, name: "Supabase" },
    ],
  },
  {
    id: 2,
    name: "PrediCare",
    description:
      "Modern AI-driven healthcare application featuring medical consultations, AI chat support, medical image analysis, and voice-assisted interaction.",
    href: "https://predicare.vercel.app/",
    image: "/assets/projects/predicare.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "React + Vite" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "FastAPI" },
      { id: 4, name: "Groq AI" },
      { id: 5, name: "Firebase" },
    ],
  },
  {
    id: 3,
    name: "OxyHeal",
    description:
      "Secure healthcare management platform with authentication systems, patient dashboards, analytics visualization, and structured backend architecture.",
    href: "https://oxyheal-frontend-e4f0f7c1aba7.herokuapp.com/",
    image: "/assets/projects/oxyheal.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React 18.3" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "FastAPI 0.115" },
      { id: 4, name: "Supabase PostgreSQL" },
      { id: 5, name: "JWT Auth" },
      { id: 6, name: "Recharts" },
    ],
  },
  {
    id: 4,
    name: "FindDoctors",
    description:
      "Location-based doctor discovery platform enabling users to find nearby healthcare professionals through structured UI and geo-filtering systems.",
    href: "https://preview--indimed-nearby-docs.lovable.app/",
    image: "/assets/projects/finddoctors.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Vite" },
      { id: 4, name: "TailwindCSS" },
      { id: 5, name: "shadcn/ui" },
    ],
  },
];

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/pratikkpatellll/" },
  {name: "X",href: "https://x.com/pratik005_"},
  { name: "LinkedIn", href: "https://www.linkedin.com/in/pratik-patel-17891b23a/" },
  { name: "GitHub", href: "https://github.com/Pratik00531" },
];
