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
    <section className="relative w-full overflow-hidden" id='destinations'>
      {/* Heading */}
      <div className="text-6xl md:text-7xl text-center my-10 text-[#0B1956]">
        <p>Where Will You Escape To?</p>
      </div>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-scroll cursor-grab select-none no-scrollbar scrollbar-hide px-[5vw]"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex items-end pb-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 text-start mr-[60px] last:mr-0"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="object-cover pointer-events-none"
              />
              <p className="mt-2 capitalize text-gray-700">{img.location}</p>
            </div>
          ))}

          {/* View All button (scrolls with images) */}
          <Link
            href="/gallery"
            className="flex-shrink-0 inline-flex items-center justify-center px-6 py-2 border border-gray-300 text-base font-medium bg-white hover:bg-gray-100 shadow-md mr-[80px]"
          >
            VIEW ALL
            <span className="ml-2">
              <ArrowRight />
            </span>
          </Link>

          {/* End spacing (adds breathing room after button) */}
          <div className="flex-shrink-0 w-[10vw]" />
        </div>
      </div>
    </section>
  )
}

export default Destination
