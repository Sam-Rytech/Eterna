'use client'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0C1A4B] text-white relative px-6 md:px-20 pt-16 pb-8 overflow-hidden" id='contact'>
      {/* Top Section: Small Eterna + Links */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <p className="italic text-white/80 text-3xl">Eterna</p>

        <div className="flex gap-16 text-sm md:text-base">
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

      {/* Middle Section: Big ETERNA */}
      <div className="flex mt-16 mb-12">
        <h1 className="text-[100px] sm:text-[140px] md:text-[180px] font-serif italic leading-none text-center">
          Eterna
        </h1>
      </div>

      {/* Bottom Section: Copyright + Back to Top */}
      <div className="flex justify-between items-center text-xl opacity-70">
        <p>&copy; Eterna</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 border border-white px-4 py-2 rounded-sm hover:bg-white hover:text-[#0C1A4B] transition"
        >
          <ArrowUp className="w-4 h-4" /> BACK TO TOP
        </button>
      </div>
    </footer>
  )
}
