import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[url("/Hero/Hero.png")] bg-cover bg-center h-[900px]'>
      <ul className="flex flex-end gap-5 justify-end">
        <li>Home</li>
        <li>About</li>
        <li>Destination</li>
        <li>Contact us</li>
      </ul>
    </div>
  )
}

export default Navbar
