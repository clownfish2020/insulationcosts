"use client"

import { Menu, Moon, Sun, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import Link from "next/link"
import { motion } from "framer-motion"
import { ClientOnly } from "@/components/client-only"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CallbackForm } from "@/components/callback-form"

export function Header({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#4A1C2D] shadow-md">
      <div className="flex items-center justify-between px-4 py-3 text-gray-900 dark:text-white">
        {/* Left side - Menu button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className="h-12 w-12 rounded-xl bg-[#94B9AF]/20 dark:bg-[#94B9AF]/30 hover:bg-[#94B9AF]/30 
              dark:hover:bg-[#94B9AF]/40 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <ClientOnly>
              <Menu className="h-7 w-7 text-[#94B9AF] dark:text-[#94B9AF]" />
            </ClientOnly>
          </Button>
        </motion.div>

        {/* Center - Site title */}
        <h1 className="text-xl font-bold text-center">
          INSULATION COSTS IRELAND
        </h1>

        {/* Right side - Theme and Contact */}
        <div className="flex gap-3">
          <motion.div whileHover={{ scale: 1.05, rotate: 90 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-12 w-12 rounded-xl bg-amber-500/20 dark:bg-amber-400/20 hover:bg-amber-500/30 
                dark:hover:bg-amber-400/30 transition-all duration-200"
              aria-label="Toggle theme"
            >
              <ClientOnly>
                {theme === 'dark' ? (
                  <Sun className="h-7 w-7 text-amber-500 dark:text-amber-400" />
                ) : (
                  <Moon className="h-7 w-7 text-amber-500 dark:text-amber-400" />
                )}
              </ClientOnly>
            </Button>
          </motion.div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-xl bg-[#2563EB]/20 dark:bg-[#2563EB]/30 hover:bg-[#2563EB]/30 
                    dark:hover:bg-[#2563EB]/40 transition-all duration-200"
                  aria-label="Contact options"
                >
                  <ClientOnly>
                    <Mail className="h-7 w-7 text-[#2563EB] dark:text-[#2563EB]" />
                  </ClientOnly>
                </Button>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-2">
              <DropdownMenuItem asChild className="p-0">
                <Link 
                  href="mailto:info@example.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#2563EB]/10 
                    dark:hover:bg-[#2563EB]/20 transition-all duration-200"
                >
                  <div className="p-2 rounded-lg bg-[#2563EB]/20 dark:bg-[#2563EB]/30">
                    <ClientOnly>
                      <Mail className="h-5 w-5 text-[#2563EB] dark:text-[#2563EB]" />
                    </ClientOnly>
                  </div>
                  <span className="text-base font-medium">Email Us</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="p-0">
                <Link 
                  href="https://wa.me/353123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#25D366]/10 
                    dark:hover:bg-[#25D366]/20 transition-all duration-200"
                >
                  <div className="p-2 rounded-lg bg-[#25D366]/20 dark:bg-[#25D366]/30">
                    <ClientOnly>
                      <MessageCircle className="h-5 w-5 text-[#25D366] dark:text-[#25D366]" />
                    </ClientOnly>
                  </div>
                  <span className="text-base font-medium">WhatsApp</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

