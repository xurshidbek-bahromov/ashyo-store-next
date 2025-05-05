import Products from "@/components/Products/Products";
import HeroSection from "@/modules/HeroSection";
import Brands from "@/modules/Brand";
import BrandCategory from "@/modules/BrandCategory";
import Header from "@/modules/Header";
import Hero from "@/modules/Hero";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Product_title");

  return (
    <>
      <Hero />
      <Brands />
      <Products title={t("product")} />
      <Products title={t("best")} />
      <Products title={t("sale")} />
      <BrandCategory />
      <Products title={t("discount")}/>
      <HeroSection />
    </>
  );
}
