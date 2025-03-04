"use client"

import { useState, ComponentType } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Mail, Phone, MessageCircle, FileText, PhoneIncoming, X } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CallbackForm } from "@/components/callback-form"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { LucideIcon } from 'lucide-react'

// Update the interface to use LucideIcon type
interface ContactOption {
  icon: LucideIcon
  tooltip: string
  component?: ComponentType
  color: string
  className?: string
  href?: string
}

const contactOptions: ContactOption[] = [
  {
    icon: FileText,
    tooltip: "Get a Quote",
    component: CallbackForm,
    color: "#94B9AF",
    className: "bg-gradient-to-r from-[#94B9AF] to-[#4d6166] text-white hover:brightness-110 font-montserrat"
  },
  {
    icon: PhoneIncoming,
    tooltip: "Request Callback",
    component: CallbackForm,
    color: "#4d6166",
    className: "bg-gradient-to-r from-[#4d6166] to-[#94B9AF] text-white hover:brightness-110 font-montserrat"
  },
  {
    icon: Phone,
    tooltip: "Call Us",
    href: "tel:+353123456789",
    color: "#34A853"
  },
  {
    icon: Mail,
    tooltip: "Email Us",
    href: "mailto:info@insulationcostsireland.com",
    color: "#EA4335",
    className: "bg-gradient-to-r from-[#EA4335] to-[#FBBC05] text-white hover:brightness-110 font-montserrat"
  },
  {
    icon: MessageCircle,
    tooltip: "WhatsApp",
    href: "https://wa.me/your-number-here",
    color: "#25D366",
    className: "bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:brightness-110 font-montserrat"
  }
]

export function QuickContactMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed right-6 bottom-24 z-50">
      <motion.div className="relative">
        {/* Toggle Button */}
        <motion.button
          className="w-12 h-12 rounded-full bg-[#4d6166] text-white shadow-lg
            hover:bg-[#4d6166]/90 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="w-6 h-6 mx-auto" /> : <Plus className="w-6 h-6 mx-auto" />}
          </motion.div>
        </motion.button>

        {/* Contact Options */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-16 right-0 space-y-3"
            >
              {contactOptions.map((option, index) => (
                <motion.div
                  key={option.tooltip}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {option.component ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className={cn("p-3 cursor-pointer", option.className)}>
                          <option.icon 
                            className="w-6 h-6 transition-colors duration-200"
                            aria-hidden="true"
                          />
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="font-montserrat-alternates">
                        {option.component && <option.component />}
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Link href={option.href || '#'} target="_blank" rel="noopener noreferrer">
                      <Card 
                        className={cn(
                          "p-3 cursor-pointer shadow-lg transition-all duration-200 group",
                          option.className || 'bg-white dark:bg-gray-800 hover:translate-x-1'
                        )}
                      >
                        <option.icon 
                          className="w-6 h-6 transition-colors duration-200"
                          style={{ color: option.color }}
                          aria-hidden="true"
                        />
                      </Card>
                    </Link>
                  )}
                  {/* Tooltip */}
                  <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 
                    bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 
                    transition-opacity duration-200 whitespace-nowrap font-montserrat"
                  >
                    {option.tooltip}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
} 