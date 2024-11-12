import React from "react";
import InputSizeField from "./InputGroup/InputSizeField";
import InputField from "../Allfields/InputField";
import SelectMenu from "../Allfields/SelectMenu";
import CheckboxField from "../Allfields/CheckboxField";
import Button from "../Allfields/Button";
const FormRow = () => {
  return (
    <>
      <div className="bg-white mt-4">
        <div className="border border-[#0003] w-full">
          <div className="p-4 border border-b w-full">
            <h1 className="font-bold text-[20px] mb-2">Form Row</h1>
            <p>
              By adding .row & .g-2, you can have control over the gutter width
              in as well the inline as block direction.
            </p>
          </div>
          <div className="w-full">
            <div className="p-4 w-full flex flex-col gap-3 items-center">
              {/* <InputField type={formField.type} label={formField.label} placeholder={formField.placeHolder} key={fieldIndex} value={formField.value} /> */}
              {/* <InputField /> */}
              <div className="w-full flex sm:flex-row flex-col gap-2">
                <div className="sm:w-1/2">
                 <InputField label={'Email'} type={'email'} placeholder={'Email'} />
                </div>
                <div className="sm:w-1/2">
                <InputField label={'Password'} type={'password'} placeholder={'password'} />
                </div>
              </div>
               <div className="w-full">
                <InputField label={'Address'} type={'text'} placeholder={'1234 main St'} />
               
              </div> 
              <div className="w-full">
              <InputField label={'Address'} type={'text'} placeholder={'Apartment, studio, or floor'} />
              </div>
              <div className="flex gap-2 sm:flex-row flex-col items-center w-full">
                <div className="sm:w-1/2 w-full">
                  
                  <InputField label={'City'} type={'text'} placeholder={'Apartment, studio, or floor'} />
                </div>
                <div className="sm:w-[33%] w-full mt-6">
                  <SelectMenu inputSize={'md'}/>
                </div>
                <div className="sm:w-[16%] w-full">
                <InputField label={'Zip'} type={'text'}  />
                </div>
              </div>
              <div className='w-full'>
              <CheckboxField label={'Check this custom box'}/>

              </div>
              <div className="w-full">
              <Button text={'Sign in'} />

              </div>
               
            </div>
          </div>
        </div>
      </div>
   
      
    </>
  );
};

export default FormRow;
