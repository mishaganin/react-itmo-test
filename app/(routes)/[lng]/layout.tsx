"use client";
import "./globals.scss";
import React, { ReactNode } from "react";
import { Open_Sans } from "next/font/google";
import Header from "@/app/_components/Header/Header";
import { Providers } from "@/app/_redux/provider";
import { dir } from 'i18next'
import {languages} from "@/app/_i18n/settings";

const openSans = Open_Sans({ subsets: ["cyrillic"] });

export const generateStaticParams = async () => {
  return languages.map((lng) => ({ lng }))
}

// export const metadata: Metadata = {
//   title: 'ITMO Test App',
//   description: 'News app on React, TypeScript and Next.js',
// };

const RootLayout = (
  { children }: { children: ReactNode },
  params: {
    lng: string
  }
) => {
  const { lng } = params;

  return (
    <html lang={lng}>
      <head>
        <title>ITMO Test App</title>
        <meta
          name="description"
          content="News app on React, TypeScript and Next.js"
        />
      </head>
      <body className={openSans.className}>
        <Providers>
          <Header />
          <div className="container">{children}</div>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
