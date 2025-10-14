'use client'

import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0C1A4B] text-white relative px-6 sm:px-10 md:px-20 pt-16 pb-8 overflow-hidden"
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <p className="italic text-white/80 text-3xl md:text-4xl">Eterna</p>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-sm md:text-base">
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Destinations</li>
          </ul>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Instagram</li>
            <li className="hover:underline cursor-pointer">Twitter</li>
            <li className="hover:underline cursor-pointer">LinkedIn</li>
          </ul>
        </div>
      </div>

      {/* Middle Section: Large Brand Name */}
      <div className="flex justify-center mt-16 mb-12">
        <h1 className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[180px] font-serif italic leading-none text-center text-white/10 select-none">
          ETERNA
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base opacity-70 gap-6">
        <p>&copy; {new Date().getFullYear()} Eterna. All rights reserved.</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 border border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#0C1A4B] transition"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="uppercase tracking-wide">Back to Top</span>
        </button>
      </div>
    </footer>
  )
}
