import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Process from './components/Process.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
