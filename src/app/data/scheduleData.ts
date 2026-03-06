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
  endTime?: string  // e.g. "2:00 PM" — optional; if omitted, only start time is shown
  title: string
  speaker?: string
  location?: string
  description?: string
  spanAllTracks?: boolean // if true, event renders as one block across all track columns
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
    endTime: '6:00 PM',
    title: 'Doors open and check-in',
    description: 'Check in available until Saturday at Midnight. Contact the organizers through Discord if you can\'t show up at this time.',
  },
  {
    id: 'mlh-workshop-1',
    dayId: 'mar6',
    trackId: 'eaton2',
    startTime: '4:00 PM',
    endTime: '5:00 PM',
    title: 'MLH Workshop - GitHub Copilot',
  },
  {
    id: 'opening-ceremony',
    dayId: 'mar6',
    trackId: 'eaton2',
    startTime: '6:00 PM',
    endTime: '7:00 PM',
    title: 'Opening Ceremony',
  },
  {
    id: 'friday-dinner',
    dayId: 'mar6',
    trackId: 'leep2',
    startTime: '6:30 PM',
    endTime: '7:30 PM',
    title: 'Dinner',
    description: 'The Mad Greek',
  },
  {
    id: 'charlie-workshop',
    dayId: 'mar6',
    trackId: 'eaton2',
    startTime: '7:30 PM',
    endTime: '8:10 PM',
    title: 'Hackathon Rizz 101',
  },
  {
    id: 'hacking-begins',
    dayId: 'mar6',
    trackId: 'leep2',
    startTime: '8:00 PM',
    title: 'Hacking Begins!',
  },
  // {
  //   id: 'mini-event',
  //   dayId: 'mar6',
  //   trackId: 'leep2',
  //   startTime: '10:00 PM',
  //   endTime: '11:00 PM',
  //   title: 'Fun Mini-Event',
  // },
  {
    id: 'friday-midnight-snack',
    dayId: 'mar6',
    trackId: 'leep2',
    startTime: '12:00 AM',
    endTime: '1:00 AM',
    title: 'Midnight Snack',
    description: 'Taco Bell',
  },
  // ——— Sat Mar 7 ———
  {
    id: 'saturday-breakfast',
    dayId: 'mar7',
    trackId: 'leep2',
    startTime: '8:00 AM',
    endTime: '9:00 AM',
    title: 'Breakfast',
    description: 'Taylor\'s Donuts',
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
    id: 'mlh-workshop-2',
    dayId: 'mar7',
    trackId: 'eaton2',
    startTime: '11:00 AM',
    endTime: '12:00 PM',
    title: 'MLH Workshop - Gemini AI Studio',
  },
  {
    id: 'saturday-lunch',
    dayId: 'mar7',
    trackId: 'leep2',
    startTime: '12:00 PM',
    endTime: '1:00 PM',
    title: 'Lunch',
    description: 'Dillons Lunch Platters',
  },
  {
    id: 'therapy-dogs',
    dayId: 'mar7',
    trackId: 'other',
    startTime: '3:00 PM',
    endTime: '4:00 PM',
    title: 'Therapy Dogs',
  },
  {
    id: 'basketball',
    dayId: 'mar7',
    trackId: 'eaton2',
    startTime: '1:00 PM',
    endTime: '4:00 PM',
    title: 'KU / KState Watch Party',
  },
  {
    id: 'alex-workshop',
    dayId: 'mar7',
    trackId: 'eaton2',
    startTime: '4:00 PM',
    endTime: '4:40 PM',
    title: 'Case Competition Workshop',
  },
  {
    id: 'saturday-dinner',
    dayId: 'mar7',
    trackId: 'leep2',
    startTime: '6:00 PM',
    endTime: '7:00 PM',
    title: 'Dinner',
    description: 'Chettinad Indian',
  },
  {
    id: 'ping-pong-tournament',
    dayId: 'mar7',
    trackId: 'leep2',
    startTime: '7:30 PM',
    endTime: '10:00 PM',
    title: 'Ping Pong Tournament!',
    description: 'Registration will be sent out via Discord. Gift Card Prizes!',
  },
  {
    id: 'saturday-midnight-snack',
    dayId: 'mar7',
    trackId: 'leep2',
    startTime: '12:00 AM',
    endTime: '1:00 AM',
    title: 'Midnight Snack',
    description: 'Insomnia Cookies',
  },
  // ——— Sun Mar 8 ———
  {
    id: 'sunday-breakfast',
    dayId: 'mar8',
    trackId: 'leep2',
    startTime: '8:00 AM',
    endTime: '9:00 AM',
    title: 'Breakfast',
    description: 'Dillons Breakfast Platters',
  },
  {
    id: 'hacking-ends',
    dayId: 'mar8',
    trackId: 'other',
    startTime: '8:00 AM',
    title: 'Hacking Ends',
    description: 'No submissions after this time will be accepted.',
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
    endTime: '2:30 PM',
    title: 'Closing Ceremony',
  },
  {
    id: 'event-ends',
    dayId: 'mar8',
    trackId: 'other',
    startTime: '2:30 PM',
    title: 'End of the 2026 Midwest Block-a-thon!',
    description: 'Thank you for participating in the 2026 Midwest Block-a-thon, come back next year!',
    spanAllTracks: true,
  },
]
