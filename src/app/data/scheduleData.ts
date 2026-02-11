/**
 * Schedule editable content — change only this file to update the agenda.
 * Days: March 6, 7, 8. Tracks = column headers. Events = blocks in the grid.
 */

export type DayId = 'mar6' | 'mar7' | 'mar8'
export type TrackId = string

export interface ScheduleDay {
  id: DayId
  label: string
  shortLabel: string
  date: string // YYYY-MM-DD
}

export interface ScheduleTrack {
  id: TrackId
  name: string
}

export interface ScheduleEvent {
  id: string
  dayId: DayId
  trackId: TrackId
  startTime: string // e.g. "10:00 AM"
  endTime: string   // e.g. "2:00 PM"
  title: string
  speaker?: string
  location?: string
}

// ——— Edit below ———

export const SCHEDULE_DAYS: ScheduleDay[] = [
  { id: 'mar6', label: 'Day 1 Fri, Mar 6', shortLabel: 'Mar 6', date: '2026-03-06' },
  { id: 'mar7', label: 'Day 2 Sat, Mar 7', shortLabel: 'Mar 7', date: '2026-03-07' },
  { id: 'mar8', label: 'Day 3 Sun, Mar 8', shortLabel: 'Mar 8', date: '2026-03-08' },
]

export const SCHEDULE_TRACKS: ScheduleTrack[] = [
  { id: 'eaton2', name: 'EATON 2' },
  { id: 'leep2', name: 'LEEP2 Atrium' },
  { id: 'other', name: 'OTHER EVENTS' },
]

export const SCHEDULE_EVENTS: ScheduleEvent[] = [
  // ——— Fri Mar 6 ———
  {
    id: 'doors-open',
    dayId: 'mar6',
    trackId: 'leep2',
    startTime: '3:00 PM',
    endTime: '5:00 PM',
    title: 'Doors open for hackers',
  },
  {
    id: 'mentors-panel',
    dayId: 'mar6',
    trackId: 'eaton2',
    startTime: '5:00 PM',
    endTime: '6:00 PM',
    title: 'Mentors Panel',
  },
  {
    id: 'opening-ceremony',
    dayId: 'mar6',
    trackId: 'eaton2',
    startTime: '6:00 PM',
    endTime: '6:30 PM',
    title: 'Opening Ceremony',
  },
  {
    id: 'friday-dinner',
    dayId: 'mar6',
    trackId: 'leep2',
    startTime: '6:00 PM',
    endTime: '7:00 PM',
    title: 'Dinner',
  },
  {
    id: 'workshop1',
    dayId: 'mar6',
    trackId: 'eaton2',
    startTime: '7:15 PM',
    endTime: '8:00 PM',
    title: 'Workshop #2',
  },
  {
    id: 'hacking-begins',
    dayId: 'mar6',
    trackId: 'leep2',
    startTime: '8:00 PM',
    endTime: '10:00 PM',
    title: 'Hacking Begins',
  },
  {
    id: 'mini-event',
    dayId: 'mar6',
    trackId: 'leep2',
    startTime: '10:00 PM',
    endTime: '11:00 PM',
    title: 'Fun Mini-Event',
  },
  // ——— Sat Mar 7 ———
  {
    id: 'saturday-midnight-snack',
    dayId: 'mar7',
    trackId: 'leep2',
    startTime: '12:00 AM',
    endTime: '12:30 AM',
    title: 'Midnight Snack',
  },
  {
    id: 'saturday-breakfast',
    dayId: 'mar7',
    trackId: 'leep2',
    startTime: '8:00 AM',
    endTime: '9:00 AM',
    title: 'Breakfast',
  },
  {
    id: 'yoga-session',
    dayId: 'mar7',
    trackId: 'leep2',
    startTime: '9:00 AM',
    endTime: '10:00 AM',
    title: 'Morning Yoga',
  },
  {
    id: 'saturday-lunch',
    dayId: 'mar7',
    trackId: 'leep2',
    startTime: '12:00 PM',
    endTime: '1:00 PM',
    title: 'Lunch',
  },
  {
    id: 'therapy-dogs',
    dayId: 'mar7',
    trackId: 'other',
    startTime: '1:00 PM',
    endTime: '6:00 PM',
    title: 'Therapy Dogs',
  },
  {
    id: 'workshop2',
    dayId: 'mar7',
    trackId: 'eaton2',
    startTime: '2:00 PM',
    endTime: '4:00 PM',
    title: 'Workshop #2',
  },
  {
    id: 'workshop3',
    dayId: 'mar7',
    trackId: 'eaton2',
    startTime: '4:00 PM',
    endTime: '6:00 PM',
    title: 'Workshop #3',
  },
  {
    id: 'saturday-dinner',
    dayId: 'mar7',
    trackId: 'leep2',
    startTime: '6:00 PM',
    endTime: '7:00 PM',
    title: 'Dinner',
  },
  {
    id: 'ping-pong-tournament',
    dayId: 'mar7',
    trackId: 'leep2',
    startTime: '7:30 PM',
    endTime: '10:00 PM',
    title: 'Ping Pong Tournament!',
  },
  // ——— Sun Mar 8 ———
  {
    id: 'sunday-midnight-snack',
    dayId: 'mar8',
    trackId: 'leep2',
    startTime: '12:00 AM',
    endTime: '12:30 AM',
    title: 'Midnight Snack',
  },
  {
    id: 'sunday-breakfast',
    dayId: 'mar8',
    trackId: 'leep2',
    startTime: '8:00 AM',
    endTime: '9:00 AM',
    title: 'Breakfast',
  },
  {
    id: 'hacking-ends',
    dayId: 'mar8',
    trackId: 'other',
    startTime: '8:00 AM',
    endTime: '8:30 AM',
    title: 'Hacking Ends (submissions hard deadline)',
  },
  {
    id: 'judging',
    dayId: 'mar8',
    trackId: 'other',
    startTime: '9:00 AM',
    endTime: '11:00 AM',
    title: 'Judging',
  },
  {
    id: 'company-expo',
    dayId: 'mar8',
    trackId: 'leep2',
    startTime: '9:00 AM',
    endTime: '11:00 AM',
    title: 'Company Expo',
  },
  {
    id: 'closing-ceremony',
    dayId: 'mar8',
    trackId: 'eaton2',
    startTime: '12:00 PM',
    endTime: '3:00 PM',
    title: 'Closing Ceremony',
  },
  {
    id: 'event-ends',
    dayId: 'mar8',
    trackId: 'other',
    startTime: '3:00 PM',
    endTime: '4:00 PM',
    title: 'End of the 2026 Midwest Block-a-thon!',
  },
]
