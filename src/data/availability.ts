export type SlotStatus = 'available' | 'booked' | 'unavailable'

export interface TimeSlot {
  id: string
  hour: number
  minute: number
  status: SlotStatus
}

export interface DaySchedule {
  date: Date
  slots: TimeSlot[]
}

const WEEKDAY_HOURS = [9, 10, 11, 14, 15, 16, 17, 18]
const SATURDAY_HOURS = [9, 10, 11]

function hashSeed(date: Date): number {
  const str = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

function slotStatusForDay(date: Date, hour: number, index: number): SlotStatus {
  const day = date.getDay()
  if (day === 0) return 'unavailable'

  const seed = hashSeed(date) + hour * 7 + index * 13
  if (seed % 11 === 0) return 'booked'
  if (day === 6 && hour >= 12) return 'unavailable'
  return 'available'
}

export function startOfWeek(date: Date): Date {
  const d = new Date(date)
  const day = d.getDay()
  const diff = day === 0 ? -6 : 1 - day
  d.setDate(d.getDate() + diff)
  d.setHours(0, 0, 0, 0)
  return d
}

export function addDays(date: Date, days: number): Date {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

export function formatWeekRange(weekStart: Date): string {
  const weekEnd = addDays(weekStart, 6)
  const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' }
  const start = weekStart.toLocaleDateString('en-GB', opts)
  const end = weekEnd.toLocaleDateString('en-GB', { ...opts, year: 'numeric' })
  return `${start} – ${end}`
}

export function buildWeekSchedule(weekStart: Date): DaySchedule[] {
  const days: DaySchedule[] = []
  for (let i = 0; i < 7; i++) {
    const date = addDays(weekStart, i)
    const dayOfWeek = date.getDay()
    const hours = dayOfWeek === 6 ? SATURDAY_HOURS : dayOfWeek === 0 ? [] : WEEKDAY_HOURS

    const slots: TimeSlot[] = hours.map((hour, index) => ({
      id: `${date.toISOString().slice(0, 10)}-${hour}`,
      hour,
      minute: 0,
      status: slotStatusForDay(date, hour, index),
    }))

    days.push({ date, slots })
  }
  return days
}

export function formatSlotTime(hour: number, minute: number): string {
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
}
