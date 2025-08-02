"use client"

import { useCallback } from "react"

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load particles engine
    console.log("Particles engine loaded")
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    // Optional callback when particles are loaded
    console.log("Particles loaded")
  }, [])

  // Simplified particle background using CSS animations instead of external library
  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        zIndex: -1,
        background: `
          radial-gradient(circle at 20% 80%, rgba(0, 245, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(255, 20, 147, 0.1) 0%, transparent 50%)
        `,
      }}
    >
      {/* Animated particles using CSS */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-30 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            backgroundColor: ["#00f5ff", "#8a2be2", "#ff1493", "#ffffff", "#fdcc49"][Math.floor(Math.random() * 5)],
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
    </div>
  )
}

export default ParticleBackground
