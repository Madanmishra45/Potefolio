// ============================================================================
// PORTFOLIO CONFIGURATION & DATA SOURCE
// ============================================================================
// Replace all placeholders [YOUR ...] with your actual information.
// You do NOT need to edit component files—updating this file updates the whole site!
// ============================================================================

export const personalInfo = {
  name: "Madan Mishra",
  title: "IT Student | Full Stack Developer | Software Engineer",
  tagline: "Building scalable web apps, robust backend systems, and modern digital experiences.",
  shortBio: "Passionate IT student and developer focused on building clean, efficient, and user-centered web applications. Always eager to solve complex engineering problems and learn cutting-edge technologies.",
  fullBio: "I am a dedicated IT student and software developer with a strong foundation in computer science principles, full-stack web development, and database architecture. My passion lies in crafting high-performance applications, solving algorithmic challenges, and exploring modern cloud environments. I actively contribute to academic projects, hackathons, and open-source learning.",
  
  // Contact & Location Details
  email: "your.email@example.com",
  phone: "+1 (555) 000-0000",
  location: "[City, Country / State]",
  availability: "Open for Internships & Software Engineering Roles",
  avatarUrl: "/images/avatar.jpg",
  resumeUrl: "/resume.pdf", // Place your actual PDF resume inside the public/ folder as resume.pdf

  // Current Education Summary
  degree: "Bachelor of Technology in Information Technology",
  university: "[Your University / College Name]",
  graduationYear: "202X",

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
    projectsCompleted: "10+",
    technologiesLearned: "15+",
    certificationsEarned: "4+"
  }
};

export const socialLinks = {
  github: "https://github.com/Madanmishra45",
  linkedin: "https://linkedin.com/in/[YOUR-PROFILE]",
  leetcode: "https://leetcode.com/[YOUR-USERNAME]",
  geeksforgeeks: "https://auth.geeksforgeeks.org/user/[YOUR-USERNAME]",
  codechef: "https://www.codechef.com/users/[YOUR-USERNAME]",
  hackerrank: "https://www.hackerrank.com/[YOUR-USERNAME]",
  twitter: "https://twitter.com/[YOUR-USERNAME]"
};

