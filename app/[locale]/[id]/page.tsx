"use client";
import {
  FaRegHeart,
  FaRegObjectUngroup,
  FaShoppingCart,
  FaStore,
  FaTruck,
} from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { IMG_API } from "@/hooks/getEnv";
import { Link } from "@/i18n/navigation";
import { getSingleProduct } from "@/service/getSingleProduct";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getVariations } from "@/service/getVariation";
import Products from "@/components/Products/Products";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import { formatPrice } from "@/hooks/formatPrice";

export default function SinglePage() {
  const params: { id: string } = useParams();
  const { data: singleProduct } = getSingleProduct(params.id);
  const { data: variations } = getVariations(params.id);

  const t = useTranslations("SinglePage");

  // const formatPrice = (price: number) => {
  //   return new Intl.NumberFormat("uz-UZ").format(price);
  // };

  const monthlyPayment = Math.ceil(singleProduct.price / 3);

  return (
    <>
      <div className="containers !mt-[20px] px-4 sm:px-6">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 text-sm text-[#B6BABF]">
          <Link href="/" className="hover:text-[#2B4FAB] transition">
            {t("home")}
          </Link>
          <span>/</span>
          <Link href="/smartphones" className="hover:text-[#2B4FAB] transition">
            {t("smartphones")}
          </Link>
          <span>/</span>
          <span className="text-[#5E636E] truncate max-w-[150px] sm:max-w-[200px]">
            {singleProduct.name}
          </span>
        </div>

        {/* Product Title */}
        <h1 className="my-4 sm:my-6 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          {singleProduct.name}
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Product Image */}
          <div className="w-full lg:w-[45%] h-auto bg-[#EBEFF3] rounded-xl p-4 flex items-center justify-center relative">
            <Image
              className="w-full max-w-[280px] sm:max-w-[342px] h-auto object-contain"
              src={`${IMG_API}/${singleProduct.image}`}
              // alt={singleProduct.name}
              alt="Product image"
              width={500}
              height={500}
              priority
            />
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2 sm:gap-3">
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
                <FaRegObjectUngroup className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
                <FaRegHeart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-[55%]">
            {/* Price Section */}
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-[#f8f9faa4] rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-end gap-2 sm:gap-3 mb-1 sm:mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2B4FAB]">
                  {formatPrice(singleProduct.price)} usz
                </span>
                {singleProduct.oldPrice && (
                  <span className="text-base sm:text-lg text-[#5E636E] line-through">
                    {formatPrice(singleProduct.oldPrice)} usz
                  </span>
                )}
              </div>
              <p className="text-base sm:text-lg text-[#5E636E]">
                {formatPrice(monthlyPayment)} {t("muddatto'lov")}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button
                extraStyle="flex-1 bg-[#fcfcfcba] border border-2 !text-black py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition duration-300 ease-in-out flex items-center justify-center gap-2 
  hover:shadow-lg hover:shadow-blue-400/60 text-sm sm:text-base"
                title={t("button1")}
              />

              <Button
                extraStyle="flex-1 text-[#2B4FAB] border border-[#2B4FAB] py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition duration-300 ease-in-out 
  hover:shadow-lg hover:shadow-blue-400/50 text-sm sm:text-base"
                title={t("button2")}
              />
            </div>

            {/* Delivery Info */}
            {/* Delivery Info - Modern Version */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-full">
                  <FaTruck className="text-blue-600 text-lg" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {t("delivery")}
                </h3>
              </div>

              <div className="space-y-4">
                {/* Delivery Option 1 */}
                <div className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition">
                  <div className="p-2 bg-green-50 rounded-full mt-1">
                    <FaStore className="text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-gray-800">
                        {t("take")}
                      </h4>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        {t("free")}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">
                      {t("delivery_today")}
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                      <HiCheckCircle className="text-green-500" />
                      <span>{t("no_order_required")}</span>
                    </div>
                  </div>
                </div>

                {/* Delivery Option 2 */}
                <div className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition">
                  <div className="p-2 bg-blue-50 rounded-full mt-1">
                    <FaTruck className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-gray-800">
                        {t("home_delivery")}
                      </h4>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        {t("free")}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">
                      {t("delivery_time")}
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                      <HiCheckCircle className="text-green-500" />
                      <span>{t("tashkent_delivery")}</span>
                    </div>
                  </div>
                </div>

                {/* Price Comparison Card */}
                <div className="mt-5 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-2 mb-3">
                    <HiCheckCircle className="text-blue-600 text-xl" />
                    <h4 className="font-medium text-blue-800">
                      {t("best_price_guarantee")}
                    </h4>
                  </div>

                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <p className="text-xs text-gray-500">
                        {t("market_average")}
                      </p>
                      <p className="text-gray-500 line-through">
                        {formatPrice(singleProduct.price * 1.15)} so'm
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">
                        {t("our_offer")}
                      </p>
                      <p className="text-xl font-bold text-blue-600">
                        {formatPrice(singleProduct.price)} {t("so'm")}
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-blue-100 rounded-full h-2 mb-1">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${Math.min(
                          100,
                          (singleProduct.price / (singleProduct.price * 1.15)) *
                            100
                        )}%`,
                      }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-xs text-blue-600">
                    <span>0%</span>
                    <span className="font-medium">
                      {Math.round(
                        ((singleProduct.price * 1.15 - singleProduct.price) /
                          (singleProduct.price * 1.15)) *
                          100
                      )}
                       {t("savings")}
                    </span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-[80px]">
          <div className="flex items-center gap-4 sm:gap-[85px] mb-6 sm:mb-[45px] overflow-x-auto pb-2">
            <strong className="border-b-2 border-black cursor-pointer whitespace-nowrap">
              {singleProduct.name}{t("specifications")}
            </strong>
            <strong className="cursor-pointer whitespace-nowrap">
              {t("customer_reviews")}
            </strong>
          </div>

          <div className="w-full md:w-[70%] lg:w-[45%] mb-12 sm:mb-[100px] cursor-pointer">
            {variations?.options?.map((item: any) => (
              <div
                key={item.id}
                className="py-2 sm:py-[5px] border-b-[1px] sm:border-b-[2px] text-[#545D6A] text-base sm:text-[18px] border-slate-300 border-dashed flex justify-between"
              >
                <div className="w-[50%]">{variations.name}</div>
                <div className="w-[50%]">{item?.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Products title={t("title")} />
    </>
  );
}
