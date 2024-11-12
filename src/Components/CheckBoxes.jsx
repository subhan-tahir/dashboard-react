import CheckboxField from "../Allfields/CheckboxField";
import Radioss from "./Radios";
const CheckBoxes = () => {
  let checkboxColors = [
    {
      bgColor: "#007aff",
      text: "Default Checkbox",
      id: 1,
    },
    {
      bgColor: "#47ad77",
      text: "Success Checkbox",
      id: 2,
    },
    {
      bgColor: "#33b0e0",
      text: "Info Checkbox",
      id: 3,
    },
    {
      bgColor: "#737373",
      text: "Secondary Checkbox",
      id: 4,
    },
    {
      bgColor: "#edc755",
      text: "Warning Checkbox",
      id: 5,
    },
    {
      bgColor: "#d03f3f",
      text: "Danger Checkbox",
      id: 6,
    },
    {
      bgColor: "black",
      text: "Dark Checkbox",
      id: 7,
    },
  ];
  return (
    <>
      <div className="w-full my-4 ">
        <div className="sm:flex  gap-6 w-full">
          <div className=" border border-[#0003] sm:w-1/2 w-full mb-2 bg-white">
            <div className="p-4  leading-[37px] border-b w-full ">
              <h1 className="font-bold text-[20px] ">Checkboxes</h1>
              <p className="text-[#000000bf] text-[15px] leading-[22px] ">
                Each checkbox and radio
                <span className="text-[#d03f3f]"> {"<input>"}</span>and{" "}
                <span className="text-[#d03f3f]">{"<label>"}</span> pairing is
                wrapped in a<span className="text-[#d03f3f]">{" <div>"}</span>{" "}
                to create our custom control. Structurally, this is the same
                approach as our default
                <span className="text-[#d03f3f]"> .form-check.</span>,
              </p>
            </div>
            <div className="p-4 flex flex-col gap-4">
              <div className="font-[700] text-[17px]">Checkboxes</div>
              <div className="flex flex-col gap-[4px]">
                <CheckboxField label={"Check this custom checkbox"}/>
                <CheckboxField label={"Check this custom checkbox"}/>
                
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-[700] text-[17px]">Inline</div>
                <div className="flex gap-4">
                  <CheckboxField label={"Check this custom checkbox"}/>
                  <CheckboxField label={"Check this custom checkbox"}/>
                        
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-[700] text-[17px]">Disabled</div>
                <div className="flex gap-4">
                <CheckboxField disabled={true} label={"Check this custom checkbox"} checked={true}/>

                <CheckboxField disabled={true} label={"Check this custom checkbox"}/>
                
               </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-[700] text-[17px]">Colors</div>
                {checkboxColors.map((checkField,index) => (
               
                <CheckboxField label={checkField.text} bgColor={checkField.bgColor} key={index} id={checkField.id} checked={true} /> 
                ))}
              </div>
            </div>
          </div>

          <div className=" border border-[#0003] sm:w-1/2 w-full  bg-white">
            <Radioss />
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckBoxes;
