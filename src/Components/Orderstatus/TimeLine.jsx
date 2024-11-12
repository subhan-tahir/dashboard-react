import React from "react";

const TimeLine = ({title,des,time,icon,rotateIcon}) => {
  // let[timelineIcon,setTimelineIcon] = useState(icon);
  // useEffect(()=>{
  //     setTimelineIcon(icon)
  //   // if(icon === 'upload-icon'){
  //   //   setTimelineIcon(<MdUpload/>)
  //   // }
  //   // else if(icon === 'airplane-icon'){
  //   //   setTimelineIcon(<IoMdAirplane />)
  //   // }

  // })
  return (
    <>
      <div className="timeline-item flex gap-2">
        <div className="timeline-icon">
          {
            icon  &&
          <span className={`relative icon rotate-${rotateIcon? rotateIcon : ''}` } >{icon}</span>
          }
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[#33b0e0] font-bold">{title}</h3>
          <p className="text-[14px]">
           {des}
          </p>
          <span className="text-[13px] text-[#000000bf] ">{time}</span>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
