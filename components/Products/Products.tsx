"use client";

import React, { FC } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.css";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { getProducts } from "@/service/getProducts";
import { ProductType } from "@/types/ProductType";
import { IMG_API } from "@/hooks/getEnv";
import Button from "../Button";
import { CompareIcon, ShopIcon } from "@/assets/icons";
import { formatPrice } from "@/hooks/formatPrice";
import SkeletonProduct from "../skeletons/SkeletonProduct";
import { useRouter } from "@/i18n/navigation";
import { useQueryClient } from "@tanstack/react-query";

const Products: FC<{ title: string }> = ({ title }) => {
  const { data: products, isLoading } = getProducts();
  const router = useRouter();
  const queryClient = useQueryClient()

  // function handleClick() {
  //   router.push(`${item.id}`);
  //   queryClient.invalidateQueries({ queryKey: ['single_product'] });
  // }

  return (
    <div className="products pb-[80px] relative">
      <div className="containers !mb-[50px]">
        <h2 className="text-black text-[32px] font-bold leading-[130%]">
          {title}
        </h2>
      </div>

      {/* Custom arrows */}
      <div className="swiper-button-prev-custom absolute left-[40px] top-[45%] z-10 transform -translate-y-1/2 cursor-pointer">
        <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-xl">
          ‹
        </button>
      </div>
      <div className="swiper-button-next-custom absolute right-[40px] top-[45%] z-10 transform -translate-y-1/2 cursor-pointer">
        <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-xl">
          ›
        </button>
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {isLoading ? (
          <div className="flex gap-5 justify-center">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex justify-center items-center">
                <SkeletonProduct />
              </div>
            ))}
          </div>
        ) : (
          products.map((item: ProductType) => (
            <SwiperSlide key={item.id}>
              <div
                onClick={() => router.push(`${item.id}`)}
                className="relative product-img-wrapper bg-[#EBEFF3] py-[43px] rounded-[6px] w-full flex items-center justify-center mb-[16px]"
              >
                <Image
                  className="w-[202px] h-[202px]"
                  src={`${IMG_API}/${item.image}`}
                  alt={item.name}
                  width={202}
                  height={202}
                  priority
                />
                {item.is_aksiya && (
                  <span className="absolute top-3 left-3 flex items-center gap-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold px-3 py-[6px] rounded-lg shadow-lg ring-1 ring-white/30 backdrop-blur-md animate-pulse">
                    🔥 Aksiyada
                  </span>
                )}
              </div>
              <div onClick={() => router.push(`${item.id}`)}>
                <p className="line-clamp-2 text-[16px] text-[#545D6A] mb-[28px]">
                  {item.description}
                </p>
                <div className="flex justify-between items-end">
                  <div onClick={() => router.push(`${item.id}`)}>
                    <strong className="font-bold text-[20px] text-black mb-[10px]">
                      {formatPrice(item.price)} uzs
                    </strong>
                    <p className="bg-[#F02C961A] text-[#F02C96] py-[7px] px-[10px] text-[15px] rounded-[5px]">
                      6 oy / 1 200 000 usz
                    </p>
                  </div>
                  <div className="flex item-center gap-2.5">
                    <Button
                      extraStyle="!bg-transparent !text-[#545D6A] border-[1px] border-[#545D6A] !p-0 w-[52px] h-[52px] flex item-center justify-center"
                      iconPosition="right"
                      icon={<CompareIcon />}
                    />
                    <Button
                      extraStyle="!p-0 w-[52px] h-[52px] flex item-center justify-center"
                      iconPosition="right"
                      icon={<ShopIcon />}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default Products;
