import Button from "../../Allfields/Button";
import CheckboxField from "../../Allfields/CheckboxField";
import InputField from "../../Allfields/InputField";
import ExampleForm from "./ExampleForm";

const BasicForm = () => {
  return (
    <>
      <div className="w-full  mt-4">
        <div className="sm:flex  gap-6 w-full">
          <div className=" border border-[#0003] sm:w-1/2 w-full mb-2 bg-white">
            <div className="p-4  border-b w-full">
              <h1 className="font-bold text-[20px] leading-[37px]">
                Basic Example
              </h1>

              <p>
                Here’s a quick example to demonstrate Bootstrap’s form styles.
                Keep reading for documentation on required classes, form layout,
                and more.
              </p>
            </div>
            <div className="p-4 flex flex-col gap-4">
            <form action="" className=" flex flex-col gap-4">
             <InputField label={'Email address'} type={'email'} placeholder={'Enter email'} message={'We ll never share your email with anyone else.'} />
             <InputField label={'password'} type={'password'} placeholder={'Password'} />
              
                

                <CheckboxField label={"Check this custom checkbox"}/>
                <Button text={'Submit'}/>
              </form>
            </div>
          </div>
          <ExampleForm />
        </div>
      </div>
    </>
  );
};
export default BasicForm;
