"use client"

import { useState, useEffect } from "react"
import SocialMediaIcons from "../components/SocialMediaIcons"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"

const ROLES = [
  "Full Stack Developer",
  "Software Engineer",
  "HFT Systems Dev",
  "AI/ML Engineer",
]

const useTypewriter = (words, speed = 80, pause = 2000) => {
  const [display, setDisplay] = useState("")
  const [wordIdx, setWordIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout

    if (!isDeleting && display === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && display === "") {
      setIsDeleting(false)
      setWordIdx((prev) => (prev + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplay((prev) =>
            isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
          )
        },
        isDeleting ? speed / 2 : speed
      )
    }
    return () => clearTimeout(timeout)
  }, [display, isDeleting, wordIdx, words, speed, pause])

  return display
}

const StatItem = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="text-center px-4 first:pl-0 last:pr-0"
  >
    <div className="text-xl font-bold font-playfair bg-gradient-neon bg-clip-text text-transparent">
      {value}
    </div>
    <div className="text-xs text-gray-500 font-opensans mt-0.5 whitespace-nowrap">{label}</div>
  </motion.div>
)

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const typedRole = useTypewriter(ROLES)

  return (
    <section
      id="home"
      className="pt-28 md:flex md:justify-between md:items-center gap-8 sm:gap-12 lg:gap-16 py-12 sm:py-16 lg:py-20 px-4 sm:px-0 min-h-screen md:min-h-0"
    >
      {/* ── PROFILE IMAGE ── */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-8 sm:mt-12 md:mt-24">
        <div className="relative">
          {/* Outer decorative ring */}
          {isAboveMediumScreens && (
            <>
              <div
                className="absolute -inset-6 rounded-t-[400px] opacity-20 blur-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse, #8a2be2 0%, #00f5ff 60%, transparent 80%)",
                }}
              />
              <div className="absolute -top-4 -left-4 right-4 bottom-0 rounded-t-[400px] border border-neon-blue/25 shadow-glow" />
              <div className="absolute -top-8 -left-8 right-8 bottom-0 rounded-t-[400px] border border-neon-purple/15" />
            </>
          )}
          <div className="animate-float relative z-10">
            <img
              src="assets/profile-image2.jpg"
              className="w-full max-w-[260px] sm:max-w-[360px] md:max-w-[460px] lg:max-w-[520px]
                rounded-t-[300px] sm:rounded-t-[360px] md:rounded-t-[400px]
                border-2 border-neon-blue/30 hover:border-neon-blue/60
                hover:shadow-glow-lg transition-all duration-500 object-cover"
              alt="Omkar Mondkar - Full Stack Developer"
            />
          </div>
        </div>
      </div>

      {/* ── MAIN TEXT ── */}
      <div className="z-30 basis-2/5 mt-8 sm:mt-12 md:mt-28">
        {/* Badge chip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center md:justify-start mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold font-opensans
            bg-neon-blue/10 border border-neon-blue/30 text-neon-blue shadow-glow">
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
            Open to Work · Navi Mumbai, India
          </span>
        </motion.div>

        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair z-10 text-center md:text-start mb-3">
            <span className="bg-gradient-neon bg-clip-text text-transparent">Omkar</span>{" "}
            <span className="text-white hover:text-neon-blue transition-colors duration-300">Mondkar</span>
          </h1>

          {/* Typewriter subtitle */}
          <h2 className="text-lg sm:text-xl lg:text-2xl font-opensans text-center md:text-start mb-5 text-gray-300 min-h-[2rem]">
            <span className="text-neon-blue font-semibold">{typedRole}</span>
            <span className="typewriter-cursor" />
          </h2>

          <p className="mt-4 mb-6 text-sm sm:text-base text-center md:text-start text-gray-400 leading-relaxed max-w-lg">
            Software Engineer at{" "}
            <strong className="text-neon-blue">Edelweiss</strong> working on HFT backend systems in C++. 
            Passionate about full-stack development, AI/ML, and building scalable solutions across the stack.
            CGPA&nbsp;<strong className="text-white">9.7</strong> · Pillai College of Engineering.
          </p>

          {/* Stats row */}
          <div className="flex justify-center md:justify-start gap-0 divide-x divide-white/10 my-6">
            <StatItem value="9.7" label="CGPA" delay={0.1} />
            <StatItem value="2+" label="Experiences" delay={0.2} />
            <StatItem value="7+" label="Projects" delay={0.3} />
            <StatItem value="25+" label="Technologies" delay={0.4} />
          </div>
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          className="flex flex-col sm:flex-row mt-4 justify-center md:justify-start gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <button
            className="relative overflow-hidden bg-gradient-neon text-white rounded-xl py-3 px-7 font-semibold text-sm
              hover:shadow-glow-lg hover:scale-105 transition-all duration-300 text-center cursor-pointer group"
            onClick={() => {
              setSelectedPage("contact")
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            aria-label="Contact Omkar Mondkar"
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 shimmer-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="relative flex items-center justify-center gap-2 rounded-xl border border-neon-blue/30 py-3 px-7
              font-semibold text-sm text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue/60
              hover:shadow-glow transition-all duration-300"
            aria-label="Download Omkar Mondkar's resume PDF"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </motion.div>

        {/* SOCIAL */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>

      {/* SCROLL CHEVRON */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 opacity-40 hover:opacity-80 transition-opacity cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs text-gray-400 font-opensans tracking-widest">SCROLL</span>
        <svg className="w-4 h-4 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}

export default Landing
