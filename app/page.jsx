import React from 'react'
import Navbar from '../components/Navbar'
import Craft from '../components/Craft'
import Destination from '../components/Destination'
import "./globals.css"
import Book from '@/components/Book'

const page = () => {
  return (
    <div>
      <Navbar />
      <Craft />
      <Destination />
      <Book/>
    </div>
  )
}

export default page