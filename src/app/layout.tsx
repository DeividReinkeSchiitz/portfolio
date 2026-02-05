import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SquaresBack from "@/app/components/SquaresBack";
import Header from "@/app/components/Header";
import React from "react";

import Gtag from "@/app/config/Gtag";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const raleway = localFont({
  src: "./fonts/Raleway.ttf",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Deivid Reinke Schiitz",
  description: "Deivid Reinke Schiitz Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Gtag />
        <SquaresBack />
        <div
          className={`z-10 relative flex flex-col h-full w-full overflow-auto`}
        >
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
