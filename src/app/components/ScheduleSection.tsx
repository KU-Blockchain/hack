import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import type { DayId, ScheduleEvent } from '../data/scheduleData';
import {
  SCHEDULE_DAYS,
  SCHEDULE_TRACKS,
  SCHEDULE_EVENTS,
} from '../data/scheduleData';

const GRID_START_HOUR = 8;
const GRID_END_HOUR = 24;
const PX_PER_HOUR = 56;

function parseTime(s: string): number {
  const match = s.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return 0;
  let h = parseInt(match[1], 10);
  const m = parseInt(match[2], 10);
  const pm = match[3].toUpperCase() === 'PM';
  if (h === 12) h = pm ? 12 : 0;
  else if (pm) h += 12;
  return h * 60 + m;
}

function timeLabel(hour: number): string {
  if (hour === 12) return '12:00 PM';
  if (hour === 24) return '12:00 AM';
  if (hour < 12) return `${hour}:00 AM`;
  return `${hour - 12}:00 PM`;
}

const timeSlots = Array.from(
  { length: GRID_END_HOUR - GRID_START_HOUR },
  (_, i) => GRID_START_HOUR + i
);

const gridStartMinutes = GRID_START_HOUR * 60;
const gridBodyHeight = (GRID_END_HOUR - GRID_START_HOUR) * PX_PER_HOUR;

function eventPosition(event: ScheduleEvent) {
  const start = parseTime(event.startTime);
  const end = parseTime(event.endTime);
  const top = ((start - gridStartMinutes) / 60) * PX_PER_HOUR;
  const height = ((end - start) / 60) * PX_PER_HOUR;
  return { top, height };
}

export function ScheduleSection() {
  const [selectedDay, setSelectedDay] = useState<DayId>('mar6');
  const [search, setSearch] = useState('');

  const filteredEvents = useMemo(() => {
    let list = SCHEDULE_EVENTS.filter((e) => e.dayId === selectedDay);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.organizer?.toLowerCase().includes(q) ||
          e.location?.toLowerCase().includes(q) ||
          SCHEDULE_TRACKS.find((t) => t.id === e.trackId)?.name.toLowerCase().includes(q)
      );
    }
    return list;
  }, [selectedDay, search]);

  return (
    <section className="min-h-screen px-4 py-16 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Conference Agenda
          </h1>
          <p className="text-lg text-white/70">
            Three days of talks, workshops, and networking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8"
        >
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              placeholder="Search by session title, room, speaker, sponsor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#E89A7B]/50 focus:ring-1 focus:ring-[#E89A7B]/30"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {SCHEDULE_DAYS.map((day) => (
              <button
                key={day.id}
                onClick={() => setSelectedDay(day.id)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  selectedDay === day.id
                    ? 'bg-[#E89A7B] text-[#073623]'
                    : 'bg-white/5 border border-white/20 text-white/80 hover:bg-white/10'
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <div
              className="grid min-w-[800px]"
              style={{
                gridTemplateColumns: `80px repeat(${SCHEDULE_TRACKS.length}, minmax(140px, 1fr))`,
                gridTemplateRows: `auto ${gridBodyHeight}px`,
              }}
            >
              {/* Header row */}
              <div className="sticky top-0 z-10 bg-[#073623]/95 border-b border-r border-white/10 py-3 px-2 text-center text-xs font-semibold uppercase tracking-wider text-white/60">
                TIME
              </div>
              {SCHEDULE_TRACKS.map((track) => (
                <div
                  key={track.id}
                  className="sticky top-0 z-10 bg-[#073623]/95 border-b border-white/10 py-3 px-2 text-center text-xs font-semibold uppercase tracking-wider text-white/70"
                >
                  {track.name}
                </div>
              ))}

              {/* Time column: stacked labels */}
              <div
                className="border-r border-white/10 flex flex-col"
                style={{ height: gridBodyHeight }}
              >
                {timeSlots.map((hour) => (
                  <div
                    key={hour}
                    className="flex items-start pt-1 px-2 text-sm text-white/50 border-b border-white/10 border-dashed shrink-0"
                    style={{ height: PX_PER_HOUR }}
                  >
                    {timeLabel(hour)}
                  </div>
                ))}
              </div>

              {/* Track columns: background + event blocks */}
              {SCHEDULE_TRACKS.map((track, trackIndex) => (
                <div
                  key={track.id}
                  className={`relative ${trackIndex > 0 ? 'border-l border-white/10 border-dashed' : ''}`}
                  style={{ height: gridBodyHeight }}
                >
                  {/* Hour lines */}
                  {timeSlots.slice(1).map((hour) => (
                    <div
                      key={hour}
                      className="absolute left-0 right-0 border-b border-white/10 border-dashed"
                      style={{ top: (hour - GRID_START_HOUR) * PX_PER_HOUR }}
                    />
                  ))}
                  {/* Events */}
                  {filteredEvents
                    .filter((e) => e.trackId === track.id)
                    .map((event) => {
                      const { top, height } = eventPosition(event);
                      return (
                        <motion.div
                          key={event.id}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute left-1 right-1 rounded-lg bg-white/10 border border-white/10 p-2 cursor-pointer hover:bg-white/15 hover:border-[#E89A7B]/30 transition-colors z-[1]"
                          style={{
                            top: `${top}px`,
                            height: `${Math.max(height - 4, 44)}px`,
                          }}
                        >
                          <p className="text-xs text-white/50 mb-0.2">
                            {event.startTime} – {event.endTime}
                          </p>
                          <p className="text-xs font-medium text-white truncate" title={event.title}>
                            {event.title}
                            {event.organizer ? ` ${event.organizer}` : ''}
                          </p>
                          {event.location && (
                            <p className="text-xs text-white/40 truncate mt-0.5">
                              {event.location}
                            </p>
                          )}
                        </motion.div>
                      );
                    })}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
