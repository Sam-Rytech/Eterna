import React from 'react'
import "../app/globals.css"

const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-between'>
        <div>
          <h1>Eterna</h1>
        </div>

        <div>
          <div className='burger'></div>
        </div>
        <div className='hidden'>
          <ul className=''>
            <li>Home</li>
            <li>About</li>
            <li>Destinations</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
