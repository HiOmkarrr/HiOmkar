"use client"

import { useState } from "react"
import LineGradient from "../components/LineGradient"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { Mail, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react"

const CONTACT_INFO = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "omkarmondkar18@gmail.com",
    href: "mailto:omkarmondkar18@gmail.com",
    color: "#00f5ff",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "omkar-mondkar-83aa86255",
    href: "https://linkedin.com/in/omkar-mondkar-83aa86255/",
    color: "#0a66c2",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "HiOmkarrr",
    href: "https://github.com/HiOmkarrr/",
    color: "#ffffff",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Kharghar, Navi Mumbai, India",
    href: null,
    color: "#ff1493",
  },
]

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setSubmitted(true)
  }

  return (
    <section id="contact" className="pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-20">
      {/* HEADING */}
      <motion.div
        className="text-center mb-14 px-4 sm:px-0"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-playfair font-semibold text-3xl sm:text-4xl lg:text-5xl mb-5">
          <span className="bg-gradient-neon bg-clip-text text-transparent">CONTACT ME</span>
        </p>
        <div className="flex justify-center mb-4">
          <LineGradient width="w-1/4" />
        </div>
        <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
          Have a project in mind or want to collaborate? Let's connect!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 px-4 sm:px-0">
        {/* ── CONTACT INFO SIDEBAR ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <div className="contact-card mb-2">
            <h3 className="font-playfair font-bold text-xl text-white mb-1">Let's Talk</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Currently at Edelweiss building HFT systems, but always open to interesting
              collaborations and technical discussions.
            </p>
          </div>

          {CONTACT_INFO.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 glass-card rounded-xl p-4 hover:shadow-glow
                    transition-all duration-300 group cursor-pointer"
                  style={{ borderLeft: `3px solid ${item.color}50` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                      group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${item.color}18`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-opensans">{item.label}</p>
                    <p className="text-sm text-white font-semibold group-hover:text-neon-blue transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div
                  className="flex items-center gap-4 glass-card rounded-xl p-4"
                  style={{ borderLeft: `3px solid ${item.color}50` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}18`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-opensans">{item.label}</p>
                    <p className="text-sm text-white font-semibold">{item.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* ── FORM ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="contact-card h-full flex flex-col items-center justify-center gap-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-neon-blue/15 border border-neon-blue/30 flex items-center justify-center text-neon-blue shadow-glow">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-2xl text-white mb-2">Message Sent</h3>
                <p className="text-gray-400 text-sm">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 rounded-xl border border-neon-blue/30 text-neon-blue text-sm font-semibold
                  hover:bg-neon-blue/10 transition-all duration-300 cursor-pointer"
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <form
              target="_blank"
              onSubmit={(e) => {
                handleSubmit(onSubmit)(e)
              }}
              action="https://formsubmit.co/987cbccc28957637bb648a70ff6dd46f"
              method="POST"
              className="flex flex-col gap-4"
            >
              <div>
                <input
                  type="text"
                  className={`form-input-glow ${errors.name ? "error" : ""}`}
                  placeholder="Your Name"
                  {...register("name", { required: true, maxLength: 100 })}
                />
                {errors.name && (
                  <p className="text-neon-pink text-xs mt-1.5">
                    {errors.name.type === "required" ? "Name is required." : "Max 100 characters."}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  className={`form-input-glow ${errors.email ? "error" : ""}`}
                  placeholder="Your Email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="text-neon-pink text-xs mt-1.5">
                    {errors.email.type === "required" ? "Email is required." : "Invalid email address."}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  rows="5"
                  className={`form-input-glow resize-none ${errors.message ? "error" : ""}`}
                  placeholder="Your message..."
                  {...register("message", { required: true, maxLength: 2000 })}
                />
                {errors.message && (
                  <p className="text-neon-pink text-xs mt-1.5">
                    {errors.message.type === "required" ? "Message is required." : "Max 2000 characters."}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="relative overflow-hidden bg-gradient-neon text-white rounded-xl py-3.5 px-6
                  font-semibold text-sm hover:shadow-glow-lg hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 shimmer-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
