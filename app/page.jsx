import React from 'react'
import Navbar from '../components/Navbar'
import Craft from '../components/Craft'
import Destination from '../components/Destination'
import "./globals.css"

const page = () => {
  return (
    <div>
      <Navbar />
      <Craft />
      <Destination />
    </div>
  )
}

export default page