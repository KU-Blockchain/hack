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
  organizer?: string
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
  // { id: 'other', name: 'OTHER EVENTS' },
]

export const SCHEDULE_EVENTS: ScheduleEvent[] = [
  // ——— Fri Mar 6 ———
  {
    id: 'mar6-doors',
    dayId: 'mar6',
    trackId: 'leep2',
    startTime: '3:00 PM',
    endTime: '5:00 PM',
    title: 'Doors open for hackers',
    organizer: '',
  },
  {
    id: 'mar6-mentors',
    dayId: 'mar6',
    trackId: 'eaton2',
    startTime: '5:00 PM',
    endTime: '6:00 PM',
    title: 'Mentors Panel',
    organizer: 'Nischay — Panel of people in industry',
  },
  {
    id: 'mar6-opening',
    dayId: 'mar6',
    trackId: 'eaton2',
    startTime: '6:00 PM',
    endTime: '6:30 PM',
    title: 'Opening Ceremony',
    organizer: 'Jahnvi, Nischay, Alex, Charlie, Wolfgang — Welcome (Jahnvi), Keynote (TBD), Sponsor Love (Nischay), Logistics (Jahnvi), MLH Rep Talk',
  },
  {
    id: 'mar6-dinner',
    dayId: 'mar6',
    trackId: 'leep2',
    startTime: '6:30 PM',
    endTime: '7:15 PM',
    title: 'Dinner',
    organizer: 'Alex',
  },
  {
    id: 'mar6-workshop2',
    dayId: 'mar6',
    trackId: 'eaton2',
    startTime: '7:15 PM',
    endTime: '8:00 PM',
    title: 'Workshop #2',
    organizer: 'Charlie — Max 45 min, potential gold sponsor, or how to do a web3 hackathon',
  },
  {
    id: 'mar6-hacking',
    dayId: 'mar6',
    trackId: 'leep2',
    startTime: '8:00 PM',
    endTime: '10:00 PM',
    title: 'Hacking Begins',
    organizer: 'Jahnvi',
  },
  {
    id: 'mar6-mini',
    dayId: 'mar6',
    trackId: 'leep2',
    startTime: '10:00 PM',
    endTime: '11:00 PM',
    title: 'Fun Mini-Event',
    organizer: 'Alex — TBD (mini bob ross painting, lego decompress time)',
  },
  // ——— Sat Mar 7 ———
  {
    id: 'mar7-snack',
    dayId: 'mar7',
    trackId: 'leep2',
    startTime: '12:00 AM',
    endTime: '12:30 AM',
    title: 'Midnight Snack Arrives',
    organizer: 'Alex',
  },
  {
    id: 'mar7-breakfast',
    dayId: 'mar7',
    trackId: 'leep2',
    startTime: '8:00 AM',
    endTime: '9:00 AM',
    title: 'Breakfast',
    organizer: 'Everyone',
  },
  {
    id: 'mar7-yoga',
    dayId: 'mar7',
    trackId: 'leep2',
    startTime: '9:00 AM',
    endTime: '10:00 AM',
    title: 'Morning Yoga',
    organizer: 'Jahnvi',
  },
  {
    id: 'mar7-lunch',
    dayId: 'mar7',
    trackId: 'leep2',
    startTime: '12:00 PM',
    endTime: '2:00 PM',
    title: 'Lunch Served',
    organizer: 'Everyone',
  },
  {
    id: 'mar7-workshop4',
    dayId: 'mar7',
    trackId: 'eaton2',
    startTime: '2:00 PM',
    endTime: '4:00 PM',
    title: 'Workshop #4',
    organizer: 'Wolfgang — How to publish a website using Vercel, or sponsor workshop',
  },
  {
    id: 'mar7-workshop5',
    dayId: 'mar7',
    trackId: 'eaton2',
    startTime: '4:00 PM',
    endTime: '6:00 PM',
    title: 'Workshop #5',
    organizer: 'Alex — For our business track. How to present a pitch / how case comps work',
  },
  {
    id: 'mar7-dinner',
    dayId: 'mar7',
    trackId: 'leep2',
    startTime: '6:00 PM',
    endTime: '7:30 PM',
    title: 'Dinner Served',
    organizer: 'Everyone',
  },
  {
    id: 'mar7-pingpong',
    dayId: 'mar7',
    trackId: 'leep2',
    startTime: '7:30 PM',
    endTime: '10:00 PM',
    title: 'Ping Pong Tournament Begins!',
    organizer: 'Everyone — Bracket style, with prizes',
  },
  // ——— Sun Mar 8 ———
  {
    id: 'mar8-snack',
    dayId: 'mar8',
    trackId: 'leep2',
    startTime: '12:00 AM',
    endTime: '12:30 AM',
    title: 'Midnight Snack',
    organizer: 'Everyone',
  },
  {
    id: 'mar8-breakfast',
    dayId: 'mar8',
    trackId: 'leep2',
    startTime: '8:00 AM',
    endTime: '9:00 AM',
    title: 'Breakfast',
    organizer: 'Jahnvi',
  },
  {
    id: 'mar8-hacking-ends',
    dayId: 'mar8',
    trackId: 'leep2',
    startTime: '8:00 AM',
    endTime: '8:30 AM',
    title: 'Hacking Ends (submissions hard deadline)',
    organizer: 'Jahnvi',
  },
  {
    id: 'mar8-judging',
    dayId: 'mar8',
    trackId: 'leep2',
    startTime: '9:00 AM',
    endTime: '11:00 AM',
    title: 'Judging Begins',
    organizer: 'Everyone',
  },
  {
    id: 'mar8-expo-start',
    dayId: 'mar8',
    trackId: 'leep2',
    startTime: '9:00 AM',
    endTime: '11:00 AM',
    title: 'Expo Starts',
    organizer: 'Jahnvi',
  },
  {
    id: 'mar8-expo-ends',
    dayId: 'mar8',
    trackId: 'leep2',
    startTime: '11:00 AM',
    endTime: '12:00 PM',
    title: 'Expo Ends',
    organizer: 'Jahnvi',
  },
  {
    id: 'mar8-closing',
    dayId: 'mar8',
    trackId: 'eaton2',
    startTime: '12:00 PM',
    endTime: '3:00 PM',
    title: 'Closing Ceremony',
    organizer: 'Jahnvi',
  },
  {
    id: 'mar8-ends',
    dayId: 'mar8',
    trackId: 'eaton2',
    startTime: '3:00 PM',
    endTime: '4:00 PM',
    title: 'Event Ends',
    organizer: 'Jahnvi',
  },
]
