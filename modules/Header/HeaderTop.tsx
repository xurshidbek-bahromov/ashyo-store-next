"use client";

import { ArrowDownIcon, LocationIcon } from "@/assets/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { HeaderTopStyle } from "./styles"; 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { getCookie } from "cookies-next";

const HeaderTop = () => {
  const router = useRouter();
  const pathname = usePathname();

  const t = useTranslations("HeaderTopContent");
  const [lang, setLang] = useState<"uz" | "ru" | "en" | any>(
    getCookie("NEXT_LOCALE") || "uz"
  );

  function changeLang(value: string) {
    setLang(value);
    router.push(pathname, { locale: value });
  }

  useEffect(() => {
    const locale = getCookie("NEXT_LACALE");
    if (locale === "uz" || locale === "ru" || locale === "en") {
      setLang(locale);
    }
  }, []);

  return (
    <div className="bg-[#EBEFF3] py-[11px]">
      <div className="containers flex items-center justify-between">
        <nav className="flex items-center gap-[28px]">
          <Link
            href={"/"}
            className="flex items-center gap-[13px] text-[#545D6A] text-[14px] font-normal leading-[130%] transition-all duration-300 hover:text-[#134E9B]"
          >
            <LocationIcon />
            <span>{t("tashkent")}</span>
          </Link>
          <Link
            href={"/"}
            className="flex items-center gap-[13px] text-[#545D6A] text-[14px] font-normal leading-[130%] transition-all duration-300 hover:text-[#134E9B]"
          >
            {t("about")}
          </Link>
          <Link
            href={"/"}
            className="flex items-center gap-[13px] text-[#545D6A] text-[14px] font-normal leading-[130%] transition-all duration-300 hover:text-[#134E9B]"
          >
            {t("contact")}
          </Link>
          <Link
            href={"/"}
            className="flex items-center gap-[13px] text-[#545D6A] text-[14px] font-normal leading-[130%] transition-all duration-300 hover:text-[#134E9B]"
          >
            {t("products")}
          </Link>
        </nav>

        <div className="flex items-center gap-[25px]">
          <Link
            href="tel:+998711234567"
            className="text-[#545D6A] text-[14px] font-semibold leading-[130%]"
          >
            +998 (71) 123-45-67
          </Link>
          <div className="flex items-center gap-[7px] text-[#545D6A]">
            <Select onValueChange={changeLang} defaultValue={lang}>
              <SelectTrigger className="border-none shadow-none w-[65px] placeholder:text-[15px] text-[#545D6A]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{t("language")}</SelectLabel>
                  <SelectItem value="uz">Uz</SelectItem>
                  <SelectItem value="ru">Ru</SelectItem>
                  <SelectItem value="en">En</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
