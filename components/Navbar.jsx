import React from 'react'
import Hero from './Hero'
import "../app/globals.css"

const Navbar = () => {
  return (
    <nav className="bg-[url('../public/Hero/Hero.png')] h-[110vh] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-between">
        <div className="h-30">
          <h1 className="text-[#0B1956] h-30 flex items-center mx-15 text-4xl">
            Eterna
          </h1>
        </div>

        <div className='h-30 flex items-center'>
          <div className='h-100% mx-15 my-5'>
            <div className="burger"></div>
          </div>
          
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

      <Hero />
    </nav>
  )
}

export default Navbar
