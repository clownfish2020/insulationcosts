"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  layout?: "responsive" | "fixed"
}

export function ImageCarousel({ images, layout = "fixed" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => 
        current === images.length - 1 ? 0 : current + 1
      )
    }, 3000)

    return () => clearInterval(timer)
  }, [images.length])

  const navigate = (direction: number) => {
    setCurrentIndex((current) => {
      const newIndex = current + direction
      if (newIndex < 0) return images.length - 1
      if (newIndex >= images.length) return 0
      return newIndex
    })
  }

  return (
    <div className={`relative ${layout === "responsive" ? "w-full h-full" : ""}`}>
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        fill
        className="object-cover transition-all duration-500"
        sizes="(max-width: 600px) 100vw, 600px"
        priority
      />
      
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-black/20 hover:bg-black/40 text-white"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-black/20 hover:bg-black/40 text-white"
          onClick={() => navigate(1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
} 