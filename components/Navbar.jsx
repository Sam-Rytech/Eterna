'use client'
import { useState } from 'react'
import MobileNav from './MobileNav'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-6 z-20">
        <h1 className="font-serif text-xl text-white">Eterna</h1>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="hidden md:flex gap-8 text-white">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Destinations</a>
          <a href="#">Contact Us</a>
        </div>
      </nav>

      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
