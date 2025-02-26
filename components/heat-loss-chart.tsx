"use client"

import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Card } from "@/components/ui/card"

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ["Attic", "Walls", "Windows", "Doors", "Floor"],
  datasets: [
    {
      data: [40, 30, 10, 10, 10],
      backgroundColor: [
        "#2563EB", // Attic - stronger blue
        "#0EA5E9", // Walls - sky blue
        "#22C55E", // Windows - green
        "#334155", // Doors - slate
        "#64748B", // Floor - lighter slate
      ],
      hoverBackgroundColor: [
        "#1D4ED8",
        "#0284C7",
        "#16A34A",
        "#1E293B",
        "#475569",
      ],
      borderWidth: 2,
      borderColor: "white",
      hoverBorderWidth: 3,
      hoverOffset: 10,
    },
  ],
}

export function HeatLossChart() {
  const options = {
    layout: {
      padding: {
        top: 10,
        bottom: 20,
        left: 50,
        right: 50,
      }
    },
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
        labels: {
          usePointStyle: true,
          padding: 30,
          font: {
            size: 16,
            weight: 600,
            family: "Inter, sans-serif",
          },
          generateLabels: (chart: any) => {
            const datasets = chart.data.datasets;
            return chart.data.labels.map((label: string, i: number) => ({
              text: `  ${label}  `,
              fillStyle: datasets[0].backgroundColor[i],
              strokeStyle: datasets[0].backgroundColor[i],
              lineWidth: 0,
              pointStyle: 'circle',
              padding: 25,
              datasetIndex: i,
              textAlign: 'center' as const,
            }));
          },
          color: undefined,
          boxWidth: 24,
          boxHeight: 24,
        }
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        titleColor: "#334155",
        bodyColor: "#334155",
        bodyFont: {
          size: 14,
          family: "Inter, sans-serif",
        },
        padding: 12,
        boxPadding: 8,
        borderColor: "#E2E8F0",
        borderWidth: 1,
        displayColors: true,
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            return ` ${label}: ${value}%`;
          }
        }
      }
    },
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 2000,
      easing: "easeInOutQuart" as const,
    },
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg">
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-2xl md:text-4xl font-montserrat-alternates font-bold mb-6 text-center">
            Heat Loss in Irish Homes
          </h2>
          <p className="font-montserrat text-base mb-4">
            {/* ... */}
          </p>
          {/* Chart */}
          <div className="w-full max-w-md">
            <Pie 
              data={data}
              options={options}
            />
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center items-center gap-4 w-full max-w-xl">
            {data.labels.map((label, index) => (
              <div 
                key={label} 
                className="px-5 py-2.5 rounded-lg bg-gray-800 text-white 
                  dark:bg-white dark:text-gray-800 shadow-sm hover:shadow-md
                  transition-all duration-200 flex items-center gap-3
                  min-w-[120px] justify-center"
              >
                <span 
                  className="inline-block w-4 h-4 rounded-full shadow-inner" 
                  style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 