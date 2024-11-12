import InputGroup from "./InputGroup";
import InputSizeField from "./InputSizeField";

const InputSizes = () => {
    const inputSizesData = [
        {
            label:'Small',
            size:'sm',
            placeholder:'input-sm'
        },
        {
            label:'Normal',
            size:'md',
            placeholder:'Normal'
        },
        {
            label:'large',
            size:'lg',
            placeholder:'input-lg',
            fontSize:'text-[20px]',
        },
       

    ]
  return (
    <>
      <div className="w-full  ">
        <div className="sm:flex  gap-6 w-full">
          <div className=" border border-[#0003] sm:w-1/2 w-full mb-2 bg-white">
            <div className="p-4  leading-[37px] border-b w-full">
              <h1 className="font-bold text-[20px] leading-[37px]">Input Sizes</h1>
              <p className="text-[#000000bf] text-[15px] leading-[22px] ">
              Set heights using classes like 
                <span className="text-[#d03f3f]"> .input-lg</span> and set widths using grid column classes like
                <span className="text-[#d03f3f]"> .col-lg-*.</span> 
              </p>
            </div>
            <div className="p-4 flex flex-col gap-4">
                 {
                  inputSizesData.map((inputFieldItem,itemindex)=>
                  <InputSizeField type={inputFieldItem.label} inputSize={inputFieldItem.size} placeholder={inputFieldItem.placeholder} fontSize={inputFieldItem.fontSize} key={itemindex}/>
                  )
                 }
                <div className='w-full'>
                  <label htmlFor=""   className='block font-[500]'>Grid Sizes</label>
                  <input type="text" placeholder='.com-sm-4' className={`border border-[#0003]  sm:w-[30%] w-full p-2 outline-none mt-2`} />
                </div>
              </div>
              
              </div>

                <InputGroup />

            </div>
          </div>
       
      
    </>
  );
};
export default InputSizes;
