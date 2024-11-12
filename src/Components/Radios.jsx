import RadioField from "../Allfields/RadioField";

const Radioss = () => {
  let radioColors = [
    {
      bgColor: "#007aff",
      text: "Default radio",
    },
    {
      bgColor: "#47ad77",
      text: "Success radio",
    },
    {
      bgColor: "#33b0e0",
      text: "Info radio",
    },
    {
      bgColor: "#737373",
      text: "Secondary radio",
    },
    {
      bgColor: "#edc755",
      text: "Warning radio",
    },
    {
      bgColor: "#d03f3f",
      text: "Danger radio",
    },
    {
      bgColor: "#47ad77",
      text: "Dark radio",
    },
  ];
  return (
    <>
      <div className="w-full  ">
        
          
            <div className="p-4  leading-[37px] border-b w-full">
              <h1 className="font-bold text-[20px] leading-[37px]">radios</h1>
              <p className="text-[#000000bf] text-[15px] leading-[22px] ">
                Each radio and radio
                <span className="text-[#d03f3f]"> {"<input>"}</span>and{" "}
                <span className="text-[#d03f3f]">{"<label>"}</span> pairing is
                wrapped in a<span className="text-[#d03f3f]">{" <div>"}</span>{" "}
                to create our custom control. Structurally, this is the same
                approach as our default
                <span className="text-[#d03f3f]"> .form-check.</span>,
              </p>
            </div>
            <div className="p-4 flex flex-col gap-4">
              <div className="font-[700] text-[17px]">radios</div>
              <div className="flex flex-col gap-[4px]">
              <RadioField label={'Check this custom radio'}/>
              <RadioField label={'Check this custom radio'}/>
              
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-[700] text-[17px]">Inline</div>
                <div className="flex gap-4">
                <RadioField label={'Check this custom radio'}/>
                <RadioField label={'Check this custom radio'}/>
                  
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-[700] text-[17px]">Disabled</div>
                <div className="flex gap-4">
                <RadioField disabled={true} label={'Check this custom radio'}/>
                <RadioField disabled={true} label={'Check this custom radio'}/>
                 
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-[700] text-[17px]">Colors</div>
                {radioColors.map((checkField, checkIndex) => (
                  <RadioField label={checkField.text} key={checkIndex} checked={true} bgColor={checkField.bgColor}/>
                ))}
              </div>
            </div>
          </div>
        
      
    </>
  );
};
export default Radioss;
