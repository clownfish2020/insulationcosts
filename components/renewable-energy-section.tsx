"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ImageCarousel } from "@/components/ui/image-carousel"
import Link from "next/link"
import Head from "next/head"
import { JsonLd } from "@/components/json-ld"

// Enhanced alt texts and descriptions for SEO
const renewableImages = [
  {
    src: "/solar-thermal-evacuated-tube-ireland.webp",
    alt: "Solar Thermal Evacuated Tube Systems Installation Ireland - Professional Energy Solutions",
    title: "Professional Solar Thermal Installation Services in Ireland"
  },
  {
    src: "/solar-pv-panel-cross-section-ireland.webp",
    alt: "Solar PV Panel Installation and Costs Ireland - Detailed Cross Section View",
    title: "Expert Solar PV Panel Installation Services"
  },
  {
    src: "/air-to-air-heat-pump-system.webp",
    alt: "Air to Air Heat Pump Installation Ireland - Energy Efficient Heating Solutions",
    title: "Professional Heat Pump Installation"
  },
  {
    src: "/solar-hot-water-thermal-collectors-industrial.webp",
    alt: "Industrial Solar Thermal Collectors Ireland - Commercial Hot Water Solutions",
    title: "Commercial Solar Thermal Solutions"
  },
  {
    src: "/photovoltaic-solar-panels-ireland.webp",
    alt: "Photovoltaic Solar Panel Installation Ireland - Renewable Energy Solutions",
    title: "Professional PV Solar Installation"
  },
  {
    src: "/how-heat-pumps-work-costs-Ireland.webp",
    alt: "Heat Pump Installation and Running Costs Ireland - Complete Guide",
    title: "Heat Pump Installation Guide"
  }
]

// SEO-optimized content sections
const renewableContent = [
  {
    title: "Solar Thermal Systems",
    description: "Harness the sun's energy to heat your water and reduce energy costs. Our professional solar thermal systems are highly efficient and can provide up to 70% of your hot water needs. SEAI approved installations available across Ireland.",
    keywords: "solar thermal, hot water systems, renewable energy ireland, SEAI grants"
  },
  {
    title: "Heat Pump Technology",
    description: "Modern heat pumps offer an efficient way to heat your home by extracting heat from the outside air, even in cold weather conditions. Our heat pump solutions provide year-round comfort and significant energy savings.",
    keywords: "heat pumps ireland, air source heat pump, heating solutions, energy efficiency"
  },
  {
    title: "Solar PV Systems",
    description: "Generate your own electricity with photovoltaic panels. Reduce your carbon footprint and energy bills while increasing your home's value. Professional installation and SEAI grant support available.",
    keywords: "solar pv panels, photovoltaic installation, renewable electricity, solar energy ireland"
  }
]

// Create the structured data object
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Renewable Energy Solutions Ireland",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Your Company Name",
    "areaServed": "Ireland"
  },
  "serviceType": ["Solar Installation", "Heat Pump Installation", "Energy Efficiency Services"],
  "description": "Professional renewable energy solutions including Solar Thermal, Heat Pumps, and Solar PV installations. SEAI approved with full grant support."
}

export function RenewableEnergySection() {
  return (
    <>
      <Head>
        <meta name="description" content="Professional renewable energy solutions in Ireland including Solar Thermal, Heat Pumps, and Solar PV installations. SEAI approved contractors with full grant support." />
        <meta name="keywords" content="renewable energy ireland, solar installation, heat pumps, energy efficiency, SEAI grants, solar thermal, solar PV, professional installation" />
      </Head>

      <section 
        className="flex-1 container mx-auto px-0 md:px-4 py-6 space-y-8"
        aria-label="Renewable Energy Solutions"
      >
        <JsonLd data={structuredData} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-0 md:p-6 bg-white/50 dark:bg-gray-800/50 rounded-none md:rounded-xl">
            <Card className="overflow-hidden border-0 bg-transparent">
              <div className="flex justify-center mb-6 px-4">
                <Card className="w-full md:w-auto px-8 py-3 bg-[#4A1C2D]/20 dark:bg-[#4A1C2D]/30 rounded-xl">
                  <h1 className="text-2xl md:text-3xl font-bold text-[#4A1C2D] dark:text-white text-center">
                    Renewable Energy Solutions Ireland
                  </h1>
                </Card>
              </div>

              <Card className="p-0 md:p-6 bg-[#4d6166]/90 dark:bg-[#4d6166]/40 rounded-none md:rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 md:p-0">
                  {/* Left Column - Images */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Card className="bg-gray-800/95 text-white rounded-lg p-6 shadow-lg">
                      <div className="relative w-full h-[450px] rounded-lg overflow-hidden slider">
                        <ImageCarousel 
                          images={renewableImages}
                          layout="responsive"
                        />
                      </div>
                    </Card>
                  </motion.div>

                  {/* Right Column - Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Card className="bg-gray-800/95 text-white rounded-lg p-6 shadow-lg">
                      <div className="space-y-6">
                        {['Solar Thermal Systems', 'Heat Pump Technology', 'Solar PV Systems'].map((title, index) => (
                          <motion.div 
                            key={title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                            whileHover={{ scale: 1.02 }}
                            className="mb-6 last:mb-0"
                          >
                            <h3 className="text-xl font-bold text-[#94B9AF] mb-4">
                              {title}
                            </h3>
                            <p className="text-gray-200 text-lg">
                              {title === 'Solar Thermal Systems' && 
                                "Harness the sun's energy to heat your water and reduce energy costs. Solar thermal systems are highly efficient and can provide up to 70% of your hot water needs."}
                              {title === 'Heat Pump Technology' && 
                                "Modern heat pumps offer an efficient way to heat your home by extracting heat from the outside air, even in cold weather conditions."}
                              {title === 'Solar PV Systems' && 
                                "Generate your own electricity with photovoltaic panels. Reduce your carbon footprint and energy bills while increasing your home's value."}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </Card>
            </Card>
          </Card>
        </motion.div>
      </section>
    </>
  )
}