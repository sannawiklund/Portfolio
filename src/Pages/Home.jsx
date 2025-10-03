import '../App.css';
import Hero from '../Components/Hero';
import AboutMe from '../Components/AboutMe';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

export default function Home() {
  return (

    <div className="portfolioContainer scroll-smooth">
      <Hero />

      <section id="AboutMe">
        <AboutMe />
      </section>

      <section id="Projects">
        <Projects />
      </section>

      <section id="Contact">
        <Contact />
      </section>

      <Footer />
    </div>

  )
}
