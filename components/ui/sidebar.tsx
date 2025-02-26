"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const SidebarContext = React.createContext<{
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
} | null>(null)

export function Sidebar({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      <div className={cn("flex h-full", className)} {...props}>
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

export function SidebarContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col h-full", className)} {...props}>
      {children}
    </div>
  )
}

// Export other Sidebar components here...

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

