import { HeroHeader } from './ComponentesHome/HeroHeader/HeroHeader'
import { SkillBadges } from './ComponentesHome/SkillBadges/SkillBadges'
import { HeroFooter } from './ComponentesHome/HeroFooter/HeroFooter'
import './Home.css'

export function Home() {
  return (
    <section id="home" className="container py-5 home-container">
      <div className="row justify-content-center w-100">
        <div className="col-lg-10">
          <HeroHeader />
          <SkillBadges />
          <HeroFooter />
        </div>
      </div>
    </section>
  )
}
