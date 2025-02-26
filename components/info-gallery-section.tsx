"use client"

import { FAQSection } from "@/components/faq-section"
import { GallerySection } from "@/components/gallery-section"

export function InfoGallerySection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <FAQSection />
      <GallerySection />
    </div>
  )
} 