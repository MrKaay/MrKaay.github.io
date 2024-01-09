import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import PortfolioComponent from './components/PortfolioComponent';
import Certificates from './components/Certificates';
import About from './components/About';

function App() {
  useEffect(() => {
    const updateViewportMetaTag = () => {
      // Find the existing viewport meta tag
      const viewportMetaTag = document.querySelector('meta[name="viewport"]');

      // If the viewport meta tag exists, update its content attribute
      if (viewportMetaTag) {
        viewportMetaTag.setAttribute('content', 'width=device-width, initial-scale=1.0');
      } else {
        // If the viewport meta tag doesn't exist, create a new one and add it to the document's head
        const newViewportMetaTag = document.createElement('meta');
        newViewportMetaTag.setAttribute('name', 'viewport');
        newViewportMetaTag.setAttribute('content', 'width=device-width, initial-scale=1.0');
        
        document.head.appendChild(newViewportMetaTag);
      }
    };

    // Call the function to update the viewport meta tag
    updateViewportMetaTag();

    // Reset scroll position to the top when the component mounts or refreshes
    window.scrollTo(0, 0);

    // Ensure scroll position reset on page navigation
    const clearScrollPosition = () => {
      window.scrollTo(0, 0);
    };

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
      window.addEventListener('beforeunload', clearScrollPosition);
    }

    return () => {
      window.removeEventListener('beforeunload', clearScrollPosition);
    };
  }, []);

  return (
    <div className="App">
       <a id="home-navpoint"></a>
      <NavBar /> 
      <PortfolioComponent />
      <a id="about-navpoint"></a>
      <About />
      <a id="projects-navpoint"></a>
      <Projects />
      <a id="certifications-navpoint"></a>
      <Certificates />
    </div>
  );
}

export default App;
