import React from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
 { name: "دوره ها", url: "/" },
 { name: "تماس با ما", url: "/" },
 { name: "درباره ما", url: "/" },
];

export const Header = () => {
 return (
  <header className="fixed left-0 right-0 top-0 z-50 border-b bg-gray-200/70 backdrop-blur">
   <div className="container flex h-16 items-center gap-5">
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

    <ul className="ms-14 flex gap-8">
     {items.map((item) => (
      <li key={item.name}>
       <Link href={item.url}>{item.name}</Link>
      </li>
     ))}
    </ul>

    <Link href="/" className="ms-auto">
     ثبت نام
    </Link>
   </div>
  </header>
 );
};
