"use client";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import Button from "./Button";
import { ArrowDownIcon, SearchIcon } from "@/assets/icons";
import Input from "./Input";
import { useTranslations } from "next-intl";
import { Context } from "../context/Context";
import { instance } from "@/hooks/instance";
import debounce from "@/hooks/debounce";
import { HeaderSearchType } from "@/types/HeaderCenterType";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";

const HeaderForm = () => {
  const t = useTranslations("HeaderCenterContent");
  const { setShowCategory, showCategory } = useContext(Context);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<HeaderSearchType[]>([]);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
    setIsLoading(true);
    setShowSearch(true);
    if (!e.target.value) {
      setShowSearch(false);
      setIsLoading(false);
    }
  }

  function handleSearchClick(name: string) {
    setSearchValue(name);
    setShowSearch(false);
    //...boshqa page ga yonaltirish kerak
  }

  const searchWatingValue = debounce(searchValue, 1000);
  useEffect(() => {
    if (searchWatingValue) {
      instance()
        .get("/categories/search", { params: { name: searchWatingValue } })
        .then((res) => {
          setSearchResult(res.data);
          setIsLoading(false);
        });
    }
  }, [searchWatingValue]);

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
        <Input
          value={searchValue}
          onChange={handleSearch}
          extraStyle="w-full"
          placeholder={t("placeholder")}
          type="text"
        />
        <Button
          extraStyle="absolute top-0 bottom-0 right-0 !w-[58px] !h-[100%] !p-0"
          iconPosition="right"
          icon={<SearchIcon />}
        />
        <ul
          className={`${
            showSearch
              ? "h-auto max-h-[350px] py-[20px] overflow-auto"
              : "h-0 overflow-hidden"
          } duration-300 rounded-[12px] flex flex-col bg-white absolute z-50 shadow w-full mt-2`}
        >
          {isLoading ? (
            <div className="flex justify-center items-center py-4">
              <div className="flex space-x-3">
                <div className="w-3 h-3 bg-blue-700 rounded-full animate-bounce rotate-[360deg] scale-125 opacity-75 hover:opacity-100"></div>
                <div className="w-3 h-3 bg-blue-700 rounded-full animate-bounce [animation-delay:-0.2s] rotate-[360deg] scale-125 opacity-75 hover:opacity-100"></div>
                <div className="w-3 h-3 bg-blue-700 rounded-full animate-bounce [animation-delay:-0.4s] rotate-[360deg] scale-125 opacity-75 hover:opacity-100"></div>
              </div>
            </div>
          ) : searchResult.length === 0 && searchValue ? (
            <motion.li
              className="pl-[40px] py-[17px] text-center text-gray-500 flex gap-2 items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4, // Duration for smooth effect
                ease: "easeOut", // Smooth ease out for the final state
              }}
            >
              {/* Vibrating Sticker */}
              <motion.div
                className="text-2xl"
                animate={{
                  // x: [0, 10, -10, 0], // Horizontal movement
                  rotate: [0, 20, -20, 0], // Rotation
                  scale: [1, 1.2, 1], // Slight scale effect for bounce
                }}
                transition={{
                  repeat: Infinity, // Loop the animation
                  repeatType: "loop", // Infinite loop
                  duration: 1.5, // Animation duration
                  ease: "easeInOut", // Smooth easing
                }}
              >
                <span role="img" aria-label="no-results">
                  🚫
                </span>{" "}
              </motion.div>
              <span className="">{t("404")}</span>
            </motion.li>
          ) : (
            searchResult.map((item) => (
              <li
                onClick={() => handleSearchClick(item.name)}
                className="pl-[40px] py-[17px] border-b-[1px] border-slate-200 duration-300 hover:bg-blue-50 hover:bg-opacity-50 cursor-pointer"
                key={item.id}
              >
                {item.name}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeaderForm;
