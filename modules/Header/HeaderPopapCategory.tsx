"use client";

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
        {categories.map((item: HeaderCategoriesType) => (
          <Link
            className="group flex items-center gap-[15px] py-[18px] pl-[40px] text-[26] hover:bg-white duration-300 relative"
            key={item.id}
            href={"/"}
          >
            <Image
              className="w-[24px] h-[24px]"
              src={`${IMG_API}/${item.icon}`}
              alt="categor icon"
              width={24}
              height={24}
              priority
            />
            <span>{item.name}</span>
            <span className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 duration-300 absolute right-5 text-black text-[20px]">
              &gt;
            </span>
          </Link>
        ))}
      </div>
      <div className="w-[70%] bg-white"></div>
    </div>
  );
};

export default HeaderPopapCategory;
