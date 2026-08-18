"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LineGradient from "../components/LineGradient"
import { TechIcon } from "../components/TechIcons"
import { Code2, Globe, Smartphone, BrainCircuit, Database } from "lucide-react"

/* ── SKILL DATA GROUPED BY CATEGORY ────────────────────────────────────────── */
const SKILL_CATEGORIES = [
  {
    id: "languages",
    name: "Languages",
    shortName: "Languages",
    icon: Code2,
    description: "Core systems, compiled & scripting languages for high performance & versatility",
    skills: [
      { name: "C", iconName: "c", level: 75, levelLabel: "Intermediate", color: "#a8b5c8" },
      { name: "C++", iconName: "c++", level: 85, levelLabel: "Advanced", color: "#4d8bf0" },
      { name: "Java", iconName: "java", level: 80, levelLabel: "Advanced", color: "#f89820" },
      { name: "Python", iconName: "python", level: 88, levelLabel: "Advanced", color: "#3776ab" },
      { name: "TypeScript", iconName: "typescript", level: 88, levelLabel: "Expert", color: "#3178c6" },
      { name: "JavaScript", iconName: "javascript", level: 92, levelLabel: "Expert", color: "#f7df1e" },
      { name: "Go", iconName: "go", level: 60, levelLabel: "Intermediate", color: "#00acd7" },
      { name: "Rust", iconName: "rust", level: 50, levelLabel: "Learning", color: "#ce4a1c" },
      { name: "PHP", iconName: "php", level: 65, levelLabel: "Intermediate", color: "#8892be" },
      { name: "SQL", iconName: "sql", level: 85, levelLabel: "Advanced", color: "#f39c12" },
    ],
  },
  {
    id: "web",
    name: "Web Development",
    shortName: "Web",
    icon: Globe,
    description: "Full-stack frontend and backend web frameworks, styling & APIs",
    skills: [
      { name: "React.js", iconName: "react.js", level: 95, levelLabel: "Expert", color: "#61dafb" },
      { name: "Next.js", iconName: "next.js", level: 90, levelLabel: "Expert", color: "#ffffff" },
      { name: "Node.js", iconName: "node.js", level: 90, levelLabel: "Expert", color: "#339933" },
      { name: "Express.js", iconName: "express.js", level: 85, levelLabel: "Advanced", color: "#959595" },
      { name: "Tailwind CSS", iconName: "tailwind css", level: 92, levelLabel: "Expert", color: "#38bdf8" },
      { name: "HTML5/CSS3", iconName: "html5/css3", level: 95, levelLabel: "Expert", color: "#e34c26" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile & Apps",
    shortName: "Mobile",
    icon: Smartphone,
    description: "Cross-platform mobile applications, PWAs, and native development",
    skills: [
      { name: "Flutter", iconName: "flutter", level: 75, levelLabel: "Intermediate", color: "#54c5f8" },
      { name: "React Native", iconName: "react native", level: 75, levelLabel: "Intermediate", color: "#61dafb" },
      { name: "Expo", iconName: "expo", level: 80, levelLabel: "Advanced", color: "#ffffff" },
      { name: "PWA", iconName: "pwa", level: 82, levelLabel: "Advanced", color: "#7c3aed" },
      { name: "Android", iconName: "android", level: 68, levelLabel: "Intermediate", color: "#3ddc84" },
    ],
  },
  {
    id: "aiml",
    name: "AI / ML & Data",
    shortName: "AI/ML",
    icon: BrainCircuit,
    description: "Machine learning algorithms, data processing pipelines & NLP toolkits",
    skills: [
      { name: "Scikit-learn", iconName: "scikit-learn", level: 80, levelLabel: "Advanced", color: "#f89820" },
      { name: "TensorFlow", iconName: "tensorflow", level: 70, levelLabel: "Intermediate", color: "#ff6f00" },
      { name: "Pandas", iconName: "pandas", level: 85, levelLabel: "Advanced", color: "#150458" },
      { name: "NumPy", iconName: "numpy", level: 85, levelLabel: "Advanced", color: "#4dabcf" },
      { name: "spaCy / NLP", iconName: "spacy/nltk", level: 75, levelLabel: "Intermediate", color: "#09a3d5" },
    ],
  },
  {
    id: "tools",
    name: "Databases & Tools",
    shortName: "Tools & DBs",
    icon: Database,
    description: "Database engines, containerization, cloud BaaS & automation tools",
    skills: [
      { name: "PostgreSQL", iconName: "postgresql", level: 80, levelLabel: "Advanced", color: "#336791" },
      { name: "MongoDB", iconName: "mongodb", level: 82, levelLabel: "Advanced", color: "#13aa52" },
      { name: "Supabase", iconName: "supabase", level: 82, levelLabel: "Advanced", color: "#3ecf8e" },
      { name: "Firebase", iconName: "firebase", level: 85, levelLabel: "Expert", color: "#ffca28" },
      { name: "Docker", iconName: "docker", level: 75, levelLabel: "Intermediate", color: "#2496ed" },
      { name: "Git", iconName: "git", level: 95, levelLabel: "Expert", color: "#f05032" },
      { name: "n8n", iconName: "n8n", level: 72, levelLabel: "Intermediate", color: "#ea4b71" },
      { name: "PowerBI", iconName: "powerbi", level: 68, levelLabel: "Intermediate", color: "#f2c811" },
    ],
  },
]

const levelColors = {
  Expert: "text-neon-blue border-neon-blue/30 bg-neon-blue/10",
  Advanced: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  Intermediate: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  Learning: "text-gray-400 border-gray-500/30 bg-gray-500/10",
}

/* ── SKILL CARD COMPONENT ─────────────────────────────────────────────────── */
const SkillCard = ({ skill, index }) => {
  const { name, iconName, level, levelLabel, color } = skill

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.02 }}
      className="group glass-card card-trace-hover rounded-2xl p-4 sm:p-5 hover:scale-[1.03] transition-all duration-300 relative overflow-hidden"
      style={{
        borderColor: "rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Top subtle glow strip on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: color, boxShadow: `0 0 10px ${color}` }}
      />

      <div className="flex flex-col h-full justify-between gap-3">
        {/* Top Icon & Level badge */}
        <div className="flex items-center justify-between gap-2">
          <div
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
            style={{
              background: `${color}15`,
              border: `1px solid ${color}35`,
              color: color,
            }}
          >
            <TechIcon name={iconName} className="w-5 h-5 sm:w-6 sm:h-6" color={color} />
          </div>

          <span
            className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border ${
              levelColors[levelLabel] || "text-gray-400 border-gray-500/20"
            }`}
          >
            {levelLabel}
          </span>
        </div>

        {/* Skill Name */}
        <div>
          <h4 className="font-playfair font-bold text-sm sm:text-base text-white group-hover:text-neon-blue transition-colors duration-200">
            {name}
          </h4>
        </div>

        {/* Progress Bar */}
        <div className="w-full">
          <div className="flex justify-between text-[10px] text-gray-500 font-mono mb-1">
            <span>Proficiency</span>
            <span>{level}%</span>
          </div>
          <div className="w-full bg-gray-800/80 rounded-full h-1.5 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── MAIN SECTION ─────────────────────────────────────────────────────────── */
const MySkills = () => {
  const [selectedFilter, setSelectedFilter] = useState("all")

  const totalSkillsCount = SKILL_CATEGORIES.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  )

  const activeCategories =
    selectedFilter === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedFilter)

  return (
    <section id="skills" className="pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-20">
      {/* SECTION HEADER */}
      <div className="md:flex md:justify-between md:items-end md:gap-16 mb-12 px-4 sm:px-0">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-playfair font-semibold text-3xl sm:text-4xl lg:text-5xl mb-4">
            TECHNICAL <span className="bg-gradient-neon bg-clip-text text-transparent">SKILLS</span>
          </h2>
          <LineGradient width="w-1/3" />
          <p className="mt-6 text-gray-400 leading-relaxed text-sm sm:text-base max-w-lg">
            A comprehensive overview of programming languages, full-stack technologies, mobile toolkits,
            and machine learning frameworks categorized by domain.
          </p>
        </motion.div>

        {/* METRIC CHIPS */}
        <motion.div
          className="flex flex-wrap gap-3 mt-8 md:mt-0 md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { val: `${totalSkillsCount}+`, label: "Technologies" },
            { val: "5", label: "Core Domains" },
            { val: "9.7", label: "Academics (CGPA)" },
          ].map(({ val, label }) => (
            <div
              key={label}
              className="glass-card rounded-2xl px-5 py-3 text-center min-w-[90px]"
            >
              <div className="text-xl sm:text-2xl font-bold font-playfair bg-gradient-neon bg-clip-text text-transparent">
                {val}
              </div>
              <div className="text-xs text-gray-400 font-opensans mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CATEGORY FILTER BUTTONS */}
      <motion.div
        className="flex flex-wrap gap-2.5 mb-12 px-4 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <button
          onClick={() => setSelectedFilter("all")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
            selectedFilter === "all"
              ? "bg-gradient-neon text-white shadow-glow"
              : "glass-card text-gray-400 hover:text-white hover:border-white/20"
          }`}
        >
          <span>All Technologies</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/30 text-gray-200">
            {totalSkillsCount}
          </span>
        </button>

        {SKILL_CATEGORIES.map((category) => {
          const Icon = category.icon
          const isActive = selectedFilter === category.id
          return (
            <button
              key={category.id}
              onClick={() => setSelectedFilter(category.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-gradient-neon text-white shadow-glow"
                  : "glass-card text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{category.shortName}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/30 text-gray-200">
                {category.skills.length}
              </span>
            </button>
          )
        })}
      </motion.div>

      {/* GROUPED / FILTERED SKILL CATEGORY BLOCKS */}
      <div className="space-y-12 px-4 sm:px-0">
        <AnimatePresence mode="wait">
          {activeCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card-elevated rounded-3xl p-6 sm:p-8"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center text-neon-blue">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-playfair font-bold text-xl sm:text-2xl text-white">
                        {category.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 font-opensans mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs text-gray-400 font-mono px-3 py-1 rounded-full bg-white/5 self-start sm:self-auto">
                    {category.skills.length} Technologies
                  </span>
                </div>

                {/* Category Grid */}
                <motion.div
                  layout
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3.5 sm:gap-4"
                >
                  {category.skills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default MySkills
