import React, { useState } from 'react';
import '../ComponentStyling/Hero.css';
import BackgroundAnimation from './BackgroundAnimation';

function Hero() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <div className="relative h-screen flex flex-col">
            <BackgroundAnimation />
            <div className="absolute inset-0 z-0 pointer-events-none stripe-overlay"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col w-full h-full items-center justify-between pt-4">

                {/* Navbar */}
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-center h-16 lg:h-20">

                        {/* Mobilmenu - button*/}
                        <button
                            type="button"
                            className="absolute left-4 p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-700"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                // Stäng-ikon
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger-menu
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                                </svg>
                            )}
                        </button>

                        {/* Desktop */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-10" id="navbar-items">
                            <button onClick={() => scrollToSection("AboutMe")} className="text-base text-white hover:text-yellow-300 transition">ABOUT ME</button>
                            <button onClick={() => scrollToSection("Projects")} className="text-base text-white hover:text-yellow-300 transition">PROJECTS</button>
                            <button onClick={() => scrollToSection("Contact")} className="text-base text-white hover:text-yellow-300 transition">CONTACT</button>
                        </div>
                    </div>

                    {/* Mobil (dropdown) */}
                    {isMobileMenuOpen && (
                        <div className="flex flex-col items-center space-y-4 mt-4 lg:hidden">
                            <button onClick={() => { scrollToSection("AboutMe"); setIsMobileMenuOpen(false); }} className="text-base text-white hover:text-yellow-300 transition">ABOUT ME</button>
                            <button onClick={() => { scrollToSection("Projects"); setIsMobileMenuOpen(false); }} className="text-base text-white hover:text-yellow-300 transition">PROJECTS</button>
                            <button onClick={() => { scrollToSection("Contact"); setIsMobileMenuOpen(false); }} className="text-base text-white hover:text-yellow-300 transition">CONTACT</button>
                        </div>
                    )}
                </div>

                {/* Hero Text */}
                <div className="flex-grow flex items-center justify-center px-4 text-center">
                    <div className="smallHeroText">
                        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
                            SANNA WIKLUND
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
