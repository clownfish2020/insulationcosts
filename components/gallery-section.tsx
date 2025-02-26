"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

const images = [
  "/airtight-attic-spray-foam-insulation-dublin-ireland.webp",
  "/airtightness-membrane.webp",
  "/cavity-wall-insulation-companies.webp",
  "/container-shipping-insulation-costs.webp",
  "/external-wall-cross-section-insulation-table.webp",
  "/heat-pumps-installers.webp",
  "/attic-spray-foam-insulation-kildare.webp",
  "/attic-insulation-costs-ireland-tab.webp",
  "/photovoltaic-solar-pv-panels-ireland.webp"
]

type ViewOption = 1 | 2 | 3

export function GallerySection() {
  const [viewOption, setViewOption] = useState<ViewOption>(3)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const navigateImage = (direction: number) => {
    if (selectedImage === null) return
    let newIndex = selectedImage + direction
    if (newIndex < 0) newIndex = images.length - 1
    if (newIndex >= images.length) newIndex = 0
    setSelectedImage(newIndex)
  }

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    closeLightbox()
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
        className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 shadow-lg 
          hover:shadow-xl hover:bg-white/60 dark:hover:bg-gray-800/60
          transition-all duration-300 ease-in-out backdrop-blur-sm h-full"
      >
        <div className="bg-[#94B9AF]/90 dark:bg-[#94B9AF]/80 rounded-lg p-6 h-full
          transition-all duration-300 hover:bg-[#94B9AF]/95 dark:hover:bg-[#94B9AF]/85">
          <div className="flex flex-col space-y-6">
            {/* View Options */}
            <div className="flex justify-center gap-4">
              {[1, 2, 3].map((option) => (
                <Button
                  key={option}
                  variant={viewOption === option ? "default" : "outline"}
                  onClick={() => setViewOption(option as ViewOption)}
                  className="bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white
                    hover:bg-white/70 dark:hover:bg-gray-800/70"
                >
                  {option} {option === 1 ? 'Row' : 'Rows'}
                </Button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className={`grid gap-4 ${
              viewOption === 1 ? 'grid-cols-1' : 
              viewOption === 2 ? 'grid-cols-2' : 
              'grid-cols-3'
            }`}>
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative aspect-square rounded-lg overflow-hidden group 
                    bg-gray-200 dark:bg-gray-700 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    className="object-cover transition-transform duration-300
                      group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <button
                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full 
                  hover:bg-white/20 transition-colors z-50"
                onClick={handleClose}
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 
                  bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage(-1)
                }}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[selectedImage]}
                  alt={`Gallery image ${selectedImage + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 
                  bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage(1)
                }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 