'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Craft from '../components/Craft'
import Destination from '../components/Destination'
import Book from '@/components/Book'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import './globals.css'

const Page = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {/* Show Loading Screen only while loading */}
      {isLoading ? (
        <LoadingScreen onFinish={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Hero section reveal */}
          <motion.div
            initial={{ y: -100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 1.4,
              ease: 'easeOut',
              type: 'spring',
              stiffness: 80,
            }}
          >
            <Navbar />

            {/* Hero content animations */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <Craft />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <Destination />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Book />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <Footer />
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </>
  )
}

export default Page
