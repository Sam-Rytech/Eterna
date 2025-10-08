'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import '../app/globals.css'

const Destination = () => {
  const images = [
    {
      src: '/Escape/E1.png',
      alt: 'Image 1',
      width: 554,
      height: 434,
      location: 'Maldives',
    },
    {
      src: '/Escape/E2.png',
      alt: 'Image 2',
      width: 342,
      height: 262,
      location: 'Amalfi Coast',
    },
    {
      src: '/Escape/E3.png',
      alt: 'Image 3',
      width: 431,
      height: 325,
      location: 'Dubai',
    },
    {
      src: '/Escape/E4.png',
      alt: 'Image 4',
      width: 439,
      height: 250,
      location: 'Santorini',
    },
  ]

  const scrollRef = useRef(null)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e) => {
    setIsDown(true)
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }

  const handleMouseLeave = () => setIsDown(false)
  const handleMouseUp = () => setIsDown(false)

  const handleMouseMove = (e) => {
    if (!isDown || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <section>
      <div className="text-7xl text-center my-10 text-[#0B1956]">
        <p>Where Will You Escape To?</p>
      </div>

      <div
        ref={scrollRef}
        className="w-full overflow-x-scroll cursor-grab select-none no-scrollbar scrollbar-hide mx-10"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex items-end space-x-6 pb-6">
          {images.map((img, i) => (
            <div key={i} className="flex-shrink-0 text-center mr-15">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="object-cover border-gray-200 pointer-events-none"
              />
              <div className='flex items-start'>
                <p className="mt-2 capitalize text-gray-700">{img.location}</p>
              </div>
            </div>
          ))}

          <Link
            href="/gallery"
            className="flex-shrink-0 my-8 inline-flex items-center justify-center px-5 py-2 border border-gray-300 text-sm font-medium bg-white hover:bg-gray-100"
          >
            View All
            <span className="ml-2">
              <ArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Destination
