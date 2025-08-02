"use client"

import LineGradient from "../components/LineGradient"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)")
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mb-8 sm:mb-12">
        <motion.div
          className="md:w-1/3 px-4 sm:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="bg-gradient-neon bg-clip-text text-transparent">SKILLS</span>
          </h2>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 text-gray-300 leading-relaxed">
            I bring expertise in modern web technologies including
            <strong> React.js</strong>, <strong>Node.js</strong>, <strong>Python</strong>,<strong> JavaScript</strong>,{" "}
            <strong>TypeScript</strong>, and cloud platforms like
            <strong> AWS</strong>. Passionate about creating cutting-edge solutions with innovative approaches. Always
            learning, always growing, always innovating.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0 px-4 sm:px-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-neon-blue before:shadow-glow before:z-[-1]"
            >
              <img
                alt="Technical skills and expertise in web development"
                className="z-10 hover:shadow-glow-lg transition-all duration-300 w-full h-auto"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img
              alt="Technical skills and expertise in web development"
              className="z-10 hover:shadow-glow transition-all duration-300 w-full h-auto max-w-md mx-auto"
              src="assets/skills-image.png"
            />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 px-4 sm:px-0">
        
        {/* React.js */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">⚛️</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-neon-blue mb-2">React.js</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-[95%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Expert</p>
          </div>
        </motion.div>

        {/* Next.js */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-black to-gray-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl text-white">▲</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-white mb-2">Next.js</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-black to-gray-600 h-2 rounded-full w-[90%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Expert</p>
          </div>
        </motion.div>

        {/* Node.js */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🟢</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-green-400 mb-2">Node.js</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-[90%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Expert</p>
          </div>
        </motion.div>

        {/* Python */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🐍</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-yellow-400 mb-2">Python</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-yellow-400 to-blue-500 h-2 rounded-full w-[85%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Advanced</p>
          </div>
        </motion.div>

        {/* TypeScript */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl text-white font-bold">TS</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-blue-400 mb-2">TypeScript</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-2 rounded-full w-[88%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Expert</p>
          </div>
        </motion.div>

        {/* MongoDB */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-green-600 to-green-800 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🍃</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-green-500 mb-2">MongoDB</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-green-600 to-green-800 h-2 rounded-full w-[80%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Advanced</p>
          </div>
        </motion.div>

        {/* PostgreSQL */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🐘</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-blue-300 mb-2">PostgreSQL</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-blue-800 to-indigo-900 h-2 rounded-full w-[75%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Advanced</p>
          </div>
        </motion.div>

        {/* AWS */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">☁️</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-orange-400 mb-2">AWS</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full w-[70%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Intermediate</p>
          </div>
        </motion.div>

        {/* Docker */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">�</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-cyan-400 mb-2">Docker</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-[75%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Advanced</p>
          </div>
        </motion.div>

        {/* Git */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🌿</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-red-400 mb-2">Git</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 h-2 rounded-full w-[95%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Expert</p>
          </div>
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🎨</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-cyan-400 mb-2">Tailwind</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-cyan-400 to-teal-500 h-2 rounded-full w-[90%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Expert</p>
          </div>
        </motion.div>

        {/* GraphQL */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">📊</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-pink-400 mb-2">GraphQL</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full w-[70%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Intermediate</p>
          </div>
        </motion.div>

        {/* Redis */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">⚡</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-red-400 mb-2">Redis</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-red-500 to-red-700 h-2 rounded-full w-[65%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Intermediate</p>
          </div>
        </motion.div>

        {/* Kubernetes */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">⚙️</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-purple-400 mb-2">Kubernetes</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 h-2 rounded-full w-[60%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Basic</p>
          </div>
        </motion.div>

        {/* C */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl text-white font-bold">C</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-gray-300 mb-2">C</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-gray-700 to-gray-900 h-2 rounded-full w-[70%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Intermediate</p>
          </div>
        </motion.div>

        {/* C++ */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-blue-700 to-purple-800 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl text-white font-bold">C++</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-blue-400 mb-2">C++</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-blue-700 to-purple-800 h-2 rounded-full w-[75%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Advanced</p>
          </div>
        </motion.div>

        {/* Java */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">☕</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-orange-400 mb-2">Java</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full w-[80%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Advanced</p>
          </div>
        </motion.div>

        {/* Rust */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-orange-600 to-orange-800 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🦀</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-orange-500 mb-2">Rust</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-orange-600 to-orange-800 h-2 rounded-full w-[45%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Learning</p>
          </div>
        </motion.div>

        {/* Go */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🐹</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-cyan-400 mb-2">Go</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full w-[55%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Basic</p>
          </div>
        </motion.div>

        {/* Supabase */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.9, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🗄️</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-emerald-400 mb-2">Supabase</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 h-2 rounded-full w-[75%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Advanced</p>
          </div>
        </motion.div>

        {/* Flutter */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 2.0, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">📱</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-blue-400 mb-2">Flutter</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full w-[70%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Intermediate</p>
          </div>
        </motion.div>

        {/* Android */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 2.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🤖</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-green-400 mb-2">Android</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-[65%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Intermediate</p>
          </div>
        </motion.div>

        {/* PWA */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🌐</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-purple-400 mb-2">PWA</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-2 rounded-full w-[80%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Advanced</p>
          </div>
        </motion.div>

        {/* Expo */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 2.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-black to-gray-700 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl text-white">📲</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-gray-300 mb-2">Expo</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-black to-gray-700 h-2 rounded-full w-[75%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Advanced</p>
          </div>
        </motion.div>

        {/* PHP */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 2.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-purple-600 to-blue-700 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🐘</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-purple-400 mb-2">PHP</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-purple-600 to-blue-700 h-2 rounded-full w-[60%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Basic</p>
          </div>
        </motion.div>

        {/* n8n */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🔗</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-pink-400 mb-2">n8n</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full w-[70%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Intermediate</p>
          </div>
        </motion.div>

        {/* Firebase */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 2.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🔥</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-yellow-400 mb-2">Firebase</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full w-[85%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Expert</p>
          </div>
        </motion.div>

        {/* Scikit-learn */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 2.7, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🧠</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-orange-400 mb-2">Scikit-learn</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full w-[75%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Advanced</p>
          </div>
        </motion.div>

        {/* Pandas */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 2.8, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🐼</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-blue-400 mb-2">Pandas</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 h-2 rounded-full w-[80%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Advanced</p>
          </div>
        </motion.div>

        {/* NumPy */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 2.9, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🔢</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-blue-400 mb-2">NumPy</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full w-[85%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Expert</p>
          </div>
        </motion.div>

        {/* TensorFlow */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 3.0, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🤖</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-orange-400 mb-2">TensorFlow</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-[70%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Intermediate</p>
          </div>
        </motion.div>

        {/* spaCy */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 3.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">📝</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-teal-400 mb-2">spaCy</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-600 h-2 rounded-full w-[65%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Intermediate</p>
          </div>
        </motion.div>

        {/* NLTK */}
        <motion.div
          className="group relative glass-card rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 3.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-xl sm:text-2xl">🌿</span>
            </div>
            <h3 className="font-playfair font-semibold text-xs sm:text-sm md:text-base text-green-400 mb-2">NLTK</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full w-[60%] transition-all duration-1000"></div>
            </div>
            <p className="text-xs text-gray-400">Basic</p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default MySkills
