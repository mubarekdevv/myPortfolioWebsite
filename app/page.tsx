
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Works from "@/components/works"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </main>
  )
}
