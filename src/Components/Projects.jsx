import { Component } from 'react';
import SvgFlux from './SvgFlux';
import '../ComponentStyling/Projects.css';
import { Carousel } from 'primereact/carousel';
import comingSoon from '../Assets/coming_soon.jpg';


function Projects() {

  const projects = [
    {
      "img": comingSoon,
      "img_alt": "",
      "name": "Project Name",
      "desc": "Project Coming Soon"
    },
    {
      "img": comingSoon,
      "img_alt": "",
      "name": "Project Name",
      "desc": "Project Coming Soon"
    },
    {
      "img": comingSoon,
      "img_alt": "",
      "name": "Project Name",
      "desc": "Project Coming Soon"
    },
    {
      "img": comingSoon,
      "img_alt": "",
      "name": "Project Name",
      "desc": "Project Coming Soon"
    },
    {
      "img": comingSoon,
      "img_alt": "",
      "name": "Project Name",
      "desc": "Project Coming Soon"
    }
  ];

  const projectTemplate = (item) => {
    return (

      <div className='card_Container'>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-pink-200">
          <img class="w-full h-full" src={item["img"]} alt={item["img_alt"]} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{item["name"]}</div>
            <p class="text-gray-700 text-base">
              {item["desc"]}
            </p>
          </div>
        </div>
      </div>


    );
  };


  return (
    <div class="sticky top-0 h-[100vh] flex flex-col items-center justify-center bg-white " id="Projects">
      <SvgFlux className="absolute inset-0 z-0" />


      <div className="relative z-10 text-black text-center">
        <h2 className="text-4xl font-bold">PROJECTS</h2>
      </div>

      {/* <Carousel value={projects} numVisible={3} numScroll={3} responsiveOptions={null} className="custom-carousel" itemTemplate={projectTemplate} /> */}
      <Carousel value={projects} numVisible={3} numScroll={3} responsiveOptions={null} itemTemplate={projectTemplate} />

    </div>
  );
}

export default Projects;

