export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  description?: string;
  modalContent?: { title: string; items: string[] }[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  live?: string;
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  link?: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  icon: string;
  href?: string;
  isLink?: boolean;
}

export interface GitHubStats {
  repos: number;
  followers: number;
  following: number;
  stars: number;
  contributions: number;
}
