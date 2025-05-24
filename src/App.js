import './App.css';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe'; 
import Projects from './Components/Projects'; 
import Contact from './Components/Contact'; 


export default function App() {
  return (

    <div className = "portfolioContainer" >

        <Hero></Hero>

        <AboutMe></AboutMe>

        <Projects></Projects>
        
        <Contact></Contact>

      </div>

  )
}
