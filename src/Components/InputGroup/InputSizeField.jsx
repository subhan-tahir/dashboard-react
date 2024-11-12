import React,{useState,useEffect} from "react";

const InputSizeField = ({label,placeholder,inputSize,fontSize}) => {
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
      <div className="w-full">
        <label htmlFor="" className=" font-[500]">
          {label}
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder={placeholder}
          className={`border border-[#0003]  w-[100%] ${changeInputSize} ${fontSize} px-2 outline-none mt-2`}
        />
      </div>
    </>
  );
};

export default InputSizeField;
