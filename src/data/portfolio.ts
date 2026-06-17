import type { NavItem, SkillCategory, Project, Certification, ContactInfo } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', icon: 'SiJava', category: 'languages' },
      { name: 'Python', icon: 'SiPython', category: 'languages' },
      { name: 'C', icon: 'SiC', category: 'languages' },
      { name: 'HTML', icon: 'SiHtml5', category: 'languages' },
      { name: 'CSS', icon: 'SiCss3', category: 'languages' },
      { name: 'JavaScript', icon: 'SiJavascript', category: 'languages' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'Oracle SQL', icon: 'SiOracle', category: 'databases' },
      { name: 'MySQL', icon: 'SiMysql', category: 'databases' },
      { name: 'MongoDB', icon: 'SiMongodb', category: 'databases' },
      { name: 'MariaDB', icon: 'SiMariaDb', category: 'databases' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot Basics', icon: 'SiSpringboot', category: 'backend' },
      { name: 'REST APIs', icon: 'SiPostman', category: 'backend' },
      { name: 'API Integration', icon: 'SiApi', category: 'backend' },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'ML Types', icon: 'SiTensorflow', category: 'ml' },
      { name: 'NumPy', icon: 'SiNumpy', category: 'ml' },
      { name: 'Pandas', icon: 'SiPandas', category: 'ml' },
      { name: 'Matplotlib', icon: 'SiPlotly', category: 'ml' },
      { name: 'SciPy', icon: 'SiScipy', category: 'ml' },
      { name: 'Scikit-Learn', icon: 'SiScikitlearn', category: 'ml' },
      { name: 'Deep Learning Basics', icon: 'SiKeras', category: 'ml' },
    ],
  },
  {
    title: 'Generative AI',
    skills: [
      { name: 'LLMs', icon: 'SiOpenai', category: 'genai' },
      { name: 'RAG', icon: 'SiChainlink', category: 'genai' },
      { name: 'Tokens', icon: 'SiCodeium', category: 'genai' },
      { name: 'Embeddings', icon: 'SiOpenai', category: 'genai' },
      { name: 'Vectors', icon: 'SiWeightsandbiases', category: 'genai' },
      { name: 'Vector Databases', icon: 'SiPinecone', category: 'genai' },
      { name: 'LangChain', icon: 'SiLangchain', category: 'genai' },
    ],
  },
  {
    title: 'CS Fundamentals',
    skills: [
      { name: 'OOP', icon: 'SiTypescript', category: 'cs' },
      { name: 'DSA', icon: 'SiLeetcode', category: 'cs' },
      { name: 'DBMS', icon: 'SiDatabricks', category: 'cs' },
      { name: 'Operating Systems', icon: 'SiLinux', category: 'cs' },
      { name: 'Networking Basics', icon: 'SiCisco', category: 'cs' },
      { name: 'Web Technologies', icon: 'SiWebtort', category: 'cs' },
    ],
    modalContent: [
      {
        title: 'Computer Science Fundamentals',
        items: [
          'Object-Oriented Programming (OOP) - Concepts like inheritance, polymorphism, encapsulation, and abstraction.',
          'Data Structures & Algorithms - Arrays, linked lists, trees, graphs, sorting, searching, and dynamic programming.',
          'Database Management Systems - SQL, normalization, indexing, transactions, and query optimization.',
          'Operating Systems - Process management, memory management, file systems, and scheduling algorithms.',
          'Networking Basics - TCP/IP, HTTP/HTTPS, DNS, routing, and network security fundamentals.',
          'Web Technologies - HTML5, CSS3, JavaScript, RESTful services, and modern web architecture.',
        ],
      },
    ],
  },
  {
    title: 'Automation',
    skills: [
      { name: 'n8n', icon: 'SiN8n', category: 'automation' },
      { name: 'Workflow Automation', icon: 'SiRobotframework', category: 'automation' },
      { name: 'Telegram Bots', icon: 'SiTelegram', category: 'automation' },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'E-Commerce Website',
    description: 'Full stack e-commerce platform with authentication, product management, shopping cart, and responsive UI.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/susmithachitham',
    live: '#',
    icon: 'FiShoppingCart',
  },
  {
    title: 'Translator Application',
    description: 'Language translation application supporting multilingual text conversion.',
    techStack: ['Python', 'Flask', 'API', 'JavaScript'],
    github: 'https://github.com/susmithachitham',
    live: '#',
    icon: 'FiGlobe',
  },
  {
    title: 'Simple Chatbot',
    description: 'AI chatbot for conversational interactions and automation.',
    techStack: ['Python', 'NLP', 'Flask', 'HTML/CSS'],
    github: 'https://github.com/susmithachitham',
    live: '#',
    icon: 'FiMessageCircle',
  },
  {
    title: 'Study Room Full Stack Application',
    description: 'Collaborative learning platform with authentication and resource sharing.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/susmithachitham',
    live: '#',
    icon: 'FiBookOpen',
  },
  {
    title: 'Telegram Bot Automation',
    description: 'Telegram bot integrated with workflow automation.',
    techStack: ['Python', 'n8n', 'Telegram API'],
    github: 'https://github.com/susmithachitham',
    live: '#',
    icon: 'FiSend',
  },
  {
    title: 'Birthday Wish Automation using n8n',
    description: 'Automated birthday reminder and messaging workflow.',
    techStack: ['n8n', 'Telegram', 'Automation'],
    github: 'https://github.com/susmithachitham',
    live: '#',
    icon: 'FiGift',
  },
  {
    title: 'PDF Analyzer Chatbot',
    description: 'RAG-powered chatbot for querying PDF documents using embeddings and LLMs.',
    techStack: ['LangChain', 'Python', 'LLM', 'Streamlit'],
    github: 'https://github.com/susmithachitham',
    live: '#',
    icon: 'FiFileText',
  },
];

