import { useState } from 'react'
import { StarField } from './components/StarField'
import { MLHTrustBadge } from './components/MLHTrustBadge'
import { YearPopup } from './components/YearPopup'
import './App.css'

function App() {
  const [openYear, setOpenYear] = useState<2025 | 2026 | null>(null)

  return (
    <div className="app">
      <StarField />
      <MLHTrustBadge />
      <YearPopup year={openYear} onClose={() => setOpenYear(null)} />
      <aside className="past-years">
        <h3 className="past-years-title">Past years</h3>
        <button type="button" className="past-years-link" onClick={() => setOpenYear(2026)}>2026</button>
        <button type="button" className="past-years-link" onClick={() => setOpenYear(2025)}>2025</button>
      </aside>
      <main className="content">
        <img
          src="/transparent-logo-banner.png"
          alt="The Midwest Block-a-thon"
          className="logo"
        />
        <p className="finished-text">A huge thank you to everyone who participated, judged, and volunteered this year! </p>
        <p className="finished-text">Come again in Spring 2027!</p>
        <div className="buttons">
          <a
            href="http://hackku.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="devpost-button"
          >
            HackKU 2026
          </a>
        </div>
      </main>
      <footer className="footer">
        <a className="footer-link" href="mailto:hack@kublockchain.com">Contact us</a>
        <span className="footer-sep">·</span>
        <a className="footer-link" href="https://discord.gg/gkYm5FKk" target="_blank" rel="noopener noreferrer">Discord</a>
        <span className="footer-sep">·</span>
        <a className="footer-link" href="https://www.instagram.com/kublockchain" target="_blank" rel="noopener noreferrer">Instagram</a>
        <span className="footer-sep">·</span>
        <a className="footer-link" href="https://www.linkedin.com/company/kublockchain" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span className="footer-sep">·</span>
        <a className="footer-link" href="https://kublockchain.com" target="_blank" rel="noopener noreferrer">kublockchain.com</a>
      </footer>
    </div>
  )
}

export default App
