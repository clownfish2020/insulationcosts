"use client"

import { motion } from "framer-motion"
import { 
  PhoneCallIcon, 
  Menu, 
  Home, 
  MessageCircle, 
  Bot 
} from "lucide-react"
import Link from "next/link"
import { CallbackForm } from "./callback-form"

interface FooterMenuProps {
  onToggleSidebar?: () => void;
}

type MenuItem = {
  icon: JSX.Element;
  label: string;
  color: string;
} & (
  | { href: string; action?: never; component?: never }
  | { action: () => void; href?: never; component?: never }
  | { component: JSX.Element; href?: never; action?: never }
)

export function FooterMenu({ onToggleSidebar }: FooterMenuProps) {
  const menuItems: MenuItem[] = [
    {
      icon: <Home className="h-6 w-6" />,
      label: "Home",
      href: "/",
      color: "#22C55E"
    },
    {
      icon: <PhoneCallIcon className="h-6 w-6" />,
      label: "Call Back",
      component: <CallbackForm />,
      color: "#2563EB"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      label: "WhatsApp",
      href: "https://wa.me/353123456789",
      color: "#25D366"
    },
    {
      icon: <Bot className="h-6 w-6" />,
      label: "AI Chat",
      href: "/chat",
      color: "#9333EA"
    },
    {
      icon: <Menu className="h-6 w-6" />,
      label: "Menu",
      action: onToggleSidebar!,
      color: "#94B9AF"
    }
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#922636] shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <nav className="flex justify-around items-center">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1,
                type: "spring",
                stiffness: 300
              }}
            >
              {'component' in item ? (
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: item.color }}
                  >
                    {item.component}
                  </motion.div>
                  <span className="text-sm mt-1">{item.label}</span>
                </div>
              ) : 'action' in item ? (
                <button 
                  onClick={item.action}
                  className="flex flex-col items-center text-gray-700 dark:text-white 
                    hover:text-[#94B9AF] dark:hover:text-[#94B9AF] transition-colors"
                >
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="text-sm mt-1">{item.label}</span>
                </button>
              ) : (
                <Link 
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex flex-col items-center text-gray-700 dark:text-white 
                    hover:text-[#94B9AF] dark:hover:text-[#94B9AF] transition-colors"
                >
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="text-sm mt-1">{item.label}</span>
                </Link>
              )}
            </motion.div>
          ))}
        </nav>
      </div>
    </div>
  )
} 