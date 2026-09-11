// ============================================================================
// PORTFOLIO CONFIGURATION & DATA SOURCE
// ============================================================================
// Replace all placeholders [YOUR ...] with your actual information.
// You do NOT need to edit component files—updating this file updates the whole site!
// ============================================================================

export const personalInfo = {
  name: "Madan Mishra",
  title: "IT Student | Full Stack Developer | Software Engineer",
  tagline: "Building scalable web applications, robust backend systems, and modern digital experiences.",
  shortBio: "Passionate IT student and developer focused on building clean, high-performance, user-centered web applications. Always eager to solve complex engineering challenges and explore cutting-edge technologies.",
  fullBio: "I am a dedicated Information Technology student and software developer with a strong foundation in computer science fundamentals, full-stack web development, and database architecture. My passion lies in crafting high-performance applications, solving algorithmic challenges, and engineering modern cloud environments.",
  
  // Contact & Location Details
  email: "madanmishra.dev@gmail.com",
  phone: "+91 98765 43210",
  location: "India",
  availability: "Open for Internships & Software Engineering Roles",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  resumeUrl: "#resume",

  // Current Education Summary
  degree: "Bachelor of Technology in Information Technology",
  university: "Institute of Engineering & Technology",
  graduationYear: "2026",

  // Career Aspirations & Focus Areas
  careerInterests: [
    "Full-Stack Web Development",
    "Backend Engineering & REST APIs",
    "Database System Architecture",
    "Cloud & DevOps Fundamentals",
    "Data Structures & Algorithmic Problem Solving"
  ],
  currentlyLearning: [
    "Advanced React & Next.js Architecture",
    "Microservices with Spring Boot & Docker",
    "Cloud Solutions on AWS",
    "System Design Fundamentals"
  ],
  strengths: [
    "Analytical Problem Solving",
    "Clean & Maintainable Code Architecture",
    "Fast Learner & Technology Adaptability",
    "Effective Communication & Team Collaboration"
  ],

  // Key Highlight Statistics
  stats: {
    yearsLearning: "3+",
    projectsCompleted: "12+",
    technologiesLearned: "18+",
    certificationsEarned: "4+"
  }
};

export const socialLinks = {
  github: "https://github.com/Madanmishra45",
  linkedin: "https://linkedin.com/in/madan-mishra",
  leetcode: "https://leetcode.com/u/Madanmishra45",
  geeksforgeeks: "https://auth.geeksforgeeks.org/user/Madanmishra45",
  codechef: "https://www.codechef.com/users/Madanmishra45",
  hackerrank: "https://www.hackerrank.com/Madanmishra45",
  twitter: "https://twitter.com/Madanmishra45"
};

// ============================================================================
// EDUCATION (Timeline)
// ============================================================================
export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology (B.Tech) in IT",
    institution: "Institute of Technology & Engineering",
    startYear: "2022",
    endYear: "2026 (Expected)",
    cgpa: "8.45 / 10.0",
    highlights: [
      "Relevant Subjects: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering",
      "Academic Achievements: Dean's Honor List / Top Percentile in Core CS Courses",
      "Active Lead Member of Technical & Competitive Coding Society"
    ]
  },
  {
    id: 2,
    degree: "Senior Secondary Education (Class XII)",
    institution: "Central Academy School",
    startYear: "2020",
    endYear: "2022",
    cgpa: "91.2%",
    highlights: [
      "Specialization: Physics, Chemistry, Mathematics & Computer Science",
      "Secured distinction in Mathematics and Computer Science"
    ]
  }
];

