/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import skillSphereImg from "../components/layout/image.png";
import secureImage from "../components/layout/secure.png"
export const PERSONAL_INFO = {
  name: "Abisheka Priyan",
  role: "Computer Science Student",
  tagline: "Motivated engineer leveraging web development skills to create impactful, secure software solutions.",
  location: "Chennai, India",
  email: "abishekvijay05@gmail.com",
  phone: "+91 8015806129",
  github: "https://github.com/AbishekVijay05",
  linkedin: "#",
  twitter: "#",
};

export const SKILLS = {
  languages: ["Java", "Python", "OOP", "PHP", "C", "C++", "JavaScript"],
  frameworks: ["React", "Flask", "HTML", "CSS"],
  tools: ["Git", "GitHub", "Vite", "Node.js"],
};

export const PROJECTS = [
  {
    id: "skill-sphere",
    title: "Skill Sphere",
    description: "A teammate recruiting platform for college students to collaborate on hackathons and research.",
    fullDescription: "Skill Sphere is a platform designed to simplify the process of finding the right teammates for technical events. It handles student profiles, project requirements, and provides a centralized hub for recruitment in collegiate environments.",
    image: skillSphereImg,
    tags: ["Python", "Flask", "HTML/CSS"],
    role: "Backend Lead",
    timeline: "Sep 2025",
    problem: "College students often have fragmented networks, making it difficult to find members with specific technical skills (like a niche backend language or frontend expertise) for deadline-driven hackathons.",
    approach: "I managed the backend logic and application routing using Python. The focus was on creating a flexible data model that could handle diverse project types and user skill sets.",
    solution: "The resulting platform allows users to post projects, search for teammates with specific tags, and manage recruitment requests seamlessly.",
    metrics: [
      { label: "Deployment", value: "Cloud" },
      { label: "Backend", value: "Python" },
      { label: "Focus", value: "Recruitment" }
    ],
    github: "https://github.com/AbishekVijay05/skillsphere",
    code: `# Backend Routing Example
@app.route('/recruit', methods=['POST'])
def recruit_member():
    project_id = request.json.get('project_id')
    user_id = request.json.get('user_id')
    # Logic to notify user and update project state
    return jsonify({"status": "success"})`
  },
  {
    id: "secure-wipe",
    title: "Secure Data Wiping",
    description: "Low-level software project to prevent recovery of deleted data using C and Python.",
    fullDescription: "An advanced data security tool that ensures deleted files are truly unrecoverable. It overwrites disk sectors with specific patterns, neutralizing forensic data recovery methods.",
    image: secureImage ,
    tags: ["C", "Python", "Security"],
    role: "Core Developer",
    timeline: "Sep 2025",
    problem: "Deleted data can often be recovered by simple software because the actual bits remain on the physical disk until overwritten. This project addresses the 'ghost data' security gap.",
    approach: "I developed the core wiping algorithm in C for high-performance direct disk access and used Python for application routing and user interaction management.",
    solution: "A command-line and GUI-ready utility that performs multi-pass overwrites following industry standards, making data recovery virtually impossible.",
    metrics: [
      { label: "Core", value: "C Program" },
      { label: "Version Control", value: "Git/GitHub" },
      { label: "Routing", value: "Python" }
    ],
    github: "https://github.com/AbishekVijay05/icube",
    code: `// C Wiping Logic
void secure_erase(const char* path) {
    FILE *f = fopen(path, "wb");
    char buffer[4096];
    memset(buffer, 0x00, 4096);
    fwrite(buffer, 1, 4096, f);
    fclose(f);
}`
  },
  {
    id: "staff-connect",
    title: "StaffConnect",
    description: "A role-based mobile application for centralized employee services and administrative management.",
    fullDescription: "StaffConnect (internally UnifiedEmployeeService) is a React Native mobile application designed as a centralized portal for employees, managers, and administrators. It provides a tailored experience to manage leaves, IT support, and HR tasks with a unified Material Design aesthetic.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200",
    tags: ["React Native", "Redux", "Material Design"],
    role: "Lead Developer",
    timeline: "Apr 2026",
    problem: "Organizations often struggle with scattered internal tools, making it difficult for employees to access essential services like leave requests or IT support on the go.",
    approach: "I implemented a robust role-based access control (RBAC) system using Redux to manage state and React Navigation for dynamic UI switching. Leveraged React Native Paper for a professional, responsive design.",
    solution: "A high-fidelity prototype with distinct workflows for four major user roles (Employee, Manager, IT, HR), significantly streamlining internal communication and administrative tasks.",
    metrics: [
      { label: "Architecture", value: "Redux RBAC" },
      { label: "UI/UX", value: "Material 3" },
      { label: "Stack", value: "React Native" }
    ],
    github: "https://github.com/AbishekVijay05/StaffConnect",
    code: `// Role-based Navigation Logic
const getDashboardScreen = (role) => {
    switch (role) {
        case ROLES.EMPLOYEE: return EmployeeDashboard;
        case ROLES.MANAGER: return ManagerDashboard;
        case ROLES.IT_ADMIN: return ITAdminDashboard;
        case ROLES.HR_ADMIN: return HRAdminDashboard;
        default: return EmployeeDashboard;
    }
};`
  }
];
