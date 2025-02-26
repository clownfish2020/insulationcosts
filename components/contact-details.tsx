"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react"

export function ContactDetails() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white/90 dark:bg-gray-800/90 rounded-lg p-6 shadow-md">
      <div className="space-y-8">
        {/* Phone */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-6 text-gray-800 dark:text-white group hover:translate-x-1 transition-transform duration-300"
        >
          <div className="bg-[#94B9AF]/20 p-4 rounded-xl group-hover:bg-[#94B9AF]/30 transition-colors duration-300 shadow-lg">
            <Phone className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-xl mb-1 font-montserrat-alternates">Phone</p>
            <a 
              href="tel:+353123456789" 
              className="text-gray-700 dark:text-white/90 hover:text-[#94B9AF] dark:hover:text-white flex items-center gap-2 transition-all duration-300 text-lg tracking-wide"
            >
              +353 (0) 123 456 789
              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-6 text-gray-800 dark:text-white group hover:translate-x-1 transition-transform duration-300"
        >
          <div className="bg-[#94B9AF]/20 p-4 rounded-xl group-hover:bg-[#94B9AF]/30 transition-colors duration-300 shadow-lg">
            <Mail className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-xl mb-1 font-montserrat-alternates">Email</p>
            <a 
              href="mailto:info@example.com" 
              className="text-gray-700 dark:text-white/90 hover:text-[#94B9AF] dark:hover:text-white flex items-center gap-2 transition-all duration-300 text-lg tracking-wide"
            >
              info@example.com
              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Address */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-6 text-gray-800 dark:text-white group hover:translate-x-1 transition-transform duration-300"
        >
          <div className="bg-[#94B9AF]/20 p-4 rounded-xl group-hover:bg-[#94B9AF]/30 transition-colors duration-300 shadow-lg">
            <MapPin className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-xl mb-1 font-montserrat-alternates">Location</p>
            <a 
              href="https://maps.google.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white/90 hover:text-[#94B9AF] dark:hover:text-white flex items-center gap-2 transition-all duration-300 text-lg tracking-wide"
            >
              123 Business Street, Dublin
              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Hours */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-start gap-6 text-gray-800 dark:text-white group hover:translate-x-1 transition-transform duration-300"
        >
          <div className="bg-[#94B9AF]/20 p-4 rounded-xl group-hover:bg-[#94B9AF]/30 transition-colors duration-300 shadow-lg">
            <Clock className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-xl mb-3 font-montserrat-alternates">Business Hours</p>
            <div className="text-gray-700 dark:text-white/90 space-y-3 text-lg tracking-wide">
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-white/10 pb-2">
                <span>Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-white/10 pb-2">
                <span>Saturday</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 