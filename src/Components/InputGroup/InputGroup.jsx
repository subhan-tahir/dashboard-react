
import DropdownField from '../../Allfields/DropdownField';
import InputBtnField from '../../Allfields/InputBtnField';
import InputField from '../../Allfields/InputField';
import InputStatic from '../../Allfields/InputStatic';
const InputGroup = () => {
  return (
    <>
      <div className=" border border-[#0003] sm:w-1/2 w-full mb-2 bg-white">
        <div className="p-4  leading-[37px] border-b w-full">
          <h1 className="font-bold text-[20px] leading-[37px]">Input Group</h1>
          <p className="text-[#000000bf] text-[15px] leading-[22px] ">
            Easily extend form controls by adding text, buttons, or button
            groups on either side of textual inputs, custom selects, and custom
            file inputs
          </p>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <InputStatic label={'Static'}/>
          <DropdownField />
         
        <InputBtnField />
          <div className="flex gap-3 w-full mb-2">
          {/* <div className="w-full flex justify-around">

          <label className=" font-[500]  mb-2">Field Input</label>
          <label className=" font-[500]  mb-2">Multiple Files Input</label>
          </div> */}
          
           <InputField type='file' label={"File input"} />
           <InputField type='file' label={"Multiple files input"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default InputGroup;
