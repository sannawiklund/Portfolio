import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';
import SplitText from "./SplitText";
import StaggeredMenu from './StaggeredMenu';
import { useContact } from "../Context/ContactContext";

function Hero() {
  const { setIsOpen } = useContact();

  const handleAnimationComplete = () => {};

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'About Me', onClick: () => scrollToSection("AboutMe") },
    { label: 'Projects', ariaLabel: 'View my projects', onClick: () => scrollToSection("Projects") },
    { label: 'Experience', ariaLabel: 'View my resume', link: '#/resume' },
    { label: 'Contact', ariaLabel: 'Get in touch', onClick: () => setIsOpen(true) } // öppnar modal
  ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/sannawiklund' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/sannawiklund/' }
  ];

  return (
    <div className="relative h-screen flex flex-col">
      <BackgroundAnimation />
      <div className="absolute inset-0 z-0 pointer-events-none"></div>

      {/* Staggered Menu */}
      <div className="absolute top-0 right-0 w-full h-full z-50">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#ffe45f"
          openMenuButtonColor="#ffe45f"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF']}
          accentColor="#ff6b6b"
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </div>

      <div className="relative z-10 w-full h-full">
        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center pointer-events-none">
          <div className="smallHeroText">
            <SplitText
              text="SANNA WIKLUND"
              className="text-white text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide pointer-events-auto"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
