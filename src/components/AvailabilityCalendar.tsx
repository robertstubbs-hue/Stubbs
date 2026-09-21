import { useMemo, useState } from 'react'
import {
  addDays,
  buildWeekSchedule,
  formatSlotTime,
  formatWeekRange,
  startOfWeek,
  type TimeSlot,
} from '../data/availability'

const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function slotButtonClass(status: TimeSlot['status'], selected: boolean): string {
  const base =
    'w-full rounded-md px-2 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2'

  if (status === 'unavailable') {
    return `${base} cursor-not-allowed bg-cream-200/50 text-navy-700/30`
  }
  if (status === 'booked') {
    return `${base} cursor-not-allowed bg-navy-800/10 text-navy-700/50 line-through`
  }
  if (selected) {
    return `${base} cursor-pointer bg-gold-500 text-navy-950 shadow-md`
  }
  return `${base} cursor-pointer border border-navy-800/15 bg-white text-navy-800 hover:border-gold-500 hover:bg-cream-100`
}

export default function AvailabilityCalendar() {
  const [weekOffset, setWeekOffset] = useState(0)
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null)

  const weekStart = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return addDays(startOfWeek(today), weekOffset * 7)
  }, [weekOffset])

  const schedule = useMemo(() => buildWeekSchedule(weekStart), [weekStart])

  const selectedSlot = useMemo(() => {
    if (!selectedSlotId) return null
    for (const day of schedule) {
      const slot = day.slots.find((s) => s.id === selectedSlotId)
      if (slot) return { day, slot }
    }
    return null
  }, [selectedSlotId, schedule])

  const canGoPrev = weekOffset > 0

  return (
    <div className="rounded-2xl border border-navy-800/10 bg-white p-6 shadow-lg shadow-navy-950/5 md:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display text-2xl font-semibold text-navy-900">
            Weekly availability
          </h3>
          <p className="mt-1 text-sm text-navy-700/70">
            Click an open slot to select it, then email me to confirm your lesson.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={!canGoPrev}
            onClick={() => {
              setWeekOffset((w) => w - 1)
              setSelectedSlotId(null)
            }}
            className="rounded-lg border border-navy-800/20 px-3 py-2 text-sm font-semibold text-navy-800 transition hover:bg-cream-100 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous week"
          >
            ←
          </button>
          <span className="min-w-[10rem] text-center text-sm font-semibold text-navy-900">
            {formatWeekRange(weekStart)}
          </span>
          <button
            type="button"
            onClick={() => {
              setWeekOffset((w) => w + 1)
              setSelectedSlotId(null)
            }}
            className="rounded-lg border border-navy-800/20 px-3 py-2 text-sm font-semibold text-navy-800 transition hover:bg-cream-100"
            aria-label="Next week"
          >
            →
          </button>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-4 text-xs text-navy-700/80">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded border border-navy-800/15 bg-white" />
          Available
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-navy-800/10 line-through" />
          Booked
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-gold-500" />
          Selected
        </span>
      </div>

      <div className="overflow-x-auto">
        <div className="grid min-w-[640px] grid-cols-7 gap-2">
          {schedule.map((day, index) => (
            <div key={day.date.toISOString()} className="min-w-0">
              <div className="mb-2 border-b border-cream-200 pb-2 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-700/60">
                  {DAY_LABELS[index]}
                </p>
                <p className="font-display text-lg font-semibold text-navy-900">
                  {day.date.getDate()}
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                {day.slots.length === 0 ? (
                  <p className="py-4 text-center text-xs text-navy-700/40">—</p>
                ) : (
                  day.slots.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      disabled={slot.status !== 'available'}
                      onClick={() =>
                        setSelectedSlotId((current) =>
                          current === slot.id ? null : slot.id,
                        )
                      }
                      className={slotButtonClass(
                        slot.status,
                        selectedSlotId === slot.id,
                      )}
                      aria-pressed={selectedSlotId === slot.id}
                    >
                      {formatSlotTime(slot.hour, slot.minute)}
                    </button>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedSlot && (
        <div
          className="mt-6 rounded-xl border border-gold-500/40 bg-cream-100 p-4"
          role="status"
        >
          <p className="text-sm text-navy-800">
            <span className="font-semibold">Selected:</span>{' '}
            {selectedSlot.day.date.toLocaleDateString('en-GB', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
            })}{' '}
            at {formatSlotTime(selectedSlot.slot.hour, selectedSlot.slot.minute)}
          </p>
          <a
            href={`mailto:rob.stubbs@example.com?subject=${encodeURIComponent(
              'French lesson booking request',
            )}&body=${encodeURIComponent(
              `Hello Rob,\n\nI would like to book a French lesson on ${selectedSlot.day.date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} at ${formatSlotTime(selectedSlot.slot.hour, selectedSlot.slot.minute)}.\n\nThank you,\n`,
            )}`}
            className="mt-3 inline-flex items-center rounded-lg bg-navy-900 px-4 py-2 text-sm font-semibold text-cream-50 transition hover:bg-navy-800"
          >
            Email to book this slot
          </a>
        </div>
      )}
    </div>
  )
}
