"use client"

import { useEffect, useState } from "react"
import LineGradient from "../src/components/LineGradient"
import ParticleBackground from "../src/components/ParticleBackground"
import Navbar from "../src/scenes/Navbar"
import useMediaQuery from "../src/hooks/useMediaQuery"
import DotGroup from "../src/scenes/DotGroup"
// import Testimonials from "../src/scenes/Testimonials"
import Landing from "../src/scenes/Landing"
import MySkills from "../src/scenes/MySkills"
import Projects from "../src/scenes/Projects"
import Contact from "../src/scenes/Contact"
import Footer from "../src/scenes/Footer"
import SEOHead from "../src/components/SEOHead"

export default function HomePage() {
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
        const sections = ["home", "skills", "projects", "contact"]
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
        
        {isAboveMediumScreen && <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}
        
        {/* LANDING SECTION */}
        <div className="w-5/6 mx-auto relative z-10">
          <Landing setSelectedPage={setSelectedPage} />
          <LineGradient />
        </div>
        
        {/* SKILLS SECTION */}
        <div className="w-5/6 mx-auto relative z-10">
          <MySkills />
          <LineGradient />
        </div>
        
        {/* PROJECTS SECTION */}
        <div className="w-5/6 mx-auto relative z-10">
          <Projects />
          <LineGradient />
        </div>
        
        {/* CONTACT SECTION */}
        <div className="w-5/6 mx-auto relative z-10">
          <Contact />
        </div>
        
        <Footer />
      </div>
    </>
  )
}