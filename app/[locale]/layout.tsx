// import type { Metadata } from "next";
// import "./globals.css";
// import { QueryProvider } from "@/query/QueryProvider";

// export const metadata: Metadata = {
//   title: "Ashyo",
//   description: "Ashyo Market For Sale",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="icon" href="/logo.svg" />
//       </head>

//       <body className={`antialiased`}>
//         <QueryProvider>{children}</QueryProvider>
//       </body>
//     </html>
//   );
// }

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { QueryProvider } from "@/query/QueryProvider";
import { LangContext } from "@/context/Context";
import Header from "@/modules/Header";
import Footer from "@/modules/Footer";
import Products from "@/components/Products/Products";

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
              <Footer />
            </LangContext>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
