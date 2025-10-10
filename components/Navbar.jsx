'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './Hero'
import '../app/globals.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = (sectionId) => {
    setOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      const targetY = section.offsetTop
      const startY = window.pageYOffset
      const distance = targetY - startY
      const duration = 1000
      let startTime = null

      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)

      const animation = (currentTime) => {
        if (!startTime) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        const ease = easeInOutQuad(progress)
        window.scrollTo(0, startY + distance * ease)

        if (timeElapsed < duration) requestAnimationFrame(animation)
      }

      requestAnimationFrame(animation)
    }
  }


  return (
    <nav
      className="relative bg-[url('/Hero/Hero.png')] h-[110vh] bg-cover bg-center bg-no-repeat overflow-hidden scroll-smooth"
      id="home"
    >
      {/* Top bar */}
      <div className="flex justify-between items-center relative z-20">
        {/* Logo */}
        <h1
          className={`text-4xl h-30 flex items-center mx-15 transition-colors duration-500 ${
            open ? 'text-white' : 'text-[#0B1956]'
          }`}
        >
          Eterna
        </h1>

        {/* Burger Button */}
        <div
          onClick={() => setOpen(!open)}
          className="w-10 h-8 flex flex-col justify-between cursor-pointer group mx-15"
        >
          <span
            className={`h-[3px] w-full rounded-md transition-all duration-500 ${
              open
                ? 'rotate-45 translate-y-[11px] bg-white'
                : 'bg-[#0B1956] group-hover:bg-[#0B1956]/80'
            }`}
          ></span>
          <span
            className={`h-[3px] w-full rounded-md transition-all duration-300 ${
              open ? 'opacity-0' : 'bg-[#0B1956] group-hover:bg-[#0B1956]/80'
            }`}
          ></span>
          <span
            className={`h-[3px] w-full rounded-md transition-all duration-500 ${
              open
                ? '-rotate-45 -translate-y-[11px] bg-white'
                : 'bg-[#0B1956] group-hover:bg-[#0B1956]/80'
            }`}
          ></span>
        </div>
      </div>

      {/* Animated Slide-Down Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -100, opacity: 0, scaleY: 0.9 }}
            animate={{ y: 0, opacity: 1, scaleY: 1 }}
            exit={{ y: -100, opacity: 0, scaleY: 0.9 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-[110vh] bg-[#0B1956] text-white flex flex-col items-center justify-center space-y-8 z-10"
          >
            <ul className="text-3xl font-light space-y-6 text-center">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-gray-300 transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-gray-300 transition"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('destinations')}
                  className="hover:text-gray-300 transition"
                >
                  Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-gray-300 transition"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Border */}
      <div className="border-b-2 border-[#696969] w-[90%] m-auto relative z-20"></div>

      {/* Hero Section */}
      <Hero />
    </nav>
  )
}
