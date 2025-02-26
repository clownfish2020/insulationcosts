"use client"

import { useState } from "react"
import { FooterMenu } from "./footer-menu"
import { AppSidebar } from "./sidebar"
import { QuickContactMenu } from "./quick-contact-menu"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {children}
      <QuickContactMenu />
      <FooterMenu onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <AppSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </>
  )
} 