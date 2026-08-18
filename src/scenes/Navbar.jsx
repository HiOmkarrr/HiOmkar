"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
const navLinks = ["Home", "Skills", "Projects", "Contact"];
const NavLink = ({ page, selectedPage, setSelectedPage, onClose }) => {
  const lowerCasePage = page.toLowerCase();
  const isActive = selectedPage === lowerCasePage;
  const handleClick = (e) => {
    e.preventDefault();
    setSelectedPage(lowerCasePage);
    if (onClose) onClose();
    const element = document.getElementById(lowerCasePage);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`relative px-1 py-2 text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer
        ${isActive ? "text-neon-blue" : "text-gray-400 hover:text-white"}`}
    >
      {page}
      {isActive && (
        <motion.span
          layoutId="nav-active-pill"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-neon rounded-full shadow-glow"
          initial={false}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </button>
  );
};
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  // Close menu on resize to desktop
  useEffect(() => {
    if (isAboveSmallScreens) setIsMenuToggled(false);
  }, [isAboveSmallScreens]);
  const navbarBackground = isTopOfPage
    ? "bg-transparent"
    : "bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-glass";
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${navbarBackground} z-40 w-full fixed top-0 py-5 transition-all duration-500`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        {/* LOGO MONOGRAM */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative flex items-center justify-center w-10 h-10 cursor-pointer"
          onClick={() => {
            setSelectedPage("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-neon opacity-20 blur-md" />
          <div className="absolute inset-0 rounded-full border border-neon-blue/30" />
          <span className="relative font-playfair text-lg font-bold bg-gradient-neon bg-clip-text text-transparent z-10 leading-none">
            OM
          </span>
        </motion.div>
        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex items-center gap-8 font-opensans">
            {navLinks.map((page) => (
              <NavLink
                key={page}
                page={page}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
            {/* Resume CTA */}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="ml-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-neon text-white
                hover:shadow-glow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Resume ↗
            </a>
          </div>
        ) : (
          /* HAMBURGER */
          <button
            aria-label="Toggle mobile menu"
            className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg
              border border-white/10 bg-white/5 backdrop-blur-sm hover:border-neon-blue/40 transition-all duration-300 z-50"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <motion.span
              animate={
                isMenuToggled ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
              }
              className="block w-5 h-0.5 bg-white rounded-full origin-center"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={isMenuToggled ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-white rounded-full"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={
                isMenuToggled ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className="block w-5 h-0.5 bg-white rounded-full origin-center"
              transition={{ duration: 0.3 }}
            />
          </button>
        )}
      </div>
      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {!isAboveSmallScreens && isMenuToggled && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setIsMenuToggled(false)}
            />
            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-72 z-50 flex flex-col"
              style={{
                background: "rgba(5, 5, 20, 0.97)",
                borderLeft: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/6">
                <span className="font-playfair text-xl font-bold bg-gradient-neon bg-clip-text text-transparent">
                  Omkar Mondkar
                </span>
                <button
                  onClick={() => setIsMenuToggled(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10
                    hover:bg-neon-pink/20 hover:border-neon-pink/40 transition-all duration-200"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* Links */}
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                {navLinks.map((page, i) => {
                  const lowerPage = page.toLowerCase();
                  const isActive = selectedPage === lowerPage;
                  return (
                    <motion.button
                      key={page}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      onClick={() => {
                        setSelectedPage(lowerPage);
                        setIsMenuToggled(false);
                        document
                          .getElementById(lowerPage)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl font-opensans font-semibold text-base transition-all duration-200 cursor-pointer
                        ${
                          isActive
                            ? "bg-neon-blue/10 border border-neon-blue/30 text-neon-blue shadow-glow"
                            : "text-gray-300 hover:bg-white/5 hover:text-white border border-transparent"
                        }`}
                    >
                      {page}
                    </motion.button>
                  );
                })}
              </nav>
              {/* Footer area */}
              <div className="px-4 pb-8 flex flex-col gap-3">
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuToggled(false)}
                  className="w-full py-3 text-center font-semibold rounded-xl bg-gradient-neon text-white
                    hover:shadow-glow-lg transition-all duration-300 text-sm"
                >
                  Download Resume ↗
                </a>
                <p className="text-xs text-gray-500 text-center font-opensans">
                  Full Stack Developer · Navi Mumbai
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
export default Navbar;
