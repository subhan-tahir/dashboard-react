import React, { useState, useEffect } from 'react';

const HorizontalInputField = ({ type, label, inputSize, placeholder, fontSize }) => {
    const [inputStyles, setInputStyles] = useState('');

    useEffect(() => {
        let padding = 'p-[8px]';
        let fontSizeClass = 'text-[16px]';

        if (inputSize === 'sm' || fontSize === 'sm') {
            padding = 'p-[8px]';
            fontSizeClass = 'text-[16px]';
        } else if (inputSize === 'md' || fontSize === 'md') {
            padding = 'p-[8px]';
            fontSizeClass = 'text-[18px]';
        } else if (inputSize === 'lg' || fontSize === 'sm') {
            padding = 'p-[12px]';
            fontSizeClass = 'text-[20px]';
        }

        
        setInputStyles(`${padding} ${fontSizeClass}`);
    }, [inputSize, fontSize]); 

    return (
        <div className='flex w-full'>
            <div className='w-[20%]'>
                <label htmlFor="" className={`font-bold ${inputStyles}`}>{label}</label>
            </div>
            <div className='sm:w-[78%] w-full'>
                <input
                    type={type}
                    name=""
                    id=""
                    className={`border border-[#003] w-full ${inputStyles} outline-none px-3`}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default HorizontalInputField;
