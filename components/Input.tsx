import { InputType } from '@/types/InputType'
import React, { FC } from 'react'

const Input:FC<InputType> = ({placeholder, extraStyle, type}) => {
  return (
    <input className={`py-[15px] pl-[26px] bg-[#EBEFF3] outline-none rounded-[6px] ${extraStyle}`} type={type} placeholder={placeholder} />
  )
}

export default Input
