export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  highlights: string[];
  architectureOverview: {
    pattern: string;
    backend: string;
    database: string;
    frontend: string;
    keyModules: {
      name: string;
      role: string;
      details: string;
    }[];
  };
}

export interface EducationEntry {
  period: string;
  institution: string;
  degree: string;
  status: 'Current' | 'Completed';
  grade?: string;
  coursework?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  tag?: string;
}

export interface Achievement {
  id: string;
  metric: string;
  title: string;
  subtitle: string;
  context: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
