import React from "react";
import beatsImg from "../../public/headphones.png";
import Image from "next/image";
import Button from "@/components/Button";

const HeroSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="containers">
        <div className="relative bg-[#282828] px-16 mb-[100px] text-white rounded-xl h-[420px] md:h-[400px] flex items-center justify-center">
          {/* Headphones image */}
          <div className="absolute top-[1px] left-[64px] md:left-12 bottom-0">
            <Image
              className="!w-[518px] h-[494px] md:w-80 "
              src={beatsImg}
              alt="Beats image"
              width={518}
              height={493}
              priority
            />
          </div>

          {/* Text and button */}
          <div className="relative z-10 max-w-md ml-auto mr-6 md:mr-12 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              Musiqa zavqini his qilish uchun ko'p mablag' sarflash shart emas!
            </h2>
            <button className="">Batafsil</button>
            <Button
              extraStyle="mt-6 px-6 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition !text-black"
              title="Batafsil"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;