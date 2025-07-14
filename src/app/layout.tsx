import type { Metadata } from "next";
import { ReactNode } from 'react';
import { Rubik } from "next/font/google";
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Северяночка",
  description: "Покупка и доставка продуктов питания",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${rubik.variable} font-sans`}
    >
      <Header/>
      {children}
      <Footer/>
    </body>
    </html>
  );
}
