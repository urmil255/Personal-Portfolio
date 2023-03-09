import PortfolioContainer from '../src/ProfileContainer/Home/PortfolioContainer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

import React, { useState, useRef, useEffect } from 'react';

function SwirlCursorExample() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [angle, setAngle] = useState(0);
  const swirlRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorX(event.clientX);
      setCursorY(event.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const swirl = swirlRef.current;
    if (swirl) {
      swirl.style.top = `${cursorY}px`;
      swirl.style.left = `${cursorX}px`;
      swirl.style.transform = `rotate(${angle}deg)`;
      setAngle((angle) => angle + 0.5);
    }
  }, [cursorX, cursorY, angle]);

  return (
    <div className="swirl-cursor" ref={swirlRef} />
  );
}

function App() {
  return (

    <div className="App">
      <ToastContainer/>
    <PortfolioContainer/>
    
    </div>
  );
}


export default App;
