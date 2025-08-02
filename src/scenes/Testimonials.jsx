"use client"

import LineGradient from "../components/LineGradient"
import { motion } from "framer-motion"

const Testimonials = () => {
  const testimonialStyles = `mx-auto relative max-w-[350px] sm:max-w-[400px] h-[300px] sm:h-[350px] flex flex-col justify-end p-4 sm:p-6 lg:p-8 mt-20 sm:mt-32 lg:mt-48 before:absolute before:top-[-80px] sm:before:top-[-120px] before:-ml-[70px] sm:before:-ml-[110px] before:left-1/2 glass-card rounded-lg hover:shadow-glow transition-all duration-300`

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left px-4 sm:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-5">
          <span className="bg-gradient-neon bg-clip-text text-transparent">TESTI</span>
          <span className="text-white">MONIALS</span>
        </p>
        <LineGradient width="mx-auto md:mx-0 w-2/4" />
        <p className="mt-8 sm:mt-10 text-gray-300 leading-relaxed text-sm sm:text-base">
          What clients and colleagues say about working with me and the results we've achieved together.
        </p>
      </motion.div>
      {/* TESTIMONIALS */}
      <div className="flex flex-col md:flex-row md:justify-between gap-6 sm:gap-8 px-4 sm:px-0">
        <motion.div
          className={`bg-gradient-neon ${testimonialStyles} before:content-person1`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-white">"</p>
          <p className="text-center text-sm sm:text-lg lg:text-xl text-white">
            Outstanding developer with exceptional skills and creativity.
          </p>
        </motion.div>
        <motion.div
          className={`bg-red ${testimonialStyles} before:content-person2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">"</p>
          <p className="text-center text-xl">Lorem ipsum dolor sit amet.</p>
        </motion.div>
        <motion.div
          className={`bg-yellow ${testimonialStyles} before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">"</p>
          <p className="text-center text-xl">Lorem ipsum dolor sit amet.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
