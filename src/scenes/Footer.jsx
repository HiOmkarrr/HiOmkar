import SocialMediaIcons from "../components/SocialMediaIcons"

const Footer = () => {
  return (
    <footer className="bg-red pt-6 pb-4 sm:pt-10 sm:pb-6">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center sm:text-left mt-4 sm:mt-6 gap-2 sm:gap-4">
          <p className="font-playfair font-semibold text-lg sm:text-xl md:text-2xl text-yellow">OMKAR MONDKAR</p>
          <p className="font-playfair text-xs sm:text-sm md:text-base text-yellow">&copy; 2024 Omkar Mondkar. All Rights Reserved</p>
        </div>
        <div className="text-center mt-3 sm:mt-4">
          <p className="text-xs sm:text-sm text-yellow opacity-80 px-4">
            Full Stack Developer • React • Node.js • Python • Cloud Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
