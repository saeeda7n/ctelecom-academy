import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../styles/globals.css";
import { PropsWithChildren } from "react";
import { cn } from "@/libs/utils";
import { estedad } from "@/libs/fonts";

const outfit = Outfit({ variable: "--outfit-font", subsets: ["latin"] });

export const metadata: Metadata = {
 title: "آکادمی سی تلکام | آموزش تعمیرات گوشی موبایل و لپ تاپ",
 description:
  "آکادمی سی تلکام | آموزش تعمیرات گوشی موبایل و لپ تاپ رایگان برای عموم افراد مستعد و علاقه مند",
 keywords: [
  "آموزش تعمیرات گوشی موبایل رایگان",
  "سی تلکام",
  "آموزش تعمیرات لپ تاپ",
  "آموزش رایگان",
  "آموزش تعمیرات تبلت",
  "آموزشگاه سی تلکام",
  "آکادمی سی تلکام",
 ],
};

type RootLayoutProps = Readonly<PropsWithChildren>;
export default function RootLayout({ children }: RootLayoutProps) {
 return (
  <html lang="fa" dir="rtl">
   <body
    className={cn(outfit.variable, estedad.variable, [
     "font-estedad",
     "min-h-lvh",
     "overflow-x-hidden",
    ])}
   >
    {children}
   </body>
  </html>
 );
}
