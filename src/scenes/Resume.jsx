"use client"

import { motion } from "framer-motion"
import LineGradient from "../components/LineGradient"
import { Briefcase, GraduationCap, Award, ExternalLink, Download } from "lucide-react"

/* ── DATA ──────────────────────────────────────────────────────────────────── */
const EXPERIENCE = [
  {
    id: 1,
    company: "Edelweiss",
    role: "Backend Software Engineer",
    period: "June 2026 – Present",
    description:
      "Managing and monitoring various backend services in a high-frequency trading (HFT) environment for in-house OMS trading tools built in C++. Working with performance-critical systems requiring microsecond-level latency.",
    tags: ["C++", "HFT", "OMS", "Backend", "Systems"],
    color: "#00f5ff",
    current: true,
  },
  {
    id: 2,
    company: "BlankAnalytica",
    role: "PHP Developer Intern",
    period: "December 2025 – May 2026",
    description:
      "Developed various software tools using PHP and MySQL, including a Business Profile Builder and Auto-Data Fetcher integrated with a WordPress CMS backend for automated data pipeline management.",
    tags: ["PHP", "MySQL", "WordPress", "CMS"],
    color: "#8a2be2",
    current: false,
  },
]

const EDUCATION = [
  {
    id: 1,
    institution: "Pillai College of Engineering, New Panvel",
    degree: "B.Tech – Computer Engineering",
    period: "2022 – 2026",
    detail: "CGPA: 9.7",
    courses: ["Data Structures & Algorithms", "OS & Architecture", "Compiler Design", "AI & ML", "NLP", "DBMS & Big Data"],
    color: "#ff1493",
  },
]

const CERTS = [
  {
    id: 1,
    title: "Master in Data Science",
    issuer: "Udemy",
    credentialId: "UC-1d581b7d-c5c7-48ad-9107-8b1e1379ed22",
    link: "https://www.udemy.com/certificate/UC-1d581b7d-c5c7-48ad-9107-8b1e1379ed22/",
    color: "#f59e0b",
  },
]

/* ── TIMELINE ITEM ─────────────────────────────────────────────────────────── */
const TimelineItem = ({ item, index, side = "left" }) => (
  <motion.div
    className={`flex gap-4 ${side === "right" ? "flex-row-reverse" : ""}`}
    initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.55, delay: index * 0.15 }}
  >
    {/* Dot + line */}
    <div className="flex flex-col items-center flex-shrink-0">
      <div
        className="timeline-dot mt-1"
        style={{ boxShadow: `0 0 16px ${item.color}90` }}
      />
      <div className="flex-1 w-px mt-2" style={{ background: `${item.color}30` }} />
    </div>

    {/* Card */}
    <div
      className="glass-card rounded-2xl p-5 mb-6 flex-1 hover:shadow-card-hover transition-all duration-300"
      style={{ borderLeft: `3px solid ${item.color}60` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <h4 className="text-base font-bold text-white font-playfair">
            {item.company || item.institution}
          </h4>
          <p className="text-sm font-semibold" style={{ color: item.color }}>
            {item.role || item.degree}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <span className="text-xs text-gray-500 font-mono whitespace-nowrap">{item.period}</span>
          {item.current && (
            <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-neon-blue/15 text-neon-blue border border-neon-blue/30">
              Current
            </span>
          )}
          {item.detail && (
            <span className="text-xs font-bold" style={{ color: item.color }}>
              {item.detail}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      {item.description && (
        <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.description}</p>
      )}
      {item.courses && (
        <div className="flex flex-wrap gap-1.5 mb-2">
          {item.courses.map((c) => (
            <span key={c} className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-md">
              {c}
            </span>
          ))}
        </div>
      )}
      {/* Tags */}
      {item.tags && (
        <div className="flex flex-wrap gap-2 mt-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-full font-semibold font-opensans"
              style={{ background: `${item.color}14`, border: `1px solid ${item.color}28`, color: item.color }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </motion.div>
)

/* ── SECTION ─────────────────────────────────────────────────────────────── */
const Resume = () => {
  return (
    <section id="resume" className="py-16 sm:py-20 lg:py-24">
      {/* Header */}
      <motion.div
        className="mb-14 px-4 sm:px-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-playfair font-semibold text-3xl sm:text-4xl lg:text-5xl mb-4">
          <span className="bg-gradient-neon bg-clip-text text-transparent">MY </span>
          <span className="text-white">RESUME</span>
        </p>
        <LineGradient width="w-1/4" />
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <p className="text-gray-400 text-sm sm:text-base">
            Professional journey, education, and certifications.
          </p>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm
              bg-gradient-neon text-white hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 px-4 sm:px-0">
        {/* ── EXPERIENCE ── */}
        <div>
          <h3 className="font-playfair font-bold text-2xl mb-8 flex items-center gap-3 text-neon-blue">
            <Briefcase className="w-6 h-6 text-neon-blue" />
            <span>Experience</span>
          </h3>
          {EXPERIENCE.map((exp, i) => (
            <TimelineItem key={exp.id} item={exp} index={i} side="left" />
          ))}
        </div>

        {/* ── EDUCATION & CERTS ── */}
        <div>
          <h3 className="font-playfair font-bold text-2xl mb-8 flex items-center gap-3" style={{ color: "#ff1493" }}>
            <GraduationCap className="w-6 h-6" style={{ color: "#ff1493" }} />
            <span>Education</span>
          </h3>
          {EDUCATION.map((edu, i) => (
            <TimelineItem key={edu.id} item={edu} index={i} side="right" />
          ))}

          {/* Certs */}
          <h3 className="font-playfair font-bold text-xl mt-8 mb-6 flex items-center gap-3" style={{ color: "#f59e0b" }}>
            <Award className="w-5 h-5" style={{ color: "#f59e0b" }} />
            <span>Certifications</span>
          </h3>
          {CERTS.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex items-start gap-4 glass-card rounded-2xl p-5 mb-4 hover:shadow-glow transition-all duration-300 group"
              style={{ borderLeft: `3px solid ${cert.color}60` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-amber-400"
                style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}
              >
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white font-playfair group-hover:text-amber-400 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-xs font-mono text-gray-500 break-all">{cert.credentialId}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-amber-400 ml-auto flex-shrink-0 mt-1 transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resume
