"use client";

import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import {
  Compass,
  ShoppingCart,
  Navigation,
  TrendingUp,
  Eye,
  Zap,
  BarChart3,
  ExternalLink,
  Lock,
} from "lucide-react";

/* ── PROJECT DATA ─────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    title: "VistaGuide",
    description:
      "AI-powered travel companion mobile app integrating Visual Question Answering (VQA), deep learning image recognition, NLP, and geolocation for real-time insights, safety alerts, and offline AI via TFLite.",
    technologies: ["Flutter", "TFLite", "NLP", "Geolocation", "VQA"],
    link: null,
    accentColor: "#00f5ff",
    category: "AI/ML · Mobile",
    icon: Compass,
    image: null,
  },
  {
    id: 2,
    title: "CraftConnect",
    description:
      "Marketplace platform connecting local artisans to global buyers through AI-powered product tagging, demand forecasting, Stripe integration, and SEO optimization.",
    technologies: ["Next.js", "TypeScript", "DrizzleORM", "Stripe"],
    link: "https://craftconnect-goyb.onrender.com/",
    accentColor: "#8a2be2",
    category: "Full Stack · E-Commerce",
    icon: ShoppingCart,
    image: "/assets/craftconnect.png",
  },
  {
    id: 3,
    title: "Career-Compass",
    description:
      "AI-driven web app providing personalized career path recommendations based on user skills, interests, and market trends. Uses PDF.js for document parsing.",
    technologies: ["HTML", "JavaScript", "PDF.js", "CSS", "AI"],
    link: "https://career-compass-one.vercel.app/",
    accentColor: "#ff1493",
    category: "AI · Web",
    icon: Navigation,
    image: "/assets/career-compass.png",
  },
  {
    id: 4,
    title: "FinAdvisor",
    description:
      "Intelligent financial advisor platform offering personalized budgeting, investment, and savings insights with ML-powered predictions and interactive charts.",
    technologies: ["React", "Django", "MongoDB", "Chart.js", "MaterialUI"],
    link: null,
    accentColor: "#00f5ff",
    category: "Full Stack · FinTech",
    icon: TrendingUp,
    image: "/assets/finadvisor.png",
  },
  {
    id: 5,
    title: "AudibleLens",
    description:
      "Interactive PWA for visually impaired individuals — provides surrounding-aware descriptions, emergency situation guides, and real-time accessibility features.",
    technologies: ["Expo", "React Native", "PWA", "AI", "Vision API"],
    link: null,
    accentColor: "#8a2be2",
    category: "Accessibility · Mobile",
    icon: Eye,
    image: null,
  },
  {
    id: 6,
    title: "LoadAI",
    description:
      "Load balancer with an online AI policy that intelligently routes requests to a server pool. Supports both automatic AI-driven and manual routing for improved health monitoring.",
    technologies: ["Go", "Python", "AI", "Networking", "Docker"],
    link: null,
    accentColor: "#ff1493",
    category: "Systems · AI",
    icon: Zap,
    image: null,
  },
  {
    id: 7,
    title: "Data Science Pipeline",
    description:
      "Streamlit dashboard for real-time product engagement forecasting. Implements Linear Regression, Random Forest & XGBoost with SHAP/LIME explainability and interactive Plotly visualisations.",
    technologies: ["Python", "Streamlit", "XGBoost", "SHAP", "Pandas"],
    link: "https://ds-sem-7.streamlit.app/",
    accentColor: "#00f5ff",
    category: "Data Science · ML",
    icon: BarChart3,
    image: "/assets/data-science.png",
  },
];

/* ── SINGLE PROJECT CARD ──────────────────────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  const { title, description, technologies, link, accentColor, category, icon: Icon, image } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="group flex flex-col glass-card rounded-2xl overflow-hidden
        hover:shadow-card-hover transition-all duration-500 project-card-border"
    >
      {/* ── IMAGE PREVIEW ── */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-gray-900 flex-shrink-0">
        {image ? (
          <>
            <img
              src={image}
              alt={`${title} project screenshot`}
              className="w-full h-full object-cover object-top
                transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay on hover revealing the category badge */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(to bottom, transparent 30%, rgba(5,5,20,0.85) 100%)`,
              }}
            />
          </>
        ) : (
          /* Gradient placeholder for projects without a screenshot */
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{
              background: `radial-gradient(ellipse at 40% 40%, ${accentColor}22 0%, transparent 70%),
                           linear-gradient(135deg, #0a0a14 0%, #050510 100%)`,
            }}
          >
            {/* Decorative grid lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id={`grid-${project.id}`} width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
            </svg>
            <div
              className="relative w-16 h-16 rounded-2xl flex items-center justify-center z-10
                group-hover:scale-110 transition-transform duration-300"
              style={{
                background: `${accentColor}18`,
                border: `1px solid ${accentColor}35`,
                boxShadow: `0 0 40px ${accentColor}30`,
                color: accentColor,
              }}
            >
              <Icon className="w-8 h-8" />
            </div>
            <p
              className="relative z-10 text-xs font-semibold font-opensans tracking-widest uppercase"
              style={{ color: `${accentColor}80` }}
            >
              {category}
            </p>
          </div>
        )}

        {/* Top-left accent strip */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{
            background: `linear-gradient(90deg, ${accentColor}, #8a2be2)`,
            boxShadow: `0 0 12px ${accentColor}66`,
          }}
        />

        {/* Category badge */}
        {image && (
          <div
            className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold font-opensans
              opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `${accentColor}20`,
              border: `1px solid ${accentColor}50`,
              color: accentColor,
              backdropFilter: "blur(8px)",
            }}
          >
            {category}
          </div>
        )}

        {/* Project number badge top-right */}
        <div
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold"
          style={{
            background: "rgba(5,5,20,0.75)",
            border: `1px solid ${accentColor}30`,
            color: accentColor,
            backdropFilter: "blur(8px)",
          }}
        >
          {String(project.id).padStart(2, "0")}
        </div>
      </div>

      {/* ── CARD BODY ── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            {!image && (
              <span
                className="text-xs font-semibold font-opensans tracking-wider mb-0.5 block"
                style={{ color: accentColor }}
              >
                {category}
              </span>
            )}
            <h3 className="text-lg font-playfair font-bold text-white leading-tight">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
          {description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs font-semibold rounded-full font-opensans"
              style={{
                background: `${accentColor}10`,
                border: `1px solid ${accentColor}25`,
                color: accentColor,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-4" style={{ background: `${accentColor}15` }} />

        {/* CTA */}
        <div className="mt-auto">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold font-opensans
                transition-all duration-300 group/btn"
              style={{ color: accentColor }}
              aria-label={`View ${title} live project`}
            >
              <span className="group-hover/btn:underline underline-offset-4">View Live Project</span>
              <ExternalLink className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm font-opensans text-gray-500 select-none">
              <Lock className="w-3.5 h-3.5" />
              Private / In Progress
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ── PROJECTS SECTION ─────────────────────────────────────────────────────── */
const Projects = () => {
  const liveCount = PROJECTS.filter((p) => p.link).length;
  const imageCount = PROJECTS.filter((p) => p.image).length;

  return (
    <section id="projects" className="pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-20">
      {/* Section header */}
      <motion.div
        className="text-center mb-14 px-4 sm:px-0"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-playfair font-semibold text-3xl sm:text-4xl lg:text-5xl mb-5">
          <span className="bg-gradient-neon bg-clip-text text-transparent">MY</span>{" "}
          PROJECTS
        </h2>
        <div className="flex justify-center mb-6">
          <LineGradient width="w-1/4" />
        </div>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          <span className="text-white font-semibold">{PROJECTS.length} projects</span> spanning full-stack
          web, AI/ML, mobile apps, and data pipelines —{" "}
          <span className="text-neon-blue font-semibold">{liveCount} live</span>,{" "}
          <span className="text-neon-pink font-semibold">{imageCount} with previews</span>.
        </p>
      </motion.div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
