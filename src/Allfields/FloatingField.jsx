import React from "react";

const FloatingField = ({type,label}) => {
  return (
    <>
      <div className="w-full border border-[#0003] relative group mb-3 float-wrapper">
        
        <input
          type={type}
          name=""
          className=" w-[100%] p-3 outline-none group"
        />
        <label className="mb-2 font-[500] absolute top-[18px] group-focus:top-0 group-focus:bg-black left-[13px] group  ">
          {label}
        </label>
      </div>
    </>
  );
};

export default FloatingField;
