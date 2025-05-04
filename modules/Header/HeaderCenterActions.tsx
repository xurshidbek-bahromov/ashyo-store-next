"use client"
import { CompareIcon, LikeIcon, ProfileIcon, ShopIcon } from "@/assets/icons";
import HeaderAction from "@/components/HeaderAction";
import Modal from "@/components/Modal";
import { HeaderActionType } from "@/types/HeaderCenterType";
import React, { useState } from "react";
import { Auth } from "./Auth";

const HeaderCenterActions = () => {
    const [open, setOpen] = useState<boolean>(false)

  const actionList = [
    {
      id: 1,
      icon: <CompareIcon />,
      actionCount: 2,
    },
    {
      id: 2,
      icon: <LikeIcon />,
      actionCount: 11,
    },
    {
      id: 3,
      icon: <ShopIcon />,
      actionCount: 7,
    },
    {
      id: 4,
      icon: <ProfileIcon />,
      actionCount: 0,
    },
  ];

  return (
    <>
      <div className="flex gap-[15px]">
        {actionList.map((item: HeaderActionType) => {
            return item.id == 4 ? <HeaderAction onClick={() => setOpen(true)} key={item.id} actionCount={item.actionCount} icon={item.icon}/> : <HeaderAction key={item.id} actionCount={item.actionCount} icon={item.icon}/>
        })}
      </div>

      <Modal open={open} setOpen={setOpen}>
        <Auth closeAction={setOpen}/>
      </Modal>
    </>
  );
};

export default HeaderCenterActions;
