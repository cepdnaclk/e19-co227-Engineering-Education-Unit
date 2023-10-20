import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Navbarmenu from './components/menu/Navbarmenu';
import RoutesConfig from './components/menu/RoutesConfig';
import Footer from './components/Footer/Footer';
import AppBar from './components/Appbar/Appbar';


function App() {
  return (
    <div className="App">
      <div className="Appbar">
        <AppBar />
      </div>
      {/*<main className="ContentContainer">*/}
        <Router basename="/">
          <div className="Navbarmenu">
            <Navbarmenu />
          </div>
          <div className = "page">
           <RoutesConfig />
          </div>
          
        </Router>
        <Footer />
      {/*</main>*/}
    </div>
  );
}


export default App;
/*
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbarmenu from './components/menu/Navbarmenu';
import RoutesConfig from './components/menu/RoutesConfig';
import Footer from './components/Footer/Footer';
import AppBar from './components/Appbar/Appbar';

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 100) {
      // Show the Appbar when close to the top of the page
      setVisible(true);
    } else {
      // Determine scroll direction and hide/show Appbar accordingly
      setVisible(currentScrollPos < prevScrollPos);
    }

    setPrevScrollPos(currentScrollPos);
  };

  return (
    <div className="App">
      <div className={`Appbar ${visible ? 'visible' : ''}`}>
        <AppBar />
      </div>
      <main className="ContentContainer">
        <Router basename="/">
          <div className="Navbarmenu">
            <Navbarmenu />
          </div>
          <RoutesConfig />
        </Router>
        <Footer />
      </main>
    </div>
  );
}

export default App;*/

/*import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbarmenu from './components/menu/Navbarmenu';
import RoutesConfig from './components/menu/RoutesConfig';
import Footer from './components/Footer/Footer';
import AppBar from './components/Appbar/Appbar';

function App() {
  const [isAppbarVisible, setAppbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setAppbarVisible(false);
      } else {
        setAppbarVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className={`Appbar ${isAppbarVisible ? 'visible' : ''}`}>
        <AppBar />
      </div>
      <main className="ContentContainer">
        <Router basename="/">
          <div className="Navbarmenu">
            <Navbarmenu />
          </div>
          <RoutesConfig />
        </Router>
        <Footer />
      </main>
    </div>
  );
}

export default App;*/

/*import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbarmenu from './components/menu/Navbarmenu';
import RoutesConfig from './components/menu/RoutesConfig';
import Footer from './components/Footer/Footer';
import AppBar from './components/Appbar/Appbar';

function App() {
  const [isAppbarVisible, setAppbarVisible] = useState(true);
  const [isNavbarmenuVisible, setNavbarmenuVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setAppbarVisible(false);
        setNavbarmenuVisible(false);
      } else {
        setAppbarVisible(true);
        setNavbarmenuVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className={`Appbar ${isAppbarVisible ? 'visible' : ''}`}>
        <AppBar />
      </div>
      <main className="ContentContainer">
        <Router basename="/">
          <div className={`Navbarmenu ${isNavbarmenuVisible ? 'visible' : ''}`}>
            <Navbarmenu />
          </div>
          <RoutesConfig />
        </Router>
        <Footer />
      </main>
    </div>
  );
}

export default App;*/





