import { useMemo, useState } from 'react'
import { projects } from '../data/portfolioData.js'

const filters = ['All', 'Design', 'Frontend']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.type === activeFilter)
  }, [activeFilter])

  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Work</p>
          <h2>Selected concepts.</h2>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Use the filters to explore different project types.</p>
      </div>

      <div className="filter-row" aria-label="Project filters">
        {filters.map((filter) => (
          <button
            className={activeFilter === filter ? 'filter-button is-active' : 'filter-button'}
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="project-list">
        {visibleProjects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-number">0{index + 1}</div>
            <div>
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="project-highlight">
              <span>{project.highlight}</span>
              <a href={project.link} aria-label={`View ${project.title}`}>
                View →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
