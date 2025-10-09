'use client'

import Image from 'next/image'
import { ArrowRight, ArrowUp } from 'lucide-react'
import React from 'react'

const Book = () => {
  return (
    <section className="w-full mt-10">
      <div className="relative flex flex-col gap-20 items-center min-h-[687px] text-center">
        <p className="text-4xl mt-15 text-[#11143D]">
          What are you waiting for ?
        </p>
        <button className="flex items-center text-[#11143D] text-7xl font-semibold tracking-wide gap-3 hover:gap-5 transition-all">
          BOOK NOW <ArrowRight className="w-10 h-10" />
        </button>

        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/book/book.png"
            alt="Tropical background"
            fill
            className="object-cover object-bottom"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Book