export const certifications: Certification[] = [
  {
    title: 'AI/ML Course',
    issuer: 'Coursera',
    date: '2024',
    icon: 'SiCoursera',
    link: '#',
  },
  {
    title: 'AI Internship',
    issuer: 'CodeAlpha',
    date: '2024',
    icon: 'SiCodeforces',
    link: '#',
  },
  {
    title: 'AI/ML Course',
    issuer: 'Confederation of Indian Industry',
    date: '2024',
    icon: 'SiFuturelearn',
    link: '#',
  },
];

export const contactInfo: ContactInfo[] = [
  { label: 'Phone', value: '+91 82486277385', icon: 'FiPhone', href: 'tel:9182486277385', isLink: true },
  { label: 'WhatsApp', value: '+91 9489413077', icon: 'FaWhatsapp', href: 'https://wa.me/919489413077', isLink: true },
  { label: 'Email', value: 'susmithachitham@gmail.com', icon: 'FiMail', href: 'mailto:susmithachitham@gmail.com', isLink: true },
  { label: 'GitHub', value: 'susmithachitham', icon: 'FaGithub', href: 'https://github.com/susmithachitham', isLink: true },
  { label: 'LinkedIn', value: 'Susmitha C', icon: 'FaLinkedin', href: 'https://www.linkedin.com/in/susmithachitham', isLink: true },
  { label: 'Location', value: 'Tamil Nadu, India', icon: 'FiMapPin', isLink: false },
];

export const socialLinks = [
  { icon: 'FaGithub', href: 'https://github.com/susmithachitham' },
  { icon: 'FaLinkedin', href: 'https://www.linkedin.com/in/susmithachitham' },
  { icon: 'FaTwitter', href: '#' },
  { icon: 'FiMail', href: 'mailto:susmithachitham@gmail.com' },
];

export const GITHUB_USERNAME = 'susmithachitham';
