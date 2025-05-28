import { Component } from 'react';
import '../ComponentStyling/AboutMe.css';
import profilePicture from '../Assets/ProfilePicture.jpg';

function AboutMe() {
  return (
    <div className="sticky top-0 h-[90vh] flex flex-col items-center justify-center bg-zinc-950">
      <section>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

          <div className="grid items-center grid-cols-1 md:">

            <div>
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl flex items-center justify-center" id='name'>
                SANNA WIKLUND
              </h2>

              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8" id='link-elements'>
                <a href="https://www.linkedin.com/in/sannawiklund/" className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">LinkedIn</a>

                <br></br>

                <a href="https://github.com/sannawiklund" className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">GitHub</a>

                <br></br>

                <a href="#" className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">Resume</a>
                
                <br></br>

                <p>
                  Sweden
                </p>

              </p>
            </div>

            <div className="relative w-[700px] h-[700px] mx-auto">
              <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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

            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl" id='title'>
              FULLSTACK DEVELOPER | .NET
            </h2>

          </div>

        </div>

      </section>
    </div>
  );
}

export default AboutMe;
