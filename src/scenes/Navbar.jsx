"use client"

import { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery"

const Link = ({ page, selectedPage, setSelectedPage, setIsMenuToggled }) => {
  const lowerCasePage = page.toLowerCase()
  
  const handleClick = (e) => {
    e.preventDefault()
    setSelectedPage(lowerCasePage)
    // Close mobile menu if it's open
    if (setIsMenuToggled) {
      setIsMenuToggled(false)
    }
    const element = document.getElementById(lowerCasePage)
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start",
        inline: "nearest"
      })
    }
  }
  
  return (
    <button
      className={`${selectedPage === lowerCasePage ? "text-neon-blue shadow-glow" : "text-white"} 
                ${setIsMenuToggled ? "bg-gray-800/80 w-full p-4 rounded-lg backdrop-blur-sm" : ""} 
                ${setIsMenuToggled && selectedPage === lowerCasePage ? "bg-blue-900/80" : ""}
                hover:text-neon-blue hover:shadow-glow transition-all duration-300 relative
                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                after:bg-gradient-neon after:transition-all after:duration-300
                hover:after:w-full cursor-pointer text-left
                ${setIsMenuToggled ? "hover:bg-blue-900/80" : ""}
            `}
      onClick={handleClick}
    >
      {page}
    </button>
  )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
  const navbarBackground = isTopOfPage
    ? "bg-glass-bg backdrop-blur-md border-b border-glass-border"
    : "bg-glass-bg backdrop-blur-lg border-b border-glass-border shadow-glass"
  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6 transition-all duration-300`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent">OM</h4>

        {/* {DESKTOP NAV} */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            {/* <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} /> */}
            <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        ) : (
          <button
            className="rounded-full bg-gradient-neon p-3 hover:shadow-glow-lg transition-all duration-300 transform hover:scale-110 z-50"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <svg 
              className="w-5 h-5 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuToggled ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        )}

        {/* {MOBILE MENU} */}
        {!isAboveSmallScreens && isMenuToggled && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/80 z-40"
              onClick={() => setIsMenuToggled(false)}
            />
            {/* Menu */}
            <div className="fixed top-0 right-0 h-full bg-slate-900/95 backdrop-blur-lg border-l border-slate-700 w-[320px] shadow-2xl z-50">
              {/* {CLOSE BUTTON} */}
              <div className="flex justify-between items-center p-6 border-b border-slate-700/50">
                <h3 className="text-white font-playfair text-xl font-bold">Menu</h3>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsMenuToggled(false)
                  }}
                  className="p-3 rounded-full bg-red-500 hover:bg-red-600 transition-all duration-300 shadow-lg z-50 flex items-center justify-center"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {/* {MENU ITEMS} */}
              <div className="flex flex-col gap-4 p-6 font-opensans text-lg font-semibold">
                <Link 
                  page="Home" 
                  selectedPage={selectedPage} 
                  setSelectedPage={setSelectedPage} 
                  setIsMenuToggled={setIsMenuToggled}
                />
                <Link 
                  page="Skills" 
                  selectedPage={selectedPage} 
                  setSelectedPage={setSelectedPage} 
                  setIsMenuToggled={setIsMenuToggled}
                />
                <Link 
                  page="Projects" 
                  selectedPage={selectedPage} 
                  setSelectedPage={setSelectedPage} 
                  setIsMenuToggled={setIsMenuToggled}
                />
                <Link 
                  page="Contact" 
                  selectedPage={selectedPage} 
                  setSelectedPage={setSelectedPage} 
                  setIsMenuToggled={setIsMenuToggled}
                />
              </div>
              {/* Footer info */}
              <div className="absolute bottom-6 left-6 right-6 text-center border-t border-slate-700/50 pt-6 bg-slate-800/80 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-sm text-slate-300 font-semibold">Full Stack Developer</p>
                <p className="text-xs text-slate-400 mt-1">React • Node.js • Python</p>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
