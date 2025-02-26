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

export function InsulationOverviewSection() {
  return (
    <div className="flex-1 container mx-auto px-0 md:px-4 py-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Insulation Overview</h2>
          <p>Testing the basic layout and styling</p>
        </Card>
      </motion.div>
    </div>
  )
} 