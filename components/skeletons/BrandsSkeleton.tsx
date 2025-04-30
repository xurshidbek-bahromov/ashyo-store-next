"use client";
import React from "react";

const BrandsSkeleton = () => {
  return (
    <div className="containers brands-wrapper grid">
      {/* 8 skeleton items matching your grid areas */}
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div key={item} className={`brands-item skeleton-item`}>
          <div className="skeleton-content"></div>
        </div>
      ))}
    </div>
  );
};

export default BrandsSkeleton;
