import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Training } from '@/components/training'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Training />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
