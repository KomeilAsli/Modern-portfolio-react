import { skills } from '../data/portfolioData.js'

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Tools I use.</h2>
      </div>

      <div className="skills-cloud">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  )
}

export default Skills
