// import React from 'react'

// const InputField = ({type,label,placeholder,value}) => {
//     return (
//         <div className='w-full p-3 mb-2'>
//             <p className='mb-2 font-[500] '>{label}</p>
//             <input type={type} name="" placeholder={placeholder} className={`border border-[#0003] ${label === 'Static control'  ? 'border-0'   : "" } w-[100%] p-2 outline-none`} {`${label === 'Readonly'  ? readOnly : ''}`} {`${label === 'Disabled'  ? disabled : ''}`} value={value}   required />
//         </div>
//     )
// }

// export default InputField

// // ${label === 'readOnly' || label === 'disabled' ?}

import React from 'react';
import Popover from './Popover';

const InputField = ({ type, label, placeholder, value, readOnly, disabled ,message,popOverMessage}) => {
    return (
        <div className='w-full  mb-3'>
            <div className='flex mb-2 justify-between'>
            <label className=' font-[500]'>{label}</label>

            {
              message  &&
              <Popover popmessage={popOverMessage}/>
            }

            </div>
            <input
                type={type}
                placeholder={placeholder}
                className={`border border-[#0003] ${label === 'Static control' ? 'border-0' : '' } ${label === 'Color' ? 'bg-transparent p-[4px]' : ''}  w-full p-2 outline-none`}
                readOnly={readOnly === true ? readOnly : undefined}
                disabled={label === 'Disabled' ? disabled : undefined}
                value={value}
                required
            />

            <span className='text-[13px]'>{message}</span>
            
            
        </div>
    );
};

export default InputField;
