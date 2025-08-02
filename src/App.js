"use client"

import LineGradient from "./components/LineGradient"
import ParticleBackground from "./components/ParticleBackground"
import Navbar from "./scenes/Navbar"
import { useEffect, useState } from "react"
import useMediaQuery from "./hooks/useMediaQuery"
import DotGroup from "./scenes/DotGroup"
import Testimonials from "./scenes/Testimonials"
import Landing from "./scenes/Landing"
import MySkills from "./scenes/MySkills"
import Projects from "./scenes/Projects"
import Contact from "./scenes/Contact"
import Footer from "./scenes/Footer"
import SEOHead from "./components/SEOHead"

function App() {
  const [selectedPage, setSelectedPage] = useState("home")
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage("home")
      } else {
        setIsTopOfPage(false)

        // Get all sections
        const sections = ["home", "skills", "projects", "testimonials", "contact"]
        const scrollPosition = window.scrollY + 100

        // Find current section based on scroll position
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i])
          if (section && section.offsetTop <= scrollPosition) {
            setSelectedPage(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <SEOHead />
      <div className="app bg-gradient-to-br from-modern-dark via-deep-blue to-modern-darker relative min-h-screen">
        <ParticleBackground />
        <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <div className="w-5/6 mx-auto md:h-full relative z-10">
          {isAboveMediumScreen && <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}
          <Landing setSelectedPage={setSelectedPage} />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full relative z-10">
          <MySkills />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto relative z-10">
          <Projects />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full relative z-10">
          <Testimonials />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full relative z-10">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
