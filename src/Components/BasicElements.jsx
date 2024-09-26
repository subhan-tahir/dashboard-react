import React,{useState} from 'react'
import InputField from './InputField'
import FloatingElements from './FloatingElements'
import Switches from './Switches'

const BasicElements = () => {
    const [inputType, setInputType] = useState(false)
    let formElementsData = [
        {
            type: 'text',
            label: 'Text',

        },
        {
            type: 'email',
            label: 'Email',
            placeHolder: 'Email',
        },
        {
            type: 'password',
            label: 'Password',
            value: 'password',
        },
    ];
    let changeTypeHandler = ()=>{
        console.log(inputType);
        
        
    }
    return (
        <>
            <div className='  '>
                <div className='border border-[#0003] w-full mb-4'>
                    <div className='p-4 border leading-[37px] border-b w-full'>
                        <h1 className='font-bold text-[20px]'>Input Types</h1>
                        <p className='text-[#000000bf] text-[15px] leading-[22px] '>Most common form control, text-based input fields. Includes support for all HTML5 types: <span className='text-[#d03f3f]'>text</span>, <span className='text-[#d03f3f]'>password</span>, <span className='text-[#d03f3f]'>datetime</span>, <span className='text-[#d03f3f]'>datetime-local</span>,<span className='text-[#d03f3f]'> date</span>, <span className='text-[#d03f3f]'>month</span>, <span className='text-[#d03f3f]'>time</span>, <span className='text-[#d03f3f]'>week</span>, <span className='text-[#d03f3f]'>number</span>,<span className='text-[#d03f3f]'> email</span>, <span className='text-[#d03f3f]'>url</span>,<span className='text-[#d03f3f]'> search</span>,<span className='text-[#d03f3f]'> tel</span>, and color.</p>
                    </div>
                    <div className='flex flex-wrap w-full p-3'>

                        <div className='sm:w-1/2 w-full'>
                            {
                                formElementsData.map((formField, fieldIndex) =>
                                    <InputField type={formField.type} label={formField.label} placeholder={formField.placeHolder} key={fieldIndex} value={formField.value} />

                                )

                            }



                            <div className='w-full p-3  mb-2'>
                                
                                <p className='mb-2 font-[500]'>Show/Hide Password</p>
                                <div className='border border-[#0003] p-2 relative'>
                                <input type="password" name="" className='w-full  outline-none ' onChange={e => setInputType(e.target.value)}/>
                                <span className='p-2 bg-[#E5E5E5] absolute h-full top-0  right-0 px-4 border-l border-[#a79797]' onClick={changeTypeHandler}></span>

                                </div>
                               
                            </div>
                            <div className='w-full p-3  mb-2'>
                                <p className='mb-2 font-[500] '>Placeholder</p>
                                <input type="text" name="" className='border border-[#0003] w-[100%] p-2 outline-none ' placeholder='placeholder' />
                            </div>
                            <div className='w-full p-3  mb-2'>
                                <p className='mb-2 font-[500] '>Textarea</p>
                                <textarea name="" rows='5' className='w-full outline-none border border-[#0003] p-2'></textarea>
                            </div>

                            <div className='w-full p-3  mb-2'>
                                <p className='mb-2 font-[500] '>Readonly</p>
                                <input type="text" name="" className='border border-[#0003] w-[100%] p-2 outline-none ' value='Readonly value' readOnly />
                            </div>
                            <div className='w-full p-3  mb-2'>
                                <p className='mb-2 font-[500] '>Disabled</p>
                                <input type="text" name="" className='border border-[#0003] w-[100%] p-2 outline-none ' value='Disabled value' disabled />
                            </div>
                            <div className='w-full p-3  mb-2'>
                                <p className='mb-2 font-[500] '>Static Control</p>
                                <input type="text" name="" className='border-0 w-[100%] p-2 outline-none ' value='email@example.com' readOnly />
                            </div>
                            <div className='w-full p-3  mb-2'>
                                <p className='mb-2 font-[500]'>Helping Text</p>
                                <input type="text" name="" className='border border-[#0003]  w-[100%] p-2 outline-none ' value='email@example.com' placeholder='Helping Text' />
                                <p className='text-[13px]'>A block of help text that breaks onto a new line and may extend beyond one line.</p>
                            </div>
                        </div>
                        <div className='sm:w-1/2 w-full'>
                            <div className='w-full p-3 box-border'>
                                <p className='mb-2 font-[500]'>Input Select</p>
                                <select name="" id="" className='border border-[#0003]  w-[100%] p-2 px-4 outline-none '>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </select>
                            </div>
                            <div className='w-full p-3 box-border'>
                                <p className='mb-2 font-[500]'>Multiple Select</p>
                                <select name="" id="" multiple className='border border-[#0003]  w-[100%] p-2 px-4 outline-none '>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </select>
                            </div>
                            <div className='w-full p-3  mb-2'>
                                <p className='mb-2 font-[500]'>Default file input</p>
                                <input type="file" name="" id="" className='border border-[#0003]  w-[100%] p-2 outline-none ' />

                            </div>
                            <div className='w-full p-3  mb-2'>
                                <p className='mb-2 font-[500]'>Date</p>
                                <input type="date" name="" id="" className='border border-[#0003]  w-[100%] p-2 outline-none ' />

                            </div>
                            <div className='w-full p-3  mb-2'>
                                <p className='mb-2 font-[500]'>Month</p>
                                <input type="month" name="" id="" className='border border-[#0003]  w-[100%] p-2 outline-none ' />

                            </div>
                            <div className='w-full p-3  mb-2'>
                                <p className='mb-2 font-[500]'>Time</p>
                                <input type="time" name="" id="" className='border border-[#0003]  w-[100%] p-2 outline-none ' />

                            </div>
                            <div className='w-full p-3  mb-2'>
                                <p className='mb-2 font-[500]'>Week</p>
                                <input type="week" name="" id="" className='border border-[#0003]  w-[100%] p-2 outline-none ' />

                            </div>
                            <div className='w-full p-3  mb-2'>
                                <p className='mb-2 font-[500]'>Number</p>
                                <input type="number" name="" id="" className='border border-[#0003]  w-[100%] p-2 outline-none ' />
                            </div>
                            <div className='w-full p-3  mb-2'>
                                <p className='mb-2 font-[500]'>Color</p>
                                <input className='border border-[#0003]  w-[100%] p-[4px] outline-none bg-transparent' type="color" name="color"  />
                            </div>
                            <div className='w-full p-3  mb-2'>
                                <p className='mb-2 font-[500]'>Range</p>
                                <input type="range" name="" id="" className='border-0 outline-none  w-[100%]   cursor-pointer' min={0} max={100} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
             <FloatingElements />               
              <Switches />              
        </>
    )
}

export default BasicElements