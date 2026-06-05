import { profile } from '../data/portfolioData.js'

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-panel">
        <div>
          <p className="eyebrow">About</p>
          <h2>Creative web maker.</h2>
        </div>
        <div className="about-copy">
          <p>{profile.summary}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor magna in purus elementum, sed luctus mi egestas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere sem vel elit sagittis, id cursus elit rhoncus.</p>
        </div>
      </div>
    </section>
  )
}

export default About
