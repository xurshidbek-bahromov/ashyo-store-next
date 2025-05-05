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
    <div className="flex flex-col justify-center sm:flex-row sm:items-center gap-3 sm:gap-[10px] w-full">
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

      <div className="relative w-full sm:w-[80%] max-w-[518px]">
        <Input
          value={searchValue}
          onChange={handleSearch}
          extraClass="w-full"
          placeholder={t("placeholder")}
          type="text"
        />

        <Button
          extraStyle="absolute top-0 bottom-0 right-0 w-[58px] h-full !p-0"
          iconPosition="right"
          icon={<SearchIcon />}
        />

        <ul
          className={`${
            showSearch
              ? "h-auto max-h-[350px] py-5 overflow-auto"
              : "h-0 overflow-hidden"
          } duration-300 rounded-xl flex flex-col bg-white absolute z-50 shadow w-full mt-2`}
        >
          {isLoading ? (
            <div className="flex justify-center items-center py-4">
              <div className="flex space-x-3">
                <div className="w-3 h-3 bg-blue-700 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-blue-700 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
                <div className="w-3 h-3 bg-blue-700 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
              </div>
            </div>
          ) : searchResult.length === 0 && searchValue ? (
            <motion.li
              className="pl-10 py-4 text-center text-gray-500 flex gap-2 items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                className="text-2xl"
                animate={{
                  rotate: [0, 20, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <span role="img" aria-label="no-results">
                  🚫
                </span>
              </motion.div>
              <span>{t("404")}</span>
            </motion.li>
          ) : (
            searchResult.map((item) => (
              <li
                onClick={() => handleSearchClick(item.name)}
                className="pl-10 py-4 border-b border-slate-200 duration-300 hover:bg-blue-50 hover:bg-opacity-50 cursor-pointer"
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
