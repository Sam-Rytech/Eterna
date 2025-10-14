'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const Book = () => {
  return (
    <section className="relative w-full mt-10 overflow-hidden">
      <div className="relative flex flex-col gap-10 md:gap-16 items-center justify-center min-h-[687px] text-center py-20">
        {/* Text */}
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#11143D]">
          What are you waiting for?
        </p>

        {/* Button */}
        <button className="flex items-center text-[#11143D] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide gap-2 sm:gap-3 hover:gap-5 transition-all duration-300">
          BOOK NOW{' '}
          <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </button>

        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/Book/book.png"
            alt="Tropical background"
            fill
            priority
            className="object-cover object-center md:object-bottom"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Book
