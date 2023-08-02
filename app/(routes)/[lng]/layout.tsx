"use client";
import React, { ReactNode } from "react";
import { type NextFont } from "@next/font";
import { Open_Sans } from "next/font/google";
import Header from "@/app/_components/Header/Header";
import { Providers } from "@/app/_redux/provider";
import { languages } from "@/app/_i18n/settings";
import "./globals.scss";
import { IParams } from "@/app/_global/types";

const openSans: NextFont = Open_Sans({ subsets: ["cyrillic"] });

export const generateStaticParams = async () => {
  return languages.map((lng: string) => ({ lng }));
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }, params) => {
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
};

export default RootLayout;
