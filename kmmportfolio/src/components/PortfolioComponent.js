import React, { useEffect, useState, useRef } from 'react';
import 'animate.css'; // Import animate.css library
import '../App.css';

function PortfolioComponent() {
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
    <div id="#home-navpoint" className={`main-container ${isVisible ? 'animate__animated animate__bounce' : ''}`} ref={componentRef}>
      <div className="main-header">
        <h1 className="header">Hey, I am Khayelihle</h1>
        <p className="header-cap">
          a Software Network Engineer
        </p>
      </div>
    </div>
  );
}

export default PortfolioComponent;
