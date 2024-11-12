import React from "react";

const Textarea = () => {
  return (
    <>
      <div className="w-full  mb-3">
        <label className="mb-2 font-[500] ">Textarea</label>
        <textarea
          name=""
          rows="5"
          className="w-full outline-none border border-[#0003] p-2"
        ></textarea>
      </div>
    </>
  );
};

export default Textarea;
