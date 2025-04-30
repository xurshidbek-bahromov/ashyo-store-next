"use client";
import React from "react";

const BrandCategorySkeleton = () => {
  return (
    <div className="containers brand-category-wrapper mb-[101px]">
      {/* Item 1 (col-span-2) */}
      <div className="brand-category-item item-1">
        <div className="brand-image skeleton-image"></div>
        <div className="overlay skeleton-overlay"></div>
        <span className="category-label skeleton-label"></span>
      </div>

      {/* Item 2 */}
      <div className="brand-category-item item-2">
        <div className="brand-image skeleton-image"></div>
        <div className="overlay skeleton-overlay"></div>
        <span className="category-label skeleton-label"></span>
      </div>

      {/* Item 3 */}
      <div className="brand-category-item item-3">
        <div className="brand-image skeleton-image"></div>
        <div className="overlay skeleton-overlay"></div>
        <span className="category-label skeleton-label"></span>
      </div>

      {/* Item 4 */}
      <div className="brand-category-item item-4">
        <div className="brand-image skeleton-image"></div>
        <div className="overlay skeleton-overlay"></div>
        <span className="category-label skeleton-label"></span>
      </div>

      {/* Item 5 */}
      <div className="brand-category-item item-5">
        <div className="brand-image skeleton-image"></div>
        <div className="overlay skeleton-overlay"></div>
        <span className="category-label skeleton-label"></span>
      </div>

      {/* Item 6 */}
      <div className="brand-category-item item-6">
        <div className="brand-image skeleton-image"></div>
        <div className="overlay skeleton-overlay"></div>
        <span className="category-label skeleton-label"></span>
      </div>

      {/* Item 7 */}
      <div className="brand-category-item item-7">
        <div className="brand-image skeleton-image"></div>
        <div className="overlay skeleton-overlay"></div>
        <span className="category-label skeleton-label"></span>
      </div>
    </div>
  );
};

export default BrandCategorySkeleton;