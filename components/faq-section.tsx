"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "How long does attic insulation installation take?",
    answer: "Typically, attic insulation can be installed in 1-2 days depending on the size of your attic and the type of insulation chosen."
  },
  {
    question: "What type of insulation is best for Irish homes?",
    answer: "For Irish homes, mineral wool or fiberglass insulation is commonly used due to its excellent thermal properties and moisture resistance."
  },
  {
    question: "How much can I save on heating costs?",
    answer: "Properly installed attic insulation can reduce heating costs by up to 25-30% annually, depending on your current insulation status."
  },
  {
    question: "Are there grants available for attic insulation?",
    answer: "Yes, SEAI offers grants up to €1,500 for attic insulation through their Better Energy Homes scheme."
  },
  {
    question: "How long does insulation last?",
    answer: "Quality attic insulation can last 20-40 years when properly installed and maintained."
  }
]

export function FAQSection() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
        className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-8 shadow-lg 
          hover:shadow-xl hover:bg-white/60 dark:hover:bg-gray-800/60
          transition-all duration-300 ease-in-out backdrop-blur-sm h-full"
      >
        <div className="bg-[#94B9AF]/90 dark:bg-[#94B9AF]/80 rounded-lg p-10 h-full
          transition-all duration-300 hover:bg-[#94B9AF]/95 dark:hover:bg-[#94B9AF]/85"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white
            font-montserrat-alternates tracking-tight leading-tight"
          >
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <AccordionItem value={`item-${index}`} className="border-none w-full">
                  <AccordionTrigger 
                    className="w-full text-base hover:no-underline bg-white/90 
                      dark:bg-gray-800/90 p-5 rounded-lg text-gray-800 dark:text-white 
                      hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 
                      font-montserrat font-medium shadow-md hover:shadow-lg"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-left"
                    >
                      {item.question}
                    </motion.span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-5 text-sm text-gray-700 dark:text-gray-200 
                        bg-white/80 dark:bg-gray-800/80 rounded-lg mt-2 
                        font-montserrat leading-relaxed shadow-md"
                    >
                      {item.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </div>
  )
} 