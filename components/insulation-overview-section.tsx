"use client"

import { motion } from "framer-motion"
import dynamic from 'next/dynamic'
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"

// Dynamically import the carousel components
const ImageCarousel = dynamic(() => import('@/components/ui/image-carousel').then(mod => mod.ImageCarousel), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 w-full h-full rounded-lg" />,
  ssr: false
})

// Move images to a separate constant file or API endpoint if the list grows
const homeImages = [
  {
    src: "https://placehold.co/800x600?text=Home+Insulation+1",
    alt: "Insulation Contractors Wexford",
    width: 800,
    height: 600
  },
  {
    src: "https://placehold.co/800x600?text=Home+Insulation+2",
    alt: "Cavity Wall Insulation",
    width: 800,
    height: 600
  },
  {
    src: "https://placehold.co/800x600?text=Home+Insulation+3",
    alt: "Attic Insulation",
    width: 800,
    height: 600
  }
]

const commercialImages = [
  {
    src: "https://placehold.co/800x600?text=Commercial+1",
    alt: "Shed Insulation Cost Ireland",
    width: 800,
    height: 600
  },
  {
    src: "https://placehold.co/800x600?text=Commercial+2",
    alt: "Commercial Insulation",
    width: 800,
    height: 600
  },
  {
    src: "https://placehold.co/800x600?text=Commercial+3",
    alt: "Industrial Insulation",
    width: 800,
    height: 600
  }
]

export function InsulationOverviewSection() {
  return (
    <div className="flex-1 container mx-auto px-0 md:px-4 py-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-0 md:p-6 bg-white/50 dark:bg-gray-800/50 rounded-none md:rounded-xl">
          <Card className="overflow-hidden border-0 bg-transparent">
            <div className="flex justify-center mb-6 px-4">
              <Card className="w-full md:w-auto px-8 py-3 bg-[#4A1C2D]/20 dark:bg-[#4A1C2D]/30 rounded-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-[#4A1C2D] dark:text-white text-center">
                  Insulation Services
                </h2>
              </Card>
            </div>

            <Card className="p-0 md:p-6 bg-[#4d6166]/90 dark:bg-[#4d6166]/80 rounded-none md:rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-0">
                {/* Home Insulation Column */}
                <Card className="bg-gray-800/95 text-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#94B9AF] mb-4">
                    Home Insulation
                  </h3>
                  <p className="text-gray-200 text-lg mb-6">
                    There are several different types of insulation available, and the right type for your 
                    home will depend on a number of factors, including the climate, the type of heating and 
                    cooling system you have, and the age and construction of your home.
                  </p>
                  
                  <div className="relative w-full h-[450px] rounded-lg overflow-hidden slider mb-6">
                    <Suspense fallback={
                      <div className="animate-pulse bg-gray-200 dark:bg-gray-700 w-full h-full rounded-lg" />
                    }>
                      <ImageCarousel 
                        images={homeImages}
                        layout="responsive"
                      />
                    </Suspense>
                  </div>

                  <p className="text-gray-200 text-lg mb-4">
                    In addition to reducing energy costs and protecting the environment, insulating your home 
                    can also improve its resale value. Homes with good insulation are more attractive to buyers, 
                    as they are more energy-efficient and comfortable.
                  </p>

                  <Link 
                    href="/contact" 
                    className="text-[#4A1C2D] hover:text-[#4A1C2D]/90 font-bold transition-colors duration-200"
                  >
                    Find out more
                  </Link>
                </Card>

                {/* Commercial Insulation Column */}
                <Card className="bg-gray-800/95 text-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#94B9AF] mb-4">
                    Commercial Insulation
                  </h3>
                  <p className="text-gray-200 text-lg mb-6">
                    There are several types of commercial insulation, including fiberglass, 
                    cellulose, mineral wool, foam, and reflective insulation. Each type has 
                    its own advantages and is suited to different applications.
                  </p>

                  <div className="relative w-full h-[450px] rounded-lg overflow-hidden slider mb-6">
                    <Suspense fallback={
                      <div className="animate-pulse bg-gray-200 dark:bg-gray-700 w-full h-full rounded-lg" />
                    }>
                      <ImageCarousel 
                        images={commercialImages}
                        layout="responsive"
                      />
                    </Suspense>
                  </div>

                  <p className="text-gray-200 text-lg mb-4">
                    Foam insulation is a popular choice for insulating irregularly shaped spaces, such as 
                    around pipes or ductwork. Reflective insulation uses foil or other reflective materials 
                    to reflect heat, and is often used in attics and other areas where there is a lot of 
                    heat gain.
                  </p>

                  <Link 
                    href="/contact" 
                    className="text-[#4A1C2D] hover:text-[#4A1C2D]/90 font-bold transition-colors duration-200"
                  >
                    Find out more
                  </Link>
                </Card>
              </div>
            </Card>
          </Card>
        </Card>
      </motion.div>
    </div>
  )
} 