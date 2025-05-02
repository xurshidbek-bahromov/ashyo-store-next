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

export default function SinglePage() {
  const params: { id: string } = useParams();
  const { data: singleProduct } = getSingleProduct(params.id);
  const { data: variations } = getVariations(params.id);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ").format(price);
  };

  const monthlyPayment = Math.ceil(singleProduct.price / 3);

  return (
    <>
      <div className="containers !mt-[10px]">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-[10px] text-sm text-[#B6BABF]">
          <Link href="/" className="hover:text-[#2B4FAB] transition">
            Bosh sahifa
          </Link>
          <span>/</span>
          <Link href="/smartphones" className="hover:text-[#2B4FAB] transition">
            Smartfonlar
          </Link>
          <span>/</span>
          <span className="text-[#5E636E] truncate max-w-[200px]">
            {singleProduct.name}
          </span>
        </div>

        {/* Product Title */}
        <h1 className="my-6 text-3xl md:text-4xl font-bold text-gray-900">
          {singleProduct.name}
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Image */}
          <div className="w-full lg:w-[45%] h-auto bg-[#EBEFF3] rounded-xl p-4 flex items-center justify-center relative">
            <Image
              className="w-full max-w-[342px] h-auto object-contain"
              src={`${IMG_API}/${singleProduct.image}`}
              alt={singleProduct.name}
              width={500}
              height={500}
              priority
            />
            <div className="absolute top-4 right-4 flex gap-3">
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
                <FaRegObjectUngroup className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
                <FaRegHeart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-[55%]">
            {/* Price Section */}
            <div className="mb-6 p-4 bg-[#F8F9FA] rounded-xl">
              <div className="flex items-end gap-3 mb-2">
                <span className="text-2xl md:text-3xl font-bold text-[#2B4FAB]">
                  {formatPrice(singleProduct.price)} usz
                </span>
                {singleProduct.oldPrice && (
                  <span className="text-lg text-[#5E636E] line-through">
                    {formatPrice(singleProduct.oldPrice)} usz
                  </span>
                )}
              </div>
              <p className="text-lg text-[#5E636E]">
                Oylik {formatPrice(monthlyPayment)} uszdan (3 oy muddatga
                to'lov)
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex-1 bg-[#2B4FAB] hover:bg-[#1E3D8B] text-white py-3 px-6 rounded-lg font-medium transition flex items-center justify-center gap-2">
                <FaShoppingCart className="w-5 h-5" />
                Savatga qo'shish
              </button>
              <button className="flex-1 border-2 border-[#2B4FAB] hover:bg-[#F0F4FF] text-[#2B4FAB] py-3 px-6 rounded-lg font-medium transition">
                Xarid qilish
              </button>
            </div>

            {/* Delivery Info */}
            <div className="border border-[#EBEFF3] rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <FaTruck className="text-[#2B4FAB]" />
                Yetkazib berish
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <FaStore className="text-[#5E636E] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Do'kondan olib ketish</p>
                    <p className="text-[#5E636E] text-sm">
                      Bugun soat 18:00 gacha
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FaTruck className="text-[#5E636E] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Yetkazib berish</p>
                    <p className="text-[#5E636E] text-sm">
                      1-3 ish kuni, bepul
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[80px]">
          <div className="flex items-center gap-[85px] mb-[45px]">
            <strong>Telfon xususiyatlari</strong>
            <strong>Mijozlarni fikrlari</strong>
          </div>

          <div className="w-[45%] mb-[100px]">
            {variations?.options?.map((item: any) => (
              <div
                key={item.id}
                className="py-[5px] border-b-[2px] text-[#545D6A] text-[18px] border-slate3400 border-dashed flex justify-between"
              >
                <div className="w-[50%]">{variations.name}</div>
                <div className="w-[50%]">{item?.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Products title="Oxirgi ko’rgan mahsulotlar" />
    </>
  );
}
