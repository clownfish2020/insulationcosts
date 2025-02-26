"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PhoneCall, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

// Make sure you have these UI components installed:
// npm install @radix-ui/react-dialog
// npm install @radix-ui/react-popover
// npm install @radix-ui/react-label
// npm install date-fns

export function CallbackForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>("")
  const [isOpen, setIsOpen] = useState(false)

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", 
    "14:00", "15:00", "16:00", "17:00"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, phone, date, time })
    setIsOpen(false)
    setName("")
    setPhone("")
    setDate(undefined)
    setTime("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.div 
          className="h-6 w-6 cursor-pointer relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <PhoneCall className="h-6 w-6 text-[#94B9AF] transition-colors duration-200 group-hover:text-[#94B9AF]/80" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#94B9AF] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Request Callback
          </span>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] shadow-2xl backdrop-blur-sm bg-white/95 
        dark:bg-gray-900/95 border-[#94B9AF]/20 font-montserrat">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center text-[#94B9AF] drop-shadow-sm font-montserrat">
            Request a Callback
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4 font-montserrat">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#94B9AF] font-medium">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="h-12 transition-all duration-200 hover:border-[#94B9AF]/50 focus:border-[#94B9AF] focus:ring-1 focus:ring-[#94B9AF] shadow-sm"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[#94B9AF] font-medium">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
              className="h-12 transition-all duration-200 hover:border-[#94B9AF]/50 focus:border-[#94B9AF] focus:ring-1 focus:ring-[#94B9AF] shadow-sm"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-[#94B9AF] font-medium">Preferred Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-12 justify-start text-left font-normal transition-all duration-200",
                    "hover:border-[#94B9AF]/50 hover:bg-[#94B9AF]/5",
                    "focus:ring-1 focus:ring-[#94B9AF] shadow-sm",
                    !date && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4 text-[#94B9AF]" />
                  {date ? format(date, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 border-[#94B9AF]/20 shadow-xl" align="start">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => {
                    const today = new Date()
                    const twoMonthsFromNow = new Date()
                    twoMonthsFromNow.setMonth(today.getMonth() + 2)
                    
                    return date < today || date > twoMonthsFromNow
                  }}
                  className="rounded-lg border-[#94B9AF]/20"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label className="text-[#94B9AF] font-medium">Preferred Time</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-12 justify-start text-left font-normal transition-all duration-200",
                    "hover:border-[#94B9AF]/50 hover:bg-[#94B9AF]/5",
                    "focus:ring-1 focus:ring-[#94B9AF] shadow-sm",
                    !time && "text-muted-foreground"
                  )}
                >
                  <Clock className="mr-2 h-4 w-4 text-[#94B9AF]" />
                  {time ? time : "Select a time"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48 p-2 border-[#94B9AF]/20 shadow-xl" align="start">
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot}
                      type="button"
                      variant={time === slot ? "default" : "outline"}
                      className={cn(
                        "h-9 transition-all duration-200 hover:scale-105",
                        time === slot 
                          ? "bg-[#94B9AF] hover:bg-[#94B9AF]/90 shadow-md" 
                          : "hover:border-[#94B9AF] hover:text-[#94B9AF]"
                      )}
                      onClick={() => {
                        setTime(slot)
                        const button = document.activeElement as HTMLElement
                        button?.blur()
                      }}
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 bg-[#94B9AF] hover:bg-[#94B9AF]/90 transition-all duration-300
              shadow-md hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100
              focus:ring-2 focus:ring-[#94B9AF] focus:ring-offset-2"
          >
            Submit Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 