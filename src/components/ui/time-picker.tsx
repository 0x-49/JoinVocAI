import * as React from "react"
import { Clock } from "lucide-react"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function TimePicker() {
  const hours = Array.from({ length: 24 }, (_, i) => i)
  const minutes = Array.from({ length: 60 }, (_, i) => i)

  return (
    <div className="flex items-end gap-2">
      <div className="grid gap-2">
        <Label htmlFor="hours">Hours</Label>
        <Select>
          <SelectTrigger id="hours" className="w-[110px]">
            <Clock className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Hour" />
          </SelectTrigger>
          <SelectContent>
            {hours.map((hour) => (
              <SelectItem key={hour} value={hour.toString()}>
                {hour.toString().padStart(2, "0")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="minutes">Minutes</Label>
        <Select>
          <SelectTrigger id="minutes" className="w-[110px]">
            <SelectValue placeholder="Minute" />
          </SelectTrigger>
          <SelectContent>
            {minutes.map((minute) => (
              <SelectItem key={minute} value={minute.toString()}>
                {minute.toString().padStart(2, "0")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
