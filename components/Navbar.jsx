import React from 'react'
import '@/app/globals.css'

const Navbar = () => {
  return (
    <nav className='bg-[url("/Hero/Hero.png")] bg-cover bg-center h-[900px] bg-no-repeat'>
      <div>
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
        <ul className="flex flex-end gap-5 justify-end w-[100%] list-none items-center sidebar">
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
