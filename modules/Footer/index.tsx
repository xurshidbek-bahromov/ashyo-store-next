import { useTranslations } from "next-intl";
import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 py-6">
      <div className="containers mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
        {/* Social Media & App Buttons */}
        <div>
          <h3 className="text-xl font-semibold mb-6">{t("social_media")}</h3>
          <div className="flex gap-3 mb-10">
            {[
              FaFacebookF,
              FaYoutube,
              FaTelegramPlane,
              FaTwitter,
              FaInstagram,
            ].map((Icon, idx) => (
              <div
                key={idx}
                className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full shadow-sm transition cursor-pointer"
              >
                <Icon className="text-gray-700 text-lg" />
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">
            {t("download_app")}
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* App Store Button */}
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition shadow-md"
              >
                <FaApple className="w-6 h-6" />
                <div className="text-left leading-tight">
                  <p className="text-xs">{t("download")}</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 transition shadow-md"
              >
                <FaGooglePlay className="w-6 h-6" />
                <div className="text-left leading-tight">
                  <p className="text-xs">{t("download")}</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div>
          <h3 className="text-xl font-semibold mb-5">{t("menu")}</h3>
          <ul className="space-y-3 text-[15px] text-gray-700">
            <li>
              <a href="#" className="hover:text-black transition">
                {t("about_company")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                {t("terms_of_use")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                {t("privacy_policy")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                {t("return_policy")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                {t("contact_us")}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Aloqa</h3>
          <p className="text-2xl font-bold text-blue-900 mb-5">
            +998 (71) 123-45-67
          </p>
          <p className="text-sm mb-2">{t("any_questions")}</p>
          <div className="relative">
            <input
              type="text"
              placeholder={t("prompt")}
              className="w-full bg-gray-100 rounded-md py-3 pl-4 pr-12 text-sm outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <HiOutlineChatBubbleLeftRight
              className="absolute right-3 top-3.5 text-gray-500"
              size={20}
            />
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-2 border-gray-300 pt-16">
        {t("copyright")}
      </div>
    </footer>
  );
};

export default Footer;
