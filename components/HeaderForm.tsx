"use client"
import React, { useContext } from "react";
import Button from "./Button";
import { ArrowDownIcon, SearchIcon } from "@/assets/icons";
import Input from "./Input";
import { useTranslations } from "next-intl";
import { Context } from "../context/Context";

const HeaderForm = () => {
  const t = useTranslations("HeaderCenterContent");
  const { setShowCategory, showCategory } = useContext(Context);

  return (
    <div className="flex items-center gap-[10px]">
      <Button
        onClick={() => setShowCategory(!showCategory)}
        title={t("category")}
        iconPosition="right"
        icon={
          <span
            className={`transition-transform duration-300 ${
              showCategory ? "rotate-180" : ""
            }`}
          >
            <ArrowDownIcon />
          </span>
        }
      />
      <div className="w-[518px] relative">
        <Input extraStyle="w-full" placeholder={t("placeholder")} type="text" />
        <Button
          extraStyle="absolute top-0 bottom-0 right-0 !w-[58px] !h-[100%] !p-0"
          iconPosition="right"
          icon={<SearchIcon />}
        />
      </div>
    </div>
  );
};

export default HeaderForm;
