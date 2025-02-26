"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface AnimatedCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  content: string
  className?: string
  type?: 'attic' | 'external' | 'roof' | 'shed' | 'container'
}

const AnimatedCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  content,
  className,
  type = 'attic'
}: AnimatedCardProps) => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn("group", className)}
    >
      <Card 
        className="h-full overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
        role="article"
        tabIndex={0}
      >
        <CardHeader className="space-y-4">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.3 }}
              className="h-full w-full"
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                aria-hidden="true"
              />
            </motion.div>
          </div>
          <div>
            <CardTitle className="text-xl font-montserrat-alternates font-bold">{title}</CardTitle>
            <CardDescription className="mt-2 text-sm text-muted-foreground">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="font-montserrat text-base leading-relaxed">{content}</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href={getHref()}>
            <Button 
              className="bg-[#94B9AF] hover:bg-[#94B9AF]/90 text-white font-semibold px-6 py-2
                transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <motion.span
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.9 }}
                className="relative z-10"
              >
                Learn More
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.3 }}
                aria-hidden="true"
              />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export { AnimatedCard }

