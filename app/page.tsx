"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { AppSidebar } from "@/components/sidebar"
import HeroImage from "@/components/hero-image"
import { InsulationOverviewSection } from "@/components/insulation-overview-section"
import { InsulationInfoSection } from "@/components/insulation-info-section"
import { InfoCard } from "@/components/info-card"
import { RenewableEnergySection } from "@/components/renewable-energy-section"
import { InfoGallerySection } from "@/components/info-gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#94B9AF] to-[#94B9AF]/90">
      {/* Sidebar and Header */}
      <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <AppSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Main Content */}
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          {/* Hero Section */}
          <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 shadow-lg">
            <HeroImage
              desktopSrc="/attic-insulation-costs-ireland.webp"
              tabletSrc="/attic-insulation-costs-ireland-tab.webp"
              mobileSrc="/attic-insulation-costs-ireland-mobile.webp"
              alt="Attic insulation services in Ireland"
            />
          </div>

          <InsulationOverviewSection />
          <InsulationInfoSection />
          <RenewableEnergySection />
          <InfoGallerySection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  )
}

