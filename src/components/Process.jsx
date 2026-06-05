import { process } from '../data/portfolioData.js'

function Process() {
  return (
    <section className="section" id="process">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Process</p>
          <h2>Simple workflow.</h2>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A clear process makes the final result stronger.</p>
      </div>

      <div className="process-grid">
        {process.map((item) => (
          <article className="process-card" key={item.step}>
            <span>{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Process
