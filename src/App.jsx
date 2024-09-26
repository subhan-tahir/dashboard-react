import React, { useState,useRef } from 'react'
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'
import './App.css'
import Routing from './Components/Routing'

const App = () => {
  const [activeHeader, setActiveHeader] = useState(false);
  const [overlay, setOverlay] = useState(false);
// let ref = useRef();
  let toggleHandler = () => {
  //  document.body.classList.add('overflow-hidden')
    setActiveHeader(!activeHeader);
    setOverlay(true)
  }
  let overlayHandler = ()=>{
  // document.body.classList.remove('overflow-hidden');
  
  setActiveHeader(true)   
setOverlay(false) 
}
  return (
    <>
      {/* <BasicElements /> */}
      <div>
        <Sidebar sidebarToggle={activeHeader} />
        <div className={`${activeHeader ? 'ml-0' : 'ml-[300px]'}  transition-all ease-in-out duration-500`}>


          <Header btnToggle={toggleHandler} sidebarToggle={activeHeader}/>
          <div className='mt-[80px] p-5 '> 
            <Routing sidebarToggle={activeHeader} />

          </div>
        </div>
      </div>
      <div onClick={overlayHandler}  className={`  sm:hidden flex  ${overlay ? "w-[100vw] h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.6)] overflow-hidden" : ''}`}></div>
    </>
  )
}

export default App