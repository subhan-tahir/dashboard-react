import React from 'react'
import InputField from './InputField'

const FloatingElements = () => {
    return (
        <>
            <div className='  '>
                <div className='border border-[#0003] w-full mb-4'>
                    <div className='p-4 border leading-[37px] border-b w-full'>
                        <h1 className='font-bold text-[20px]'>Floating labels</h1>
                        <p className='text-[#000000bf] text-[15px] leading-[22px] '>Wrap a pair of <span className='text-[#d03f3f]'>{'<input class="form-control">'}</span>and  <span className='text-[#d03f3f]'> {"<label>"} </span>elements in  <span className='text-[#d03f3f]'>.form-floating</span>to enable floating labels with Bootstrap’s textual form fields. A <span className='text-[#d03f3f]'>placeholder</span> is required on each<span className='text-[#d03f3f]'>  {"<input>"} </span>as our method of CSS-only floating labels uses the <span className='text-[#d03f3f]'>:placeholder-shown</span>pseudo-element. Also note that the <span className='text-[#d03f3f]'>{"<input>"}</span> must come first so we can utilize a sibling selector (e.g., ~). </p>
                    </div>
                    <div className='flex flex-wrap w-full p-3'>

                        <div className='sm:w-1/2 w-full'>
                           
                                    {/* <InputField type={formField.type} label={formField.label} placeholder={formField.placeHolder} key={fieldIndex} value={formField.value} /> */}
                    {/* <InputField /> */}
                              



                            <div className='w-full p-3  mb-2 relative'>
                                <p className='mb-2 font-[500] '>Example</p>
                                <input type="email" name="" id='email' className='border border-[#0003] w-[100%] p-3 outline-none  ' />
                                {/* <label className=' py-3 absolute top-0 left-0 overflow-hidden' htmlFor='email' >Email address</label> */}
                            </div>
                            <div className='w-full p-3  mb-2'>
                                <p className='mb-2 font-[500] '>Password</p>
                                <input type="passoword" name="" className='border border-[#0003] w-[100%] p-3 outline-none ' placeholder='placeholder' />
                            </div>
                            <div className='w-full p-3  mb-2'>
                                <p className='mb-2 font-[500] '>Textareas</p>
                                <textarea name="" rows='5' className='w-full outline-none border border-[#0003] p-3'></textarea>
                            </div>

                            
                        </div>
                        <div className='sm:w-1/2 w-full'>
                            <div className='w-full p-3 box-border '>
                                <p className='mb-3 font-[500]'>Selects</p>
                                <select name="" id="" className='border border-[#0003]  w-[100%] p-3 px-4 outline-none '>
                                    <option value="">Open this select menu</option>
                                    <option value="">One</option>
                                    <option value="">two</option>
                                    <option value="">Three</option>
                                    
                                </select>
                            </div>
                            <div className='flex flex-wrap justify-between w-full gap-2 p-3 '>
                                <p  className='mb-3 font-[500] w-full block'>layout</p>
                                <div className=''>
                                    <input type="email" name="" id="" placeholder='Email address'  className='border border-[#0003] w-[100%] p-3 outline-none '/>
                                </div>
                                <div>
                                <select name="" id="" className='border border-[#0003]  w-[100%] p-3 px-4 outline-none '>
                                    <option value="">Open this select menu</option>
                                    <option value="">One</option>
                                    <option value="">two</option>
                                    <option value="">Three</option>
                                    
                                </select>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default FloatingElements