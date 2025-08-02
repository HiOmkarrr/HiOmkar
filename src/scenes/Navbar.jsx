"use client"

import { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery"

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase()
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-neon-blue shadow-glow" : "text-white"} 
                hover:text-neon-blue hover:shadow-glow transition-all duration-300 relative
                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                after:bg-gradient-neon after:transition-all after:duration-300
                hover:after:w-full
            `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
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
            <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        ) : (
          <button
            className="rounded-full bg-gradient-neon p-3 hover:shadow-glow-lg transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" className="w-5 h-5" />
          </button>
        )}

        {/* {MOBILE MENU} */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-glass-bg backdrop-blur-lg border-l border-glass-border w-[300px] shadow-glass">
            {/* {CLOSE ICON} */}
            <div className="flex justify-end p-12">
              <button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="p-2 rounded-full bg-gradient-neon hover:shadow-glow transition-all duration-300"
              >
                <img src="../assets/close-icon.svg" alt="close-icon" className="w-5 h-5" />
              </button>
            </div>
            {/* {MENU ITEMs} */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl">
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
