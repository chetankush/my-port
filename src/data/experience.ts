export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship";
  startDate: string;
  endDate: string | "present";
  description: string[];
  technologies: string[];
  achievements?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  relevant_coursework?: string[];
}

export const experiences: Experience[] = [
  {
    id: "wipiway-fullstack",
    title: "Full Stack Engineer",
    company: "Wipiway LLC",
    location: "San Francisco, Remote",
    type: "full-time",
    startDate: "Feb 2024",
    endDate: "present",
    description: [
      "Redesigned and optimized React.js frontend architecture for Wipiway LLC, improved page load speed by 42% and boosted user retention by 25%.",
      "Architected and deployed full-stack hospitality management platform for a hotel Brand, integrated StayFlexi API booking system, achieving 99% uptime, also have integrated Telegram ai chatbot.",
      "Engineered AI-powered cryptocurrency portfolio tracker with GenAI, implemented automated notification system via email and Telegram, also have fraud detection capabilities with 90% accuracy for scam token identification.",
      "Developing (DeFi) memecoin trading platform using Next.js & Node.js with Solana blockchain, implementing realtime charts & Web3 integration.",
      "Building AI Agent leveraging LLMs & MCP (Model Context Protocol) for personalized notification management, integrating multi-tool orchestration for automated booking operations and integrating AI with Telegram & whatsapp that handles 90% of customer service inquiries.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Solana",
      "Web3",
      "GenAI",
      "LLMs",
      "MCP",
      "Telegram API",
      "WhatsApp API",
      "StayFlexi API",
    ],
    achievements: [
      "Improved page load speed by 42%",
      "Boosted user retention by 25%",
      "Achieved 99% uptime for hospitality platform",
      "90% accuracy for fraud detection",
      "Handles 90% of customer service inquiries",
    ],
  },
  {
    id: "desiqna-intern",
    title: "SDE Intern",
    company: "DesiQnA",
    location: "Mumbai, Remote",
    type: "internship",
    startDate: "June 2023",
    endDate: "August 2023",
    description: [
      "Worked on the Design and Development part of a fully responsive webpage for a particular section of DesiQnA",
      "Worked on User Verification/Authentication.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Authentication"],
  },
];

export const education: Education[] = [
  {
    id: "btech-cse",
    degree: "B.Tech. (CSE)",
    institution: "Jaypee University of Engineering and Technology",
    location: "Guna, MP- India",
    startDate: "2020",
    endDate: "2024",
    relevant_coursework: [
      "Operating System",
      "Computer Networks",
      "Object Oriented Programming",
      "Database Management System",
    ],
  },
  {
    id: "higher-secondary",
    degree: "Higher Secondary",
    institution: "Nation Higher Secondary School",
    location: "Guna, MP- India",
    startDate: "",
    endDate: "2020",
  },
  {
    id: "secondary",
    degree: "Secondary",
    institution: "Akansha Public School",
    location: "Guna, MP- India",
    startDate: "",
    endDate: "2018",
  },
];

export const achievements = [
  "5 star on HackerRank, Leetcode, GFG and CodeStudio",
  "Developed 5+ projects from design to production",
];

export const getExperienceByType = (type: Experience["type"]) => {
  return experiences.filter((exp) => exp.type === type);
};

export const getCurrentPosition = () => {
  return experiences.find((exp) => exp.endDate === "present");
};

export const getTotalExperience = () => {
  // Calculate based on current position and internships
  return "1+ years";
};
