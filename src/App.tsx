import { StarField } from './components/StarField'
import { MLHTrustBadge } from './components/MLHTrustBadge'
import './App.css'

function App() {
  return (
    <div className="app">
      <StarField />
      <MLHTrustBadge />
      <aside className="past-years">
        <h3 className="past-years-title">Past years</h3>
        <a href="https://the-midwest-blockathon.devpost.com/" target="_blank" rel="noopener noreferrer" className="past-years-link">2026</a>
        <a href="https://midwest.devpost.com" target="_blank" rel="noopener noreferrer" className="past-years-link">2025</a>
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
