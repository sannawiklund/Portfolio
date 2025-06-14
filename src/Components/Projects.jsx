import { Component } from 'react';
import SvgFlux from './SvgFlux';
import '../ComponentStyling/Projects.css';

function Projects() {
  return (
    <div class="sticky top-0 h-[100vh] flex flex-col items-center justify-center bg-white " id="Projects">
      <SvgFlux className="absolute inset-0 z-0" />


      <div className="relative z-10 text-black text-center"> 
        <h2 className="text-4xl font-bold">PROJECTS</h2>
        <p className="mt-2">Scroll Down</p>
      </div>
    </div>
  );
}

export default Projects;

