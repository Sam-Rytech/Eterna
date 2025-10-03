import React from 'react'
import "../app/globals.css"

const Navbar = () => {
  return (
    <nav className="bg-[url('../public/Hero/Hero.png')] h-[900px] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-between mb-10">
        <div className="h-20">
          <h1 className="text-[#0B1956] h-[100%] flex items-center mx-15 my-5 text-5xl">
            Eterna
          </h1>
        </div>

        <div>
          <div className="burger"></div>
        </div>
        <div className="hidden">
          <ul className="">
            <li>Home</li>
            <li>About</li>
            <li>Destinations</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="border-b-2 border-[#696969] w-[90%] m-auto"></div>
    </nav>
  )
}

export default Navbar
