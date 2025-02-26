"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#94B9AF] to-[#94B9AF]/90">
      <main className="flex-1 container mx-auto px-4 py-6 space-y-8 font-montserrat">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 bg-white/50 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Insulation Overview</h2>
            <p>Testing the basic layout and styling</p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

