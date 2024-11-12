import React from "react";

const CheckboxField = ({disabled,bgColor,label,checked,id}) => {
  return (
    <>
      <div className="flex items-center gap-[6px]">
        <input
          type="checkbox"
          name=""
          id={id}
          className={`w-[16px] h-[16px]`} style={{accentColor:bgColor}}
          disabled={disabled == true ? disabled : false}
          defaultChecked={checked === true ? checked : false}
        />
        
        <label htmlFor={id} className={`font-[600] text-[16px] ${disabled == true ? 'opacity-50': '' }`}>
          {label}
        </label>
      </div>
    </>
  );
};

export default CheckboxField;
