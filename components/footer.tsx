import React from "react";
import Image from "next/image";

const links = [
 {
  name: "سازمان آموزش فنی و حرفه ای",
  image: "/assets/images/irantvto-logo.png",
  url: "",
 },
 {
  name: "ای نماد",
  image: "/assets/images/enamad-logo.png",
  url: "",
 },
];

export const Footer = () => {
 return (
  <footer className="flex min-h-28 bg-gray-100">
   <div className="container flex flex-col-reverse items-center gap-y-10 py-5 sm:flex-row">
    <div className="flex gap-4">
     {links.map((link) => (
      <div className="size-28 rounded-md" key={link.name}>
       <Image
        src={link.image}
        className="select-none justify-center object-cover"
        draggable={false}
        width={112}
        height={112}
        alt={link.name}
        title={link.name}
       />
      </div>
     ))}
    </div>
    <div className="flex flex-col items-center max-sm:w-full sm:ms-auto sm:items-start">
     <div>
      <Image
       src={"/assets/images/ct-academy-logo.png"}
       className="h-6 w-auto select-none"
       draggable={false}
       width={320}
       height={32}
       alt="آکادمی سی تلکام"
       title="آکادمی سی تلکام"
      />
      <p className="font-outfit">Powered by CTelecom</p>
     </div>
    </div>
   </div>
  </footer>
 );
};
