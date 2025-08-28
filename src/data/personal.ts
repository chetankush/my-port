export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  profileImage: string;
  resumeUrl: string;
  availability: "available" | "busy" | "not-looking";
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
}

export const personalInfo: PersonalInfo = {
  name: "Chetan Kushwah",
  title: "Software Engineer",
  tagline:
    "Building digital experiences that inspire and transform ideas into reality through cutting-edge technology and creative innovation.",
  bio: "Full Stack Engineer with experience in React.js, Next.js, and Node.js. Specialized in building scalable web applications, AI-powered platforms, and blockchain solutions. Proven track record of optimizing performance and delivering high-quality solutions.",
  location: "Guna, MP- India",
  email: "chetankushwah929@gmail.com",
  phone: "+91 9303135537",
  profileImage: "/images/profile/chetan-kushwah.jpg",
  resumeUrl: "/resume/chetan-kushwah-resume.pdf",
  availability: "available",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/chetankushwah",
    username: "@chetankushwah",
    icon: "linkedin",
  },
  {
    platform: "GitHub",
    url: "https://github.com/chetankush",
    username: "@chetankushwah",
    icon: "github",
  },
  {
    platform: "Portfolio",
    url: "https://chetan-kushwah.netlify.app",
    username: "Portfolio",
    icon: "globe",
  },
  {
    platform: "Email",
    url: "mailto:chetankushwah929@gmail.com",
    username: "chetankushwah929@gmail.com",
    icon: "email",
  },
];

export const interests = [
  "Open Source Contributions",
  "Web Performance Optimization",
  "UI/UX Design",
  "Machine Learning",
  "Mobile Development",
  "Tech Mentoring",
  "Conference Speaking",
  "Photography",
  "Hiking",
  "Coffee Brewing",
];

export const stats = {
  yearsOfExperience: 4,
  projectsCompleted: 50,
  clientsSatisfied: 25,
  linesOfCode: 100000,
  coffeeConsumed: 1000,
};

export const getAvailabilityStatus = (): string => {
  const statusMap = {
    available: "Available for new opportunities",
    busy: "Currently busy but open to discussions",
    "not-looking": "Not actively looking for new opportunities",
  };
  return statusMap[personalInfo.availability];
};

export const getContactInfo = () => {
  return {
    email: personalInfo.email,
    phone: personalInfo.phone,
    location: personalInfo.location,
    availability: getAvailabilityStatus(),
  };
};
