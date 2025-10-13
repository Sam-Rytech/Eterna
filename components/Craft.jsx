import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import React from 'react'

const Craft = () => {
  return (
    <section id='about'>
      <div className="text-7xl mx-15 my-15 text-[#0B1956]">
        <p className="">Crafted for</p>
        <p className="ml-[18.4%]">the few</p>
      </div>
      <div className="mx-15 flex gap-10">
        <div className="w-[322px] h-[408px] relative">
          {' '}
          <Image src={'/craft/craft.png'} alt='craft' fill className="object-cover" />{' '}
        </div>
        <div>
          <div className="w-[600px] text-lg leading-7 text-[#0B1956]">
            <p>
              For discerning travelers, the world is not a checklist — it’s a
              canvas. We handpick destinations, curate experiences, and design
              seamless escapes reserved only for those who demand the
              extraordinary. From the first call to the final destination, every
              detail is handled with discretion and care.
            </p>
          </div>
          <div>
            <button>
              <p className="flex gap-2 mt-5 items-center uppercase text-[#0B1956]">
                <span className="">
                  <ArrowDown className="border-2 p-1 w-7 h-7" />
                </span>
                View Destinations
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Craft
