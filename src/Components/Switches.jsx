import React from "react";
import InputField from "../Allfields/InputField";
import MultiSelect from "../Allfields/MultiSelect";
import SelectMenu from "../Allfields/SelectMenu";
import ToggleField from "../Allfields/ToggleField";

const Switches = () => {
  return (
    <>
      <div className="bg-white">
        <div className="border border-[#0003] w-full">
          <div className="p-4 border leading-[37px] border-b w-full">
            <h1 className="font-bold text-[20px]">Select & Switches</h1>
          </div>
          <div className="flex flex-wrap w-full p-3">
            <div className="sm:w-1/2 w-full p-2">
          

              <SelectMenu inputSize={'md'} />
              <SelectMenu inputSize={'lg'}/>
              <SelectMenu inputSize={'sm'}/>
            </div>

            <div className="sm:w-1/2 w-full p-2">
              <div className="w-full mb-3 box-border ">
                <p className="mb-3 font-[500]">Switches</p>
                <p>
                  A switch has the markup of a custom checkbox but uses the{" "}
                  <span className="text-[#d03f3f] tex text-[12px]">
                    .form-switch{" "}
                  </span>
                  class to render a toggle switch. Switches also support the{" "}
                  <span className="text-[#d03f3f] text-[12px]">disabled </span>
                  attribute
                </p>
              </div>
              <div className="w-full box-border  mb-3 ">
                <ToggleField />
                <ToggleField />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Switches;
