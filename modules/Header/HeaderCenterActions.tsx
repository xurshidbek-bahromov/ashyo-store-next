import { CompareIcon, LikeIcon, ProfileIcon, ShopIcon } from '@/assets/icons'
import HeaderAction from '@/components/HeaderAction'
import { HeaderActionType } from '@/types/HeaderCenterType'
import React from 'react'

const HeaderCenterActions = () => {

    const actionList = [
        {
            id:1,
            icon:<CompareIcon />,
            actionCount:2
        },
        {
            id:2,
            icon:<LikeIcon />,
            actionCount:11
        },
        {
            id:3,
            icon:<ShopIcon />,
            actionCount:7
        },
        {
            id:4,
            icon:<ProfileIcon />,
            actionCount:0
        },
    ]

  return (
    <div className='flex gap-[15px]'>
        {actionList.map((item:HeaderActionType) => <HeaderAction key={item.id} actionCount={item.actionCount} icon={item.icon} />)}
    </div>
  )
}

export default HeaderCenterActions
