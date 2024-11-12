import React from "react";
import InputField from '../Allfields/InputField'
import FloatingField from "../Allfields/FloatingField";
import TextareaFloatingField from "../Allfields/TextareaFloatingField";
import SelectMenu from "../Allfields/SelectMenu";
import LayoutEmailField from "../Allfields/LayoutEmailField";
import LayoutMultiField from "../Allfields/LayoutMultiField";

const FloatingElements = () => {
  return (
    <>
      <div className="bg-white">
        <div className="border border-[#0003] w-full mb-4">
          <div className="p-4 border leading-[37px] border-b w-full">
            <h1 className="font-bold text-[20px]">Floating labels</h1>
            <p className="text-[#000000bf] text-[15px] leading-[22px] ">
              Wrap a pair of{" "}
              <span className="text-[#d03f3f]">
                {'<input class="form-control">'}
              </span>
              and <span className="text-[#d03f3f]"> {"<label>"} </span>elements
              in <span className="text-[#d03f3f]">.form-floating</span>to enable
              floating labels with Bootstrap’s textual form fields. A{" "}
              <span className="text-[#d03f3f]">placeholder</span> is required on
              each<span className="text-[#d03f3f]"> {"<input>"} </span>as our
              method of CSS-only floating labels uses the{" "}
              <span className="text-[#d03f3f]">:placeholder-shown</span>
              pseudo-element. Also note that the{" "}
              <span className="text-[#d03f3f]">{"<input>"}</span> must come
              first so we can utilize a sibling selector (e.g., ~).{" "}
            </p>
          </div>
          <div className="flex flex-wrap w-full p-3">
            <div className="sm:w-1/2 w-full p-2">
            <div className="mb-4 text-[14px] font-bold">
            <h3>Example</h3>

            </div>
             <FloatingField type="email" label={'Example'}/>

             <FloatingField type={'password'} label={'Password'}/>
              <TextareaFloatingField />
              {/* group-hover:top-0 group-hover:left-0 transition-all ease-in-out */}
            </div>
            <div className="sm:w-1/2 p-2 w-full">
            <div className="mb-4 text-[14px] font-bold">
            <h3>Select</h3>

            </div>
             <SelectMenu />
              <div className="flex flex-wrap gap-2 w-full mb-3 ">
                <p className="mb-2 font-[500] w-full block">layout</p>
                <LayoutEmailField />

              <LayoutMultiField />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingElements;
