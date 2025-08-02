"use client"

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-neon-blue shadow-glow scale-125 before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-neon-blue before:left-[-50%] before:top-[-50%] before:shadow-glow before:animate-pulse`
  const unselectedStyles = `bg-glass-bg border border-glass-border hover:bg-neon-blue hover:shadow-glow hover:scale-110`

  const sections = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  const handleDotClick = (sectionId) => {
    setSelectedPage(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start",
        inline: "nearest"
      })
    }
  }

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7 z-50">
      {sections.map((section) => (
        <div key={section.id} className="relative group">
          <button
            className={`${selectedPage === section.id ? selectedStyles : unselectedStyles} 
                        w-3 h-3 rounded-full transition-all duration-300 block cursor-pointer`}
            onClick={() => handleDotClick(section.id)}
          />
          {/* Tooltip */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-glass-bg backdrop-blur-sm border border-glass-border px-3 py-1 rounded-lg text-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-glow">
            {section.label}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-glass-bg border-l border-b border-glass-border rotate-45"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DotGroup
