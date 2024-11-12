import React,{useState,useEffect} from "react";
import { BsReceipt } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import ChartDiagram from "./ChartsDiagrams/ChartDiagram";
import LineDiagram from "./ChartsDiagrams/LineDiagram";
import ProgressBar from "./ProgressBar";
import { HiOutlineUsers } from "react-icons/hi";
import { BsClipboard2Data } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";
const BarChart = ({type,chartTitle,progressBarWidth,amount,barColor,icon,iconBg,badgeBg,data}) => {

let [changeBarColor,setChangeBarColor] = useState(barColor);
let [changeIcon,setChangeIcon] = useState(icon);
let [changeIconBg,setChangeIconBg] = useState(iconBg);

useEffect(()=>{
  if(barColor === "bg-primary"){
  setChangeBarColor('#417AFF');
  
  }

  else if(barColor === "bg-dark"){
    setChangeBarColor('black')
  }
  else if(barColor === 'bg-danger'){
    setChangeBarColor('#D03F3F')
  }
else{
  setChangeBarColor('green')
}
if(icon === 'order-icon'){
setChangeIcon(<BsReceipt />);

}
else if(icon === 'user-icon'){
  setChangeIcon(<HiOutlineUsers />);
}
else if(icon === 'clipboard-icon'){
  setChangeIcon(<BsClipboard2Data />);
}
else{
  setChangeIcon('');
}
if(iconBg === 'bg-primary'){
setChangeIconBg('#CCE4FF')
}
else if(iconBg === 'bg-dark'){
setChangeIconBg('#A3A3A3')
}
else if(iconBg === 'bg-danger'){
setChangeIconBg('#FAF4F0')
}
},[barColor,icon,iconBg])
  return (
    <>
    <div className="w-full lg:w-[31.3%] m-[10px]" >

      <div className=" border-[#00000033] border bg-white ">
        {/*progressbar */}
        
        <ProgressBar barWidth={progressBarWidth} progressBgColor={changeBarColor}/>
        {/*progressbar end */}
        {/*chart body */}
        <div className="p-[24px] flex flex-col justify-between h-full ">
          {/*wrapper 1-start */}
          <div className="flex  justify-between items-center ">
            <div className="flex flex-col gap-2">
              <p className="font-[600] text-[17px] text-[#000000bf]">{chartTitle}</p>
              <p className=' flex gap-2 justify-between'>
                
                <span className={`bg-[#daefe4] h-[20px]  py-0 px-[10px] text-[11px] font-[500] flex gap-2 items-center  ${badgeBg === 'bg-success' ? 'bg-[#daefe4] text-[#47ad77]':''}
                
                ${badgeBg === 'bg-danger' ? 'bg-[#f6d9d9] text-[#d03f3f]':''}
                `}>
                 {
                  badgeBg === 'bg-success' &&
                  <BsGraphUpArrow className=""/>

                 } 
                 {
                  badgeBg === 'bg-danger' &&
                  <BsGraphDownArrow />

                 } 

                1.33% </span>vs last month

                
              </p>
            </div>
            <div className=" flex items-center justify-center w-[48px] h-[48px]" style={{backgroundColor:changeIconBg}}>
              <span className={`text-[26px] !opacity-[1] `} style={{color:changeBarColor}}>{changeIcon}</span>
            </div>
          </div>
          {/*wrapper 1-end */}

          {/*wrapper 2-start */}
          <div className="flex flex-wrap  items-end w-full">
            <div className="flex items-center w-1/2" >
              <span className="text-[25px] font-[700] ">

               
                
                {
                  chartTitle === 'Active users' ? <FaRegUser /> : <BsCurrencyDollar />
                  

                }
                </span>
              <h3 className="text-[25px] font-[700] leading-[50px]">{amount}</h3>
            </div>
            <div className='h-full '>
              {
                type === 'bar' &&
                <ChartDiagram chartType={type} progressBgColor={changeBarColor} chartData={data}/>

              }

              {
                type === 'line' &&
                <LineDiagram chartType={type}/>

              }

           
            </div>
          </div>
          {/*wrapper 2-end */}
        </div>
        {/*chart body end*/}
      </div>
    </div>
    </>
  );
};

export default BarChart;
