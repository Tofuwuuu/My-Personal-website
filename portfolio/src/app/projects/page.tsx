import Link from "next/link";

// Mock project data
const projects = [
  {
    id: 1,
    title: "Alumni Profile & Document Verification System",
    category: "Blockchain",
    description: "A permissioned blockchain-powered alumni management system for Cavite State University. Features include secure user authentication, role-based access control (alumni, admin, verifier), profile creation, document upload & verification, an immutable ledger of credentials, and an admin dashboard for monitoring job placements and verification history.",
    technologies: ["Vite", "React", "JavaScript", "FastAPI", "MongoDB", "Hyperledger Fabric", "Web3.js"],
    image: "/placeholder.jpg",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Web Application",
    description: "A productivity application for managing tasks and projects. Built with React and Firebase, it offers real-time updates, task categorization, and team collaboration features.",
    technologies: ["React", "Firebase", "Redux", "Material UI"],
    image: "/placeholder.jpg",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    category: "API Integration",
    description: "A weather application that provides current and forecast weather information. Utilizes OpenWeatherMap API and features location-based searches, interactive maps, and visual weather data.",
    technologies: ["JavaScript", "Weather API", "Chart.js", "CSS3"],
    image: "/placeholder.jpg",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Personal Blog",
    category: "Content Management",
    description: "A blog platform built with Next.js and Contentful CMS. Features responsive design, markdown support, categories, and search functionality.",
    technologies: ["Next.js", "Contentful", "Tailwind CSS", "Vercel"],
    image: "/placeholder.jpg",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 5,
    title: "Fitness Tracker",
    category: "Mobile App",
    description: "A mobile application for tracking workouts and fitness progress. Built with React Native and Firebase, it includes exercise logging, progress charts, and goal setting.",
    technologies: ["React Native", "Firebase", "Expo", "Victory Charts"],
    image: "/placeholder.jpg",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 6,
    title: "Movie Database",
    category: "API Integration",
    description: "A movie database application that pulls data from TMDB API. Features include movie search, details, ratings, and user reviews.",
    technologies: ["React", "TMDB API", "CSS3", "Netlify"],
    image: "/placeholder.jpg",
    demoLink: "#",
    githubLink: "#"
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in">
        My Projects
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
        A collection of my recent work spanning web applications, mobile apps, and design projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col h-full transform hover:-translate-y-2 animate-fade-in-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="h-56 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
              <span className="text-white text-xl font-medium">Project Image</span>
            </div>
            <div className="p-7 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <span className="text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">{project.category}</span>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-300 flex-grow">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-sm font-bold mb-3 text-gray-700 dark:text-gray-300 uppercase tracking-wider">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between gap-4 mt-auto">
                <a 
                  href={project.demoLink} 
                  className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex-1 transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a 
                  href={project.githubLink} 
                  className="text-gray-900 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex-1 transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 