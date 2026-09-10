# 🚀 Modern Personal Developer Portfolio — Madan Mishra

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Modern_Design_Tokens-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern, professional, responsive personal portfolio website for **Madan Mishra** (IT Student & Full Stack Software Developer). Built with React + Vite, featuring a dark theme aesthetic, glassmorphism UI components, canvas ambient background, filterable projects grid, interactive detail modal, validated contact form, and a single centralized data configuration file.

---

## 🌟 Key Highlights & Features

- **⚡ Centralized Data Source (`src/data/portfolioData.js`)**: All personal information, skills, education, projects, certifications, and links are decoupled from UI components. Update one file to update the entire website!
- **🎨 Glassmorphism & Modern Dark Theme**: Dark slate palette (`#070a12`), cyan/indigo accent gradients, glowing borders, custom scrollbars, and Google Fonts (`Inter` & `JetBrains Mono`).
- **🌌 Interactive Ambient Canvas Background**: High-performance HTML5 canvas particle node network that adjusts dynamically to window resizing.
- **📁 Filterable Project Grid & Detail Modal**: Filter projects by categories (*Web Development, Java, Database, AI/ML*), preview thumbnails, and open pop-up modals detailing the problem solved, key features, role, and links.
- **🎓 Vertical Education & Experience Timelines**: Clear timeline cards showcasing degree credentials, CGPA (8.27/10.0), coursework, internship responsibilities, and capstone achievements.
- **🛠️ Categorized Skills Toolkit**: Organized cards with proficiency indicators for *Programming Languages, Web Development, Databases, Cloud & DevOps, and Tools*.
- **🌐 Developer Profiles**: Interactive cards linking directly to GitHub, LinkedIn, LeetCode, GeeksforGeeks, CodeChef, and HackerRank.
- **📄 Resume Section**: Executive summary layout with a direct **Download Resume (PDF)** trigger.
- **✉️ Interactive Contact Form**: Real-time field validation (*name, email format, subject, message length*) with success toast notifications.
- **📱 Fully Responsive**: Custom mobile drawer navigation and optimized layouts for Desktop, Laptop, Tablet, and Mobile screens.

---

## 📂 Project Architecture

```
potefolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── avatar.jpg              # Flork character profile picture
│       ├── project_web_dev.jpg     # Web Dev project preview thumbnail
│       ├── project_java_app.jpg    # Java project preview thumbnail
│       ├── project_database.jpg    # Database project preview thumbnail
│       └── project_aiml.jpg        # AI/ML project preview thumbnail
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx               # Professional biography & stats
│   │   ├── Achievements.jsx        # Hackathons & coding honors
│   │   ├── CanvasBackground.jsx    # Interactive particle background
│   │   ├── Certifications.jsx      # Credential cards & verify links
│   │   ├── CodingProfiles.jsx      # GitHub, LinkedIn, LeetCode cards
│   │   ├── Contact.jsx             # Form with real-time validation
│   │   ├── Education.jsx           # Vertical academic timeline
│   │   ├── Experience.jsx          # Practical work & internship timeline
│   │   ├── Footer.jsx              # Brand footer & back-to-top button
│   │   ├── GitHubSection.jsx       # Open-source stats & repo highlight
│   │   ├── Hero.jsx                # Banner, title & avatar frame
│   │   ├── Icons.jsx               # Custom SVG brand icons
│   │   ├── Navbar.jsx              # Sticky nav header & mobile drawer
│   │   ├── ProjectModal.jsx        # Detailed project overview modal
│   │   ├── Projects.jsx            # Filterable projects section
│   │   ├── ResumeSection.jsx       # Formatted CV overview & PDF button
│   │   ├── Services.jsx            # "What I Can Do" capability cards
│   │   └── Skills.jsx              # Categorized skills toolkit
│   ├── data/
│   │   └── portfolioData.js        # 🔑 CENTRAL DATA CONFIGURATION FILE
│   ├── App.jsx                     # Component layout & scroll spy tracker
│   ├── index.css                   # Glassmorphism design tokens & styles
│   └── main.jsx                    # Application entry point
├── index.html                      # SEO metadata & Google Fonts
├── package.json
└── vite.config.js
```

---

## 💻 Tech Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Frontend Framework** | React 18, Vite |
| **Styling & UI Design** | Vanilla CSS3 (Custom Properties, Glassmorphism, Animations) |
| **Icons & Visuals** | Lucide React, Custom SVG Icons |
| **Typography** | Google Fonts (`Inter`, `JetBrains Mono`) |
| **State & Navigation** | React Hooks, Native Scroll-Spy Intersection Observer |
| **Tooling & Build** | npm, Git, GitHub |

---

## 🛠️ Getting Started & Local Setup

To run this portfolio website locally on your computer:

### Prerequisites
- Node.js (v16.0 or higher recommended)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Madanmishra45/Potefolio.git
   cd Potefolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the local development server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production**
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated inside the `dist/` directory.

---

## ✏️ How to Customize Your Personal Data

You can easily update all portfolio content by editing **`src/data/portfolioData.js`**:

```javascript
export const personalInfo = {
  name: "Madan Mishra",
  title: "IT Student | Full Stack Developer | Software Engineer",
  email: "your.email@example.com",
  location: "City, Country",
  availability: "Open for Internships & Software Engineering Roles",
  avatarUrl: "/images/avatar.jpg",
  resumeUrl: "/resume.pdf"
  // ...
};
```

1. **Change Profile Photo**: Place your image in `public/images/avatar.jpg` or set `avatarUrl` in `portfolioData.js`.
2. **Downloadable Resume**: Place your PDF resume in `public/resume.pdf`.

---

## 👤 Author

**Madan Mishra**  
- **GitHub**: [@Madanmishra45](https://github.com/Madanmishra45)  
- **Role**: IT Student & Full Stack Developer  

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
