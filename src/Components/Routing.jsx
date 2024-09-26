import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BasicElements from './BasicElements'

const Routing = ({sidebarToggle}) => {
  return (
    <>
    <Routes>
    <Route path='/basicElements' element={<BasicElements />}></Route>


    </Routes>
    
    
    </>
  )
}

export default Routing