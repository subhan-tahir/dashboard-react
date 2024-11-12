import React from 'react'

const SelectField = () => {
  return (
    <>
     <div className="w-full mb-3 box-border">
                <p className="mb-2 font-[500]">Input Select</p>
                <select
                  name=""
                  id=""
                  className="border border-[#0003]  w-[100%] p-2 px-4 outline-none "
                >
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
    
    </>
  )
}

export default SelectField
