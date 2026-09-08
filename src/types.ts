export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools & Concepts';
  level: number; // percentage 0-100
  highlight?: string;
}

export interface ProjectItem {
  id: string;
  number: string; // "01", "02", etc.
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  liveUrlText?: string;
  image: string;
  features: string[];
  architectureNotes?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
  skills: string[];
  metricsHighlight?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  cgpa: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  companyOrAffiliation: string;
  avatar: string;
}

export interface AchievementItem {
  id: string;
  number: string;
  badge: string;
  metric: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  linkUrl?: string;
  linkText?: string;
}
