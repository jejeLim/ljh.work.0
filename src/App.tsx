import { useReveal } from '@/hooks/useReveal'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { Hero } from '@/components/sections/Hero/Hero'
import { Marquee } from '@/components/sections/Marquee/Marquee'
import { About } from '@/components/sections/About/About'
import { Skills } from '@/components/sections/Skills/Skills'
import { Works } from '@/components/sections/Works/Works'
import { Websites } from '@/components/sections/Websites/Websites'
import { Craft } from '@/components/sections/Craft/Craft'
import { Services } from '@/components/sections/Services/Services'
import { ProjectDetail } from '@/components/sections/ProjectDetail/ProjectDetail'
import { ScrollTop } from '@/components/ui/ScrollTop/ScrollTop'

function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Works />
        <Websites />
        <Craft />
        <Services />
        <ProjectDetail />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}

export default App
