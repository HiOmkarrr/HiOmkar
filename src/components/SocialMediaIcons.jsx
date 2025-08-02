const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:scale-110 hover:shadow-glow transition-all duration-300 p-2 rounded-full bg-glass-bg backdrop-blur-sm border border-glass-border"
        href="https://www.linkedin.com/in/omkar-mondkar-83aa86255/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" className="w-6 h-6" />
      </a>
      <a
        className="hover:scale-110 hover:shadow-glow transition-all duration-300 p-2 rounded-full bg-glass-bg backdrop-blur-sm border border-glass-border"
        href="https://github.com/HiOmkarrr/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter" src="../assets/github.png" className="w-6 h-6" />
      </a>
      <a
        className="hover:scale-110 hover:shadow-glow transition-all duration-300 p-2 rounded-full bg-glass-bg backdrop-blur-sm border border-glass-border"
        href="https://medium.com/@omkarmondkar18"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/medium.png" className="w-6 h-6" />
      </a>
      {/* <a
        className="hover:scale-110 hover:shadow-glow transition-all duration-300 p-2 rounded-full bg-glass-bg backdrop-blur-sm border border-glass-border"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" className="w-6 h-6" />
      </a> */}
    </div>
  )
}

export default SocialMediaIcons
