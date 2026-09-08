/**
 * Helper to generate an ATS-compliant, beautifully structured plain text/markdown
 * or downloadable resume file formatted for Shudhanshu Tripathi.
 */
export function getResumeDataUri(): string {
  const resumeText = `================================================================================
SHUDHANSHU TRIPATHI
Full-Stack Developer & Computer Engineering Undergrad (2023–2027)
Lohegaon, Pune, Maharashtra, India
Email: tripathishudhanshu76@gmail.com | Phone: +91-8626001194
LinkedIn: https://www.linkedin.com/in/shudhanshu-tripathi-07b84b2a1/
GitHub: https://github.com/ | LeetCode: https://leetcode.com/u/Shudhanshu25/
================================================================================

SUMMARY
Energetic and technically rigorous Full-Stack Developer and Computer Engineering
undergraduate (9.485 CGPA) at Ajeenkya DY Patil School of Engineering, Pune.
Experienced in building scalable single-page web applications, high-throughput
FastAPI backends, and optimizing real-time systems. Proven track record of
delivering an audited 30% FPS performance improvement during a Game Developer
Internship at GameLoom Interactives.

EDUCATION
Bachelor of Engineering (B.E.) in Computer Engineering (2023 – 2027)
Ajeenkya DY Patil School of Engineering (ADYPSOE), Lohegaon, Pune
- Cumulative GPA: 9.485 / 10.0 (Top-tier academic ranking)
- Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming,
  Database Management Systems, Operating Systems, Computer Networks, Software Engineering.

TECHNICAL SKILLS
- Languages & Engines: Unreal Engine (Blueprints), Python, JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL
- Gameplay Systems: Companion AI, Modular Vehicle Systems, Dynamic Weather/Environment, Open-World Systems, UMSP
- Frontend: React.js, React Native, Tailwind CSS, Recharts, State Management, Responsive Design
- Backend & DB: FastAPI, REST API Design, JWT Authentication, WebSockets, MySQL, SQLModel/ORM, Firestore
- Tools & DevOps: Git, GitHub, Docker, Vercel, Render, Postman, Linux, Profiling Tools
- Core Competencies: Data Structures & Algorithms (DSA), Gameplay Mechanics, World Interactivity, Optimization

EXPERIENCE
Gameplay Systems Developer | Survivor’s Guilt (2024 – 2025 | Pune, India)
- Developed and designed core gameplay systems for Survivor’s Guilt, an open-world survival game project built in Unreal Engine using Blueprint-only workflows.
- Built the project utilizing the Ultimate Modular Survival Pack (UMSP) for core survival mechanics, player stats, and inventory architecture.
- Developed interactive dog companion systems, including taming, commands, inventory, breeding, and lifecycle mechanics.
- Worked on utility vehicle systems, including forklifts and tractors with modular attachment functionality.
- Integrated dynamic environmental systems, including procedural weather, temperature, and day/night cycles.
- Designed interactive open-world elements, including PvP zones, POIs, climbable structures, and modular building systems.

NOTABLE PROJECTS
1. Smart Expense Tracker (Full-Stack SPA)
   - Live Demo: https://expense-tracker-dev-e9418.web.app/app.html
   - Built a comprehensive financial tracker utilizing React.js, Firebase Auth, and Cloud Firestore.
   - Designed a custom state store to eliminate UI stuttering during bulk entry logging.
   - Built interactive spending analytics and category budgeting threshold alerts using Recharts.

2. AI Assistant - Local LLM (Python & Hugging Face)
   - Developed a privacy-preserving voice & text conversational assistant running completely on local hardware.
   - Integrated quantized Transformer models with a low-latency Speech-to-Text and Text-to-Speech pipeline.
   - Created an asynchronous FastAPI bridge supporting real-time streaming tokens and audio synthesis.

KEY ACHIEVEMENTS & MILESTONES
- LeetCode: 90+ algorithmic problems solved (Easy to Medium) with a consistent daily streak.
- Competitive Selection: Completed 5-month internship as the sole B.E. student selected from college batch.
- Production Deployments: Built and deployed 2 full-stack applications with verified live URLs during final year.
- Academic Excellence: 9.485 CGPA, Ajeenkya DY Patil School of Engineering.
================================================================================
`;

  // Encode as downloadable data URI
  return `data:text/plain;charset=utf-8,${encodeURIComponent(resumeText)}`;
}
