import './globals.scss'
import React, { ReactNode } from "react";
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Header from "@/app/_components/Header/Header";
import NewsList from "@/app/_components/NewsList/NewsList";

const openSans = Open_Sans({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'Itmo Test App',
  description: 'News app on React, TypeScript and Next.js',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        <div className="container">
          <NewsList />
        </div>
        {children}
      </body>
    </html>
  )
}
