import '../ComponentStyling/AboutMe.css';
import SvgBlob from './SvgBlob';
import profilePicture from '../Assets/ProfilePicture.jpg';
import { FaGithub, FaLinkedin, FaFileAlt, FaMapMarkerAlt } from 'react-icons/fa';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";;




function AboutMe() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (

    <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-zinc-950 overflow-hidden px-4" id='background-container'>

      <SvgBlob/>

      <section className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">

        <h3 className="text-4xl font-bold text-white" id='my-Name'>SANNA WIKLUND</h3>

        {/* Blob + Floating links wrapper */}
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px]">

          {/* SVG Blob */}

          <div data-aos="zoom-in">
            <svg className="h-full w-full z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="profilePattern" x="0" y="0" width="1" height="1">
                  <image
                    x="0"
                    y="-8"
                    width="80%"
                    height="80%"
                    preserveAspectRatio="xMidYMid slice"
                    href={profilePicture}
                  />
                </pattern>
              </defs>
              <path
                fill="url(#profilePattern)"
                d="M40,-62.6C52.2,-54.5,62.5,-43.9,66.9,-31.4C71.3,-18.9,69.6,-4.6,65.9,8.3C62.2,21.1,56.4,32.5,49.2,45.2C42.1,57.9,33.7,72.1,22.2,75.3C10.7,78.5,-3.9,70.7,-14.8,62.1C-25.7,53.5,-32.8,44.1,-44.9,35.8C-57,27.5,-74,20.3,-82.1,7.7C-90.3,-4.8,-89.5,-22.7,-80.8,-34.8C-72,-46.9,-55.2,-53.3,-40.4,-60.2C-25.6,-67,-12.8,-74.3,0.6,-75.2C13.9,-76.1,27.9,-70.6,40,-62.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          {/* Links with icons */}
          <a
            href="https://github.com/sannawiklund"
            className="floating-link absolute top-1/2 transform -translate-y-1/2"
            style={{ left: '-40px' }}
            target="_blank"
            rel="noopener noreferrer"
            id='github'
          >
            <FaGithub size={35} />
          </a>

          <a
            href="https://www.linkedin.com/in/sannawiklund/"
            className="floating-link absolute right-0 top-1/2 transform -translate-y-1/2"
            style={{ right: '-0px' }}
            target="_blank"
            rel="noopener noreferrer"
            id='linkedin'
          >
            <FaLinkedin size={35} />
          </a>

          <a
            href="#"
            className="floating-link absolute left-1/2 top-0 transform -translate-x-1/2"
            target="_blank"
            rel="noopener noreferrer"
            id='resume'
          >
            <FaFileAlt size={35} />
          </a>

          <a
            href='https://maps.app.goo.gl/hs4MGQbRe3HDgBWt6'
            target="_blank"
            className="floating-link absolute left-1/2 bottom-0 transform -translate-x-1/2"
            id='location'
          >
            <FaMapMarkerAlt size={35} />
          </a>
        </div>

        <h4 className="text-2xl" id='my-Title'>FULLSTACK DEVELOPER | .NET</h4>

      </section>
    </div>

  );
}

export default AboutMe;
