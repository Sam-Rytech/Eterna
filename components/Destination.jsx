'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Destination = () => {
  const images = [
    { src: '/Escape/E1.png', alt: 'Maldives', location: 'Maldives' },
    { src: '/Escape/E2.png', alt: 'Amalfi Coast', location: 'Amalfi Coast' },
    { src: '/Escape/E3.png', alt: 'Dubai', location: 'Dubai' },
    { src: '/Escape/E4.png', alt: 'Santorini', location: 'Santorini' },
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
    <section
      id="destinations"
      className="relative w-full overflow-hidden py-16"
    >
      {/* Heading */}
      <div className="text-center text-[#0B1956] mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
          Where Will You Escape To?
        </h2>
      </div>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-scroll no-scrollbar select-none cursor-grab active:cursor-grabbing px-6 sm:px-10 md:px-14 lg:px-[5vw]"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex items-end gap-8 md:gap-12 pb-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 text-start w-[70vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw]"
            >
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover pointer-events-none"
                />
              </div>
              <p className="mt-3 text-lg md:text-xl text-gray-700 capitalize">
                {img.location}
              </p>
            </div>
          ))}

          {/* View All button */}
          <Link
            href="/gallery"
            className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-sm md:text-base font-medium text-[#0B1956] bg-white hover:bg-gray-100 shadow-md whitespace-nowrap"
          >
            VIEW ALL
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

          {/* End spacing */}
          <div className="flex-shrink-0 w-[10vw]" />
        </div>
      </div>
    </section>
  )
}

export default Destination
