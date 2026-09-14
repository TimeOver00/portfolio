import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import EducationSection from './components/EducationSection'
import LanguagesInterests from './components/LanguagesInterests'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <ThemeToggle />
      <div className="wrap">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <EducationSection />
        <LanguagesInterests />
        <Footer />
      </div>
    </>
  )
}

export default App
