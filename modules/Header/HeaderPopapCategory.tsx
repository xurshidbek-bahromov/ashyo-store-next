"use client";

import { Context } from '@/context/Context';
import { IMG_API } from '@/hooks/getEnv';
import { Link } from '@/i18n/navigation';
import { getCategories } from '@/service/getCategories';
import { HeaderCategoriesType } from '@/types/HeaderBottomType';
import Image from 'next/image';
import React, { useContext } from 'react';

const HeaderPopapCategory = () => {
    const { showCategory} = useContext(Context)
    const {data:categories, isLoading} = getCategories()
  return (
    <div className={`${showCategory ? "h-[570px] border-[1px]" : "h-0"} w-full duration-300 absolute overflow-hidden flex shadow-md z-10 top-[102px]`}>
      <div className='w-[30%] bg-[#EBEFF3]'>
        {categories.map((item:HeaderCategoriesType) => <Link className='flex items-center gap-[15px] py-[12px] pl-[40px] text-[26]' key={item.id} href={"/"}>
          <Image className='w-[24px] h-[24px]' src={`${IMG_API}/${item.icon}`} alt='categor icon' width={24} height={24} priority/>
          <span>{item.name}</span>
        </Link>)}
      </div>
      <div className='w-[70%] bg-white'></div>
    </div>
  )
}

export default HeaderPopapCategory
