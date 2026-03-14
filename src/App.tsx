import { StarField } from './components/StarField'
import './App.css'

function App() {
  return (
    <div className="app">
      <StarField />
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
            href="https://the-midwest-blockathon.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="devpost-button"
          >
            View projects on Devpost
          </a>
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
        <a className="footer-link" href="mailto:hack@kublockchain.com">
          Contact us
        </a>
      </footer>
    </div>
  )
}

export default App
