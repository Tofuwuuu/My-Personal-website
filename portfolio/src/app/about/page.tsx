export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      
      <div className="max-w-3xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Hello! I'm a passionate developer with expertise in creating responsive and user-friendly web applications. 
            With several years of experience in the field, I've developed a keen eye for detail and a commitment to writing clean, efficient code.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            I graduated from [Your University] with a degree in [Your Degree], and since then I've been continuously expanding my knowledge and skills in various technologies and frameworks.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
              <span className="font-medium">JavaScript</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
              <span className="font-medium">TypeScript</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
              <span className="font-medium">React</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
              <span className="font-medium">Next.js</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
              <span className="font-medium">Node.js</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
              <span className="font-medium">Tailwind CSS</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-medium">Senior Developer</h3>
              <p className="text-gray-600 dark:text-gray-400">Company Name | 2021 - Present</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Led development of multiple web applications, managed a team of developers, and implemented best practices for scalable code architecture.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-medium">Web Developer</h3>
              <p className="text-gray-600 dark:text-gray-400">Previous Company | 2018 - 2021</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Developed and maintained client websites, collaborated with design team to implement responsive interfaces, and optimized site performance.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Interests</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Outside of coding, I enjoy hiking, reading science fiction, and playing the guitar. I'm also passionate about open-source contributions and staying active in the developer community.
          </p>
        </section>
      </div>
    </div>
  );
} 