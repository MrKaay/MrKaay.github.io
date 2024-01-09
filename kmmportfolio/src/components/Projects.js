import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import proj1 from "../assets/Project1.png";
import proj2 from "../assets/Project2.png";
import proj3 from "../assets/GalLanding.png";
import proj4 from "../assets/TechnicalDoc.png";
import './Projects.css';
import '../App.css';

const items = [
  {
    id: 1,
    src: proj2,
    altText: 'Project 1 - Survey Form',
    caption: 'The Survey Form in my portfolio is a standout feature. It\'s a carefully crafted interactive tool that goes beyond basic details, diving into user insights, preferences, and comments. Its visually captivating design, complemented by a striking background, ensures a seamless and engaging experience. This addition not only enriches user interaction but also uplifts the website\'s overall appeal, fostering a better understanding of user needs and enhancing responsiveness.',
  },
  {
    id: 2,
    src: proj1,
    altText: 'Project 2 - Tribute Page',
    caption: 'The Tribute Page I crafted is a heartfelt homage to Mr. Khaya Manyathi, showcasing his incredible journey in a captivating timeline. It\'s a tapestry of moments, from his birth in South Africa to his impactful role as a Software Network Engineer. This page is more than just HTML - it\'s a story, inviting users to explore the life of someone truly inspiring. Like the Survey Form, it\'s designed to engage, with an image that draws you in and a timeline that paints a vivid picture. It\'s a testament to his dedication and an invitation to celebrate his achievements.',
  },
  {
    id: 3,
    src: proj3,
    altText: 'Project 3 - Company Website',
    caption: 'The landing page I designed and coded was for a company onboarding website. It forms part of a web application intended to help with new employee induction, training and other information about the company. The App also has video tutorials and coding classes and uses REACTjs, ?PHP, and HTML'
  },
  {
    id: 4,
    src: proj4,
    altText: 'Project 4 - Technical Documentation',
    caption: 'This is a placeholder picture'
  },
  {
    id: 5,
    src: proj1,
    altText: 'Project 5 - Product Landing page',
    caption: 'This is a placeholder picture'
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        
          <h3 className="projlabel">{`Project ${index + 1}`}</h3>
          <img src={item.src} alt={item.altText} className="carousel-image" />
          
        <CarouselCaption captionText={item.caption} captionHeader={item.description} className="project-caption" />
      </CarouselItem>
      
    );
  });

  return (
    <div id='projects' className="main-containerProj">
      <h1 className='heading'>Here are some of my projects</h1>
      <div style={{ width: '90vw'}}>
        <Carousel activeIndex={activeIndex} next={next} previous={previous} className="custom-carousel">
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={() => {}} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} className="custom-control" />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} className="custom-control" />
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
