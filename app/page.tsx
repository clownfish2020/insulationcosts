"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { AppSidebar } from "@/components/sidebar"
import { HeroImage } from "@/components/hero-image"
import { InsulationOverviewSection } from "@/components/insulation-overview-section"
import { InsulationInfoSection } from "@/components/insulation-info-section"
import { InfoCard } from "@/components/info-card"
import { RenewableEnergySection } from "@/components/renewable-energy-section"
import { InfoGallerySection } from "@/components/info-gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

// First row of cards
const firstRowCards = [
  {
    title: "Attic Insulation",
    description: "Professional attic insulation services with superior materials and expert installation.",
    imageSrc: "/attic-insulation-costs-ireland.webp",
    imageAlt: "Attic insulation installation",
    type: "attic" as const
  },
  {
    title: "External Wall Insulation",
    description: "Complete wall insulation solutions for better energy efficiency and comfort.",
    imageSrc: "/attic-insulation-costs-ireland-tab.webp",
    imageAlt: "External wall insulation process",
    type: "external" as const
  },
  {
    title: "Roof Insulation",
    description: "Expert roof insulation services to eliminate drafts and reduce heat loss.",
    imageSrc: "/attic-insulation-costs-ireland-mobile.webp",
    imageAlt: "Roof insulation installation",
    type: "roof" as const
  }
]

// Second row of cards
const secondRowCards = [
  {
    title: "External Wall Insulation",
    description: "Efficient external wall insulation for improved thermal performance.",
    imageSrc: "/attic-insulation-costs-ireland.webp",
    imageAlt: "External wall insulation",
    type: "external" as const
  },
  {
    title: "Shed Insulation",
    description: "Professional shed insulation services for maximum energy savings.",
    imageSrc: "/attic-insulation-costs-ireland-tab.webp",
    imageAlt: "Shed insulation process",
    type: "shed" as const
  },
  {
    title: "Container Insulation",
    description: "Comprehensive container insulation solutions for optimal temperature control.",
    imageSrc: "/attic-insulation-costs-ireland-mobile.webp",
    imageAlt: "Container insulation",
    type: "container" as const
  }
]

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#94B9AF] to-[#94B9AF]/90">
      <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <AppSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className="flex-1 container mx-auto px-4 py-6 space-y-8 font-montserrat">
        {/* Hero Section */}
        <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 shadow-lg">
          <HeroImage
            desktopSrc="/attic-insulation-costs-ireland.webp"
            tabletSrc="/attic-insulation-costs-ireland-tab.webp"
            mobileSrc="/attic-insulation-costs-ireland-mobile.webp"
            alt="Attic insulation services in Ireland"
          />
        </div>

        {/* Insulation Overview Section */}
        <InsulationOverviewSection />

        {/* Heat Loss and Cost Factors Section */}
        <InsulationInfoSection />

        {/* First Row of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {firstRowCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 shadow-lg 
                hover:shadow-xl hover:bg-white/60 dark:hover:bg-gray-800/60
                transition-all duration-300 ease-in-out
                backdrop-blur-sm"
            >
              <InfoCard {...card} delay={index * 0.1} />
            </motion.div>
          ))}
        </div>

        {/* Renewable Energy Section */}
        <RenewableEnergySection />

        {/* Info Gallery Section */}
        <InfoGallerySection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

