import { Link } from "react-router-dom";
import '../ComponentStyling/AboutMe.css';
import SvgBlob from './SvgBlob';
import profilePicture from '../Assets/ProfilePicture.jpg';
import { FaGithub, FaLinkedin, FaFileAlt, FaMapMarkerAlt } from 'react-icons/fa';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";;
import ContactFormModal from "./ContactFormModal";


function AboutMe() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (

    <div className="sticky top-0 h-[100vh] flex items-center justify-center bg-neutral-800 overflow-hidden px-4" id='AboutMe'>

      <SvgBlob />

      <section className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">

        <h3 className="z-10 text-4xl font-bold text-white" id='my-Name'>SANNA WIKLUND</h3>

        {/* Blob + Floating links wrapper */}
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px]">

          {/* SVG Circle */}
          <div>
            <svg className="h-full w-full z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="profilePattern" x="0" y="0" width="1" height="1">
                  <image
                    x="0"
                    y="0"
                    width="160"
                    height="160"
                    preserveAspectRatio="xMidYMid slice"
                    href={profilePicture}
                  />
                </pattern>
              </defs>
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="url(#profilePattern)"
              />
            </svg>

          </div>

          {/* Links with icons */}

          {/* GitHub */}
          <div className="icon-wrapper absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-[30%]">
            <a
              href="https://github.com/sannawiklund"
              className="floating-link"
              target="_blank"
              rel="noopener noreferrer"
              id="github"
              aria-label="Visit my GitHub profile"
            >
              <FaGithub className="text-3xl sm:text-[35px]" />
            </a>
          </div>

          {/* LinkedIn */}
          <div className="icon-wrapper absolute top-1/2 right-2 sm:right-[10%] transform -translate-y-1/2 translate-x-[120%]">
            <a
              href="https://www.linkedin.com/in/sannawiklund/"
              className="floating-link"
              target="_blank"
              rel="noopener noreferrer"
              id="linkedin"
              aria-label="Visit my LinkedIn profile"
            >
              <FaLinkedin className="text-3xl sm:text-[35px]" />
            </a>
          </div>

          {/* CV */}
          <div className="icon-wrapper absolute top-6 sm:top-10 left-1/2 transform -translate-x-1/2 -translate-y-full">
            <Link
              to="/resume"
              className="floating-link"
              id="resume"
              aria-label="View my resume"
            >
              <FaFileAlt className="text-3xl sm:text-[35px]" />
            </Link>

          </div>


        </div>

        <h4 className="text-2xl z-10" id='my-Title'>FULLSTACK DEVELOPER | .NET</h4>

        <div className="z-10 flex items-center space-x-2 text-white" aria-label="Contact Form Modal">
          <ContactFormModal />
        </div>


      </section>
    </div>

  );
}

export default AboutMe;
