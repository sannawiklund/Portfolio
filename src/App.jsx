import './App.css';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Pages/Resume';

export default function App() {
  return (

    <div className="portfolioContainer scroll-smooth" >

      <Hero></Hero>

      <AboutMe></AboutMe>

      <Projects></Projects>

      <Contact></Contact>

      <Resume></Resume>

    </div>

  )
}
