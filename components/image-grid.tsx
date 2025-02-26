"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface HeroImage {
  desktop: string
  tablet: string
  mobile: string
  alt: string
}

interface ImageGridProps {
  heroImage: HeroImage
}

export function ImageGrid({ heroImage }: ImageGridProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 gap-2 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm"
    >
      {/* Top Left - Hero Image (Responsive) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative aspect-square overflow-hidden rounded-lg col-span-2 md:col-span-1"
      >
        {/* Mobile Image */}
        <Image
          src={heroImage.mobile}
          alt={heroImage.alt}
          fill
          className="object-cover block md:hidden"
          sizes="100vw"
          priority
        />
        
        {/* Tablet Image */}
        <Image
          src={heroImage.tablet}
          alt={heroImage.alt}
          fill
          className="object-cover hidden md:block lg:hidden"
          sizes="50vw"
          priority
        />
        
        {/* Desktop Image */}
        <Image
          src={heroImage.desktop}
          alt={heroImage.alt}
          fill
          className="object-cover hidden lg:block"
          sizes="33vw"
          priority
        />
      </motion.div>

      {/* Additional Images */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative aspect-square overflow-hidden rounded-lg"
      >
        <Image
          src={heroImage.desktop}
          alt="Attic insulation detail"
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative aspect-square overflow-hidden rounded-lg"
      >
        <Image
          src={heroImage.tablet}
          alt="Attic insulation process"
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </motion.div>
    </motion.div>
  )
} 