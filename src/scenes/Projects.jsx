"use client"

import LineGradient from "../components/LineGradient"
import { motion } from "framer-motion"

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

const Project = ({ title, description, technologies }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-95 transition-all duration-500 bg-glass-bg backdrop-blur-lg z-30 flex flex-col justify-center items-center text-center p-4 sm:p-6 lg:p-8 text-white border border-glass-border rounded-lg`
  const projectTitle = title.split(" ").join("-").toLowerCase()
  return (
    <motion.div
      variants={projectVariant}
      className="relative hover:scale-105 transition-all duration-300 hover:shadow-glow rounded-lg overflow-hidden w-full h-64 sm:h-80 lg:h-96"
    >
      <div className={overlayStyles}>
        <p className="text-lg sm:text-xl lg:text-2xl font-playfair bg-gradient-neon bg-clip-text text-transparent mb-3 sm:mb-4">
          {title}
        </p>
        <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed mb-3">{description}</p>
        <p className="text-xs text-neon-blue font-semibold">{technologies}</p>
      </div>
      <img
        src={`../assets/${projectTitle}.png`}
        alt={`${title} - Web development project showcase`}
        className="w-full h-full object-cover"
      />
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="pt-28 pb-12 sm:pt-24 sm:pb-16 lg:py-20">
      <motion.div
        className="md:mt-8 md:w-2/4 mx-auto text-center px-4 sm:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <h2 className="font-playfair font-semibold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-5">
            <span className="bg-gradient-neon bg-clip-text text-transparent">MY</span> PROJECTS
          </h2>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-8 sm:mt-10 mb-8 sm:mb-10 text-gray-300 leading-relaxed text-sm sm:text-base">
          Explore my portfolio showcasing innovative web applications, modern React.js
          projects, Node.js backends, Python solutions, and cutting-edge technologies. Each project demonstrates
          expertise in full-stack development and creative problem-solving.
        </p>
      </motion.div>
      {/* PROJECTS */}
      <div className="flex justify-center mt-12 sm:mt-16 px-4 sm:px-0">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {/* ROW1 */}
          <div className="flex justify-center text-center items-center p-6 sm:p-8 lg:p-10 bg-gradient-neon w-full h-64 sm:h-80 lg:h-96 text-lg sm:text-xl lg:text-2xl font-playfair font-semibold text-white rounded-lg shadow-glow">
            BEAUTIFUL USER INTERFACES
          </div>
          {/* link to add:  https://craftconnect-goyb.onrender.com/ */}
          <Project
            title="CraftConnect"
            description="A marketplace platform connecting local artisans to global buyers through AI-powered product tagging and demand forecasting, built with Next.js, TypeScript, Drizzle ORM, Stripe integration, Tailwind CSS, and SEO optimization."
            technologies="NextJS • Node.js • DrizzleDB • Stripe"
          />
          {/* link to add:  https://career-compass-one.vercel.app/ */}
          <Project
            title="Career-Compass"
            description="An AI-driven web application that provides personalized career path recommendations based on user skills, interests, and market trends, built using HTML, Tailwind CSS, JavaScript, and PDF.js for document parsing."
            technologies="HTML • JavaScript • PDF.js • CSS"
          />

          {/* ROW 2 */}
          <Project
            title="FinAdvisor"
            description="An intelligent financial advisor platform offering personalized budgeting, investment, and savings insights, developed using React, Tailwind CSS for UI, Django for backend logic, and MongoDB for scalable data storage."
            technologies="Machine Learning • MongoDB • Express • React • Node.js • MaterialUI • Chart.js"
          />
          {/* link to add:  */}
          {/* <Project
            title="Project 4"
            description="Task management application with drag-and-drop functionality, team collaboration, and progress tracking."
            technologies="React • Redux • Node.js • PostgreSQL"
          />
          <Project
            title="Project 5"
            description="AI-powered content management system with natural language processing and automated content generation."
            technologies="Python • TensorFlow • React • FastAPI"
          />

          // ROW 3
          <Project
            title="Project 6"
            description="Real-time chat application with video calling, file sharing, and group messaging capabilities."
            technologies="Socket.io • WebRTC • React • Express"
          />
          <Project
            title="Project 7"
            description="Cloud-based inventory management system with barcode scanning, analytics, and multi-location support."
            technologies="AWS • React • Node.js • DynamoDB"
          />
          <div className="flex justify-center text-center items-center p-6 sm:p-8 lg:p-10 bg-gradient-modern w-full h-64 sm:h-80 lg:h-96 text-lg sm:text-xl lg:text-2xl font-playfair font-semibold text-white rounded-lg shadow-glow">
            SMOOTH USER EXPERIENCE
          </div> */}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
