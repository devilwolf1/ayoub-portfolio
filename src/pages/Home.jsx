import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Hero from '../components/sections/Hero'
import Process from '../components/sections/Process'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Stats from '../components/sections/Stats'
import TechMarquee from '../components/sections/TechMarquee'
import Testimonials from '../components/sections/Testimonials'
import WhyWorkWithMe from '../components/sections/WhyWorkWithMe'

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Projects />
      <Stats />
      <Skills />
      <Process />
      <WhyWorkWithMe />
      <Testimonials />
      <Contact />
    </>
  )
}
