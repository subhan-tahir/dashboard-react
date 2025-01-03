import React from "react";
import { IoMdMore } from "react-icons/io";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import TimeLine from "./TimeLine";
import { IoMdAirplane } from "react-icons/io";
import { MdUpload } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
const OrderItems = () => {
  return (
    <>
      <div className='w-[100%] border border-[#00000033]  bg-white mt-2'>
        {/*card header */}
        <div className="p-4 border-[#00000033] border-b">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-[20px] mb-2">Orders Status</h1>
              <p>Your Orders</p>
            </div>
            <div className='relative'>
             
              <div className='p-0'>
                <DropdownButton
                  id="dropdown-timeline-button"
                  className='more-btn-timeline'
                  title={ <IoMdMore className="text-[23px] cursor-pointer "/>}
                >
                  <div className="dropdown-box">
                  <Dropdown.Item href="#/action-1" >
                  Sales Report</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" >
                    Export Report
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Profit 
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Action 
                  </Dropdown.Item>

                  </div>
                </DropdownButton>
              </div>
            </div>
          </div>
        </div>

        {/*card-header-end */}

        <div className="p-4 flex flex-col gap-3">
         <TimeLine title={'You sold an item'} des={' Paul Burgess just purchased “Hyper - Admin Dashboard”!'} time={'5 minutes ago'} icon={<MdUpload/>}/>
         <TimeLine title={'Product on the Bootstrap Market'} des={' Paul Burgess juDave Gamache added Admin Dashboar 30 minutes ago'} time={'30 minutes ago'} icon={<IoMdAirplane />}/>
         <TimeLine title={'Robert Delaney'} des={'Send you message "Are you there?"'} time={'2 hours ago'} icon={<FaMicrophone />}/>
         <TimeLine title={'Audrey Tobey'} des={'Uploaded a photo "Error.jpg'} time={'14 hours ago'}  icon={<MdUpload/>}/>
         <TimeLine title={'You sold an item'} des={'Paul Burgess just purchased “Hyper - Admin Dashboard”!'} time={'16 hours ago'}  icon={<MdUpload/>}/>
         <TimeLine title={'Product on the Bootstrap Market'} des={' Dave Gamache added Admin Dashboard'} time={'22 hours ago'} icon={<IoMdAirplane />}/>
         <TimeLine title={'Robert Delaney'} des={'Send you message "Are you there?"'} time={'2 days ago'} rotateIcon={'45deg'} icon={<FaMicrophone />}/>
        
        </div>
      </div>
    </>
  );
};

export default OrderItems;
