import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-12 gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Mark</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-600 dark:text-gray-300">
            Full-Stack Developer & Blockchain Enthusiast
          </h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-200">
            I build robust web applications and private blockchain solutions—everything from React front-ends with role-based auth and FastAPI backends to MongoDB-driven data stores. Whether it's designing seamless UI/UX in Figma, integrating AI/ML health assessments, or crafting permissioned blockchain verifications, I turn complex requirements into clean, high-performance digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:from-blue-700 hover:to-indigo-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              View My Work
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* Profile image with enhanced styling */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative w-64 h-64 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
              <Image 
                src="/Profile.jpg" 
                alt="Profile Picture" 
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 256px"
                priority
                className="transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent inline-block">What I Can Do</h2>
          <p className="text-gray-600 dark:text-gray-300">Expertise and technologies I work with</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skill Card 1 */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1 bg-white dark:bg-gray-800">
            <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                React + FastAPI full-stack development with role-based authentication, "Forgot Password," search functionality, and pagination.
              </p>
            </div>
          </div>
          {/* Skill Card 2 */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1 bg-white dark:bg-gray-800">
            <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Blockchain Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Permissioned blockchain implementation for secure alumni credentialing and verification systems.
              </p>
            </div>
          </div>
          {/* Skill Card 3 */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1 bg-white dark:bg-gray-800">
            <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">AI/ML Integration</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Implementation of AI/ML solutions for personalized health recommendations and assessments.
              </p>
            </div>
          </div>
          {/* Skill Card 4 */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1 bg-white dark:bg-gray-800">
            <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                UI/UX design and prototyping using Figma, with implementation of efficient Asana workflows.
              </p>
            </div>
          </div>
          {/* Skill Card 5 */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1 bg-white dark:bg-gray-800">
            <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Game Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Unity game prototyping with GitHub-based collaboration for efficient development workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent inline-block">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300">Check out some of my latest work</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project One</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">A brief description of your project and the technologies used.</p>
              <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project Two</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">A brief description of your project and the technologies used.</p>
              <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
          {/* Project Card 3 */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project Three</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">A brief description of your project and the technologies used.</p>
              <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
