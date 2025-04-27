"use client";

import HeaderPopapCategoryItem from "@/components/HeaderPopapCategoryItem";
import { Context } from "@/context/Context";
import { IMG_API } from "@/hooks/getEnv";
import { Link } from "@/i18n/navigation";
import { getCategories } from "@/service/getCategories";
import { HeaderCategoriesType } from "@/types/HeaderBottomType";
import Image from "next/image";
import React, { useContext } from "react";

const HeaderPopapCategory = () => {
  const { showCategory } = useContext(Context);
  const { data: categories, isLoading } = getCategories();
  return (
    <div
      className={`${
        showCategory ? "max-h-[600px] border-[1px] " : "max-h-0"
      } w-full transition-all duration-500 overflow-hidden absolute flex shadow-md z-10 top-[102px] rounded-[12px]`}
    >
      <div className="w-[30%] bg-[#EBEFF3] py-[43px]">
        {categories.map((item: HeaderCategoriesType) => <HeaderPopapCategoryItem key={item.id} item={item}/>)}
      </div>
      <div className="w-[70%] bg-white"></div>
    </div>
  );
};

export default HeaderPopapCategory;
