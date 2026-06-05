import { profile, stats } from '../data/portfolioData.js'

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-content">
        <p className="eyebrow">Modern portfolio · Responsive React UI</p>
        <h1>Digital craft for clean web experiences.</h1>
        <p className="hero-text">{profile.intro}</p>

        <div className="hero-actions">
          <a className="button primary" href="#projects">
            See work
          </a>
          <a className="button secondary" href="#contact">
            Contact
          </a>
        </div>

        <div className="stats-grid" aria-label="Portfolio highlights">
          {stats.map((item) => (
            <div className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-card" aria-label="Profile overview card">
        <div className="profile-visual">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="avatar-card">
            <span className="avatar-initials">{profile.initials}</span>
          </div>
        </div>
        <div className="hero-card-content">
          <span className="availability">Open to ideas</span>
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
          <div className="mini-tags">
            <span>UX/UI</span>
            <span>React</span>
            <span>Creative UI</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
