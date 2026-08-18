"use client"
import { useEffect, useState } from "react"

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(pct)
    }

    window.addEventListener("scroll", updateProgress, { passive: true })
    updateProgress()
    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <div
      className="scroll-progress-bar"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  )
}

export default ScrollProgress
