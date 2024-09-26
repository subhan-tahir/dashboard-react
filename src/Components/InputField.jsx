import React from 'react'

const InputField = ({type,label,placeholder,value}) => {
    return (
        <div className='w-full p-3 mb-2'>
            <p className='mb-2 font-[500] '>{label}</p>
            <input type={type} name="" placeholder={placeholder} className='border border-[#0003] w-[100%] p-2 outline-none' value={value} required/>
        </div>
    )
}

export default InputField