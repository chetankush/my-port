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
    id: "leads-hunting-platform",
    title: "Leads Hunting Platform",
    description:
      "Built a platform to automate cold email campaigns, improving efficiency and scalability.",
    longDescription:
      "Built a platform to automate cold email campaigns, improving efficiency and scalability. Developed Mail Sending and management features. Integrated email verification and Mails management workflow for streamlined lead generation and outreach.",
    technologies: ["Nextjs", "Supabase", "Redux", "Clerk", "TypeScript"],
    features: [
      "Automated cold email campaigns",
      "Mail sending and management",
      "Email verification integration",
      "Mails management workflow",
      "Improved efficiency and scalability",
    ],
    githubUrl: "https://github.com/chetankush/LeadsTenet",
    imageUrl: "/images/projects/leads-hunting.jpg",
    category: "fullstack",
    status: "completed",
    featured: true,
  },
  {
    id: "youtube-summarizer",
    title: "Youtube summarizer AI Agent",
    description:
      "AI-powered YouTube summarizer that reduced video consumption time by 70% using Next.js and TypeScript.",
    longDescription:
      "Developed AI-powered YouTube summarizer that reduced video consumption time by 70% using Next.js and TypeScript. Integrated LLMs for video text content analysis with 95% accuracy, implemented tool calling using gemini api. Optimized component rendering with React hooks and state management.",
    technologies: [
      "NextJs",
      "Vercel AI SDK",
      "OpenAI",
      "Convex",
      "Clerk",
      "TypeScript",
    ],
    features: [
      "Reduced video consumption time by 70%",
      "95% accuracy in content analysis",
      "LLM integration for video analysis",
      "Tool calling with Gemini API",
      "Instant knowledge extraction",
    ],
    githubUrl: "https://github.com/chetankush/yt-agent-golum",
    imageUrl: "/images/projects/youtube-summarizer.jpg",
    category: "ai",
    status: "completed",
    featured: true,
  },
  {
    id: "multivendor-ecommerce",
    title: "Multivendor E-commerce WebApp",
    description:
      "Architected a multivendor e-commerce platform using Next.js and Prisma with vendor dashboards and analytics.",
    longDescription:
      "Architected a multivendor e-commerce platform using Next.js and Prisma with vendor dashboards and analytics, product management, and secure admin approvals. Implemented user engagement features like geolocation-based store discovery, image-based reviews for stores and store products, and optimistic UI for favorites. Enhanced platform stability and security by resolving 25+ issues and integrating role-based access control with NextAuth.js.",
    technologies: [
      "Nextjs",
      "Redux",
      "Supabase",
      "Supabase auth",
      "Prisma",
      "TypeScript",
    ],
    features: [
      "Vendor dashboards and analytics",
      "Product management system",
      "Geolocation-based store discovery",
      "Image-based reviews",
      "Role-based access control",
      "Resolved 25+ issues",
    ],
    githubUrl: "https://github.com/chetankush/LocalMart",
    imageUrl: "/images/projects/multivendor-ecommerce.jpg",
    category: "fullstack",
    status: "completed",
    featured: true,
  },
  {
    id: "job-finder-webapp",
    title: "Job finder webapp",
    description:
      "Job search platform with advanced filters, job posting, and user profile CRUD operations.",
    longDescription:
      "Implemented job search functionality with job search filters, job posting and applying with user profile CRUD operations with accessible UI and clean UX. Optimized application performance and cross-browser compatibility with JWT authentication for secure user management.",
    technologies: ["React", "Redux", "JWT", "Node.js", "MongoDB", "CSS"],
    features: [
      "Job search with filters",
      "Job posting and applying",
      "User profile CRUD operations",
      "Accessible UI design",
      "JWT Authentication",
      "Cross-browser compatibility",
    ],
    githubUrl: "https://github.com/chetankush/Fresherjobs",
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