// ============================================================================
// EDUCATION (Timeline)
// ============================================================================
export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology (B.Tech) in IT",
    institution: "[Your College / University Name]",
    startYear: "202X",
    endYear: "202X (Expected)",
    cgpa: "8.27 / 10.0",
    highlights: [
      "Relevant Subjects: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering",
      "Academic Achievements: Dean's Honor Roll / Top Percentile in Core CS Courses",
      "Active Member of Technical & Coding Student Society"
    ]
  },
  {
    id: 2,
    degree: "Senior Secondary Education (Class XII)",
    institution: "[Your High School / Junior College Name]",
    startYear: "202X",
    endYear: "202X",
    cgpa: "XX.X%",
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
export const projectsData = [
  {
    id: 1,
    name: "[Project 1 Name: Full Stack E-Commerce / Management App]",
    category: "Web Development",
    tags: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    shortDescription: "A full-stack responsive web application with user authentication, database management, and interactive dashboard UI.",
    problemSolved: "Streamlined workflow management and user transaction processing, reducing load time and improving database query response times.",
    keyFeatures: [
      "Secure JWT-based user authentication & role management",
      "Interactive data dashboard with dynamic charts and filters",
      "Optimized RESTful API endpoints connected to MongoDB cluster",
      "Responsive design with glassmorphism UI components"
    ],
    role: "Full Stack Developer (Sole Developer / Lead)",
    date: "202X",
    githubLink: "https://github.com/[YOUR-USERNAME]/[project-1-repo]",
    liveDemoLink: "https://[project-1-demo].vercel.app",
    thumbnail: "/images/project_web_dev.jpg"
  },
  {
    id: 2,
    name: "[Project 2 Name: Java Enterprise Management System]",
    category: "Java",
    tags: ["Java", "Spring Boot", "MySQL", "JDBC", "OOP"],
    shortDescription: "Enterprise-grade Java backend system implementing Object-Oriented Design Patterns, database connectivity, and data processing.",
    problemSolved: "Designed robust backend architecture to process batch data efficiently with ACID-compliant MySQL relational transactions.",
    keyFeatures: [
      "Clean Layered Architecture (Controller, Service, Repository)",
      "Automated unit testing with JUnit & Mockito",
      "Complex SQL relational schemas with normalized tables",
      "Comprehensive logging and error handling pipeline"
    ],
    role: "Backend Java Developer",
    date: "202X",
    githubLink: "https://github.com/[YOUR-USERNAME]/[project-2-repo]",
    liveDemoLink: "https://github.com/[YOUR-USERNAME]/[project-2-repo]",
    thumbnail: "/images/project_java_app.jpg"
  },
  {
    id: 3,
    name: "[Project 3 Name: Cloud Database Analytics Platform]",
    category: "Database",
    tags: ["PostgreSQL", "MySQL", "Python", "Flask", "Amazon RDS"],
    shortDescription: "Database analytics and query optimization system connecting multi-node relational databases to monitor live server metrics.",
    problemSolved: "Optimized slow database queries through indexing and query refactoring, achieving a 40% reduction in execution latency.",
    keyFeatures: [
      "Automated database backup & replica monitoring triggers",
      "Complex SQL aggregation queries & custom view definitions",
      "Visual query execution planner breakdown UI",
      "Cloud host integration with AWS RDS instance parameters"
    ],
    role: "Database Engineer / Architect",
    date: "202X",
    githubLink: "https://github.com/[YOUR-USERNAME]/[project-3-repo]",
    liveDemoLink: "https://[project-3-demo].vercel.app",
    thumbnail: "/images/project_database.jpg"
  },
  {
    id: 4,
    name: "[Project 4 Name: AI-Powered Smart Assistant / Predictor]",
    category: "AI/ML",
    tags: ["Python", "TensorFlow / Scikit-Learn", "FastAPI", "React"],
    shortDescription: "Machine learning web interface predicting analytical trends based on historical data with real-time visualization.",
    problemSolved: "Built an end-to-end ML pipeline from data cleaning and model training to deployment via FastAPI web services.",
    keyFeatures: [
      "Data preprocessing pipeline handling missing data & scaling",
      "High model accuracy evaluated using cross-validation",
      "RESTful API bridge for instant web interface predictions",
      "Clean visual plots built with Recharts & Canvas"
    ],
    role: "ML Engineer & Frontend Integrator",
    date: "202X",
    githubLink: "https://github.com/[YOUR-USERNAME]/[project-4-repo]",
    liveDemoLink: "https://[project-4-demo].vercel.app",
    thumbnail: "/images/project_aiml.jpg"
  }
];

// ============================================================================
// EXPERIENCE & LEARNING
// ============================================================================
export const experienceData = [
  {
    id: 1,
    title: "[Software Engineering Intern / Tech Role]",
    company: "[Company / Organization Name]",
    location: "[City, Country or Remote]",
    period: "[Start Month 202X] - [End Month 202X]",
    type: "Internship / Technical Role",
    responsibilities: [
      "Collaborated with senior engineers to develop scalable web features using React and Node.js.",
      "Optimized API endpoints resulting in faster response times across client modules.",
      "Participated in daily agile standups, code reviews, and git branch workflows."
    ],
    technologies: ["React", "JavaScript", "REST APIs", "Git", "Postman"],
    achievements: "Recognized for delivering clean, well-tested code ahead of sprint deadlines."
  },
  {
    id: 2,
    title: "[Academic Capstone Project Lead / Open Source Contributor]",
    company: "[University Technical Lab / Independent Project]",
    location: "[University Campus]",
    period: "[Month 202X] - Present",
    type: "Academic & Open Source",
    responsibilities: [
      "Led a team of 3 student developers to build an end-to-end system for campus automation.",
      "Architected database tables in PostgreSQL and configured Docker container setup.",
      "Authored technical documentation, API specs, and project user guides."
    ],
    technologies: ["Java", "MySQL", "Docker", "Git", "Agile"],
    achievements: "Awarded top grade for Capstone Architecture & Implementation."
  }
];

// ============================================================================
// CERTIFICATIONS
// ============================================================================
export const certificationsData = [
  {
    id: 1,
    name: "[AWS Certified Cloud Practitioner / Cloud Certification]",
    issuer: "Amazon Web Services (AWS)",
    date: "202X",
    credentialId: "AWS-CR-[XXXXXX]",
    verificationLink: "https://aws.amazon.com/verification",
    badgeColor: "from-amber-500 to-orange-600"
  },
  {
    id: 2,
    name: "[Oracle Certified Associate - Java SE Programmer]",
    issuer: "Oracle",
    date: "202X",
    credentialId: "OCA-[XXXXXX]",
    verificationLink: "https://oracle.com/verification",
    badgeColor: "from-red-500 to-rose-600"
  },
  {
    id: 3,
    name: "[Meta Front-End Developer Specialization]",
    issuer: "Coursera / Meta",
    date: "202X",
    credentialId: "COURSERA-[XXXXXX]",
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
    title: "[Hackathon Rank / Winner]",
    event: "[Hackathon Name / Competition]",
    date: "202X",
    description: "Secured Top 5 position out of 100+ competing teams by developing a working prototype within 36 hours.",
    category: "Hackathon"
  },
  {
    id: 2,
    title: "[Coding Platform Milestone]",
    event: "LeetCode / Competitive Programming",
    date: "202X",
    description: "Solved 250+ Data Structures & Algorithms problems across Array, Graph, Dynamic Programming, and Tree topics.",
    category: "Competitive Coding"
  },
  {
    id: 3,
    title: "[Academic Merit Scholarship / Award]",
    event: "[University / Department Name]",
    date: "202X",
    description: "Awarded Academic Merit Honor for outstanding performance in core computer science curriculum.",
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
    title: "Java Application Development",
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
  repositoriesCount: "10+",
  contributionsThisYear: "250+",
  topLanguages: ["JavaScript", "Java", "Python", "HTML/CSS", "SQL"],
  featuredRepo: {
    name: "Potefolio",
    description: "Modern, professional personal portfolio website for IT Student & Software Developer Madan Mishra",
    stars: "5",
    forks: "2"
  }
};
