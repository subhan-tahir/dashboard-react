import Button from "../Allfields/Button";
import CheckboxField from "../Allfields/CheckboxField";
import InputBtnField from "../Allfields/InputBtnField";
import InputField from "../Allfields/InputField";
import InputStatic from "../Allfields/InputStatic";

const InlineForm = () => {
  return (
    <>
      <div className="bg-white mt-4">
        <div className="border border-[#0003] w-full">
          <div className="p-4 border border-b w-full">
            <h1 className="font-bold text-[20px] mb-2">Inline Form</h1>
            <p>
              Use the .row-cols-lg-auto, .g-3 & .align-items-center class to
              display a series of labels, form controls, and buttons on a single
              horizontal row. Form controls within inline forms vary slightly
              from their default states. Controls only appear inline in
              viewports that are at least 576px wide to account for narrow
              viewports on mobile devices.
            </p>
          </div>
          <div className="w-full">
            <div className="p-3 w-full flex flex-wrap gap-4 items-center">
              {/* <InputField type={formField.type} label={formField.label} placeholder={formField.placeHolder} key={fieldIndex} value={formField.value} /> */}
              {/* <InputField /> */}
              <div className="">email@example.com</div>
              <div className="w-[20%] mt-3">
                <InputField
                  type="password"
                  placeholder={"password"}
                  
                />
              </div>
              <Button text={"Confirm Identity"} />
            </div>
            <div className="p-3 w-full flex flex-wrap gap-4 items-center">
              {/* <InputField type={formField.type} label={formField.label} placeholder={formField.placeHolder} key={fieldIndex} value={formField.value} /> */}
              {/* <InputField /> */}
              <h6 htmlFor="" className="block font-[500] w-full">
                Auto Sizing
              </h6>
              <div className="w-[20%] mt-3">

             <InputField type={'text'} />
              </div>
              <div className="w-[20%]">
             <InputStatic />

              </div>
              <div>
                <CheckboxField label={'Remember me'} />
              </div>
              

             <Button text={'Submit'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InlineForm;
