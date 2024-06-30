import React from "react";
import { InstagramIcon, LinkedinIcon } from "lucide-react";

const AboutUs = () => {
 return (
  <section className="container flex flex-col gap-8 lg:flex-row lg:gap-10 xl:gap-16 2xl:gap-20">
   <div id="about" className="flex-1 space-y-6">
    <h3 className="text-lg font-medium lg:text-2xl">درباره ما</h3>
    <div>
     <p className="text-sm/6 text-gray-500 lg:text-base/7">
      در دنیای پرشتاب امروزی، نیاز به تخصص در تعمیرات موبایل و لپ تاپ بیش از پیش
      احساس می‌شود.
      <br />
      آموزشگاه پیشتازان فناوری سیب طلایی (سی تلکام آکادمی) یکی از مراکز معتبر و
      تخصصی در زمینه دوره آموزش تعمیرات موبایل و لپ تاپ است که با هدف تربیت
      تکنسین‌های ماهر و حرفه‌ای در زمینه تعمیرات موبایل و لپ‌تاپ فعالیت می‌کند.
      <br />
      سی تلکام آکادمی با برگزاری دوره آموزش تعمیرات موبایل و لپ تاپ، فرصتی مناسب
      برای علاقه‌مندان به این حوزه فراهم کرده است. این دوره‌ها با هدف ارائه
      آموزش‌های جامع و کاربردی، شرکت‌کنندگان را به تکنسین‌های ماهر و حرفه‌ای
      تبدیل می‌کنند.
      <br />
      سی تلکام آکادمی با بهره‌گیری از اساتید مجرب و تجهیزات به روز و پیشرفته،
      محیطی ایده‌آل برای یادگیری و کسب مهارت‌های عملی فراهم کرده است.
     </p>
    </div>
   </div>
   <div id={"contact"} className="flex-1 space-y-6 lg:max-w-80">
    <h3 className="text-lg font-medium lg:text-2xl">تماس با ما</h3>
    <div className="w-full">
     <ul className="flex w-full flex-col flex-wrap gap-5 sm:flex-row lg:flex-col">
      <li>
       <a
        className="flex h-16 items-center justify-center rounded-full bg-emerald-500 px-8 text-lg font-medium text-gray-50"
        href="tel:02152851"
       >
        02152851 داخلی 420
       </a>
      </li>
      <li dir="ltr">
       <a
        className="flex h-16 items-center justify-center gap-2 rounded-full border-2 px-8 font-outfit text-lg font-medium text-gray-950"
        href="//www.instagram.com/ctelecom.academy"
        target={"_blank"}
       >
        <InstagramIcon size={26} />
        @ctelecom.academy
       </a>
      </li>
      <li dir="ltr">
       <a
        className="flex h-16 items-center justify-center gap-2 rounded-full border-2 px-8 text-left font-outfit text-lg font-medium text-blue-950"
        href="https://www.linkedin.com/company/ctelecom-ir/"
        target={"_blank"}
       >
        <LinkedinIcon size={26} />
        @ctelecom.academy
       </a>
      </li>
     </ul>
    </div>
   </div>
  </section>
 );
};

export default AboutUs;
