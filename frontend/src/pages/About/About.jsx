import { AboutHeader } from './ComponentesAbout/AboutHeader/AboutHeader'
import { AboutHighlight } from './ComponentesAbout/AboutHighlight/AboutHighlight'
import { AboutActions } from './ComponentesAbout/AboutActions/AboutActions'
import { AboutStats } from './ComponentesAbout/AboutStats/AboutStats'
import './About.css'

export function About() {
  return (
    <section id="about" className="container py-5 about-container">
      <div className="row justify-content-center w-100">
        <div className="col-lg-10">
          <AboutHeader />
          <AboutHighlight />
          <AboutActions />
          <AboutStats />
        </div>
      </div>
    </section>
  )
}
