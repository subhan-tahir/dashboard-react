import React, { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import './App.css';
import Routing from './Components/Routing';
import Footer from './Components/Footer';

const App = () => {
  const [activeHeader, setActiveHeader] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  let [activeLink,setActiveLink] = useState(false);
  const [device, setDevice] = useState();

  // let toggleHandler = () => {
  //   setActiveHeader(!activeHeader);
  // };

  let toggleHandler = () => {
    if(device == 'sm'){
    setOverlay(!overlay);
    setActiveHeader(!activeHeader);
    document.body.classList.toggle('overflow-hidden');
  }
  else{
      setActiveHeader(!activeHeader);
    }
  };

  // let linkToggleHandler = () => {
  //   // if(!activeLink){
  //     setOverlay(false);
  //     setActiveHeader(true);
  //     document.body.classList.remove('overflow-hidden');
  // };

  const handleResize = () => {
    setTimeout(() => {
      setWidth(window.innerWidth);
    }, 200);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (width < 800) {
      setDevice('sm');
      setActiveLink(true);
      setActiveHeader(true);
    } else {
      setDevice('lg');
      setActiveLink(false);
      setActiveHeader(false);
    }
  }, [width]);

  return (
    <>
      <div className="w-full">
        <Sidebar 
          sidebarToggle={activeHeader} 
          device={device} 

          // activeLinkToggle={linkToggleHandler}
          linkActive={activeLink}
        />
        <div className={`${activeHeader ? (device === 'lg' ? 'ml-[80px]' : 'ml-[0]') : 'sm:ml-[285px]'} transition-all ease-in-out duration-500`}>
          <Header 
            btnToggle={toggleHandler} 
            // btnToggle1={toggleHandler1} 
            sidebarToggle={activeHeader} 
          />
          <div className="p-3 bg-[#FAF4F0]"> 
            <Routing sidebarToggle={activeHeader} />
          </div>
          <Footer />
        </div>
      </div>
      {
        overlay &&
        <div onClick={toggleHandler} className={`z-[50]  flex w-[100%] h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.6)] overflow-hidden`}></div>

      }
      
    </>
  );
};

export default App;
