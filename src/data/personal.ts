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
  bio: "Full Stack Engineer with experience in React.js, Next.js, and Node.js. Specialized in building scalable web applications, AI-powered platforms and solutions. Proven track record of optimizing performance and delivering high-quality solutions.",
  location: "Noida, UP - India",
  email: "chetankushwah929@gmail.com",
  phone: "+91 9303135537",
  profileImage: "/images/profile/chetan-kushwah.jpg",
  resumeUrl:
    "https://drive.google.com/file/d/1xpJ4gKEMlJ0W8o2oGPiwELY31fCmKkw1/view?usp=sharing",
  availability: "available",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/chetan-kushwah-5592371b9/",
    username: "@chetan-kushwah",
    icon: "linkedin",
  },
  {
    platform: "GitHub",
    url: "https://github.com/chetankush",
    username: "@chetankush",
    icon: "github",
  },
  {
    platform: "LeetCode",
    url: "https://leetcode.com/u/chetan_01010_/",
    username: "@chetan_01010_",
    icon: "code",
  },
  {
    platform: "Portfolio",
    url: "https://dev.d2is74ake4666u.amplifyapp.com/",
    username: "Portfolio",
    icon: "globe",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/chetankushwah05",
    username: "@chetankushwah05",
    icon: "instagram",
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
  yearsOfExperience: 2,
  projectsCompleted: 10,
  clientsSatisfied: 5,
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
