import { Project, EducationEntry, Certification, Achievement, SkillGroup } from '../types';

export const PERSONAL_INFO = {
  fullName: 'Veera Venkata Satya Narayana Meka',
  shortName: 'Sathya Meka',
  brandName: 'SATHYA.',
  roleHeadline: 'DATA SCIENCE ENGINEER • SOFTWARE DEVELOPER',
  location: 'Rajahmundry, Andhra Pradesh, India',
  email: 'innovativeden0@gmail.com',
  links: {
    github: 'https://github.com/SathyaMeka33',
    linkedin: 'https://www.linkedin.com/in/mekasathya/',
    leetcode: 'https://leetcode.com/u/Sathya_Meka/',
  },
  objective:
    'Motivated Data Science engineering student seeking a Software Engineering internship, with experience building real-world applications using Python, JavaScript, and SQL and a strong foundation in data structures, algorithms, and database management.',
  heroTagline: 'Data Science engineering student focused on software engineering, scalable applications, algorithms, and problem solving.',
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'LANGUAGES',
    skills: ['Python', 'Java', 'C', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'FRAMEWORKS & LIBRARIES',
    skills: ['React.js', 'Node.js'],
  },
  {
    category: 'BACKEND / APPLICATION DEVELOPMENT',
    skills: ['Python', 'Django', 'REST APIs'],
  },
  {
    category: 'DATABASES',
    skills: ['SQL', 'PostgreSQL'],
  },
  {
    category: 'TOOLS',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
  {
    category: 'CORE CONCEPTS',
    skills: [
      'Data Structures',
      'Algorithms',
      'OOP',
      'DBMS',
      'Problem Solving',
      'Responsive Design',
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'career-os',
    number: '01',
    title: 'CAREER OS',
    subtitle: 'AI-Powered Career Intelligence & Pathway Architecture',
    description:
      'An AI-powered career guidance platform delivering personalized career recommendations based on user skills and interests.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'SQL'],
    githubUrl: 'https://github.com/SathyaMeka33',
    highlights: [
      'AI-powered career guidance engine',
      'Personalized skills & career path recommendations',
      'Comprehensive user profile and credentials management',
      'Resilient backend business logic and query optimization',
      'Relational database integration for candidate profile tracking',
      'Scalable Django architecture adhering to MVC standards',
      'MVC-based application structure with clean separation of concerns',
    ],
    architectureOverview: {
      pattern: 'Model-View-Controller (Django MVT/MVC Pattern)',
      backend: 'Python / Django Server with REST Endpoints',
      database: 'Relational SQL schema for profile models & domain maps',
      frontend: 'Semantic HTML5, Modular CSS3, and JavaScript UI',
      keyModules: [
        {
          name: 'Recommendation Engine',
          role: 'Core Intelligence Service',
          details: 'Evaluates user skill vectors, interest profiles, and domain competencies to calculate pathway alignment scores.',
        },
        {
          name: 'Profile & State Management',
          role: 'Data Layer Integration',
          details: 'Persists user progression, tracked skill acquisition, and personalized milestones inside the SQL store.',
        },
        {
          name: 'Django Controller Pipelines',
          role: 'Application Orchestration',
          details: 'Handles session security, request authentication, query aggregation, and response payloads.',
        },
      ],
    },
  },
];

export const EDUCATION_TIMELINE: EducationEntry[] = [
  {
    period: '2024 — Present',
    institution: 'Aditya College of Engineering and Technology',
    degree: 'Bachelor of Technology in Data Science',
    status: 'Current',
    coursework: [
      'Data Structures',
      'Object-Oriented Programming',
      'DBMS',
      'Statistics',
      'Python',
      'SQL',
    ],
  },
  {
    period: 'Completed',
    institution: 'Rajiv Gandhi University of Knowledge Technologies',
    degree: 'Intermediate / 12th Standard',
    status: 'Completed',
    grade: '94.6%',
  },
  {
    period: 'Completed',
    institution: 'ZPHS Vetlapalem',
    degree: 'SSC / 10th Standard',
    status: 'Completed',
    grade: '94.5%',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'smart-coder',
    title: 'SMART CODER',
    issuer: 'Smart Interviews',
    description: 'Data Structures and Algorithms — Basic to Advanced',
    tag: 'Advanced Algorithms',
  },
  {
    id: 'atf-2025',
    title: 'ATF 2025',
    issuer: 'National Technical Forum',
    description: 'Qualified Second Round Candidate',
    tag: 'Technical Evaluation',
  },
  {
    id: 'azure-essentials',
    title: 'AZURE ESSENTIALS',
    issuer: 'Microsoft & LinkedIn Learning',
    description: 'Cloud Fundamentals and Infrastructure Architecture',
    tag: 'Cloud Infrastructure',
  },
  {
    id: 'ibm-ai',
    title: 'GETTING STARTED WITH AI',
    issuer: 'IBM',
    description: 'Applied Artificial Intelligence & Machine Learning Concepts',
    tag: 'Artificial Intelligence',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'dsa-problems',
    metric: '250+',
    title: 'DSA Problems Solved',
    subtitle: 'LeetCode & Competitive Coding',
    context: 'Consistently solving data structure and algorithmic challenges across trees, graphs, dynamic programming, and arrays.',
  },
  {
    id: 'intermediate-score',
    metric: '94.6%',
    title: 'Intermediate (12th Standard)',
    subtitle: 'Rajiv Gandhi University of Knowledge Technologies',
    context: 'Academic excellence with high percentile in mathematics, physical sciences, and technical foundations.',
  },
  {
    id: 'ssc-score',
    metric: '94.5%',
    title: 'SSC (10th Standard)',
    subtitle: 'ZPHS Vetlapalem',
    context: 'Foundational academic honors with top marks across scientific and mathematical coursework.',
  },
  {
    id: 'hackathon-participant',
    metric: 'ACTIVE',
    title: 'Hackathon Participant',
    subtitle: 'Collaborative Problem Solving',
    context: 'Actively participating in technical hackathon opportunities to engineer rapid prototypes and practical solutions.',
  },
];

export const SOCIAL_LINKS = [
  {
    platform: 'GITHUB',
    url: 'https://github.com/SathyaMeka33',
    handle: 'github.com/SathyaMeka33',
    descriptor: 'Code repositories, algorithmic implementations & open projects',
  },
  {
    platform: 'LINKEDIN',
    url: 'https://www.linkedin.com/in/mekasathya/',
    handle: 'linkedin.com/in/mekasathya',
    descriptor: 'Professional network, technical trajectory & academic updates',
  },
  {
    platform: 'LEETCODE',
    url: 'https://leetcode.com/u/Sathya_Meka/',
    handle: 'leetcode.com/u/Sathya_Meka/',
    descriptor: 'Algorithmic problem-solving submissions & problem ratings',
  },
];