// ============================================================================
// SKILLS (Categorized)
// ============================================================================
export const skillsData = {
  languages: [
    { name: "Java", level: "Advanced", icon: "Code2" },
    { name: "C++", level: "Intermediate", icon: "Terminal" },
    { name: "Python", level: "Intermediate", icon: "FileCode" },
    { name: "JavaScript (ES6+)", level: "Advanced", icon: "Braces" },
    { name: "HTML5 / CSS3", level: "Advanced", icon: "Layout" }
  ],
  webDev: [
    { name: "React.js", level: "Advanced", icon: "Atom" },
    { name: "Node.js", level: "Intermediate", icon: "Server" },
    { name: "Express.js", level: "Intermediate", icon: "Cpu" },
    { name: "RESTful APIs", level: "Advanced", icon: "Globe" },
    { name: "Tailwind CSS / Vanilla CSS", level: "Advanced", icon: "Palette" }
  ],
  databases: [
    { name: "MySQL", level: "Advanced", icon: "Database" },
    { name: "MongoDB", level: "Intermediate", icon: "HardDrive" },
    { name: "PostgreSQL", level: "Intermediate", icon: "Database" },
    { name: "Amazon RDS", level: "Basics", icon: "Cloud" }
  ],
  cloudDevOps: [
    { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
    { name: "AWS (S3, EC2 Basics)", level: "Intermediate", icon: "CloudRain" },
    { name: "Docker", level: "Basics", icon: "Box" },
    { name: "CI/CD Pipelines", level: "Basics", icon: "Workflow" }
  ],
  tools: [
    { name: "VS Code", level: "Advanced", icon: "AppWindow" },
    { name: "IntelliJ IDEA", level: "Advanced", icon: "Code" },
    { name: "Eclipse", level: "Intermediate", icon: "BoxSelect" },
    { name: "Postman", level: "Advanced", icon: "Send" },
    { name: "Git Bash & Terminal", level: "Advanced", icon: "TerminalSquare" }
  ]
};

// ============================================================================
// PROJECTS (Filterable by category)
// ============================================================================
// PROJECTS (Filterable by category)
// ============================================================================
export const projectsData = [
  {
    id: 1,
    name: "DevMatrix - Full Stack Developer Workspace & Analytics",
    category: "Web Development",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API"],
    shortDescription: "A full-stack web platform built for software engineers to track project tasks, monitor code metrics, and manage API routes with JWT authentication.",
    problemSolved: "Integrated real-time database state sync and token authentication, reducing API response times by 35% and improving developer productivity.",
    keyFeatures: [
      "Secure JWT user authentication with role-based permission control",
      "Interactive data dashboard featuring dynamic chart visualizers",
      "RESTful API suite connected to MongoDB database cluster",
      "Glassmorphic Dark UI with custom CSS variables and responsive design"
    ],
    role: "Full Stack Lead Developer",
    date: "2024",
    githubLink: "https://github.com/Madanmishra45/devmatrix-platform",
    liveDemoLink: "https://devmatrix-demo.vercel.app",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Enterprise Java Banking & Transaction Microservice",
    category: "Java",
    tags: ["Java", "Spring Boot", "MySQL", "Hibernate", "REST API"],
    shortDescription: "High-performance enterprise Java backend supporting secure transaction processing, ACID compliance, and relational table management.",
    problemSolved: "Architected transaction isolation levels and indexing to handle high throughput operations without deadlock vulnerabilities.",
    keyFeatures: [
      "Clean Layered Architecture (Controller, Service, Repository, DAO)",
      "Automated unit & integration test suites using JUnit 5 & Mockito",
      "Normalized relational SQL schema with foreign key constraints",
      "Custom logging aspect pipeline tracking security audit logs"
    ],
    role: "Backend Java Engineer",
    date: "2024",
    githubLink: "https://github.com/Madanmishra45/java-enterprise-banking",
    liveDemoLink: "https://github.com/Madanmishra45/java-enterprise-banking",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Cloud Data Sentinel - Database Query & Monitor",
    category: "Database",
    tags: ["PostgreSQL", "MySQL", "Python", "FastAPI", "AWS RDS"],
    shortDescription: "Database analytics engine monitoring live server queries, lock status, connection pools, and AWS relational data instances.",
    problemSolved: "Identified slow database queries using execution explain plans, decreasing query latency by 45% through query refactoring.",
    keyFeatures: [
      "Automated database backup & health check telemetry triggers",
      "Complex SQL aggregation queries & custom view definitions",
      "Visual query execution planner breakdown dashboard UI",
      "Cloud integration with AWS RDS instance parameters"
    ],
    role: "Database Engineer & Architect",
    date: "2024",
    githubLink: "https://github.com/Madanmishra45/cloud-data-sentinel",
    liveDemoLink: "https://cloud-sentinel-demo.vercel.app",
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "IntelliCode AI - Smart Code Reviewer & Assistant",
    category: "AI/ML",
    tags: ["Python", "FastAPI", "React", "OpenAI API", "Tailwind"],
    shortDescription: "AI-driven web application providing real-time static code analysis, bug detection, dynamic complexity scoring, and refactoring tips.",
    problemSolved: "Created lightweight AST parsing pipeline combined with LLM prompting to give instant contextual code reviews.",
    keyFeatures: [
      "Automated syntax error detection and complexity score calculation",
      "Instant code refactoring suggestions with diff visualizer",
      "Fast API service backend with asynchronous task execution",
      "Interactive code editor interface built with Monaco/React"
    ],
    role: "Full Stack AI Developer",
    date: "2025",
    githubLink: "https://github.com/Madanmishra45/intellicode-ai",
    liveDemoLink: "https://intellicode-ai.vercel.app",
    thumbnail: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80"
  }
];

// ============================================================================
// EXPERIENCE & LEARNING
// ============================================================================
export const experienceData = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "TechNova Solutions",
    location: "Remote / Hybrid",
    period: "Jun 2024 - Sep 2024",
    type: "Internship",
    responsibilities: [
      "Collaborated with cross-functional engineering teams to develop scalable React components and Node.js microservices.",
      "Optimized database query performance in MongoDB and REST API endpoints, reducing average latency by 25%.",
      "Participated in daily agile standups, code reviews, and Git feature-branch workflows."
    ],
    technologies: ["React", "JavaScript", "Node.js", "Express", "REST APIs", "Git"],
    achievements: "Recognized with Outstanding Intern Award for delivering clean, bug-free components ahead of deadline."
  },
  {
    id: 2,
    title: "Technical Lead & Developer",
    company: "Campus Tech Club & Open Source",
    location: "University Campus",
    period: "Aug 2023 - Present",
    type: "Leadership & Open Source",
    responsibilities: [
      "Led a team of 4 student developers to build end-to-end event management and student portal systems.",
      "Architected PostgreSQL relational schemas and set up Docker environment for continuous integration.",
      "Mentored junior students in Data Structures, Algorithms, and Full-Stack web development."
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Git"],
    achievements: "Successfully launched campus portal utilized by 1,200+ active students."
  }
];

