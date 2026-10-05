/**
 * Centralized SEO & Site Configuration
 * Source of truth for personal data, canonical base URLs, metadata, and schemas.
 */

export const SITE_URL =
  (typeof process !== 'undefined' && process.env?.VITE_SITE_URL) ||
  'https://sathyamekaportfolio.vercel.app';

export const PERSONAL_SEO = {
  fullName: 'Veera Venkata Satya Narayana Meka',
  preferredName: 'Sathya Meka',
  role: 'Data Science Engineer & Software Developer',
  email: 'innovativeden0@gmail.com',
  location: 'Rajahmundry, Andhra Pradesh, India',
  telephone: '',
  social: {
    github: 'https://github.com/SathyaMeka33',
    linkedin: 'https://www.linkedin.com/in/mekasathya/',
    leetcode: 'https://leetcode.com/u/Sathya_Meka/',
  },
  alumniOf: [
    {
      name: 'Aditya College of Engineering and Technology',
      degree: 'Bachelor of Technology in Data Science',
      period: '2024 – Present',
    },
    {
      name: 'Rajiv Gandhi University of Knowledge Technologies',
      degree: 'Intermediate / 12th Standard',
      grade: '94.6%',
    },
    {
      name: 'ZPHS Vetlapalem',
      degree: 'SSC / 10th Standard',
      grade: '94.5%',
    },
  ],
};

export interface PageMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  noIndex?: boolean;
}

export const SEO_PAGES: Record<string, PageMetadata> = {
  home: {
    title: 'Sathya Meka | Data Science Engineer & Software Developer',
    description:
      'Portfolio of Sathya Meka, a Data Science engineering student focused on software engineering, application development, algorithms, and problem solving.',
    canonicalPath: '/',
    ogType: 'website',
  },
  about: {
    title: 'About Sathya Meka | Data Science & Software Engineering',
    description:
      'Learn about Sathya Meka, a Data Science engineering student focused on software engineering, application development, algorithms, and problem solving.',
    canonicalPath: '/about',
    ogType: 'profile',
  },
  skills: {
    title: 'Technical Skills | Sathya Meka',
    description:
      'Explore Sathya Meka\'s technical skills including Python, Java, JavaScript, React.js, Node.js, SQL, PostgreSQL, Git, and software engineering fundamentals.',
    canonicalPath: '/skills',
    ogType: 'website',
  },
  projects: {
    title: 'Projects | Sathya Meka',
    description:
      'Explore software and technology projects built by Sathya Meka using Python, JavaScript, Django, SQL, React, and other technologies.',
    canonicalPath: '/projects',
    ogType: 'website',
  },
  careerOs: {
    title: 'Career OS | AI Career Guidance Platform | Sathya Meka',
    description:
      'Career OS is an AI-powered career guidance platform developed by Sathya Meka using Python, Django, JavaScript, SQL, HTML, and CSS.',
    canonicalPath: '/projects/career-os',
    ogType: 'article',
  },
  education: {
    title: 'Education | Sathya Meka',
    description:
      'Academic background of Sathya Meka, a Data Science engineering student at Aditya College of Engineering and Technology.',
    canonicalPath: '/education',
    ogType: 'website',
  },
  certifications: {
    title: 'Certifications | Sathya Meka',
    description:
      'Certifications and academic achievements earned by Sathya Meka in data structures, cloud fundamentals, AI, and technology.',
    canonicalPath: '/certifications',
    ogType: 'website',
  },
  contact: {
    title: 'Contact Sathya Meka | Software Engineering',
    description:
      'Get in touch with Sathya Meka regarding software engineering opportunities, projects, collaboration, and technology.',
    canonicalPath: '/contact',
    ogType: 'website',
  },
  notFound: {
    title: '404 | Page Not Found | Sathya Meka',
    description: "The page you are looking for does not exist on Sathya Meka's portfolio.",
    canonicalPath: '/404',
    noIndex: true,
  },
};

export function getAbsoluteUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL.replace(/\/+$/, '')}${cleanPath}`;
}
