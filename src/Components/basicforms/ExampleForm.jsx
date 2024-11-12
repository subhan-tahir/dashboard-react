import Button from "../../Allfields/Button"
import CheckboxField from "../../Allfields/CheckboxField"
import HorizontalInputField from "../../Allfields/horizontalInputField"

const ExampleForm = ()=>{
    return(
        <>
        <div className=" border border-[#0003] sm:w-1/2 w-full mb-2 bg-white">
            <div className="p-4  border-b w-full">
              <h1 className="font-bold text-[20px] leading-[37px]">
              Horizontal form
              </h1>

              <p>
              Create horizontal forms with the grid by adding the .row class to form groups and using the .col-*-* classes to specify the width of your labels and controls. Be sure to add .col-form-label to your{" <label>"}s as well so they’re vertically centered with their associated form controls.
              </p>
            </div>
            <div className="p-4 flex flex-col gap-4">
            <form action="" className=" flex flex-col gap-4">
              <HorizontalInputField  type={'email'}
                    label={'Email'}
                    placeholder={'Email'}
                    inputSize={'sm'}
                    />
              <HorizontalInputField  type={'password'}
                    label={'Email'}
                    placeholder={'password'}
                    inputSize={'sm'}
                    />
              <HorizontalInputField  type={'password'}
                    label={'Re password'}
                    placeholder={'retype Password'}
                    inputSize={'sm'}
                    />
              
               
              

                <CheckboxField label={'check me out!'} />
                <Button text={'Sign in'}/>
               
              </form>
            </div>
          </div>
        </>
    )
}

export default ExampleForm