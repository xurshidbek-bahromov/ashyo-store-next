// import { useTranslations } from "next-intl";
// import React from "react";
// import {
//   FaFacebookF,
//   FaYoutube,
//   FaTelegramPlane,
//   FaTwitter,
//   FaInstagram,
//   FaApple,
//   FaGooglePlay,
// } from "react-icons/fa";
// import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

// const Footer = () => {
//   const t = useTranslations("Footer");

//   return (
//     <footer className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 py-6">
//       <div className="containers mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
//         {/* Social Media & App Buttons */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6">{t("social_media")}</h3>
//           <div className="flex gap-3 mb-10">
//             {[
//               FaFacebookF,
//               FaYoutube,
//               FaTelegramPlane,
//               FaTwitter,
//               FaInstagram,
//             ].map((Icon, idx) => (
//               <div
//                 key={idx}
//                 className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full shadow-sm transition cursor-pointer"
//               >
//                 <Icon className="text-gray-700 text-lg" />
//               </div>
//             ))}
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-6">
//             {t("download_app")}
//             </h3>
//             <div className="flex flex-col sm:flex-row gap-4">
//               {/* App Store Button */}
//               <a
//                 href="#"
//                 className="flex items-center gap-3 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition shadow-md"
//               >
//                 <FaApple className="w-6 h-6" />
//                 <div className="text-left leading-tight">
//                   <p className="text-xs">{t("download")}</p>
//                   <p className="text-sm font-semibold">App Store</p>
//                 </div>
//               </a>

//               {/* Google Play Button */}
//               <a
//                 href="#"
//                 className="flex items-center gap-3 px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 transition shadow-md"
//               >
//                 <FaGooglePlay className="w-6 h-6" />
//                 <div className="text-left leading-tight">
//                   <p className="text-xs">{t("download")}</p>
//                   <p className="text-sm font-semibold">Google Play</p>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Menu Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-5">{t("menu")}</h3>
//           <ul className="space-y-3 text-[15px] text-gray-700">
//             <li>
//               <a href="#" className="hover:text-black transition">
//                 {t("about_company")}
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-black transition">
//                 {t("terms_of_use")}
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-black transition">
//                 {t("privacy_policy")}
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-black transition">
//                 {t("return_policy")}
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-black transition">
//                 {t("contact_us")}
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-3">Aloqa</h3>
//           <p className="text-2xl font-bold text-blue-900 mb-5">
//             +998 (71) 123-45-67
//           </p>
//           <p className="text-sm mb-2">{t("any_questions")}</p>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder={t("prompt")}
//               className="w-full bg-gray-100 rounded-md py-3 pl-4 pr-12 text-sm outline-none focus:ring-2 focus:ring-blue-400 transition"
//             />
//             <HiOutlineChatBubbleLeftRight
//               className="absolute right-3 top-3.5 text-gray-500"
//               size={20}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="text-center text-xs text-gray-500 mt-2 border-gray-300 pt-16">
//         {t("copyright")}
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { AppStoreIcon, FacebookIcon, PlayMarketIcon, TelegramIcon, TwitterIcon, YouTubeIcon } from '@/icons'
import { GrInstagram } from "react-icons/gr";
import Link from 'next/link'
import React from 'react'
import Input from '@/components/Input';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations("Footer");
    const socialList = [
        {
            id:1,
            icon:<FacebookIcon/>,
            path:"/"
        },
        {
            id:2,
            icon:<YouTubeIcon/>,
            path:"/"
        },
        {
            id:3,
            icon:<TelegramIcon/>,
            path:"/"
        },
        {
            id:4,
            icon:<TwitterIcon/>,
            path:"/"
        },
        {
            id:5,
            icon:<GrInstagram color='#cd2b67' />,
            path:"/"
        },
    ]
    const menuList = [
        {
            id:1,
            title:t("about_company"),
            path:"/"
        },
        {
            id:2,
            title:t("terms_of_use"),
            path:"/"
        },
        {
            id:3,
            title:t("privacy_policy"),
            path:"/"
        },
        {
            id:4,
            title:t("return_policy"),
            path:"/"
        },
        {
            id:5,
            title:t("contact_us"),
            path:"/"
        },
    ]
  return (
    <footer className='mt-[100px] pb-[50px]'>
        <div className="containers flex gap-[20px] sm:gap-0 justify-center sm:justify-between flex-wrap">
            <div className='text-center sm:text-start'>
                <strong className='font-bold text-[20px] leading-[26px] mb-[21px]'>{t("social_media")}</strong>
                <div className='flex justify-center sm:justify-start items-center gap-[10px] mt-[21px]'>
                    {socialList.map(item => (
                        <Link className='bg-[#EBEFF3] rounded-[7px] w-[44px] h-[40px] flex items-center justify-center duration-400 hover:opacity-70 cursor-pointer hover:shadow-xl' href={item.path} key={item.id}>{item.icon}</Link>
                    ))}
                </div>
                <p className='mt-[30px] text-[20px] leading-[26px] font-bold mb-[12px]'>{t("download_app")}</p>
                <div className='flex justify-center sm:justify-start gap-[12px] mb-[57px]'>
                    <button className='flex items-center gap-[12px] py-[17px] px-[30px] bg-[#EBEFF3] rounded-[10px] duration-400 hover:opacity-70 cursor-pointer hover:shadow-xl'>
                        <AppStoreIcon/>
                        <span className='font-bold text-[16px] leading-[17.66px]'>App Store </span>
                    </button>
                    <button className='flex items-center gap-[12px] py-[17px] px-[30px] bg-[#EBEFF3] rounded-[10px] duration-400 hover:opacity-70 cursor-pointer hover:shadow-xl'>
                        <PlayMarketIcon/>
                        <span className='font-bold text-[16px] leading-[17.66px]'>Google Play </span>
                    </button>
                </div>
                <p className='font-medium text-[16px] text-[#000] opacity-40'>{t("copyright")}</p>
            </div>
            <div className='text-center sm:text-start'>
                <strong className='text-[20px] leading-[26px] inline-block font-bold mb-[16px]'>{t("menu")}</strong>
                <div className='space-y-[12px] flex flex-col'>
                    {menuList.map(item => <Link className='text-[16px] leading-[17.66px] text-[#000000B2] opacity-70' key={item.id} href={item.path}>{item.title}</Link>)}
                </div>
            </div>
            <div className='flex flex-col'>
                <strong className='font-bold text-[20px] leading-[26px] mb-[13px] opacity-70'>{t("contact_us")}</strong>
                <Link className='inline-block font-bold text-[24px] leading-[28px] mb-[32px] text-[#06172D]' href={`tel:+998711234567`}>+998 (71) 123-45-67</Link>
                <p className='inline-block text-[16px] leading-[20px] opacity-70 mb-[12px]'>{t("any_questions")}</p>
                <Input extraClass='!w-[314px]' placeholder={t("prompt")} type='text'/>
            </div>
        </div>
    </footer>
  )
}

export default Footer