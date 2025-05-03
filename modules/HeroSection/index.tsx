import React from "react";
import beatsImg from "../../public/headphones.png";
import Image from "next/image";
import Button from "@/components/Button";

const HeroSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="relative bg-[#282828] px-8 md:px-16 mb-[100px] text-white rounded-xl h-auto min-h-[420px] flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Headphones image */}
          <div className="absolute top-[1px] left-8 md:left-12 bottom-0 hidden sm:block">
            <Image
              className="w-[280px] sm:w-[400px] md:w-[500px] h-auto"
              src={beatsImg}
              alt="Beats image"
              width={500}
              height={493}
              priority
            />
          </div>

          {/* Text and button */}
          <div className="relative z-10 w-full sm:max-w-md mx-auto text-center md:text-left md:ml-auto px-4 sm:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
              Musiqa zavqini his qilish uchun ko'p mablag' sarflash shart emas!
            </h2>
            <Button
              extraStyle="mt-4 px-6 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition"
              title="Batafsil"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;