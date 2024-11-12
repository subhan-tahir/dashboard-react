import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
const DropdownField = () => {
  return (
    <>
    
    
    <div className="w-full  mb-2">
            <label htmlFor="">Dropdowns</label>
            <div className="flex mt-2">
              <div className='p-0'>
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Dropdown"
                >
                  <div className="dropdown-box">
                  <Dropdown.Item href="#/action-1" >Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" >
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else here
                  </Dropdown.Item></div>
                </DropdownButton>
              </div>
              <div className='w-full'>
              <input type="text" name="" className='border border-[#0003] w-[100%] p-2 outline-none ' placeholder='placeholder' />
              </div>
            </div>
          </div>
    </>
  )
}

export default DropdownField
