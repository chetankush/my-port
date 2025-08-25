export interface Skill {
  name: string;
  category: "programming" | "frameworks" | "databases" | "tools" | "other";
  proficiency: 1 | 2 | 3 | 4 | 5; // 1=Beginner, 5=Expert
  yearsExperience: number;
  iconUrl?: string;
}

export const skills: Skill[] = [
  // Programming Languages
  {
    name: "JavaScript",
    category: "programming",
    proficiency: 5,
    yearsExperience: 3,
    iconUrl: "/icons/javascript.svg",
  },
  {
    name: "TypeScript",
    category: "programming",
    proficiency: 5,
    yearsExperience: 2,
    iconUrl: "/icons/typescript.svg",
  },
  {
    name: "C++",
    category: "programming",
    proficiency: 4,
    yearsExperience: 3,
    iconUrl: "/icons/cpp.svg",
  },
  {
    name: "Python",
    category: "programming",
    proficiency: 4,
    yearsExperience: 2,
    iconUrl: "/icons/python.svg",
  },

  // Frameworks & Libraries
  {
    name: "HTML",
    category: "frameworks",
    proficiency: 5,
    yearsExperience: 3,
    iconUrl: "/icons/html.svg",
  },
  {
    name: "CSS",
    category: "frameworks",
    proficiency: 5,
    yearsExperience: 3,
    iconUrl: "/icons/css.svg",
  },
  {
    name: "ReactJS",
    category: "frameworks",
    proficiency: 5,
    yearsExperience: 2,
    iconUrl: "/icons/react.svg",
  },
  {
    name: "Redux",
    category: "frameworks",
    proficiency: 4,
    yearsExperience: 2,
    iconUrl: "/icons/redux.svg",
  },
  {
    name: "NextJS",
    category: "frameworks",
    proficiency: 5,
    yearsExperience: 2,
    iconUrl: "/icons/nextjs.svg",
  },
  {
    name: "Node.js",
    category: "frameworks",
    proficiency: 5,
    yearsExperience: 2,
    iconUrl: "/icons/nodejs.svg",
  },
  {
    name: "LangChain",
    category: "frameworks",
    proficiency: 4,
    yearsExperience: 1,
    iconUrl: "/icons/langchain.svg",
  },
  {
    name: "LangGraph",
    category: "frameworks",
    proficiency: 4,
    yearsExperience: 1,
    iconUrl: "/icons/langgraph.svg",
  },
  {
    name: "Docker",
    category: "frameworks",
    proficiency: 4,
    yearsExperience: 1,
    iconUrl: "/icons/docker.svg",
  },

  // Databases
  {
    name: "MongoDB",
    category: "databases",
    proficiency: 5,
    yearsExperience: 2,
    iconUrl: "/icons/mongodb.svg",
  },
  {
    name: "Supabase",
    category: "databases",
    proficiency: 4,
    yearsExperience: 1,
    iconUrl: "/icons/supabase.svg",
  },
  {
    name: "SQL",
    category: "databases",
    proficiency: 4,
    yearsExperience: 2,
    iconUrl: "/icons/sql.svg",
  },
  {
    name: "Zod",
    category: "databases",
    proficiency: 4,
    yearsExperience: 1,
    iconUrl: "/icons/zod.svg",
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    proficiency: 5,
    yearsExperience: 3,
    iconUrl: "/icons/git.svg",
  },
  {
    name: "Github",
    category: "tools",
    proficiency: 5,
    yearsExperience: 3,
    iconUrl: "/icons/github.svg",
  },
  {
    name: "Postman",
    category: "tools",
    proficiency: 5,
    yearsExperience: 2,
    iconUrl: "/icons/postman.svg",
  },
  {
    name: "Netlify",
    category: "tools",
    proficiency: 4,
    yearsExperience: 2,
    iconUrl: "/icons/netlify.svg",
  },

  // Other Skills
  {
    name: "Prompt Engineering",
    category: "other",
    proficiency: 5,
    yearsExperience: 1,
    iconUrl: "/icons/ai.svg",
  },
  {
    name: "Cursor",
    category: "other",
    proficiency: 5,
    yearsExperience: 1,
    iconUrl: "/icons/cursor.svg",
  },
  {
    name: "AI Tools",
    category: "other",
    proficiency: 5,
    yearsExperience: 1,
    iconUrl: "/icons/ai-tools.svg",
  },
  {
    name: "Figma",
    category: "other",
    proficiency: 4,
    yearsExperience: 2,
    iconUrl: "/icons/figma.svg",
  },
  {
    name: "UI/UX",
    category: "other",
    proficiency: 4,
    yearsExperience: 2,
    iconUrl: "/icons/uiux.svg",
  },
];

export const getSkillsByCategory = (category: Skill["category"]) => {
  return skills.filter((skill) => skill.category === category);
};

export const getFeaturedSkills = () => {
  return skills.filter((skill) => skill.proficiency >= 4);
};

export const getSkillByName = (name: string) => {
  return skills.find(
    (skill) => skill.name.toLowerCase() === name.toLowerCase()
  );
};

export const skillCategories = [
  {
    id: "programming",
    name: "Programming Languages",
    skills: getSkillsByCategory("programming"),
    description: "Core programming languages I work with",
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    skills: getSkillsByCategory("frameworks"),
    description: "Modern frameworks and libraries for building applications",
  },
  {
    id: "databases",
    name: "Databases & Data",
    skills: getSkillsByCategory("databases"),
    description: "Database technologies and data management tools",
  },
  {
    id: "tools",
    name: "Version Control & Tools",
    skills: getSkillsByCategory("tools"),
    description: "Development tools and version control systems",
  },
  {
    id: "other",
    name: "Other Skills",
    skills: getSkillsByCategory("other"),
    description:
      "Additional skills including AI tools, design, and emerging technologies",
  },
];

export const getSkillProficiencyLevel = (proficiency: number): string => {
  const levels = {
    1: "Beginner",
    2: "Basic",
    3: "Intermediate",
    4: "Advanced",
    5: "Expert",
  };
  return levels[proficiency as keyof typeof levels] || "Unknown";
};
