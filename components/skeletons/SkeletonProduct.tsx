import React from "react";

const SkeletonProduct = () => {
  return (
    <div className="bg-[#EBEFF3] rounded-[6px] p-5 w-[300px] animate-pulse ">
      <div className="w-full h-[202px] bg-gray-300 rounded-[6px] mb-4"></div>
      <div className="h-5 bg-gray-300 rounded mb-3 w-full"></div>
      <div className="h-4 bg-gray-300 rounded mb-4 w-1/2"></div>
      <div className="flex gap-2">
        <div className="w-[52px] h-[52px] bg-gray-300 rounded-[6px]"></div>
        <div className="w-[52px] h-[52px] bg-gray-300 rounded-[6px]"></div>
      </div>
    </div>
  );
};

export default SkeletonProduct;
