import React from 'react';
import '../ComponentStyling/Hero.css';
import logo from '../Assets/Herologo1.png';
import BackgroundAnimation from './BackgroundAnimation';

function Hero() {
    return (

        <div className="sticky top-0 h-[100vh] flex flex-col">

            <BackgroundAnimation />

            {/* Overlay med vertikala ränder */}
            <div className="absolute inset-0 z-0 pointer-events-none stripe-overlay"></div>

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">

                <div className="px-4 mx-auto sm:px-6 lg:px-8 w-full" id="navbar">
                    <div className="flex items-center justify-center h-16 lg:h-20">

                        <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
                            </svg>
                            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10" id="navbar-items">
                            <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> PROJECTS </a>
                            <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> ABOUT ME </a>
                            <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> CONTACT </a>
                        </div>
                    </div>
                </div>


                <div className="sticky top-0 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex-grow flex items-center justify-center">

                    {/* <div class="bigHeroText">

                        <h1>
                            SW
                        </h1>
                    </div> */}

                    <div className="smallHeroText sticky top-0 ">
                        <h2>
                            SANNA WIKLUND
                        </h2>
                    </div>


                </div>

            </div>
            
        </div>
    );
}

export default Hero;