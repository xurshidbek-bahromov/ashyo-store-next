// "use client";

// import { LocationIcon } from "@/assets/icons";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useTranslations } from "next-intl";
// import { usePathname, useRouter } from "@/i18n/navigation";
// import { getCookie } from "cookies-next";
// import { Menu, X } from "lucide-react"; // Hamburger va Close icon

// const HeaderTop = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const t = useTranslations("HeaderTopContent");

//   const [lang, setLang] = useState<"uz" | "ru" | "en" | any>(
//     getCookie("NEXT_LOCALE") || "uz"
//   );
//   const [menuOpen, setMenuOpen] = useState(false); // menyu holatini boshqarish uchun

//   function changeLang(value: string) {
//     setLang(value);
//     router.push(pathname, { locale: value });
//   }

//   useEffect(() => {
//     const locale = getCookie("NEXT_LACALE");
//     if (locale === "uz" || locale === "ru" || locale === "en") {
//       setLang(locale);
//     }
//   }, []);

//   return (
//     <div className="bg-[#EBEFF3] py-[11px]">
//       <div className="containers flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
//         {/* Toggle Button */}
//         <div className="flex w-full justify-between items-center md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-[#545D6A]"
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>

//           <div className="flex items-center gap-3">
//             <Link
//               href="tel:+998711234567"
//               className="text-[#545D6A] text-[13px] font-semibold"
//             >
//               +998 (71) 123-45-67
//             </Link>
//             <Select onValueChange={changeLang} defaultValue={lang}>
//               <SelectTrigger className="border-none shadow-none w-[55px] placeholder:text-[13px] text-[#545D6A]">
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectGroup>
//                   <SelectLabel>{t("language")}</SelectLabel>
//                   <SelectItem value="uz">Uz</SelectItem>
//                   <SelectItem value="ru">Ru</SelectItem>
//                   <SelectItem value="en">En</SelectItem>
//                 </SelectGroup>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav
//           className={`flex flex-col md:flex-row items-center gap-4 md:gap-[28px] transition-all duration-300 overflow-hidden ${
//             menuOpen ? "max-h-[500px] mt-4" : "max-h-0 md:max-h-full"
//           } md:mt-0 w-full md:w-auto`}
//         >
//           <Link
//             href={"/"}
//             className="flex items-center gap-[8px] md:gap-[13px] text-[#545D6A] text-[13px] md:text-[14px] font-normal leading-[130%] hover:text-[#134E9B]"
//             onClick={() => setMenuOpen(false)} // link bosilganda menyuni yopish
//           >
//             <LocationIcon />
//             <span>{t("tashkent")}</span>
//           </Link>
//           <Link
//             href={"/"}
//             className="flex items-center gap-[8px] md:gap-[13px] text-[#545D6A] text-[13px] md:text-[14px] font-normal leading-[130%] hover:text-[#134E9B]"
//             onClick={() => setMenuOpen(false)}
//           >
//             {t("about")}
//           </Link>
//           <Link
//             href={"/"}
//             className="flex items-center gap-[8px] md:gap-[13px] text-[#545D6A] text-[13px] md:text-[14px] font-normal leading-[130%] hover:text-[#134E9B]"
//             onClick={() => setMenuOpen(false)}
//           >
//             {t("contact")}
//           </Link>
//           <Link
//             href={"/"}
//             className="flex items-center gap-[8px] md:gap-[13px] text-[#545D6A] text-[13px] md:text-[14px] font-normal leading-[130%] hover:text-[#134E9B]"
//             onClick={() => setMenuOpen(false)}
//           >
//             {t("products")}
//           </Link>
//         </nav>

//         {/* Desktop only (contact + lang switch) */}
//         <div className="hidden md:flex items-center gap-[25px]">
//           <Link
//             href="tel:+998711234567"
//             className="text-[#545D6A] text-[14px] font-semibold leading-[130%]"
//           >
//             +998 (71) 123-45-67
//           </Link>
//           <div className="flex items-center gap-[7px] text-[#545D6A]">
//             <Select onValueChange={changeLang} defaultValue={lang}>
//               <SelectTrigger className="border-none shadow-none w-[65px] placeholder:text-[15px] text-[#545D6A]">
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectGroup>
//                   <SelectLabel>{t("language")}</SelectLabel>
//                   <SelectItem value="uz">Uz</SelectItem>
//                   <SelectItem value="ru">Ru</SelectItem>
//                   <SelectItem value="en">En</SelectItem>
//                 </SelectGroup>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderTop;



//responsive


"use client";

import { LocationIcon } from "@/assets/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
import { Menu, X, MapPin, Info, Phone, ShoppingCart } from "lucide-react";

const HeaderTop = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("HeaderTopContent");

  const [lang, setLang] = useState<"uz" | "ru" | "en" | any>(
    getCookie("NEXT_LOCALE") || "uz"
  );
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <div className="relative">
      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div className="bg-[#EBEFF3] py-[11px] relative z-50">
        <div className="containers flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {/* Mobile Top Bar */}
          <div className="flex w-full justify-between items-center md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#545D6A]"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="flex items-center gap-3">
              <Link
                href="tel:+998711234567"
                className="text-[#545D6A] text-[13px] font-semibold"
              >
                +998 (71) 123-45-67
              </Link>
              <Select onValueChange={changeLang} defaultValue={lang}>
                <SelectTrigger className="border-none shadow-none w-[55px] placeholder:text-[13px] text-[#545D6A]">
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

          {/* Navigation */}
          <nav
            className={`flex flex-col md:flex-row items-center gap-4 md:gap-[28px] w-full md:w-auto transition-all duration-300 ${
              menuOpen
                ? "opacity-100 translate-y-0 max-h-[500px] mt-4"
                : "opacity-0 -translate-y-5 max-h-0 md:opacity-100 md:translate-y-0 md:max-h-full md:mt-0"
            }`}
          >
            <Link
              href={"/"}
              className="flex items-center gap-[8px] md:gap-[13px] text-[#545D6A] text-[13px] md:text-[14px] font-normal leading-[130%] hover:text-[#134E9B]"
              onClick={() => setMenuOpen(false)}
            >
              <MapPin size={18} />
              <span>{t("tashkent")}</span>
            </Link>
            <Link
              href={"/"}
              className="flex items-center gap-[8px] md:gap-[13px] text-[#545D6A] text-[13px] md:text-[14px] font-normal leading-[130%] hover:text-[#134E9B]"
              onClick={() => setMenuOpen(false)}
            >
              <Info size={18} />
              <span>{t("about")}</span>
            </Link>
            <Link
              href={"/"}
              className="flex items-center gap-[8px] md:gap-[13px] text-[#545D6A] text-[13px] md:text-[14px] font-normal leading-[130%] hover:text-[#134E9B]"
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={18} />
              <span>{t("contact")}</span>
            </Link>
            <Link
              href={"/"}
              className="flex items-center gap-[8px] md:gap-[13px] text-[#545D6A] text-[13px] md:text-[14px] font-normal leading-[130%] hover:text-[#134E9B]"
              onClick={() => setMenuOpen(false)}
            >
              <ShoppingCart size={18} />
              <span>{t("products")}</span>
            </Link>
          </nav>

          {/* Desktop only - contact and language switcher */}
          <div className="hidden md:flex items-center gap-[25px]">
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
    </div>
  );
};

export default HeaderTop;
