import SocialMediaIcons from "../components/SocialMediaIcons"
import LineGradient from "../components/LineGradient"

const FOOTER_LINKS = [
  { label: "Home", id: "home" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
]

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer
      className="relative mt-4"
      style={{ background: "rgba(5, 5, 20, 0.9)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Gradient border top */}
      <LineGradient />

      <div className="w-5/6 mx-auto py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-playfair text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-2">
              Omkar Mondkar
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Software Engineer · Full Stack Developer · AI/ML enthusiast building scalable, impactful products.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm font-opensans mb-4 tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-500 text-sm hover:text-neon-blue transition-colors duration-200 cursor-pointer font-opensans"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm font-opensans mb-4 tracking-wider uppercase">
              Connect
            </h4>
            <SocialMediaIcons />
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg
                border border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue/60
                transition-all duration-300"
            >
              Resume PDF ↗
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 text-center">
          <p className="text-gray-600 text-xs font-opensans">
            © 2026 Omkar Mondkar · All Rights Reserved
          </p>
          <p className="text-gray-700 text-xs font-opensans">
            Built with React · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
