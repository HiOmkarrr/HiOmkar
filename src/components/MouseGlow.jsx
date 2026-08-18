"use client"
import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export default function MouseGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isVisible, setIsVisible] = useState(false)

  // Spring configuration for smooth follow
  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 400) // center the glow (800x800 size)
      mouseY.set(e.clientY - 400)
      if (!isVisible) setIsVisible(true)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY, isVisible])

  return (
    <motion.div
      style={{
        x,
        y,
        opacity: isVisible ? 1 : 0,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, rgba(0, 0, 0, 0) 60%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 5,
        transition: 'opacity 0.5s ease',
      }}
    />
  )
}
