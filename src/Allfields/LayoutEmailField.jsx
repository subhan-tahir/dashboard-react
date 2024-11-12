import React from "react";

const LayoutEmailField = () => {
  return (
    <>
      <div className="border border-[#0003] w-[49%] px-3 pt-[20px] relative">
        <input
          type="email"
          name=""
          id=""
          placeholder="Email address"
          className=" w-[100%] border-0 outline-none relative"
        />
        <label
          htmlFor="Email address"
          className="top-0 absolute block text-[12px] font-bold pb-2 text-[#000000a6]"
        >
          Email address
        </label>
      </div>
    </>
  );
};

export default LayoutEmailField;
