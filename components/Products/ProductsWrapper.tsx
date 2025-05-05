"use client";

import { useTranslations } from "next-intl";
import Products from "./Products";

export default function ProductsWrapper() {
  const t = useTranslations("Product_title");
  return <Products title={t("recently")} />;
}
