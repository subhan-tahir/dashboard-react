import React, { useState,useEffect } from "react";

const SelectMenu = ({inputSize}) => {
  let [changeInputSize,setChangeInputSize] = useState(inputSize);
  useEffect(()=>{
    // setChangeInputSize(inputSize)
if(inputSize === "sm"){
setChangeInputSize(`${'p-[5px]'}`)
}
else if(inputSize === "md"){
setChangeInputSize(`${'p-[8px]'}`)
}
else if(inputSize === "lg"){
setChangeInputSize(`${'p-[12px]'}`)
}
else{
  setChangeInputSize(``);
}
  },[inputSize])
  return (
    <>
      <div className="w-full mb-3 box-border ">
        
        <select
          name=""
          id=""
          className={`border border-[#0003]  w-[100%] ${changeInputSize}  px-2 outline-none `}
        >
          <option value="">Open this select menu</option>
          <option value="">One</option>
          <option value="">two</option>
          <option value="">Three</option>
        </select>
      </div>
    </>
  );
};

export default SelectMenu;
