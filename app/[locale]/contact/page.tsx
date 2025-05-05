import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <div className="px-4 font-sans">
      {/* Breadcrumb */}
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
      
      {/* Header Section */}
      <div className="containers mb-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Qayta aloqa</h1>
        <p className="text-base md:text-lg mb-6 md:mb-8">
          Bizning ishimiz haqida fikr-mulohazalaringiz bilan bo'lishing yoki
          izohlar maydonida o'zingizni qiziqtirgan savolingizni yuboring
        </p>

        {/* Contact Form */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="w-full md:w-1/2">
              <p className="font-semibold">Ism</p>
              <input
                type="text"
                className="w-full h-10 border-b mt-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:shadow-xl bg-[#EBEFF3] p-4 md:p-7 rounded-[6px] duration-300"
                placeholder="Ismingizni kiriting"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="font-semibold">Familya</p>
              <input
                type="text"
                className="w-full h-10 border-b mt-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:shadow-xl bg-[#EBEFF3] p-4 md:p-7 rounded-[6px] duration-300"
                placeholder="Familyangizni kiriting"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="w-full md:w-1/2">
              <p className="font-semibold">Telefon raqam</p>
              <input
                type="tel"
                className="w-full h-10 border-b mt-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:shadow-xl bg-[#EBEFF3] p-4 md:p-7 rounded-[6px] duration-300"
                placeholder="+998 __ ___ __ __"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="font-semibold">Elektron pochta</p>
              <input
                type="text"
                className="w-full h-10 border-b mt-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:shadow-xl bg-[#EBEFF3] p-4 md:p-7 rounded-[6px] duration-300"
                placeholder="Elektron pochtangizni kiriting"
              />
            </div>
          </div>

          <div className="mt-6 md:mt-11">
            <p className="font-semibold">O'zingizni qiziqtirgan mavzu</p>
            <textarea
              className="w-full h-32 md:h-24 border border-gray-300 rounded-[6px] mt-2 p-4 md:p-5 focus:outline-none focus:border-blue-500 duration-500 focus:shadow-xl"
              placeholder="Xabaringizni yozing..."
            />
          </div>
          <div className="flex justify-center md:justify-start">
            <Button title="Xabarni yuborish" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-8 mb-8"></div>

      {/* Map Section */}
      <div className="mb-12 relative">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Yuridik ma'lumotlar</h2>

        <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-md h-[300px] sm:h-[400px] md:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193884.4068564098!2d69.11455850954174!3d41.28247993081267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e1!3m2!1sen!2s!4v1746383126992!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />

          {/* Contact info overlay */}
          <div className="absolute top-2 left-2 right-2 md:top-4 md:right-4 md:left-auto bg-[#ffffff6a] bg-opacity-90 backdrop-blur border rounded-lg p-4 md:p-6 shadow-lg max-w-full md:max-w-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">"Ashyo" MCHJ</h3>
                <div className="space-y-2 md:space-y-3 text-sm md:text-base">
                  <p>
                    <span className="font-semibold">Telefon raqam:</span> +998
                    71 123 45 56
                  </p>
                  <p>
                    <span className="font-semibold">Elektron pochta:</span>{" "}
                    ashyo@gmail.com
                  </p>
                  <p>
                    <span className="font-semibold">Manzil:</span> 100052,
                    O'zbekiston Respublikasi, Toshkent shahri, Bodomzor yo'li
                    1-tor ko'chasi, 72
                  </p>
                </div>
              </div>

              <div className="mt-2 md:mt-0">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Ish vaqti</h3>
                <p className="text-sm md:text-base">Dushanba - Juma: 9:00 - 18:00</p>
                <p className="text-sm md:text-base">Shanba - Yakshanba: Dam olish kuni</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gray-50 bg-opacity-90">
            <p className="text-center text-gray-600 text-sm md:text-base">
              Bizning O'zbekistondagi joylashuvimiz
            </p>
          </div>
        </div>
      </div>

      {/* Stores Section */}
      <div className="containers">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Do'konlarimizni izlang</h2>
        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Asosiy manzillar</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {[
            { name: "Toshkent markazi", address: "Gumbazli savdo markazi" },
            { name: "Grand Mir", address: "Savdo markazi" },
            { name: "Military Hospital", address: "Yonidagi filial" },
            { name: "Po'lat Turdiyev Muzeyi", address: "San'at muzeyi yonida" },
            { name: "Joy Bowling Club", address: "Kinolik majmua" },
            { name: "Sahro Jumaniyozov", address: "Psixologik markaz" },
            { name: "Ashxobod Parki", address: "Dam olish maskani" },
            { name: "Avropa savdo markazi", address: "Yirik savdo majmuasi" },
          ].map((location, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-3 md:p-4 hover:bg-gray-50 transition-colors"
            >
              <h4 className="font-semibold text-base md:text-lg">{location.name}</h4>
              <p className="text-gray-600 mt-1 text-sm md:text-base">{location.address}</p>
              <button className="text-blue-600 mt-2 text-xs md:text-sm hover:underline">
                Xaritada ko'rish →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;