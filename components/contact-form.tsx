"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/90 dark:bg-gray-800/90
                    border-transparent focus:border-white focus:ring-2 focus:ring-white"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/90 dark:bg-gray-800/90
                    border-transparent focus:border-white focus:ring-2 focus:ring-white"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-white mb-2">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 rounded-lg bg-white/90 dark:bg-gray-800/90
                  border-transparent focus:border-white focus:ring-2 focus:ring-white"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/90 dark:bg-gray-800/90
                  border-transparent focus:border-white focus:ring-2 focus:ring-white"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-white text-[#94B9AF] font-semibold
                hover:bg-gray-100 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
} 