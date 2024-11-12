import React from "react";

const ToggleField = () => {
  return (
    <>
      <div className="flex gap-2 mb-2  cursor-default">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <p className="text-[15px] font-[700]">Toggle this switch element</p>
      </div>
    </>
  );
};

export default ToggleField;
