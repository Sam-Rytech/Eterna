'use client'

import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import React from 'react'

const Craft = () => {
  return (
    <section id="about" className="w-full px-4 md:px-10 lg:px-20 py-16">
      {/* Heading */}
      <div className="text-[#0B1956] mb-10">
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
          Crafted for
        </p>
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight md:ml-[18%]">
          the few
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        {/* Image */}
        <div className="relative w-full md:w-[322px] h-[300px] sm:h-[400px] md:h-[408px] flex-shrink-0">
          <Image
            src="/Craft/craft.png"
            alt="craft"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text + Button */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl leading-7 text-[#0B1956]">
            For discerning travelers, the world is not a checklist — it’s a
            canvas. We handpick destinations, curate experiences, and design
            seamless escapes reserved only for those who demand the
            extraordinary. From the first call to the final destination, every
            detail is handled with discretion and care.
          </p>

          <button className="mt-6 text-[#0B1956] uppercase flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base hover:gap-5 transition-all duration-300">
            <ArrowDown className="border-2 border-[#0B1956] p-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full" />
            View Destinations
          </button>
        </div>
      </div>
    </section>
  )
}

export default Craft
