import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-12 gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-600 dark:text-gray-300">
            Full Stack Developer
          </h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-200">
            I build exceptional digital experiences that combine stunning design with efficient functionality. Explore my latest projects and articles showcasing my expertise in web development.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              View My Work
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* Placeholder for profile image */}
          <div className="w-64 h-64 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400 text-lg">Your Photo</span>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300">Check out some of my latest work</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
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
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
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
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
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
