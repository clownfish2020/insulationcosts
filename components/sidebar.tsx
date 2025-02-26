"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { 
  Home, DoorOpen, Building2, CheckSquare, Globe, SunMedium, Users, Flag,
  Newspaper, ArrowsInCardinal, Euro, Mail, Facebook, Twitter, Linkedin, 
  Newspaper as Blog, MessageSquare, Wallet, GraduationCap, ChevronRight,
  ChevronDown, X, Phone, Factory, Boxes, Ruler, Leaf, Phone as WhatsApp,
  Wind, Shield, Box
} from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

interface AppSidebarProps {
  isOpen: boolean
  onClose: () => void
}

interface MenuItem {
  title: string
  href: string
}

interface MenuSection {
  title: string
  iconName: string
  bgColor: string
  items?: MenuItem[]
}

interface StandaloneLink {
  iconName: string
  title: string
  href: string
  bgColor: string
}

interface SocialLink {
  icon: any
  title: string
  href: string
  color: string
}

interface BottomLink {
  icon: any
  title: string
  href: string
}

export function AppSidebar({ isOpen, onClose }: AppSidebarProps) {
  const [openSection, setOpenSection] = useState<string | null>(null)

  // Move the data inside the component
  const renderIcon = (name: string) => {
    const icons: { [key: string]: any } = {
      Home: Home,
      Factory: Factory,
      Boxes: Boxes,
      Globe: Globe,
      Leaf: Leaf,
      ArrowsInCardinal: ArrowsInCardinal,
      Euro: Euro,
      Mail: Mail,
      Facebook: Facebook,
      Twitter: Twitter,
      Linkedin: Linkedin,
      Blog: Blog,
      MessageSquare: MessageSquare,
      Wallet: Wallet,
      GraduationCap: GraduationCap,
      Wind: Wind,
      Shield: Shield,
      Box: Box
    }
    const Icon = icons[name]
    return Icon ? <Icon className="w-4 h-4" /> : null
  }

  const menuSections: MenuSection[] = [
    {
      title: "Home Insulation",
      iconName: "Home",
      bgColor: "bg-red-500/20",
      items: [
        { title: "Attic Insulation", href: "/how-much-does-attic-insulation-cost-in-ireland" },
        { title: "External Wall Insulation", href: "/how-much-does-external-insulation-cost-in-ireland" },
        { title: "Cavity Wall Insulation", href: "/how-much-does-cavity-wall-insulation-cost-ireland" },
        { title: "Dry Lining Insulation", href: "/how-much-does-dry-lining-insulation-cost-in-ireland" },
        { title: "Roof Insulation", href: "/how-much-does-roof-insulation-cost-in-ireland" },
        { title: "Sound Insulation", href: "/how-much-does-sound-insulation-cost-in-ireland" }
      ]
    },
    {
      title: "Commercial Insulation",
      iconName: "Factory",
      bgColor: "bg-red-400/20",
      items: [
        { title: "Shed Insulation", href: "/how-much-does-shed-insulation-cost-in-ireland" },
        { title: "Container Insulation", href: "/how-much-does-container-insulation-cost-in-ireland" }
      ]
    },
    {
      title: "Type of Insulation",
      iconName: "Boxes",
      bgColor: "bg-slate-500/20",
      items: [
        { title: "Mineral Wool Insulation", href: "/how-much-does-mineral-wool-insulation-cost" },
        { title: "Fiberglass Insulation", href: "/how-much-does-fiberglass-insulation-cost" },
        { title: "Spray Foam Insulation", href: "/how-much-does-spray-foam-insulation-cost-in-ireland" },
        { title: "Hemp Insulation", href: "/how-much-does-hemp-insulation-cost-in-ireland" },
        { title: "Cellulose Insulation", href: "/how-much-does-cellulose-insulation-cost-in-ireland" },
        { title: "Sheep Wool Insulation", href: "/how-much-does-sheep-wool-insulation-cost-in-ireland" }
      ]
    },
    {
      title: "Insulation by County",
      iconName: "Globe",
      bgColor: "bg-pink-400/20",
      items: [
        { title: "Antrim", href: "/attic-insulation-cavity-wall-external-insulation-antrim" },
        // ... add all counties here
        { title: "Wicklow", href: "/attic-cavity-external-wall-insulation-wicklow" }
      ]
    },
    {
      title: "Renewable Energy",
      iconName: "Leaf",
      bgColor: "bg-blue-500/20",
      items: [
        { title: "Heat Pumps", href: "/how-much-do-heat-pumps-cost-in-ireland" },
        { title: "Solar Thermal Panels", href: "/how-much-do-solar-thermal-panels-cost-in-ireland" },
        { title: "Solar PV Panels", href: "/how-much-do-solar-pv-panels-cost-in-ireland" }
      ]
    }
  ]

  const standaloneLinks: StandaloneLink[] = [
    { 
      iconName: "Wind", 
      title: "Airtightness", 
      href: "/how-much-does-airtightness-cost-in-ireland",
      bgColor: "bg-pink-500/20" 
    },
    { 
      iconName: "Euro", 
      title: "Insulation Grants", 
      href: "/seai-insulation-grants",
      bgColor: "bg-green-500/20" 
    },
    { 
      iconName: "Mail", 
      title: "Contact", 
      href: "/contact",
      bgColor: "bg-blue-400/20" 
    }
  ]

  const socialLinks: SocialLink[] = [
    { 
      icon: Facebook, 
      title: "Facebook", 
      href: "https://www.facebook.com/enabled.labs/",
      color: "text-[#1877F2]" // Facebook blue
    },
    { 
      icon: Twitter, 
      title: "Twitter", 
      href: "https://twitter.com/iEnabled",
      color: "text-[#1DA1F2]" // Twitter blue
    },
    { 
      icon: Linkedin, 
      title: "LinkedIn", 
      href: "https://www.linkedin.com/company/insulation-costs-ireland",
      color: "text-[#0A66C2]" // LinkedIn blue
    },
    { 
      icon: Blog, 
      title: "Blog", 
      href: "https://insulation-costs-ireland.blogspot.com/",
      color: "text-[#FF5722]" // Blogger orange
    },
    { 
      icon: Mail, 
      title: "Mail Us", 
      href: "/contact",
      color: "text-[#EA4335]" // Gmail red
    },
    { 
      icon: WhatsApp, 
      title: "WhatsApp", 
      href: "https://wa.me/your-number-here", // Replace with your WhatsApp number
      color: "text-[#25D366]" // WhatsApp green
    }
  ]

  const bottomLinks: BottomLink[] = [
    { icon: MessageSquare, title: "Advertise", href: "/advertise" },
    { icon: Wallet, title: "Retrofit Finance", href: "/insulation-retrofit-finance-options" },
    { icon: GraduationCap, title: "Retrofit Training", href: "/retrofit-insulation-training" }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with increased blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed left-0 top-0 bottom-0 w-[340px] bg-white dark:bg-gray-900 
              shadow-2xl z-50 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 
              dark:scrollbar-thumb-gray-700"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-10 p-4 border-b border-gray-100 dark:border-gray-800">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 
                  transition-colors"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>

              <div className="text-center space-y-2">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Insulation Costs Ireland
                </h2>
                <h3 className="text-lg font-semibold text-[#94B9AF]">
                  Professional Insulation Services
                </h3>
              </div>
            </div>

            {/* Logo */}
            <div className="relative w-full">
              <Image
                src="/sidebarlogo.webp"
                alt="Company Logo"
                width={396}
                height={320}
                className="object-contain w-full h-auto"
                priority
              />
            </div>

            {/* Menu Sections */}
            <div className="p-4 space-y-3">
              {menuSections.map((section) => (
                <div key={section.title} className="rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenSection(openSection === section.title ? null : section.title)}
                    className={`w-full p-3 rounded-lg ${section.bgColor} hover:brightness-105 
                      transition-all duration-200 text-gray-900 dark:text-white`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {renderIcon(section.iconName)}
                        <span className="font-medium">{section.title}</span>
                      </div>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300
                          ${openSection === section.title ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openSection === section.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50 dark:bg-gray-800/50 rounded-b-lg"
                      >
                        <div className="p-2 space-y-1">
                          {section.items?.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={onClose}
                              className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-700 
                                dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 
                                transition-colors text-sm"
                            >
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Standalone Links */}
            <div className="px-4 py-2 space-y-2">
              {standaloneLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 p-3 rounded-lg ${link.bgColor} 
                    hover:brightness-105 transition-all duration-200 text-gray-900 dark:text-white`}
                >
                  {renderIcon(link.iconName)}
                  <span className="font-medium">{link.title}</span>
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="px-4 py-6 border-t border-gray-100 dark:border-gray-800">
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex flex-col items-center gap-2 p-2 rounded-lg 
                      hover:opacity-80 transition-all duration-200 group"
                  >
                    <link.icon 
                      className={`w-6 h-6 ${link.color} transition-colors`} 
                    />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {link.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Links */}
            <div className="px-4 py-4 bg-gray-50 dark:bg-gray-800/50">
              <div className="space-y-2">
                {bottomLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/60 
                      dark:hover:bg-gray-800/60 transition-colors text-gray-700 dark:text-gray-300"
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 text-center text-gray-500 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-800/50">
              <p>© Insulation Costs Ireland</p>
              <p className="text-xs">All rights reserved.</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

