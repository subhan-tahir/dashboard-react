import React, { useState } from "react";
import InputField from "../Allfields/InputField";
import FloatingElements from "./FloatingElements";
import Switches from "./Switches";
import CheckBoxes from "./CheckBoxes";
import InputSizes from "./InputGroup/InputSizes";
import BasicForm from "./basicforms/BasicForm";
import InlineForm from "./InlineForm";
import HorizontalForm from "./HorizontalForm";
import FormRow from "./FormRow";
import Textarea from "../Allfields/Textarea";
import SelectField from "../Allfields/SelectField";
import MultiSelect from "../Allfields/MultiSelect";

const BasicElements = () => {
  const [inputType, setInputType] = useState("text");
  // let formElementsData1 =
  //     {
  //         type: 'text',
  //         label: 'Text',

  //     };
  //    let formElementsData2 =  {
  //         type: 'email',
  //         label: 'Email',
  //         placeHolder: 'Email',
  //     },
  //   let formElementsData3 =   {
  //         type: 'password',
  //         label: 'Password',

  //         value: 'password',
  //     };
  //     let formElementsData4 =
  //     {
  //         type: 'text',
  //         label: 'Password',
  //         placeholder:'placeholder',
  //     },

  let changeTypeHandler = () => {
    setInputType(!inputType);
  };
  return (
    <>
      <div className="bg-[white]">
        <div className="border border-[#0003] w-full mb-4">
          <div className="p-4 border leading-[37px] border-b w-full">
            <h1 className="font-bold text-[20px] leading-[37px]">
              Input Types
            </h1>
            <p className="text-[#000000bf] text-[15px] leading-[22px] ">
              Most common form control, text-based input fields. Includes
              support for all HTML5 types:{" "}
              <span className="text-[#d03f3f]">text</span>,{" "}
              <span className="text-[#d03f3f]">password</span>,{" "}
              <span className="text-[#d03f3f]">datetime</span>,{" "}
              <span className="text-[#d03f3f]">datetime-local</span>,
              <span className="text-[#d03f3f]"> date</span>,{" "}
              <span className="text-[#d03f3f]">month</span>,{" "}
              <span className="text-[#d03f3f]">time</span>,{" "}
              <span className="text-[#d03f3f]">week</span>,{" "}
              <span className="text-[#d03f3f]">number</span>,
              <span className="text-[#d03f3f]"> email</span>,{" "}
              <span className="text-[#d03f3f]">url</span>,
              <span className="text-[#d03f3f]"> search</span>,
              <span className="text-[#d03f3f]"> tel</span>, and color.
            </p>
          </div>
          <div className="flex flex-wrap w-full p-3">
            <div className="sm:w-1/2 w- p-2">
              <InputField type={"text"} label={"Text"} />
              <InputField
                type={"email"}
                label={"Email"}
                placeholder={"Email"}
              />
              <InputField
                type={"password"}
                label={"password"}
                value={"password"}
              />

              <div className="w-full   mb-3">
                <p className="mb-2 font-[500]">Show/Hide Password</p>
                <div className="border border-[#0003] p-2 relative">
                  <input
                    type={inputType ? "password" : "text"}
                    name=""
                    className="w-full  outline-none "
                    placeholder="Enter your password"
                    onChange={(e) => setInputType(e.target.value)}
                  />
                  <span
                    className="p-2 bg-[#E5E5E5] absolute h-full top-0  right-0 px-4 border-l border-[#a79797]"
                    onClick={changeTypeHandler}
                  ></span>
                </div>
              </div>
              <InputField
                type={"text"}
                label={"Placeholder"}
                placeholder={"placeholder"}
              />
              <Textarea />

              {/* <div className='w-full p-3  mb-2'>
                                <p className='mb-2 font-[500] '>Readonly</p>
                                <input type="text" name="" className='border border-[#0003] w-[100%] p-2 outline-none ' value='Readonly value' readOnly />
                            </div> */}
              <InputField
                type={"text"}
                label={"Readonly"}
                value={"Readonly value"}
                readOnly={true}
              />
              <InputField
                type={"text"}
                label={"Disabled"}
                value={"Disabled value"}
                disabled={true}
              />
              <InputField
                type={"text"}
                label={"Static control"}
                value={"email@example.com"}
                readOnly={true}
              />
              <InputField
                type={"text"}
                label={"Helping text"}
                placeholder={"Helping Text"}
                message={
                  "A block of help text that breaks onto a new line and may extend beyond one line." }
                popOverMessage={'This is Popover'}  

              />
            </div>
            <div className="sm:w-1/2 w-full p-2">
             <SelectField />
              <MultiSelect />
              <InputField type={"file"} label={"Default file input"} />
              <InputField type={"date"} label={"Date"} />
              <InputField type={"month"} label={"Month"} />
              <InputField type={"time"} label={"Time"} />
              <InputField type={"week"} label={"week"} />
              <InputField type={"number"} label={"Number"} />
              <InputField type={"color"} label={"Color"} />
              <InputField type={"range"} label={"Range"} />


              {/* <div className="w-full p-3  mb-2">
                <p className="mb-2 font-[500]">Range</p>
                <input
                  type="range"
                  name=""
                  id=""
                  className="border-0 outline-none  w-[100%]   cursor-pointer"
                  min={0}
                  max={100}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <FloatingElements />
      <Switches />
      <CheckBoxes />
      <InputSizes />
      <BasicForm />
      <InlineForm />
      <HorizontalForm />
      <FormRow />
    </>
  );
};

export default BasicElements;
