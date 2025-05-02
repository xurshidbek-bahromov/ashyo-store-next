import Products from "@/components/Products/Products";
import HeroSection from "@/modules/HeroSection";
import Brands from "@/modules/Brand";
import BrandCategory from "@/modules/BrandCategory";
import Header from "@/modules/Header";
import Hero from "@/modules/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Products title="Most popular product"/>
      <Products title="Best seller product"/>
      <Products title="Sale product"/>
      <BrandCategory />
      <Products title="Aksiyadagi tovarlar"/>
      <HeroSection />
      <Products title="Oxirgi ko’rgan mahsulotlar"/>
    </>
  );
}
