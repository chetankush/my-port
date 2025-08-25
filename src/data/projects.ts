export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  category: "web" | "mobile" | "ai" | "blockchain" | "fullstack";
  status: "completed" | "in-progress" | "planned";
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "youtube-summarizer",
    title: "Youtube summarizer AI Agent",
    description:
      "AI-powered YouTube summarizer that reduced video consumption time by 70% using Next.js and TypeScript.",
    longDescription:
      "Developed AI-powered YouTube summarizer that reduced video consumption time by 70% using Next.js and TypeScript. Integrated Anthropic AI for video content analysis with 95% accuracy, enabling instant knowledge extraction. Optimized component rendering with React hooks and state management for 50% faster page load times.",
    technologies: ["NextJs", "Vercel AI SDK", "OpenAI", "Convex", "TypeScript"],
    features: [
      "Reduced video consumption time by 70%",
      "95% accuracy in content analysis",
      "50% faster page load times",
      "Instant knowledge extraction",
      "Anthropic AI integration",
    ],
    githubUrl: "https://github.com/chetankushwah/youtube-summarizer",
    imageUrl: "/images/projects/youtube-summarizer.jpg",
    category: "ai",
    status: "completed",
    featured: true,
  },
  {
    id: "mcp-ai-agent",
    title: "MCP AI Agent",
    description:
      "Developed webapp using MCP to integrate AI agents with Twitter for automated post generation.",
    longDescription:
      "Developed webapp using MCP to integrate AI agents with Twitter for automated post generation. Optimized server-client architecture with Express.js for efficient API handling and real-time Twitter service integration. Built system that automatically generates and publishes posts to Twitter using AI.",
    technologies: [
      "ReactJs",
      "Firebase",
      "Redux",
      "Stripe",
      "Express.js",
      "MCP",
    ],
    features: [
      "Automated post generation",
      "Real-time Twitter integration",
      "Optimized server-client architecture",
      "AI-powered content creation",
      "Efficient API handling",
    ],
    githubUrl: "https://github.com/chetankushwah/mcp-ai-agent",
    imageUrl: "/images/projects/mcp-ai-agent.jpg",
    category: "ai",
    status: "completed",
    featured: true,
  },
  {
    id: "multivendor-ecommerce",
    title: "Multivendor E-commerce WebApp",
    description:
      "End-to-end development of a Multivendor website using MERN stack with scalable architecture.",
    longDescription:
      "Effectively led end-to-end development of a Multivendor website using MERN stack. Designed scalable architecture. Conducted thorough testing and debugging using tools like Postman, ensuring the reliability and security of the website by addressing 25 identified issues promptly and solved them. Implemented vendor engagement features and Sales Analytics.",
    technologies: [
      "ReactJs",
      "TailwindCSS",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Postman",
    ],
    features: [
      "Scalable MERN stack architecture",
      "Vendor engagement features",
      "Sales Analytics",
      "Thorough testing and debugging",
      "Security implementation",
      "Resolved 25 identified issues",
    ],
    githubUrl: "https://github.com/chetankushwah/multivendor-ecommerce",
    imageUrl: "/images/projects/multivendor-ecommerce.jpg",
    category: "fullstack",
    status: "completed",
    featured: true,
  },
  {
    id: "job-finder-webapp",
    title: "Job finder webapp",
    description:
      "Optimized application performance and cross-browser compatibility with scalable architecture.",
    longDescription:
      "Optimized application performance and cross-browser compatibility and Scalability. Demonstrated expertise in CRUD operations using APIs with accessible UI and CSS Animations.",
    technologies: ["React", "Redux", "JWT", "Node.js", "MongoDB", "CSS"],
    features: [
      "Cross-browser compatibility",
      "Scalable architecture",
      "CRUD operations with APIs",
      "Accessible UI design",
      "CSS Animations",
      "JWT Authentication",
    ],
    githubUrl: "https://github.com/chetankushwah/job-finder",
    imageUrl: "/images/projects/job-finder.jpg",
    category: "fullstack",
    status: "completed",
    featured: false,
  },
];

export const getProjectsByCategory = (category: Project["category"]) => {
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export const getProjectById = (id: string) => {
  return projects.find((project) => project.id === id);
};

export const getCompletedProjects = () => {
  return projects.filter((project) => project.status === "completed");
};

export const projectCategories = [
  { id: "all", name: "All Projects", count: projects.length },
  { id: "ai", name: "AI/ML", count: getProjectsByCategory("ai").length },
  {
    id: "fullstack",
    name: "Full Stack",
    count: getProjectsByCategory("fullstack").length,
  },
  { id: "web", name: "Web Apps", count: getProjectsByCategory("web").length },
  {
    id: "blockchain",
    name: "Blockchain",
    count: getProjectsByCategory("blockchain").length,
  },
];
