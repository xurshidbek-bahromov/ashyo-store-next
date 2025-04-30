"use client";
import { IMG_API } from "@/hooks/getEnv";
import { getBrands } from "@/service/getBrands";
import { BrandsType } from "@/types/BrandsType";
import Image from "next/image";
import React from "react";
import "./style.css";
import BrandsSkeleton from "@/components/skeletons/BrandsSkeleton";

const Brands = () => {
  const { data: brands, isLoading } = getBrands();

  if (isLoading) {
    return <BrandsSkeleton />;
  }

  return (
    <div className="containers brands-wrapper grid">
      {brands.map((item: BrandsType) => (
        <div key={item.id} className="brands-item">
          {item.image === null ? (
            <span>{item.name}</span>
          ) : (
            <Image
              className="w-[110] h-[50] object-contain"
              src={`${IMG_API}/${item.image}`}
              alt={item.name}
              width={110}
              height={50}
              priority
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Brands;
