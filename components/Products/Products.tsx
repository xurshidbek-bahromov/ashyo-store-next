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

const Products: FC<{ title: string }> = ({ title }) => {
  const { data: products, isLoading } = getProducts();

  return (
    <div className="products pb-[80px]">
      <div className="containers !mb-[50px]">
        <h2 className="text-black text-[32px] font-bold leading-[130%]">
          {title}
        </h2>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
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
            <SwiperSlide>
              <div className="product-img-wrapper bg-[#EBEFF3] py-[43px] rounded-[6px] w-full flex items-center justify-center mb-[16px]">
                <Image
                  className="w-[202px] h-[202px]"
                  src={`${IMG_API}/${item.image}`}
                  alt={item.name}
                  width={202}
                  height={202}
                  priority
                />
              </div>
              <div>
                <p className="line-clamp-2 text-[16px] text-[#545D6A] mb-[28px]">
                  {item.description}
                </p>
                <div className="flex justify-between items-end">
                  <div>
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
