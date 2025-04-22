import { HeaderActionType } from '@/types/HeaderCenterType'
import React, { FC } from 'react'

const HeaderAction:FC<HeaderActionType> = ({icon, actionCount}) => {
  return (
    <div className='relative w-[50px] h-[50px] bg-[#EBEFF3] flex items-center justify-center rounded-[6px]'>
      {icon}
      {actionCount !== 0 && <span className='absolute flex items-center justify-center right-[-10px] top-[-10px] w-[20px] h-[20px] rounded-[50%] bg-[#E81504] text-white font-bold text-[12px]'>{actionCount}</span>}
    </div>
  )
}

export default HeaderAction
