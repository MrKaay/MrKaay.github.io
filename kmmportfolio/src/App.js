import React, { useEffect } from 'react';
import './App.css';
/* import Certificate from './components/Certifications'; */
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import PortfolioComponent from './components/PortfolioComponent';

function App() {
  useEffect(() => {
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
      <NavBar /> 
      <PortfolioComponent />
      <Projects />
    </div>
  );
}

export default App;
