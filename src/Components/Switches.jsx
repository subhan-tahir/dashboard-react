import React from 'react'
import InputField from './InputField'

const Switches = () => {
    return (
        <>
            <div className='  '>
                <div className='border border-[#0003] w-full'>
                    <div className='p-4 border leading-[37px] border-b w-full'>
                        <h1 className='font-bold text-[20px]'>Select & Switches</h1>

                    </div>
                    <div className='flex flex-wrap w-full p-3'>

                        <div className='sm:w-1/2 w-full'>

                            {/* <InputField type={formField.type} label={formField.label} placeholder={formField.placeHolder} key={fieldIndex} value={formField.value} /> */}
                            {/* <InputField /> */}




                            <div className='w-full p-3 box-border '>
                                <p className='mb-3 font-[700] text-[20px]'>Selects</p>
                                <p className='mb-3'><span className='text-[#d03f3f] text-[12px]'>{'<select>'}</span> menus need only a custom class, <span className='text-[#d03f3f] text-[12px]'> .form-select </span>to trigger the custom styles.</p>
                                <select name="" id="" className='border border-[#0003]  w-[100%] p-2 px-4  outline-none '>
                                    <option value="">Open this select menu</option>
                                    <option value="">One</option>
                                    <option value="">two</option>
                                    <option value="">Three</option>

                                </select>
                            </div>
                            <div className='w-full p-3 box-border '>

                                <select name="" id="" className='border border-[#0003]  w-[100%] text-[20px] p-2 px-4 outline-none '>
                                    <option value="">Open this select menu</option>
                                    <option value="">One</option>
                                    <option value="">two</option>
                                    <option value="">Three</option>

                                </select>
                            </div>
                            <div className='w-full p-3 box-border '>

                                <select name="" id="" className='border border-[#0003]  w-[100%] p-2 px-4 outline-none '>
                                    <option value="">Open this select menu</option>
                                    <option value="">One</option>
                                    <option value="">two</option>
                                    <option value="">Three</option>

                                </select>
                            </div>


                        </div>

                        <div className='sm:w-1/2 w-full'>
                            <div className='w-full p-3 box-border '>
                                <p className='mb-3 font-[500]'>Switches</p>
                                <p>A switch has the markup of a custom checkbox but uses the <span className='text-[#d03f3f] tex text-[12px]'>.form-switch </span>class to render a toggle switch. Switches also support the <span className='text-[#d03f3f] text-[12px]'>disabled </span>attribute</p>
                            </div>
                            <div className='w-full box-border  p-3 '>
                                <div className='flex gap-2 mb-2  cursor-default'>
                                    <label class="switch">
                                        <input type="checkbox" />
                                            <span class="slider"></span>
                                    </label>
                                    <p className='text-[15px] font-[700]'>Toggle this switch element</p>
                                </div>
                                <div className='flex gap-2 cursor-default'>
                                    <label class="switch">
                                        <input type="checkbox" disabled/>
                                            <span class="slider"></span>
                                    </label>
                                    <p className='text-[15px] font-[700]'>Toggle this switch element</p>
                                </div>
                                

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Switches