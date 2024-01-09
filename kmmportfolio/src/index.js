import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'animate.css/animate.min.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter,Route,Routes } from 'react-router-dom';
import { About } from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
    <Routes>
      {/*<Route path="/about" element={<About/>}/>*/}
    </Routes>
      <App />
    </React.StrictMode>
  </HashRouter>
);

reportWebVitals();