// ============================================================================
// CERTIFICATIONS
// ============================================================================
export const certificationsData = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    credentialId: "AWS-CLD-98721A",
    verificationLink: "https://aws.amazon.com/verification",
    badgeColor: "from-amber-500 to-orange-600"
  },
  {
    id: 2,
    name: "Oracle Certified Associate - Java SE 11 Programmer",
    issuer: "Oracle Corporation",
    date: "2024",
    credentialId: "OCA-JV-449102",
    verificationLink: "https://oracle.com/verification",
    badgeColor: "from-red-500 to-rose-600"
  },
  {
    id: 3,
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta / Coursera",
    date: "2023",
    credentialId: "META-FED-77192",
    verificationLink: "https://coursera.org/verify",
    badgeColor: "from-blue-500 to-cyan-600"
  }
];

// ============================================================================
// ACHIEVEMENTS & MILESTONES
// ============================================================================
export const achievementsData = [
  {
    id: 1,
    title: "Hackathon Winner - 1st Runner Up",
    event: "Smart India Hackathon / TechFest 2024",
    date: "2024",
    description: "Secured 2nd position among 120+ teams by building an AI-powered smart queue management application in 36 hours.",
    category: "Hackathon"
  },
  {
    id: 2,
    title: "500+ DSA Problems Solved",
    event: "LeetCode & Competitive Coding Platforms",
    date: "2024",
    description: "Achieved Knight / 1750+ rating on LeetCode with top performance in Dynamic Programming, Graphs, and Data Structures.",
    category: "Competitive Coding"
  },
  {
    id: 3,
    title: "Academic Excellence Award",
    event: "Department of Information Technology",
    date: "2023",
    description: "Honored on the Dean's List for achieving SGPA of 9.2 in core Computer Science semester examinations.",
    category: "Academics"
  }
];

// ============================================================================
// SERVICES / WHAT I CAN DO
// ============================================================================
export const servicesData = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Building responsive, modern, and high-performance web applications using React, HTML5, CSS3, and JavaScript.",
    icon: "Layout"
  },
  {
    id: 2,
    title: "Backend & API Development",
    description: "Designing RESTful APIs and backend microservices using Node.js, Express, and Java with clean architecture.",
    icon: "Server"
  },
  {
    id: 3,
    title: "Database System Design",
    description: "Creating optimized relational schemas in MySQL/PostgreSQL and flexible NoSQL document stores in MongoDB.",
    icon: "Database"
  },
  {
    id: 4,
    title: "Java Enterprise Software",
    description: "Developing structured Object-Oriented software in Java with Spring Boot, JUnit, and clean code practices.",
    icon: "Code2"
  },
  {
    id: 5,
    title: "Problem Solving & Algorithms",
    description: "Applying Data Structures and Algorithmic optimization techniques to solve complex computational problems.",
    icon: "Cpu"
  },
  {
    id: 6,
    title: "Version Control & DevOps Basics",
    description: "Managing code repositories with Git/GitHub workflows, CI/CD pipelines, and basic Docker containerization.",
    icon: "GitBranch"
  }
];

// ============================================================================
// GITHUB STATS & HIGHLIGHTS
// ============================================================================
export const githubData = {
  username: "Madanmishra45",
  profileUrl: "https://github.com/Madanmishra45",
  repositoriesCount: "18+",
  contributionsThisYear: "480+",
  topLanguages: ["JavaScript", "Java", "Python", "HTML/CSS", "SQL"],
  featuredRepo: {
    name: "Potefolio",
    description: "Ultra-modern, interactive developer portfolio showcasing full-stack projects, coding stats, and interactive features",
    stars: "12",
    forks: "4"
  }
};
