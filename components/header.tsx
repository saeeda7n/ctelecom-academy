"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderItem from "@/components/headerItem";
import { MenuIcon } from "lucide-react";
import { cn } from "@/libs/utils";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import { AnimatePresence, motion } from "framer-motion";

const items = [
 { name: "دوره ها", url: "#courses" },
 { name: "تماس با ما", url: "#contact" },
 { name: "درباره ما", url: "#about" },
];

export const Header = () => {
 useEffect(() => {
  if (!window) return;
  const closeMenu = () => setIsOpen(false);
  window.addEventListener("resize", closeMenu);
  return () => window.addEventListener("resize", closeMenu);
 }, []);
 const [isOpen, setIsOpen] = useState(false);
 return (
  <header
   className={cn(
    "fixed left-0 right-0 top-0 z-50 h-16 overflow-hidden bg-gray-200/70 backdrop-blur duration-300 [transition-property:height]",
    { "h-screen": isOpen },
   )}
  >
   {isOpen && <style>{`html {overflow:hidden}`}</style>}
   <div className="container h-16 flex-1 flex-row items-center gap-2 sm:flex md:gap-5">
    <div className="flex h-full items-center justify-between max-sm:w-full">
     <h1 hidden>آموزشگاه سی تلکام</h1>
     <Image
      src={"/assets/images/ct-academy-logo.png"}
      className="h-6 w-auto select-none"
      draggable={false}
      width={320}
      height={32}
      alt="آکادمی سی تلکام"
      title="آکادمی سی تلکام"
     />
     <button className="sm:hidden" onClick={() => setIsOpen((p) => !p)}>
      <AnimatePresence mode={"popLayout"} initial={false}>
       <motion.div
        initial={{ scaleX: 0, rotate: -45 }}
        animate={{ scaleX: 1, rotate: 0 }}
        exit={{ scaleX: 0, rotate: 45 }}
        key={String(isOpen)}
       >
        {!isOpen ? <MenuIcon /> : <CloseIcon />}
       </motion.div>
      </AnimatePresence>
     </button>
    </div>

    <ul className="flex h-[calc(100lvh-theme(spacing.16))] w-full flex-1 items-center justify-center gap-8 text-lg max-sm:flex-col max-sm:font-medium sm:text-sm md:ms-8 md:text-base lg:ms-14">
     {items.map((item) => (
      <HeaderItem key={item.name}>
       <Link onClick={() => setIsOpen(false)} href={item.url}>
        {item.name}
       </Link>
      </HeaderItem>
     ))}
     <HeaderItem className="sm:ms-auto">
      <a href="https://ctelecom.ir/educationregister" target={"_blank"}>
       ثبت نام
      </a>
     </HeaderItem>
    </ul>
   </div>
  </header>
 );
};
