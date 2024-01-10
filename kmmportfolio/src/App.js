import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import PortfolioComponent from './components/PortfolioComponent';
import Certificates from './components/Certificates';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  const fadeInElement = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(fadeInElement, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Adjust this threshold as needed
    });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div className="App">
      <NavBar />
      <a id="home-navpoint"></a>
      <div ref={componentRef}>
        <PortfolioComponent isVisible={isVisible} />
      </div>
      <a id="about-navpoint"></a>
      <About />
      <a id="projects-navpoint"></a>
      <Projects />
      <a id="certifications-navpoint"></a>
      <Certificates />
      <a id="contact-navpoint"></a>
      <Contact />
    </div>
  );
}

export default App;
