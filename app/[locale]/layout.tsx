import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { QueryProvider } from "@/query/QueryProvider";
import { LangContext } from "@/context/Context";
import Header from "@/modules/Header";
import Footer from "@/modules/Footer";
import Products from "@/components/Products/Products";
import ProductsWrapper from "@/components/Products/ProductsWrapper";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/logo.svg" />
        <title>Ashyo Market</title>
      </head>
      <body>
        <NextIntlClientProvider>
          <QueryProvider>
            <LangContext>
              <Header />
              {children}
              <ProductsWrapper />
              <Footer />
            </LangContext>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
