"use client"

import SocialMediaIcons from "../components/SocialMediaIcons"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-8 sm:gap-12 lg:gap-16 py-12 sm:py-16 lg:py-20 px-4 sm:px-0 min-h-screen md:min-h-0"
    >
      {/* IMAGE */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-8 sm:mt-22 lg:mt-16 md:mt-48">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-8 sm:ml-12 lg:ml-20 before:absolute before:-top-10 sm:before:-top-15 lg:before:-top-20 before:-left-10 sm:before:-left-15 lg:before:-left-20
				before:rounded-t-[300px] sm:before:rounded-t-[350px] lg:before:rounded-t-[400px] before:w-full before:max-w-[300px] sm:before:max-w-[350px] lg:before:max-w-[400px] before:h-full
				before:border-2 before:border-neon-blue before:shadow-glow before:z-[-1]"
          >
            <img
              src="assets/profile-image2.jpg"
              className="hover:filter hover:saturate-200 hover:shadow-glow-lg transition-all duration-500 z-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] rounded-t-[300px] sm:rounded-t-[350px] lg:rounded-t-[400px] border-2 border-glass-border"
              alt="Full Stack Developer Profile Picture"
            />
          </div>
        ) : (
          <img
            src="assets/profile-image2.jpg"
            className="hover:filter hover:saturate-200 hover:shadow-glow transition-all duration-500 z-10 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] rounded-lg border-2 border-glass-border"
            alt="Full Stack Developer Profile Picture"
          />
        )}
      </div>
      {/* MAIN */}
      <div className="z-30 basis-2/5 mt-8 sm:mt-12 lg:mt-16 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair z-10 text-center md:text-start mb-4 sm:mb-6">
            <span className="bg-gradient-neon bg-clip-text text-transparent">Omkar</span> {""}
            <span className="xs:relative xs:text-neon-blue xs:font-semibold z-20  before:absolute before:-left-[15px] sm:before:-left-[20px] lg:before:-left-[25px] before:-top-[50px] sm:before:-top-[60px] lg:before:-top-[70px] before:z-[-1] hover:text-neon-pink transition-colors duration-300">
              Mondkar
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-opensans text-center md:text-start mb-4 text-neon-blue">
            Full Stack Developer & Software Engineer
          </h2>
          <p className="mt-6 sm:mt-8 lg:mt-10 mb-6 sm:mb-7 text-sm sm:text-base text-center md:text-start text-gray-300 leading-relaxed">
            Hi, I'm a passionate Full-Stack Developer with 5+ years of experience
            crafting innovative digital experiences with modern technologies. I specialize in <strong>React</strong>,{" "}
            <strong>Node.js</strong>, <strong>Python</strong>, and cloud solutions that bring ideas to life. Let's build
            something amazing together!
          </p>
        </motion.div>
        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex flex-col sm:flex-row mt-4 sm:mt-5 justify-center md:justify-start gap-3 sm:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-neon text-white rounded-lg py-3 px-6 sm:px-7 font-semibold text-sm sm:text-base
              hover:shadow-glow-lg hover:scale-105 transition-all duration-300 transform text-center"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
            aria-label="Contact me for project inquiries"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-lg bg-glass-bg backdrop-blur-sm border border-glass-border py-0.5 pr-0.5 hover:shadow-glow transition-all duration-300"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
            aria-label="Get in touch with me"
          >
            <div className="bg-glass-bg backdrop-blur-sm hover:text-neon-blue transition-all duration-300 w-full h-full flex items-center justify-center px-6 py-3 sm:px-10 font-playfair rounded-lg text-sm sm:text-base">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-4 sm:mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  )
}

export default Landing
