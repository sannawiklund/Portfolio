import { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import SvgFlux from './SvgFlux';
// import comingSoon from '../Assets/coming_soon.jpg';
// import k6project from '../Assets/K6ResultComparer.jpg';
import desktop from '../Assets/Desktop.png';
import k6 from '../Assets/k6.png';
import project from '../Assets/project.png';
import '../ComponentStyling/Projects.css';

function Projects() {
  // Track how many cards to show based on screen width
  const [numVisible, setNumVisible] = useState(window.innerWidth < 640 ? 1 : 3);

  // Update numVisible when screen is resized
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;
      setNumVisible(isMobile ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Ensure correct initial value

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Example project data
  const projects = [
    { img: k6, img_alt: "K6 Result Comparer", name: "K6 RESULT COMPARER", link: "https://github.com/sannawiklund/K6ResultComparer" },
    { img: desktop, img_alt: "Desktop presenting my portfolio", name: "PORTFOLIO", link: "https://github.com/sannawiklund/Portfolio" },
    { img: project, img_alt: "Coming Soon", name: "PROJECT COMING SOON", link: null },
    { img: project, img_alt: "Coming Soon", name: "PROJECT COMING SOON", link: null },
    { img: project, img_alt: "Coming Soon", name: "PROJECT COMING SOON", link: null },
    { img: project, img_alt: "Coming Soon", name: "PROJECT COMING SOON", link: null }
  ];

  // Template for each card
  const projectTemplate = (item) => (
    <div className='card_Container'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {item.link ? (
          <a target="_blank" rel="noopener noreferrer" href={item.link}>
            <img className="w-full h-full" src={item.img} alt={item.img_alt} />
          </a>
        ) : (
          <img className="w-full h-full" src={item.img} alt={item.img_alt} />
        )}

        <div className="px-6 py-4">
          <div className="mb-2" id='project_Name'>{item.name}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="sticky top-0 h-[100vh] flex flex-col items-center justify-center bg-zinc-800" id="Projects">
      <div className="relative z-10 text-black text-center">
        <h2 id='project_Title'>PROJECTS</h2>
      </div>

      {/* Carousel container */}
      <div className="carousel-wrapper overflow-hidden w-full max-w-[1235px] mx-auto">
        <Carousel
          value={projects}
          numVisible={numVisible}
          numScroll={numVisible}
          itemTemplate={projectTemplate}
          circular={false}
        />
      </div>
    </div>
  );
}

export default Projects;
