import Link from "next/link";

// Mock project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-stack e-commerce solution built with Next.js, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment processing.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
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
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
        A collection of my recent work spanning web applications, mobile apps, and design projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Project Image</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">{project.category}</span>
              </div>
              <p className="mt-4 mb-6 text-gray-600 dark:text-gray-300">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                <a href={project.demoLink} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.githubLink} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
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