'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onFinish }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    // Sequence for 4 images
    const sequence = [
      () => setStep(1),
      () => setStep(2),
      () => setStep(3),
      () => setStep(4),
    ]

    let delay = 0
    sequence.forEach((fn, i) => {
      setTimeout(fn, delay)
      delay += 2000 // ⏱ 1 second between each image
    })

    // Finish and slide away after the last image
    const endTimer = setTimeout(() => onFinish(), delay + 1000)
    return () => clearTimeout(endTimer)
  }, [onFinish])

  return (
    <AnimatePresence>
      {step < 5 && (
        <motion.div
          className="fixed inset-0 bg-[#0b1956] flex flex-col items-center justify-center z-[9999]"
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 1, ease: 'easeInOut' } }}
        >
          {/* Image Container */}
          <div className="relative w-[220px] h-[220px] overflow-hidden">
            <AnimatePresence>
              {step >= 1 && (
                <motion.img
                  key="img1"
                  src="/Load/L1.png"
                  alt="Image 1"
                  className="absolute w-full h-full object-cover"
                  initial={{ y: '-100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
              )}
              {step >= 2 && (
                <motion.img
                  key="img2"
                  src="/Load/L2.png"
                  alt="Image 2"
                  className="absolute w-full h-full object-cover"
                  initial={{ y: '-100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
              )}
              {step >= 3 && (
                <motion.img
                  key="img3"
                  src="/Load/L3.png"
                  alt="Image 3"
                  className="absolute w-full h-full object-cover"
                  initial={{ y: '-100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
              )}
              {step >= 4 && (
                <motion.img
                  key="img4"
                  src="/Load/L4.png"
                  alt="Image 4"
                  className="absolute w-full h-full object-cover"
                  initial={{ y: '-100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
