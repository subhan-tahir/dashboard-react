import React from "react";

const LayoutMultiField = () => {
  return (
    <>
      <div className="border border-[#0003] w-[49%] px-3 p-3 relative">
        <select name="" id="" className="border-0  w-[100%] outline-none ">
          <option value="">Open this select menu</option>
          <option value="">One</option>
          <option value="">two</option>
          <option value="">Three</option>
        </select>
        <label
          htmlFor="Email address"
          className="top-0 absolute block text-[12px] font-bold pb-2 text-[#000000a6]"
        >
          Works with Selects
        </label>
      </div>
    </>
  );
};

export default LayoutMultiField;
