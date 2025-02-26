"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface InfoCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  type: 'attic' | 'external' | 'roof' | 'shed' | 'container'
  delay?: number
}

export function InfoCard({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  type,
  delay = 0 
}: InfoCardProps) {
  const getHref = () => {
    const links = {
      attic: '/how-much-does-attic-insulation-cost-in-ireland',
      external: '/how-much-does-external-insulation-cost-in-ireland',
      roof: '/how-much-does-roof-insulation-cost-in-ireland',
      shed: '/how-much-does-shed-insulation-cost-in-ireland',
      container: '/how-much-does-container-insulation-cost-in-ireland'
    }
    return links[type]
  }

  // Add type check to ensure description is a string
  const descriptionLines = typeof description === 'string' ? description.split('\n') : []

  return (
    <Card className="overflow-hidden border-0 bg-transparent">
      <motion.div
        whileHover="hover"
        initial="initial"
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1 }
        }}
      >
        {/* Image container with hover effect */}
        <motion.div 
          className="relative h-48 w-full rounded-lg overflow-hidden"
          variants={{
            hover: {
              scale: 1.05,
              transition: { duration: 0.3 }
            }
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            variants={{
              hover: {
                opacity: 0.5,
                transition: { duration: 0.3 }
              }
            }}
            initial={{ opacity: 0.3 }}
          />
        </motion.div>

        {/* Text content box with different background */}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
          <CardHeader className="p-0">
            <motion.div
              variants={{
                hover: { y: -5, transition: { duration: 0.3 } }
              }}
            >
              <CardTitle 
                className={`${
                  title === "Attic Insulation Costs Depend on:" 
                    ? "text-6xl md:text-7xl mb-10"
                    : "text-xl md:text-2xl mb-3"
                } font-bold text-[#94B9AF] dark:text-[#94B9AF]/90 font-montserrat-alternates tracking-tight`}
              >
                {title}
              </CardTitle>
              <CardDescription className="mt-2 text-gray-600 dark:text-gray-300 space-y-4">
                {typeof description === 'string' ? (
                  <p className="text-lg font-montserrat">{description}</p>
                ) : (
                  <div className="space-y-6">
                    {descriptionLines.map((item: string, index: number) => {
                      if (item.match(/^\d/)) {
                        // For numbered items
                        return (
                          <div key={index} className="flex items-start gap-5">
                            <span className="text-3xl font-bold text-[#94B9AF]">{item.charAt(0)}</span>
                            <p className="text-2xl font-montserrat leading-relaxed">{item.slice(1).trim()}</p>
                          </div>
                        )
                      }
                      return (
                        <p key={index} className="text-2xl font-montserrat leading-relaxed">{item}</p>
                      )
                    })}
                  </div>
                )}
              </CardDescription>
            </motion.div>
          </CardHeader>

          <CardFooter className="p-0 mt-4 flex justify-center">
            <Link href={getHref()}>
              <Button 
                className="bg-[#94B9AF] hover:bg-[#94B9AF]/90 text-white font-semibold px-8 py-3
                  transition-all duration-300 rounded-lg shadow-md hover:shadow-lg
                  group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2
                  transition-transform duration-300 group-hover:translate-x-1">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 
                    group-hover:translate-x-1" 
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Button>
            </Link>
          </CardFooter>
        </div>
      </motion.div>
    </Card>
  )
} 