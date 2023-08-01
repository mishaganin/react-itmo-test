"use client";
import "./globals.scss";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "@/app/_components/Header/Header";
import NewsList from "@/app/_components/NewsList/NewsList";
import { Providers } from "@/app/_redux/provider";
import { store } from "@/app/_redux/store";
import { Provider } from "react-redux";

const openSans = Open_Sans({ subsets: ["cyrillic"] });

// export const metadata: Metadata = {
//   title: 'ITMO Test App',
//   description: 'News app on React, TypeScript and Next.js',
// };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
