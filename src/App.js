"use client"

import LineGradient from "./components/LineGradient"
import ParticleBackground from "./components/ParticleBackground"
import ScrollProgress from "./components/ScrollProgress"
import Navbar from "./scenes/Navbar"
import { useEffect, useState } from "react"
import useMediaQuery from "./hooks/useMediaQuery"
import DotGroup from "./scenes/DotGroup"
import Resume from "./scenes/Resume"
import Landing from "./scenes/Landing"
import MySkills from "./scenes/MySkills"
import Projects from "./scenes/Projects"
import Contact from "./scenes/Contact"
import Footer from "./scenes/Footer"
import SEOHead from "./components/SEOHead"
import MouseGlow from "./components/MouseGlow"

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
      }
    }

    window.addEventListener("scroll", handleScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedPage(entry.target.id)
          }
        })
      },
      { threshold: 0.5, rootMargin: "-100px 0px" }
    )
    
    const sections = ["home", "skills", "projects", "resume", "contact"]
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <SEOHead />
      <ScrollProgress />
      <div className="app animated-gradient relative min-h-screen">
        <MouseGlow />
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
          <Resume />
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
