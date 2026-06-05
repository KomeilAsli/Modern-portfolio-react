import { services } from '../data/portfolioData.js'

function Services() {
  return (
    <section className="section" id="services">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>Design. Build. Improve.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus, nunc non cursus tempor, justo arcu consequat arcu.</p>
      </div>

      <div className="card-grid three-columns">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
