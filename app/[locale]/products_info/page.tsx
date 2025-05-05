"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
// import { getProducts } from "'service/getProducts'";
// import { ProductType } from "'types/ProductType'";
// import { IMG_API } from "'hooks/getEnv'";
// import { CompareIcon, ShopIcon } from "'assets/icons'";
// import { formatPrice } from "'hooks/formatPrice'";
// import { Link, useRouter } from "'i18n/navigation'";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { getProducts } from "@/service/getProducts";
import { Link, useRouter } from "@/i18n/navigation";
import { ProductType } from "@/types/ProductType";
import SkeletonProduct from "@/components/skeletons/SkeletonProduct";
import { IMG_API } from "@/hooks/getEnv";
import { formatPrice } from "@/hooks/formatPrice";
import Button from "@/components/Button";
import { CompareIcon } from "@/icons";
import { ShopIcon } from "@/assets/icons";
// import SkeletonProduct from "'components/skeletons/SkeletonProduct'";
// import Button from "'components/Button'";

const Products: FC = () => {
  const { data: products, isLoading } = getProducts();
  const router = useRouter();
  const queryClient = useQueryClient();
  const t = useTranslations("Product");
  const t2 = useTranslations("SinglePage");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  function handleClick(item: ProductType) {
    router.push(`${item.id}`);
    queryClient.invalidateQueries({ queryKey: ["single_product"] });
  }

  // Calculate pagination
  const totalPages = Math.ceil(products?.length / productsPerPage) || 1;
  const currentProducts = products?.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate visible page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const half = Math.floor(maxVisiblePages / 2);
      let start = Math.max(currentPage - half, 1);
      let end = Math.min(start + maxVisiblePages - 1, totalPages);

      if (end - start + 1 < maxVisiblePages) {
        start = Math.max(end - maxVisiblePages + 1, 1);
      }

      if (start > 1) {
        pages.push(1);
        if (start > 2) {
          pages.push("...");
        }
      }

      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }

      if (end < totalPages) {
        if (end < totalPages - 1) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="products pb-[80px]">
      <div className="containers !mt-[30px] !mb-[30px] px-4 sm:px-6 flex flex-wrap gap-2 text-sm text-[#B6BABF]">
        <Link href="/" className="hover:text-[#2B4FAB] transition">
          {t2("home")}
        </Link>
        <span>/</span>
        <Link href="/smartphones" className="hover:text-[#2B4FAB] transition">
          {t2("products")}
        </Link>
        <span>/</span>
      </div>

      <div className="containers">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index}>
                <SkeletonProduct />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentProducts?.map((item: ProductType) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 relative overflow-hidden group"
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="relative product-img-wrapper bg-[#EBEFF3] py-[43px] rounded-[6px] w-full flex items-center justify-center mb-[16px] overflow-hidden">
                    <div className="relative w-[202px] h-[202px] transition-transform duration-500 group-hover:scale-110">
                      <Image
                        className="object-contain"
                        src={`${IMG_API}/${item.image}`}
                        alt={item.name}
                        width={202}
                        height={202}
                        priority
                      />
                    </div>
                    {item.is_aksiya && (
                      <span className="absolute top-3 left-3 flex items-center gap-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold px-3 py-[6px] rounded-lg shadow-lg ring-1 ring-white/30 backdrop-blur-md animate-pulse">
                        🔥 {t("discount")}
                      </span>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#2c2c2c76] bg-opacity-20">
                      <button onClick={() => handleClick(item)} className="bg-white text-black px-4 py-2 rounded-md font-medium cursor-pointer">
                        {t("view")}
                      </button>
                    </div>
                  </div>

                  <div onClick={() => handleClick(item)} className="cursor-pointer">
                    <p className="line-clamp-2 text-[16px] text-[#545D6A] mb-[28px] group-hover:text-black transition-colors duration-300">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-end">
                      <div>
                        <strong className="font-bold text-[20px] text-black mb-[10px] group-hover:text-blue-600 transition-colors duration-300">
                          {formatPrice(item.price)} uzs
                        </strong>
                        <p className="bg-[#F02C961A] text-[#F02C96] py-[7px] px-[10px] text-[15px] rounded-[5px]">
                          6 oy / 1 200 000 usz
                        </p>
                      </div>
                      <div className="flex item-center gap-2.5">
                        <Button
                          extraStyle="!bg-transparent !text-[#545D6A] border-[1px] border-[#545D6A] !p-0 w-[52px] h-[52px] flex item-center justify-center hover:!bg-gray-100 transition-colors duration-300"
                          iconPosition="right"
                          icon={<CompareIcon />}
                        />
                        <Button
                          extraStyle="!p-0 w-[52px] h-[52px] flex item-center justify-center hover:!bg-blue-600 hover:!text-white transition-colors duration-300"
                          iconPosition="right"
                          icon={<ShopIcon />}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <nav className="flex items-center gap-2">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-6 py-3 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 transition-colors duration-300 hover:border-blue-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <div className="flex items-center gap-1">
                    {getPageNumbers().map((page, index) =>
                      page === "..." ? (
                        <span key={index} className="px-3 py-1 text-gray-500">
                          ...
                        </span>
                      ) : (
                        <button
                          key={index}
                          onClick={() => goToPage(page as number)}
                          className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors duration-300 ${
                            currentPage === page
                              ? "bg-blue-600 text-white shadow-md"
                              : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-6 py-3 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 transition-colors duration-300 hover:border-blue-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
