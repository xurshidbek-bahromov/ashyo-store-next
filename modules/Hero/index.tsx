"use client";
import React from "react";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getBanners } from "@/service/getBanner";
import { BannersType } from "@/types/BannersType";
import Button from "@/components/Button";
import Image from "next/image";
import { IMG_API } from "@/hooks/getEnv";

const Hero = () => {
  const { data: banners } = getBanners();

  return (
    <div className="bg-[#F3F0F0]">
      <div className="containers">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper mt-5"
        >
          {banners.map((item: BannersType) => (
            <SwiperSlide>
              <div className="w-[60%]">
                <h2 className="mb-[10px] text-[44px] font-black">
                  {item.name}
                </h2>
                <p className="text-[#545D6A] mb-[22px]">{item.description}</p>
                <Button title="Batafsil" />
              </div>
              <Image className="absolute w-[500px] h-[500px] bottom-0 right-0" src={`${IMG_API}/${item.image}`} alt="Render Img" width={500} height={500} priority/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
