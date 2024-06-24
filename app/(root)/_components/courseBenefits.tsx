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
  body: "lorem",
  icon: <BriefcaseIcon className="size-6" />,
 },
 {
  name: "تضمین آینده شغلی",
  body: "",
  icon: <ShieldCheckIcon className="size-6" />,
 },
 {
  name: "آشنایی بیشتر با موبایل و قطعات موبایل",
  body: "",
  icon: <MonitorSmartphoneIcon className="size-6" />,
 },
];
const CourseBenefits = () => {
 return (
  <section className="container space-y-6">
   <h3 className="text-2xl font-medium">
    مزیت های شرکت در دوره های آموزشگاه سی تلکام
   </h3>
   <Example />
  </section>
 );
};

export default CourseBenefits;

function Example() {
 return (
  <div className="divide-y divide-gray-200 rounded-3xl bg-gray-100">
   {items.map((item, index) => (
    <Disclosure
     as="div"
     className="p-6"
     defaultOpen={index === 0}
     key={item.name}
    >
     <DisclosureButton className="group flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
       {item.icon}
       <h4 className="text-base font-medium">{item.name}</h4>
      </div>
      <ChevronDownIcon className="size-5 fill-white/60 group-data-[open]:rotate-180" />
     </DisclosureButton>
     <DisclosurePanel className="mt-3 rounded-xl bg-gray-200 px-5 py-3 text-base/7 font-light text-gray-700">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
      طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
      که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
      بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال
      و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
      بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
      زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود
      در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
      اساسا مورد استفاده قرار گیرد.
     </DisclosurePanel>
    </Disclosure>
   ))}
  </div>
 );
}
