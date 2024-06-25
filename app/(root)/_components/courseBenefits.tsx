import React from "react";
import {
 Disclosure,
 DisclosureButton,
 DisclosurePanel,
} from "@headlessui/react";
import {
 BriefcaseIcon,
 ChevronDownIcon,
 MonitorSmartphoneIcon,
 ShieldCheckIcon,
} from "lucide-react";

const items = [
 {
  name: "امکان استخدام در سی تلکام",
  body:
   "پس از اتمام موفقیت آمیز دوره های تعمیرات امکان جذب در سی تلکام فراهم می باشد.",
  icon: <BriefcaseIcon className="size-4 sm:size-6" />,
 },
 {
  name: "تضمین آینده شغلی",
  body:
   "مسیر شغلی متخصصین تعمیرات موبایل و لپ تاپ به چند صورت از جمله راه اندازی کسب و کار و یا اشتغال در مراکز تعمیرات بسیار هموار است.",
  icon: <ShieldCheckIcon className="size-4 sm:size-6" />,
 },
 {
  name: "آشنایی بیشتر با موبایل و قطعات موبایل",
  body:
   "امکان کسب مدرک معتبر و قابل استعلام پیشتازان فناوری سیب طلایی، سازمان فنی و حرفه ای و ICB  ایتالیا",
  icon: <MonitorSmartphoneIcon className="size-4 sm:size-6" />,
 },
];
const CourseBenefits = () => {
 return (
  <section className="container space-y-6">
   <h3 className="text-lg font-medium lg:text-2xl">
    مزیت های شرکت در دوره های آموزشگاه سی تلکام
   </h3>
   <QA />
  </section>
 );
};

export default CourseBenefits;

function QA() {
 return (
  <div className="divide-y divide-gray-200 rounded-3xl bg-gray-100">
   {items.map((item, index) => (
    <Disclosure
     as="div"
     className="px-4 py-5 sm:p-6"
     defaultOpen={index === 0}
     key={item.name}
    >
     <DisclosureButton className="group flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
       {item.icon}
       <h4 className="text-sm font-medium sm:text-base">{item.name}</h4>
      </div>
      <ChevronDownIcon className="size-5 fill-white/60 transition duration-300 group-data-[open]:rotate-180" />
     </DisclosureButton>
     <DisclosurePanel className="mt-3 rounded-xl bg-gray-200 px-3 py-2 text-sm/6 font-light text-gray-700 sm:px-5 sm:py-3 md:text-base/7">
      {item.body}
     </DisclosurePanel>
    </Disclosure>
   ))}
  </div>
 );
}
