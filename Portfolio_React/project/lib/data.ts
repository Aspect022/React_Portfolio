// Ensure proper typing for the data structures
export interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  tags: string[]
  demoUrl: string
  repoUrl: string
  featured: boolean
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  logo: string
  startDate: string
  endDate: string | null
  description: string
  achievements: string[]
  technologies: string[]
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "HealthPredict",
    description:
      "An AI-powered disease prediction platform capable of predicting multiple diseases like Diabetes, Stroke, Thyroid, Parkinson's, and Depression using FastAPI backend, MySQL,MongoDB and React frontend.",
    imageUrl: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    tags: ["FastAPI", "Python", "React", "MySQL", "Mongodb", "Machine Learning"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/Aspect022/HealthPredict",
    featured: true,
  },
  {
    id: "project-2",
    title: "Java Spring Job Portal",
    description:
      "A backend-driven job portal built with Java Spring Boot and MySQL, enabling job listings, applications, user authentication, and admin management dashboard.",
    imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    tags: ["Java", "Spring Boot", "MySQL"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/Aspect022/JobPortal",
    featured: true,
  },
  {
    id: "project-3",
    title: "Static Orrey Simulation",
    description:
      "A desktop-based solar system simulation developed using Javascript Threejs, visualizing the motion of planets around the sun in a static orrey layout.",
    imageUrl:
      "https://media.istockphoto.com/id/182792016/photo/solar-system.jpg?s=612x612&w=is&k=20&c=ZMtqgBg4ua_ZB3blT357A-sVZEkgyn4uvGHneFAh430=",
    tags: ["Javascript", "Threejs", "CSS", "HTML"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/Aspect022/StaticOrrery",
    featured: false,
  },
  {
    id: "project-4",
    title: "AI Loan Approval Prediction",
    description:
      "A machine learning-powered system predicting loan approval chances based on user-provided financial and demographic details, featuring data preprocessing and model tuning.",
    imageUrl: "https://images.pexels.com/photos/4968384/pexels-photo-4968384.jpeg",
    tags: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/Aspect022/Loan_Approval_predictor",
    featured: false,
  },
  {
    id: "project-5",
    title: "Lecture Notes Generator",
    description:
      "A Python-based tool that summarizes lecture transcripts into structured notes using NLP techniques for easier revision and study preparation.",
    imageUrl: " https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg",
    tags: ["Python", "NLP", "Text Summarization"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/Aspect022/Lecture_Notes_Generator",
    featured: true,
  },
  {
    id: "project-6",
    title: "Platformer Game",
    description:
      "A 2D platformer adventure game created in Java using object-oriented programming and collision detection principles for engaging gameplay.",
    imageUrl: "https://images.pexels.com/photos/2728255/pexels-photo-2728255.jpeg",
    tags: ["Java", "OOP", "Swing"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/Aspect022/PlatformGame",
    featured: false,
  },
]

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "WhyDigit Pvt. Ltd",
    role: "Backend Developer Intern",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHLy3PoMaBupw/company-logo_200_200/company-logo_200_200/0/1677856901961/why_digit_system_private_limited_logo?e=2147483647&v=beta&t=7qhaKCz7mvpaFn4O6guToXjbJjvJ0zQFHs9yZh18mNU",
    startDate: "Jan 2025",
    endDate: "Feb 2025",
    description:
      "Worked as a Backend Developer Intern focusing on Java Spring Boot and SQL-based backend systems for data-driven applications.",
    achievements: [
      "Assisted in developing and maintaining backend systems for efficient data management and processing.",
      "Collaborated with the development team to ensure seamless integration of backend APIs and database solutions.",
      "Improved backend problem-solving and debugging skills while working on real-time business modules.",
    ],
    technologies: ["Java", "Spring Boot", "SQL", "MySQL"],
  },
  {
    id: "exp-2",
    company: "Humans Care Foundation",
    role: "Python & ML Intern",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9A931BxYt8I5HhrzgOoZptZRO03i9S4XmAw&s",
    startDate: "Feb 2025",
    endDate: "Mar 2025",
    description:
      "Worked as a Python and Machine Learning Intern focusing on EDA, Data Analysis, and ML model development while contributing to multiple projects and team training initiatives.",
    achievements: [
      "Completed over 35+ Python projects specializing in Machine Learning, Data Analysis, EDA, and Feature Engineering.",
      "Led hands-on training sessions on NumPy, Pandas, Matplotlib, and Scikit-Learn for new interns.",
      "Gained expertise in GitHub collaboration and contributed to impactful, real-world data projects.",
      "Demonstrated strong technical and leadership skills through active project ownership and mentorship.",
    ],
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "GitHub"],
  },
]
