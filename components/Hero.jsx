import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col justify-between h-[90vh]">
        <div className="text-center my-20">
          <h1 className="text-[#0B1956] text-7xl font-bold mb-5">
            Escape. Indulge. Arrive.
          </h1>
        </div>
        <div className="text-white">
          <div className="text-2xl mx-15">
            Where every destination <br /> feels like a private masterpiece
          </div>
          <div className='mt-5 mx-15'>
            <button className='flex gap-2 border-2 px-2 py-1 uppercase'>
              Discover Now
              <span>
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
