import React from "react";

const RadioField = ({disabled,label,checked,bgColor}) => {
  return (
    <>
      <div className="flex items-center gap-[6px]">
        <input type="radio" name="" id="check1" className="w-[16px] h-[16px]"
        style={{accentColor:bgColor}}
        disabled={disabled == true ? disabled : ''} 
        defaultChecked={checked == true ? checked : ''}/>
        <label htmlFor="check1" className={`font-[600] text-[16px] ${disabled == true ? 'opacity-50': '' }`}>
          {label}
        </label>
      </div>
    </>
  );
};

export default RadioField;
