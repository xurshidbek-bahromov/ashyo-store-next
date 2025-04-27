import { IMG_API } from "@/hooks/getEnv";
import { Link } from "@/i18n/navigation";
import { HeaderCategoriesType } from "@/types/HeaderBottomType";
import Image from "next/image";
import React, { FC } from "react";

const HeaderPopapCategoryItem:FC<{item:HeaderCategoriesType}> = ({item}) => {
  return (
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
      <span className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 duration-300 absolute right-5 text-[#717171] text-[20px]">
        &gt;
      </span>
    </Link>
  );
};

export default HeaderPopapCategoryItem;
