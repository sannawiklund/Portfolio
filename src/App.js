import './App.css';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe'; 
import Projects from './Components/Projects'; 
import Contact from './Components/Contact'; 


export default function App() {
  return (

    <div className = "portfolioContainer">

        <Hero></Hero>

          <br></br>

        <AboutMe></AboutMe>

          <br></br>

        <Projects></Projects>

          <br></br>
        
        <Contact></Contact>

          <br></br>


      </div>

  )
}
