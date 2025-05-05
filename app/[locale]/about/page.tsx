import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaPhone } from 'react-icons/fa';

const sidebarData = [
  {
    title: 'Ashyo haqida',
    desc: 'Ashyo 2022 yilda Toshkent shahrida tashkil etilgan.',
  },
  {
    title: "Muddatli to'lov",
    desc: "Ashyoda barcha elektronik texnikalar uchun qulay onlayn to'lov rejasi",
  },
  {
    title: "To'lov usullari",
    desc: "Siz uchun qulay usulda to'lang: do'konda, Click, Payme orqali.",
  },
  {
    title: "Yetkazib berish",
    desc: "Ashyoda tovarlarni yetkazib berish shartlari.",
  },
  {
    title: "Tovarlarga kafolat",
    desc: "Ashyo onlayn do‘konining kafolati va qaytarilishi haqida bilib oling.",
  },
  {
    title: "Yordam",
    desc: "Tushunmagan narsalaringiz bo‘lsa savollaringizni bering.",
  },
];

const About = () => {
  return (
    <div className="containers px-4 py-10 font-sans">
      <div className="containers !mt-[30px] !mb-[30px] px-4 sm:px-6 flex flex-wrap gap-2 text-sm text-[#B6BABF]">
        <Link href="/" className="hover:text-[#2B4FAB] transition">
          Bosh sahifa
        </Link>
        <span>/</span>
        <Link href="/smartphones" className="hover:text-[#2B4FAB] transition">
          Qayta aloqa
        </Link>
        <span>/</span>
      </div>

      <div className=" mt-8 flex flex-col md:flex-row gap-8">
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
          <div className="bg-[#6F73EE] text-white text-bold text-[150px] md:text-7xl font-bold text-center py-44 rounded-2xl shadow-md">
            Ashyo
          </div>

          {/* Description */}
          <section className="space-y-4 text-gray-700 leading-relaxed text-base">
            <p>
              Ashyo — bozor narxidagi maishiy texnika va elektronika mahsulotlari do‘koni. 2 yildan ortiq
              vaqt davomida mijozlarga keng assortimentdagi mahsulotlarni, kafolatli va sifatli xizmat bilan taklif etib kelmoqda.
            </p>
            <p>
              Kompaniya 2022 yilda Toshkentda tashkil etilgan. Hozirda poytaxt va viloyatlarda 26 ta do‘kon faoliyat yuritmoqda.
            </p>
            <p>
              Tovarlarni qulay usulda sotib olishingiz mumkin — do‘konlar orqali yoki vebsaytda. Elektronika uchun onlayn to‘lov
              rejalari mavjud bo‘lib, faqat pasport bilan ro‘yxatdan o‘tasiz.
            </p>
            <p>
              Yuridik shaxslar ham hech qanday qo‘shimcha to‘lovlarsiz pul o‘tkazish orqali mahsulot xarid qilishlari mumkin.
            </p>
          </section>

          {/* Contact / Social */}
          <section className="flex flex-wrap items-center gap-5 text-[#6F73EE] text-2xl">
            <FaTelegram title="Telegram" className="hover:text-indigo-800 transition" />
            <FaInstagram title="Instagram" className="hover:text-indigo-800 transition" />
            <FaFacebook title="Facebook" className="hover:text-indigo-800 transition" />
            <FaPhone title="Telefon" className="hover:text-indigo-800 transition" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;
