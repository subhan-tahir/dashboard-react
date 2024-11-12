import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BasicElements from './BasicElements'
import ChartPage from './ChartPage'

const Routing = ({sidebarToggle}) => {
  return (
    <>
    <Routes>
    <Route path='/' element={<ChartPage />}></Route>
    <Route path='/basicElements' element={<BasicElements />}></Route>


    </Routes>
    
    
    </>
  )
}

export default Routing