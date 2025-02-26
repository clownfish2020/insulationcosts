"use client"

import { motion } from "framer-motion"
import { HeatLossChart } from "@/components/heat-loss-chart"
import { Card } from "@/components/ui/card"

const costFactors = [
  "The size of the attic.",
  "Purpose - storage/conversion.",
  "BER rating you require.",
  "Type of insulation you use.",
  "Grants for attic insulation.",
  "Costs of the contractor.",
]

export function InsulationInfoSection() {
  return (
    <div className="flex-1 container mx-auto px-0 md:px-4 py-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-0 md:p-6 bg-white/50 dark:bg-gray-800/50 rounded-none md:rounded-xl">
          <Card className="overflow-hidden border-0 bg-transparent">
            <div className="flex justify-center mb-6 px-4">
              <Card className="w-full md:w-auto px-4 md:px-8 py-3 bg-[#4A1C2D]/20 dark:bg-[#4A1C2D]/30 rounded-xl">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#4A1C2D] dark:text-white text-center">
                  Heat Loss in Irish Homes
                </h2>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left side - Chart */}
              <div className="w-full max-w-2xl mx-auto p-4">
                <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg">
                  <HeatLossChart />
                </div>
              </div>

              {/* Right side - List */}
              <div className="w-full max-w-2xl mx-auto p-4">
                <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg h-full">
                  <div className="bg-[#94B9AF]/90 dark:bg-[#94B9AF]/80 rounded-lg p-6 h-full">
                    <div className="flex flex-col items-center h-full">
                      <h3 className="text-2xl md:text-4xl font-semibold text-white dark:text-white mb-8">
                        Attic Insulation Costs Depend on:
                      </h3>
                      <div className="w-full space-y-4 flex-grow">
                        {costFactors.map((factor, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              delay: index * 0.1,
                              duration: 0.3,
                            }}
                            className="flex items-center gap-4 p-5 bg-white/90 dark:bg-gray-800/90 
                              text-gray-800 dark:text-white rounded-lg shadow-sm
                              hover:shadow-md transition-all duration-200"
                          >
                            <span className="flex items-center justify-center w-10 h-10 
                              bg-[#94B9AF] dark:bg-[#94B9AF] text-white rounded-full 
                              font-bold text-2xl min-w-[2.5rem] shadow-sm"
                            >
                              {index + 1}
                            </span>
                            <span className="font-medium text-xl">{factor}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Card>
      </motion.div>
    </div>
  )
} 