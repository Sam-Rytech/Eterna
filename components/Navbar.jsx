'use client'

import React from 'react'
import '@/app/globals.css'
import { useState } from 'react'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <nav className='bg-[url("/Hero/Hero.png")] bg-cover bg-center h-[900px] bg-no-repeat'>
      <div>
        {/* Main Navbar */}
        <ul className="flex flex-end gap-5 justify-end w-[100%] list-none items-center">
          <li className="Nav-li">
            <a>Home</a>
          </li>
          <li className="Nav-li">
            <a>About</a>
          </li>
          <li className="Nav-li">
            <a>Destination</a>
          </li>
          <li className="Nav-li">
            <a>Contact us</a>
          </li>
        </ul>

        {/* Side Navbar */}
        <ul className="flex flex-end gap-5 justify-end w-[100%] list-none items-center">
          <li className="Nav-li">
            <a>Home</a>
          </li>
          <li className="Nav-li">
            <a>About</a>
          </li>
          <li className="Nav-li">
            <a>Destination</a>
          </li>
          <li className="Nav-li">
            <a>Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
