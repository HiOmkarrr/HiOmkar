export const TechIcon = ({ name, className = "w-6 h-6", color }) => {
  switch (name.toLowerCase()) {
    // ── Languages ──
    case "c":
      return (
        <svg viewBox="0 0 128 128" className={className} fill="currentColor">
          <path d="M116.6 88.5c-7.7 13.3-22 22.3-38.6 22.3-24.3 0-44-19.7-44-44s19.7-44 44-44c16.6 0 30.9 9 38.6 22.3l14.3-8.3C121.2 18.2 101.4 6 78 6 42.1 6 13 35.1 13 71s29.1 65 65 65c23.4 0 43.2-12.2 52.9-30.8l-14.3-6.7z" />
        </svg>
      )
    case "c++":
      return (
        <svg viewBox="0 0 128 128" className={className} fill="currentColor">
          <path d="M116.6 88.5c-7.7 13.3-22 22.3-38.6 22.3-24.3 0-44-19.7-44-44s19.7-44 44-44c16.6 0 30.9 9 38.6 22.3l14.3-8.3C121.2 18.2 101.4 6 78 6 42.1 6 13 35.1 13 71s29.1 65 65 65c23.4 0 43.2-12.2 52.9-30.8l-14.3-6.7z" />
          <path d="M96 61h-6v-6h-6v6h-6v6h6v6h6v-6h6v-6zm24 0h-6v-6h-6v6h-6v6h6v6h6v-6h6v-6z" />
        </svg>
      )
    case "java":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      )
    case "go":
      return (
        <svg viewBox="0 0 128 128" className={className} fill="currentColor">
          <path d="M30.7 48.2c-7.3 0-13.6 2.3-18.4 6.7-5.1 4.7-7.8 11.2-7.8 18.7 0 7.4 2.6 13.9 7.7 18.7 4.9 4.6 11.4 7 19.1 7 5.6 0 10.5-1.3 14.8-3.8 4.3-2.6 7.4-6.3 9.4-11H37.8v-9.3h30.8c.3 1.9.4 3.6.4 5.3 0 10.4-3.5 18.8-10.4 24.6-6.6 5.5-15.3 8.3-25.5 8.3-10.8 0-19.8-3.4-26.6-10.1C-.3 86.8-3.4 78.4-3.4 68.3c0-9.8 3.3-18.1 9.9-24.8 6.7-6.8 15.5-10.3 26.2-10.3 9.4 0 17.5 2.8 23.8 8.4l-7.7 7.7c-4.4-4.1-10.2-6.1-18.1-6.1zm59.2 0c-10.7 0-19.6 3.5-26.2 10.3-6.6 6.7-9.9 15-9.9 24.8 0 10 3.3 18.5 9.9 25.1 6.6 6.7 15.5 10.1 26.2 10.1s19.6-3.4 26.2-10.1c6.6-6.7 10-15.1 10-25.1 0-9.8-3.4-18.1-10-24.8-6.6-6.8-15.5-10.3-26.2-10.3zm0 9.8c7.5 0 13.5 2.4 18.1 7.2 4.4 4.6 6.7 10.5 6.7 17.8s-2.3 13.2-6.7 17.9c-4.5 4.8-10.6 7.2-18.1 7.2s-13.6-2.4-18.1-7.2c-4.5-4.7-6.8-10.6-6.8-17.9 0-7.3 2.3-13.2 6.8-17.8 4.5-4.8 10.6-7.2 18.1-7.2z" />
        </svg>
      )
    case "rust":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V15h-2v1.93a8.03 8.03 0 0 1-3.47-1.44l1.37-1.37-1.42-1.42-1.37 1.37A8.03 8.03 0 0 1 4.67 11H6.6V9H4.67a8.03 8.03 0 0 1 1.44-3.47l1.37 1.37 1.42-1.42-1.37-1.37A8.03 8.03 0 0 1 11 2.67V4.6h2V2.67a8.03 8.03 0 0 1 3.47 1.44l-1.37 1.37 1.42 1.42 1.37-1.37A8.03 8.03 0 0 1 19.33 9H17.4v2h1.93a8.03 8.03 0 0 1-1.44 3.47l-1.37-1.37-1.42 1.42 1.37 1.37A8.03 8.03 0 0 1 13 16.93zM9.5 8h3a2.5 2.5 0 0 1 1.8 4.2L12.5 14H10v2H8V8h1.5zm1.5 2v2h1.5a1 1 0 0 0 0-2H11z" />
        </svg>
      )
    case "php":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-5.5 13H5l1.5-6h2.5c1.4 0 2.2.7 2 2-.3 1.6-1.5 2.5-2.8 2.5H7l-.5 1.5zm1.6-3h1c.6 0 1.1-.3 1.2-.9.1-.5-.2-.9-.8-.9H8.6l-.5 1.8zm5.9 3H12.5l1.5-6h1.5l-.6 2.2h1.8c1.4 0 2.2.7 2 2-.3 1.6-1.5 2.5-2.8 2.5h-1.4l-.5 1.3zm1.6-3h1c.6 0 1.1-.3 1.2-.9.1-.5-.2-.9-.8-.9h-1l-.4 1.8z" />
        </svg>
      )
    case "sql":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      )
    case "javascript":
    case "js":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M3 3h18v18H3V3zm11.5 13.5c1.2 0 2-.6 2.3-1.4l-1.6-.9c-.2.4-.4.7-.8.7-.5 0-.8-.3-.8-.9v-4.5h-2v4.6c0 1.9 1.1 3 2.9 3zm-6-1.1c.5.7 1.2 1.1 2.2 1.1 1.2 0 2-.6 2-1.6 0-1.1-.8-1.5-1.9-1.9l-.6-.2c-.7-.3-1.1-.6-1.1-1.1 0-.6.5-1 1.3-1 .8 0 1.3.3 1.7.9l1.4-1c-.7-1.1-1.7-1.5-3-1.5-1.9 0-3.1 1.1-3.1 2.7 0 1.1.7 1.8 1.8 2.2l.6.2c.8.3 1.3.6 1.3 1.2 0 .7-.6 1.1-1.5 1.1-.9 0-1.5-.4-1.9-1.1l-1.3 1.1z" />
        </svg>
      )
    case "typescript":
    case "ts":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M3 3h18v18H3V3zm7.5 7.5H6V9h5v1.5H8.5V17H7v-6.5zm4.8 6.5c1.2 0 2.2-.6 2.6-1.5l-1.5-.9c-.3.5-.6.8-1.1.8-.6 0-1-.3-1-.8 0-.6.4-.8 1.4-1.2l.7-.3c1.4-.5 2.1-1.2 2.1-2.4 0-1.6-1.3-2.6-3.1-2.6-1.6 0-2.8.8-3.3 2l1.4.9c.3-.6.7-.9 1.5-.9.7 0 1.2.4 1.2.9 0 .5-.3.7-1.1 1l-.8.3c-1.6.6-2.2 1.4-2.2 2.5 0 1.6 1.3 2.8 3.2 2.8z" />
        </svg>
      )
    case "python":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M11.9 2c-3.6 0-5.9 1.6-5.9 4.6v2.4h6v.8H3.8C2.3 9.8 1 11.2 1 13.4c0 2.4 1.4 3.7 3.5 3.7h1.9v-2.6c0-2.5 2.1-4.7 4.7-4.7h4.8v-.9c0-2.8-2.4-4.9-5-4.9h1zm-1.8 1.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zm2 18.4c3.6 0 5.9-1.6 5.9-4.6V15h-6v-.8h8.2c1.5 0 2.8-1.4 2.8-3.6 0-2.4-1.4-3.7-3.5-3.7h-1.9v2.6c0 2.5-2.1 4.7-4.7 4.7H9.9v.9c0 2.8 2.4 4.9 5 4.9h-1zm1.8-1.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
        </svg>
      )

    // ── Web ──
    case "react.js":
    case "react":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        </svg>
      )
    case "next.js":
    case "nextjs":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.66 17.525l-6.285-8.115v8.115H9.5V6.475h2.15l6.46 8.35v-8.35h1.875v11.05h-2.325z" />
        </svg>
      )
    case "node.js":
    case "nodejs":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2L2 7.8v11.4L12 25l10-5.8V7.8L12 2zm0 2.4l7.6 4.4v8.8L12 22l-7.6-4.4V8.8L12 4.4z" />
          <path d="M12 8.5l-4 2.3v4.6l4 2.3 4-2.3v-4.6L12 8.5z" />
        </svg>
      )
    case "express.js":
    case "express":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M22 6l-6 12h-2.5l2.8-5.6H9.2l-.7 2.1H6l3.5-8.5H12L9.8 11h6.6L20 6H22zM2 18l3.5-8.5H8L4.5 18H2z" />
        </svg>
      )
    case "tailwind css":
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 6c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.28 1.96 1.11 2.86 2.03C14.07 13.26 15.82 15 20 15c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.28-1.96-1.11-2.86-2.03C17.93 7.74 16.18 6 12 6zm-8 6c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.28 1.96 1.11 2.86 2.03C5.07 19.26 6.82 21 11 21c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.28-1.96-1.11-2.86-2.03C8.93 13.74 7.18 12 3 12z" />
        </svg>
      )
    case "html5/css3":
    case "html/css":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M2.5 3h19l-1.7 15.3-7.8 2.2-7.8-2.2L2.5 3zm15.6 4.3H5.9l.4 3.7h9.4l-.4 3.9-3.3.9-3.3-.9-.2-2.1H6.3l.4 3.8 5.3 1.5 5.3-1.5.8-8.8z" />
        </svg>
      )

    // ── Mobile ──
    case "flutter":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M14.3 2.5L5.7 11.1l3.5 3.5 12.1-12.1h-7zm0 10.3l-5.1 5.1 5.1 5.1h7l-5.1-5.1 5.1-5.1h-7z" />
        </svg>
      )
    case "react native":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <circle cx="12" cy="18" r="1" fill="currentColor" />
          <path d="M9 6h6" />
        </svg>
      )
    case "expo":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M2 19.5L10.5 4.5h3L22 19.5h-3.5L12 7.8l-6.5 11.7H2z" />
        </svg>
      )
    case "pwa":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    case "android":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.72 1.23 12.89 1 12 1c-.89 0-1.72.23-2.64.63L7.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C6.73 3.32 5.5 5.01 5.5 7h13c0-1.99-1.23-3.68-2.97-4.84zM9 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
      )

    // ── AI/ML, GenAI & Retrieval Architecture ──
    case "rag":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6 6h10" />
          <path d="M6 10h10" />
          <circle cx="16" cy="16" r="3" />
          <path d="m18.5 18.5 2.5 2.5" />
        </svg>
      )
    case "crag":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    case "mmr":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <path d="M3 7l3-3 3 3" />
          <path d="M15 15l3-3 3 3" />
        </svg>
      )
    case "hybrid embeddings":
    case "hybrid":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="9" r="6" />
          <circle cx="15" cy="15" r="6" />
          <path d="M12 9v6" />
          <path d="M9 12h6" />
        </svg>
      )
    case "hyde":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 13h6" strokeDasharray="2 2" />
          <path d="M9 17h4" strokeDasharray="2 2" />
          <circle cx="12" cy="15" r="4" fill="currentColor" fillOpacity="0.15" />
        </svg>
      )
    case "scikit-learn":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="12" cy="18" r="3" />
          <line x1="6" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="1.5" />
          <line x1="6" y1="6" x2="12" y2="18" stroke="currentColor" strokeWidth="1.5" />
          <line x1="18" y1="6" x2="12" y2="18" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case "tensorflow":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2L3 7v10l4 2.3V10.8l5-2.8v13.5l4-2.3V5.7l5 2.8V17l4-2.3V7L12 2z" />
        </svg>
      )
    case "pandas":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <circle cx="6.5" cy="6.5" r="1.5" fill="#000" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="#000" />
        </svg>
      )
    case "numpy":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M4 4h4v16H4V4zm6 0h4l6 12V4h4v16h-4L10 8v12h-4V4h4z" />
        </svg>
      )
    case "spacy/nltk":
    case "nlp":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5v2.5h3a4 4 0 0 1 4 4v4H3v-4a4 4 0 0 1 4-4h3v-2.5C8.8 8.8 8 7.5 8 6a4 4 0 0 1 4-4z" />
          <circle cx="12" cy="6" r="1" fill="currentColor" />
          <line x1="8" y1="16" x2="8" y2="16.01" />
          <line x1="16" y1="16" x2="16" y2="16.01" />
        </svg>
      )

    // ── Tools & Databases ──
    case "git":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.7 4.7l2.8 2.8c.6-.2 1.3 0 1.7.5.5.5.6 1.2.4 1.8l2.7 2.7c.6-.2 1.3 0 1.8.4.8.8.8 2 0 2.8s-2 .8-2.8 0c-.5-.5-.6-1.3-.4-1.8L12.2 11v4.8c.4.3.7.8.7 1.4 0 1.1-.9 2-2 2s-2-.9-2-2c0-.6.3-1.1.7-1.4V10.8c-.4-.3-.7-.8-.7-1.4 0-.6.3-1.1.7-1.4L6.6 5.3 2.4 9.5c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.5-8.5c.7-.6.7-1.5.1-2.2z" />
        </svg>
      )
    case "docker":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M22.5 10.5c-.4-.3-1.4-.4-2.2.1-.2-.8-.8-1.5-1.7-1.9l-.5-.2-.3.5c-.4.7-.4 1.5-.2 2.2-.5.3-1.2.4-2.1.2l-.3-.1-.1.3c-.3 1.2.2 2.2 1 2.8-1.4 2.8-4.5 4.3-8.4 4.3-1.9 0-3.6-.4-4.9-1.2-1.3-.8-2-2-2.1-3.6h17.9c.4 0 .7-.3.7-.7 0-1-.3-1.9-.9-2.4zm-14-6H6v2.5h2.5V4.5zm3.5 0H9.5v2.5H12V4.5zm3.5 0H13v2.5h2.5V4.5zm-7 3.5H6v2.5h2.5V8zm3.5 0H9.5v2.5H12V8zm3.5 0H13v2.5h2.5V8zm3.5 0h-2.5v2.5H19V8z" />
        </svg>
      )
    case "firebase":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M4.5 17.5L7.2 2.8c.1-.4.6-.5.8-.2l3.4 6.3-6.9 8.6zm14.6-.3l-2.1-13c-.1-.4-.6-.5-.8-.2l-9.8 12.1 12.7 1.1zm-8.8-4.9l-2.1-4c-.1-.3-.6-.3-.7 0L3.3 17.3l7-4.5zm1.2 9.2c.6.4 1.4.4 2 0l7.3-4.2-10-1.2 7.7 5.4z" />
        </svg>
      )
    case "supabase":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12.5 1.5L2.8 13.8c-.4.5-.1 1.2.5 1.2h8.2v7.5c0 .6.8.9 1.2.4l9.7-12.3c.4-.5.1-1.2-.5-1.2h-8.2V1.9c0-.6-.8-.9-1.2-.4z" />
        </svg>
      )
    case "mongodb":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 1.5s-6 5.5-6 11.2c0 4.2 3.1 7.8 6 9.8 2.9-2 6-5.6 6-9.8 0-5.7-6-11.2-6-11.2zm.3 18.5c-.2 0-.3-.1-.3-.2V3.4c.1 0 .2.1.3.2 1.4 1.4 4.5 5.5 4.5 9.1 0 3.3-2.2 6.1-4.5 7.3z" />
        </svg>
      )
    case "postgresql":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      )
    case "n8n":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="9" y1="6" x2="15" y2="6" />
          <line x1="18" y1="9" x2="18" y2="15" />
          <line x1="6" y1="9" x2="6" y2="15" />
          <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
        </svg>
      )
    case "powerbi":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <rect x="3" y="12" width="4" height="9" rx="1" />
          <rect x="10" y="7" width="4" height="14" rx="1" />
          <rect x="17" y="3" width="4" height="18" rx="1" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
  }
}
