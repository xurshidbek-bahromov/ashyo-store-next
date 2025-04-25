import HeaderForm from "@/components/HeaderForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderCenterActions from "./HeaderCenterActions";
import HeaderPopapCategory from "./HeaderPopapCategory";

const HeaderCenter = () => {
  return (
    <div className="flex relative items-center justify-between containers !py-[30px]">
      <Link className="flex items-center translate-x-[-15px]" href={"/"}>
        <Image className="w-[48px] h-[48px] scale-[1.5]" src={'/logo.svg'} alt="logo" width={48} height={48} priority />
        <span className="translate-x-[-5px] text-[#134E9B] text-[36px] leading-[100%] font-black">Ashyo</span>
      </Link>
      <HeaderForm />
      <HeaderCenterActions />
      <HeaderPopapCategory />
    </div>
  );
};

export default HeaderCenter;
