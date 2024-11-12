import React from 'react'

const ProgressBar = ({barWidth,progressBgColor}) => {
  return (
  <>
  <div className="bg-[#e5e5e5] h-[5px] !border-t-0">
          <div
            className=" h-[5px]"
            style={{ width: `${barWidth}%` ,backgroundColor:`${progressBgColor}`}}
          ></div>
        </div>
  
  </>
  )
}

export default ProgressBar
