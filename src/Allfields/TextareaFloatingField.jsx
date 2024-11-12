import React from "react";

const TextareaFloatingField = () => {
  return (
    <>
      <div className="w-full relative textarea-box mb-3">
        <p className="mb-2 font-[500] ">Textareas</p>
        <textarea
          name=""
          rows="5"
          className="w-full outline-none group block border border-[#0003] p-3"
        ></textarea>
        <label className="z-[2] mb-2 font-[500] absolute top-[45px] left-[13px] ">
          Comments
        </label>
      </div>
    </>
  );
};

export default TextareaFloatingField;
