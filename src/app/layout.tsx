import 'swiper/css/bundle';
import "../../public/css/navbar.css";
import "../../public/css/boxicons.min.css";
import "./globals.css";
import Image from 'next/image';

import type { Metadata } from "next";
import { Figtree, Outfit } from "next/font/google";
import BackToTop from '@/components/Layout/BackToTop';
import AosAnimation from '@/components/Layout/AosAnimation';
import RtlDemoSidebar from '@/components/Layout/RtlDemoSidebar';

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blockbytes",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} ${outfit.variable}`}>
       <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        {children}

        {/* BackToTop */}
        <BackToTop />

        {/* AosAnimation */}
        <AosAnimation />

        {/* RtlDemoSidebar
        <RtlDemoSidebar /> */}
      </body>
    </html>
  );
}
