"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState, useEffect } from "react"

interface HeroImageProps {
  desktopSrc: string
  tabletSrc: string
  mobileSrc: string
  alt: string
  className?: string
}

export default function HeroImage({
  desktopSrc,
  tabletSrc,
  mobileSrc,
  alt,
  className
}: HeroImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("container mx-auto px-4", className)}
    >
      <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
        <div className="p-3">
          <div className="relative rounded-lg overflow-hidden shadow-inner group">
            {/* Content Overlay - Shows on hover */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-6 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              bg-[#922636]/30 backdrop-blur-[2px]">
              {/* Logo in top left */}
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="absolute top-6 left-6 w-[150px]"
              >
                <Card className="bg-white/10 dark:bg-white/5 p-2 rounded-xl backdrop-blur-sm">
                  <Image
                    src="/sidebarlogo.webp"
                    alt="Company Logo"
                    width={396}
                    height={320}
                    className="object-contain w-full h-auto"
                    priority
                  />
                </Card>
              </motion.div>

              {/* Existing text content */}
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 drop-shadow-lg"
              >
                Professional Insulation Services
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md"
              >
                Energy-efficient solutions for Irish homes
              </motion.p>

              {/* Updated Free Quote Box */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 right-6 z-30"
              >
                <Link href="/quote">
                  <Card className="bg-[#922636]/90 dark:bg-[#922636]/80 p-2 rounded-xl">
                    <Card className="bg-white/10 dark:bg-white/5 px-6 py-4 rounded-lg backdrop-blur-sm
                      hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    >
                      <motion.div
                        className="flex flex-col items-start gap-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold text-white">
                            Get Free Quote
                          </h3>
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#94B9AF] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#94B9AF]"/>
                          </span>
                        </div>
                        <p className="text-sm text-white/90">
                          Takes only 2 minutes
                        </p>
                      </motion.div>
                    </Card>
                  </Card>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Image (< 768px) */}
            <div className="relative h-[300px] md:hidden">
              <Image
                src={mobileSrc}
                alt={alt}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Tablet Image (768px - 1024px) */}
            <div className="relative h-[400px] hidden md:block lg:hidden">
              <Image
                src={tabletSrc}
                alt={alt}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Desktop Image (> 1024px) */}
            <div className="relative h-[500px] hidden lg:block">
              <Image
                src={desktopSrc}
                alt={alt}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
} 