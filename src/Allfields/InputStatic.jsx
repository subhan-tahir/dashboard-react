import React from "react";

const InputStatic = ({label}) => {
  return (
    <>
      <div className="w-full   mb-2">
        <label className=" font-[500]">{label}</label>
        <div className="border border-[#0003] flex    mt-2">
          <span className="p-2 bg-[#E5E5E5]     px-3 border-r border-[#a79797]">
            @
          </span>
          <input
            name=""
            className="w-full p-2 outline-none bg-transparent"
            placeholder="username"
          />
        </div>
      </div>
    </>
  );
};

export default InputStatic;
