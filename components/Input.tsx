// import { InputType } from '@/types/InputType'
// import React, { FC } from 'react'

// const Input:FC<InputType> = ({placeholder, extraStyle, type, onChange, value}) => {
//   return (
//     <input value={value} onChange={onChange} className={`py-[15px] pl-[26px] bg-[#EBEFF3] outline-none rounded-[6px] ${extraStyle}`} type={type} placeholder={placeholder} />
//   )
// }

// export default Input


"use client"
import { InputType } from '@/types/InputType'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Input:React.FC<InputType> = ({value,type, placeholder, extraClass, onChange, onBlur, name}) => {
  const [showPass, setShowPass] = useState(false)

  return (
    type == "password" ?
    <div className='relative'>
      <input value={value} required name={name} onBlur={onBlur} onChange={onChange} className={`${extraClass} focus:shadow-2xl focus:shadow-[#134E9B] duration-500 bg-[#EBEFF3] w-full outline-none py-[17px] px-[26px] rounded-[6px] text-[14px] leading-[#EBEFF3]`} type={showPass ? "text" : "password"} placeholder={placeholder} autoComplete='off' />
      <div onClick={() => setShowPass(!showPass)} className='cursor-pointer flex items-center absolute top-0 bottom-0 my-auto right-2'>
        {showPass ? <FaEyeSlash size={25} /> : <FaEye size={25} />} 
      </div>
    </div> 
     : <input value={value} required name={name} onBlur={onBlur} onChange={onChange} className={`${extraClass} focus:shadow-2xl focus:shadow-[#134E9B] duration-500 bg-[#EBEFF3] w-full outline-none py-[17px] px-[26px] rounded-[6px] text-[14px] leading-[#EBEFF3]`} type={type} placeholder={placeholder} autoComplete='off' />
   
  )
}

export default Input