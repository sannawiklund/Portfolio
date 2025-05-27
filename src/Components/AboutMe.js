import { Component } from 'react';
import '../ComponentStyling/AboutMe.css';

function AboutMe() {
  return (

    <div class="sticky top-0 h-[100vh] flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-cyan-200" id = "AboutMe">
        <h2 class="text-4xl font-bold">The Second slide</h2>
        <p class="mt-2">Scroll Down for next slide</p>
    </div>

  );
}

export default AboutMe;
