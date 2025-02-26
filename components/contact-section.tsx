"use client"

import { ContactForm } from "@/components/contact-form"
import { ContactDetails } from "@/components/contact-details"
import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 auto-rows-fr">
      <div className="w-full max-w-2xl mx-auto p-4 h-full">
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
            transition-all duration-300 ease-in-out backdrop-blur-sm flex flex-col h-full"
        >
          <h3 className="text-2xl md:text-4xl font-montserrat-alternates font-bold text-white dark:text-white mb-6 text-center">
            Contact Us
          </h3>
          
          <div className="bg-[#94B9AF]/90 dark:bg-[#94B9AF]/80 rounded-lg p-6 flex-1
            transition-all duration-300 hover:bg-[#94B9AF]/95 dark:hover:bg-[#94B9AF]/85"
          >
            <ContactForm />
          </div>
        </motion.div>
      </div>

      <div className="w-full max-w-2xl mx-auto p-4 h-full">
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
            transition-all duration-300 ease-in-out backdrop-blur-sm flex flex-col h-full"
        >
          <h3 className="text-2xl md:text-4xl font-montserrat-alternates font-bold text-white dark:text-white mb-6 text-center">
            Get in Touch
          </h3>
          
          <div className="bg-[#94B9AF]/90 dark:bg-[#94B9AF]/80 rounded-lg p-6 flex-1
            transition-all duration-300 hover:bg-[#94B9AF]/95 dark:hover:bg-[#94B9AF]/85"
          >
            <ContactDetails />
          </div>
        </motion.div>
      </div>
    </div>
  )
} 