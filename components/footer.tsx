"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { ClientOnly } from "@/components/client-only"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Footer() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  if (!isMounted) {
    return null // or a loading placeholder
  }

  return (
    <footer className="bg-[#F8FAF9] dark:bg-gray-900 mt-12 border-t border-[#94B9AF]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-[#4d6166]/90 dark:bg-[#4d6166]/80 p-4 rounded-xl">
              <Card className="bg-white/10 dark:bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                <Image
                  src="/sidebarlogo.webp"
                  alt="Company Logo"
                  width={396}
                  height={320}
                  className="object-contain w-full h-auto"
                  priority
                />
              </Card>
            </Card>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-[#4d6166]/90 dark:bg-[#4d6166]/80 p-4 rounded-xl">
              <Card className="bg-white/10 dark:bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
                <ul className="grid grid-cols-2 gap-3">
                  {['Home', 'Services', 'Gallery', 'About Us', 'Contact', 'Blog'].map((link) => (
                    <motion.li key={link} whileHover={{ x: 5 }}>
                      <Link 
                        href="#" 
                        className="text-gray-200 hover:text-[#94B9AF] 
                          transition-colors duration-200 flex items-center space-x-2"
                      >
                        <span className="h-px w-4 bg-[#94B9AF]/50" />
                        <span>{link}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </Card>
          </motion.div>

          {/* Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-[#4d6166]/90 dark:bg-[#4d6166]/80 p-4 rounded-xl">
              <Card className="bg-white/10 dark:bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-white mb-4">Our Services</h4>
                <ul className="grid grid-cols-1 gap-3">
                  {[
                    'Attic Insulation',
                    'Wall Insulation',
                    'Floor Insulation',
                    'Energy Consulting',
                    'Heat Loss Survey',
                    'Ventilation'
                  ].map((service) => (
                    <motion.li key={service} whileHover={{ x: 5 }}>
                      <Link 
                        href="#" 
                        className="text-gray-200 hover:text-[#94B9AF] 
                          transition-colors duration-200 flex items-center space-x-2"
                      >
                        <span className="h-px w-4 bg-[#94B9AF]/50" />
                        <span>{service}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </Card>
          </motion.div>

          {/* Contact and Social Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4"
          >
            {/* Social Links Card */}
            <Card className="bg-[#4d6166]/90 dark:bg-[#4d6166]/80 p-4 rounded-xl">
              <Card className="bg-white/10 dark:bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                <div className="flex justify-center gap-6">
                  <ClientOnly>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex items-center text-gray-200 hover:text-[#2563EB] transition-colors duration-200"
                    >
                      <div className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-200">
                        <Facebook className="h-6 w-6" />
                      </div>
                    </motion.a>
                  </ClientOnly>
                  <ClientOnly>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex items-center text-gray-200 hover:text-[#E4405F] transition-colors duration-200"
                    >
                      <div className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-200">
                        <Instagram className="h-6 w-6" />
                      </div>
                    </motion.a>
                  </ClientOnly>
                  <ClientOnly>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex items-center text-gray-200 hover:text-[#0077B5] transition-colors duration-200"
                    >
                      <div className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-200">
                        <Linkedin className="h-6 w-6" />
                      </div>
                    </motion.a>
                  </ClientOnly>
                </div>
              </Card>
            </Card>

            {/* Contact Info Card */}
            <Card className="bg-[#4d6166]/90 dark:bg-[#4d6166]/80 p-4 rounded-xl">
              <Card className="bg-white/10 dark:bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                <div className="space-y-4">
                  <ClientOnly>
                    <motion.a
                      href="mailto:info@example.com"
                      className="flex items-center space-x-3 text-gray-200 
                        hover:text-[#94B9AF] transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-white/10 p-2 rounded-lg">
                        <Mail className="h-5 w-5" />
                      </div>
                      <span>info@example.com</span>
                    </motion.a>
                  </ClientOnly>
                  
                  <ClientOnly>
                    <motion.div
                      className="flex items-center space-x-3 text-gray-200"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-white/10 p-2 rounded-lg">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <span>123 Business Street<br />Dublin, Ireland</span>
                    </motion.div>
                  </ClientOnly>
                </div>
              </Card>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-12 pt-8 border-t border-[#94B9AF]/20 text-center text-gray-500 dark:text-gray-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariant}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Insulation Costs Ireland. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

