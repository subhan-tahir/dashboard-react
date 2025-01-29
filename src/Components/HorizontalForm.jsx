import React from "react";
import HorizontalInputField from "/src/Allfields/horizontalInputField";

const HorizontalForm = () => {
  let formLabelData = [
    {
      type: "email",
      label: "Email",
      placeholder: "col-form-label-sm",
      size: "sm",
      fontSize:'sm',

    },
    {
      label: "Email",
      type: "password",
      placeholder: "col-form-label",
      size: "md",
      fontSize:'md',
    },
    {
      label: "Email",
      type: "password",
      placeholder: "col-form-label-lg",
      size: "lg",
      fontSize:'lg',
    },
  ];
  return (
    <>
      <div className="bg-white mt-4">
        <div className="border border-[#0003] w-full">
          <div className="p-4 border border-b w-full">
            <h1 className="font-bold text-[20px] mb-2">
              Horizontal form label sizing
            </h1>
            <p>
              Be sure to use .col-form-label-sm or .col-form-label-lg to your{" "}
              {"<label>"}s or {"<legend>"}s to correctly follow the size of
              .form-control-lg and .form-control-sm.
            </p>
          </div>
          <div className="w-full">
            <div className="p-4 w-full flex flex-col gap-3 ">
              {/* <InputField type={formField.type} label={formField.label} placeholder={formField.placeHolder} key={fieldIndex} value={formField.value} /> */}
              {/* <InputField /> */}
              {formLabelData.map((labelItem, labelIndex) => {
                return (
                  <HorizontalInputField
                    type={labelItem.type}
                    label={labelItem.label}
                    placeholder={labelItem.placeholder}
                    inputSize={labelItem.size}
                    fontSize={labelItem.fontSize}

                    key={labelIndex}
                  />
                );
              })}
            

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalForm;
