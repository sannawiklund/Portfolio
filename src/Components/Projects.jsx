import { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import SvgFlux from './SvgFlux';
import comingSoon from '../Assets/coming_soon.jpg';

function Projects() {

  // Force re-render of the Carousel after page load
  const [carouselKey, setCarouselKey] = useState(0);

  // Sample project data
  const projects = [
    { img: comingSoon, img_alt: "", name: "Project Name", desc: "Project Coming Soon" },
    { img: comingSoon, img_alt: "", name: "Project Name", desc: "Project Coming Soon" },
    { img: comingSoon, img_alt: "", name: "Project Name", desc: "Project Coming Soon" },
    { img: comingSoon, img_alt: "", name: "Project Name", desc: "Project Coming Soon" },
    { img: comingSoon, img_alt: "", name: "Project Name", desc: "Project Coming Soon" },
    { img: comingSoon, img_alt: "", name: "Project Name", desc: "Project Coming Soon" }

  ];

  // Template for each card in the carousel
  const projectTemplate = (item) => (
    <div className='card_Container'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">

        <img className="w-full h-full" src={item.img} alt={item.img_alt} />

        <div className="px-6 py-4">

          <div className="mb-2">{item.name}</div>
          <p className="text-gray-700 text-base">{item.desc}</p>

        </div>

      </div>

    </div>
  );

  // Delay to allow DOM/layout to settle before forcing carousel re-render
  useEffect(() => {
    const timer = setTimeout(() => {
      setCarouselKey(1); // Triggers a re-render
    }, 100);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div className="sticky top-0 h-[100vh] flex flex-col items-center justify-center bg-pink-100" id="Projects">

      {/* Background SVG effect */}
      <SvgFlux
        className="absolute inset-0 z-0"
        gradientRotate="93"
        stopColor1="hsl(348, 72%, 54%)"
        stopColor2="hsl(37, 94%, 54%)"
        baseFrequency="0.003 0.003"
      />


      <div className="relative z-10 text-black text-center">
        <h2 id='project_Title'>PROJECTS</h2>
      </div>

      {/* Carousel wrapper limits overflow and width */}
      <div className="carousel-wrapper overflow-hidden w-full max-w-[1200px] mx-auto">
        <Carousel
          key={carouselKey}
          value={projects}
          numVisible={3}
          numScroll={3}
          itemTemplate={projectTemplate}
          circular={false} // No infinite loop
        />
      </div>
    </div>
  );
}

export default Projects;
