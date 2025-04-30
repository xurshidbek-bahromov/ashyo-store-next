"use client";
import { IMG_API } from "@/hooks/getEnv";
import { getCategories } from "@/service/getCategories";
import { HeaderCategoriesType } from "@/types/HeaderBottomType";
import Image from "next/image";
import React from "react";
import "./styles.css";
import BrandCategorySkeleton from "@/components/skeletons/BrandCategorySkeleton";

const BrandCategory = () => {
  const { data: categories, isLoading } = getCategories();

  if (isLoading) {
    return <BrandCategorySkeleton />;
  }

  return (
    <div className="containers brand-category-wrapper mb-[101px]">
      {categories.map((item: HeaderCategoriesType, index: number) => (
        <div key={item.id} className={`brand-category-item item-${index + 1}`}>
          <Image
            src={`${IMG_API}/${item.image}`}
            alt="category img"
            fill
            className="brand-image"
            priority
            unoptimized
          />
          <div className="overlay"></div>
          <span className="category-label static">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default BrandCategory;