import type { Metadata } from "next"
import { Montserrat, Montserrat_Alternates } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { ClientLayout } from "@/components/client-layout"

// Optimize font loading
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  variable: "--font-montserrat-alternates",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Insulation Costs Ireland",
  description: "Find out the costs of insulation in Ireland",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${montserratAlternates.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'