import { useEffect } from 'react'

const VIDEO_URL_BY_YEAR = {
  2026: 'https://www.youtube.com/embed/ADniVEe4AEk',
  2025: 'https://www.youtube.com/embed/cfyqkR7vFYs',
}

const YEAR_INFO = {
  2026: {
    description: 'The 2026 Midwest Blockathon brought together passionate builders for 36 hours of blockchain innovation at the University of Kansas. This year, we had 100+ checkins and 26 submissions!',
    devpostUrl: 'https://the-midwest-blockathon.devpost.com/',
    devpostLabel: 'View 2026 projects on Devpost',
  },
  2025: {
    description: 'This was our inaugural year with 80+ checkins and 20 submissions! It started out as a 20 hours hackathon, rather than the current 36 hours.',
    devpostUrl: 'https://midwest.devpost.com',
    devpostLabel: 'View 2025 projects on Devpost',
  },
}

type YearPopupProps = {
  year: 2025 | 2026 | null
  onClose: () => void
}

export function YearPopup({ year, onClose }: YearPopupProps) {
  const info = year ? YEAR_INFO[year] : null

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (year) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [year, onClose])

  if (!year || !info) return null

  return (
    <div className="year-popup-overlay" onClick={onClose}>
      <div className="year-popup" onClick={(e) => e.stopPropagation()}>
        <button
          className="year-popup-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h3 className="year-popup-title">Midwest Block-a-thon {year}</h3>
        <p className="year-popup-description">{info.description}</p>
        <div className="year-popup-video">
          <iframe
            src={VIDEO_URL_BY_YEAR[year]}
            title={`Midwest Block-a-thon ${year} Highlights`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <a
          href={info.devpostUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="year-popup-devpost"
        >
          {info.devpostLabel}
        </a>
      </div>
    </div>
  )
}
