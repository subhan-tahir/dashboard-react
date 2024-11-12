import React from "react";

const Button = ({text}) => {
  return (
    <>
      <div>
        <button className="bg-[#007aff] text-white px-3 py-2 " type="submit">
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
