import Navbar     from '@/components/Navbar'
import Hero       from '@/components/Hero'
import SigBar     from '@/components/SigBar'
import About      from '@/components/About'
import MenuSection from '@/components/MenuSection'
import Gallery    from '@/components/Gallery'
import Valeurs    from '@/components/Valeurs'
import Boutiques  from '@/components/Boutiques'
import MapSection from '@/components/MapSection'
import Contact    from '@/components/Contact'
import Footer     from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SigBar />
      <About />
      <MenuSection />
      <Gallery />
      <Valeurs />
      <Boutiques />
      <MapSection />
      <Contact />
      <Footer />
    </main>
  )
}
