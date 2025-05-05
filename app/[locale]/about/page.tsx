"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaPhone } from "react-icons/fa";

const About = () => {
  const t = useTranslations("About_company");

  const sidebarData = [
    {
      title: t("about"),
      desc: t("description"),
    },
    {
      title: t("installment"),
      desc: t("installment_desc"),
    },
    {
      title: t("payment_methods"),
      desc: t("payment_desc"),
    },
    {
      title: t("delivery"),
      desc: t("delivery_desc"),
    },
    {
      title: t("warranty"),
      desc: t("warranty_desc"),
    },
    {
      title: t("help"),
      desc: t("help_desc"),
    },
  ];

  return (
    <div className="containers px-4 py-10 font-sans">
      <div className="containers !mt-[30px] !mb-[30px] px-4 sm:px-6 flex flex-wrap gap-2 text-sm text-[#B6BABF]">
        <Link href="/" className="hover:text-[#2B4FAB] transition">
          {t("home")}
        </Link>
        <span>/</span>
        <Link href="/smartphones" className="hover:text-[#2B4FAB] transition">
          {t("feedback")}
        </Link>
        <span>/</span>
      </div>

      <div className=" mt-8 mb-40 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-1/4 space-y-6">
          {sidebarData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="md:w-3/4 space-y-8">
          {/* Banner */}
          <div className="bg-[#6F73EE] text-white text-bold text-[150px] md:text-7xl font-bold text-center py-40 rounded-2xl shadow-md">
            Ashyo
          </div>

          {/* Description */}
          <section className="space-y-4 text-gray-700 leading-relaxed text-base">
            <p>
              Ashyo — {t("intro")}
            </p>
            <p>
              {t("history")}
            </p>
            <p>
              {t("purchase")}
            </p>
            <p>
              {t("legal")}
            </p>
          </section>

          {/* Contact / Social */}
          <section className="flex flex-wrap items-center gap-5 text-[#6F73EE] text-2xl">
            <FaTelegram
              title="Telegram"
              className="hover:text-indigo-800 transition"
            />
            <FaInstagram
              title="Instagram"
              className="hover:text-indigo-800 transition"
            />
            <FaFacebook
              title="Facebook"
              className="hover:text-indigo-800 transition"
            />
            <FaPhone
              title="Telefon"
              className="hover:text-indigo-800 transition"
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;
