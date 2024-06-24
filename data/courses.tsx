import {
 BookOpenIcon,
 CalendarClockIcon,
 CalendarDaysIcon,
 CircleHelpIcon,
 ClipboardListIcon,
 Clock5Icon,
 GraduationCapIcon,
 LaptopIcon,
 MapPinIcon,
 SmartphoneIcon,
 UsersIcon,
} from "lucide-react";
import { ReactNode } from "react";

type FAQProps = {
 question: string;
 answer: string;
};

export enum CourseTabsName {
 "INTRODUCTION" = "INTRODUCTION",
 "FAQ" = "FAQ",
 "TEACHERS" = "TEACHERS",
 "CHAPTERS" = "CHAPTERS",
}

export type CourseTabProps =
 | {
    id: number;
    name: string;
    title: string;
    icon?: ReactNode;
    type: CourseTabsName.INTRODUCTION;
    body: string;
    logos: string[];
   }
 | {
    id: number;
    name: string;
    title: string;
    icon?: ReactNode;
    type: CourseTabsName.FAQ;
    items: FAQProps[];
   }
 | {
    id: number;
    name: string;
    title: string;
    icon?: ReactNode;
    type: CourseTabsName.CHAPTERS;
   }
 | {
    id: number;
    name: string;
    title: string;
    icon?: ReactNode;
    type: CourseTabsName.TEACHERS;
   };
export type CourseDetailNames =
 | "startingDate"
 | "courseDuration"
 | "daysOfHolding"
 | "courseCapacity"
 | "degreeAwarded"
 | "location";

export type CourseProps = {
 id: string;
 name: string;
 icon: ReactNode;
 tabs: CourseTabProps[];
 price: number;
 discount: number;
 details: { name: CourseDetailNames; value: any }[];
};

export const COURSES: CourseProps[] = [
 {
  id: "ae8fb969-f368-4fde-a838-f8936f06b9dd",
  name: "تعمیرات موبایل",
  icon: <SmartphoneIcon />,
  details: [
   { name: "startingDate", value: "2024/6/29" },
   { name: "courseDuration", value: 30 },
   { name: "daysOfHolding", value: "دوشنبه تا چهار شنبه" },
   { name: "courseCapacity", value: 120 },
   {
    name: "degreeAwarded",
    value: ["مدرک فنی حرفه ای", "مدرک آموزشگاه سی تلکام", "مدرک ICB ایتالیا"],
   },
   {
    name: "location",
    value: "خیابان مطهری نرسیده به سهروردی پلاک ۱۰۲",
   },
  ],
  tabs: [
   {
    id: 1,
    name: "معرفی",
    title: "آموزش تعمیرات موبایل",
    icon: <BookOpenIcon className="size-[inherit]" />,
    type: CourseTabsName.INTRODUCTION,
    body:
     "دوره تعمیرات موبایل آموزشگاه سی تلکام (سی تلکام آکادمی) یک دوره‌ تربیت متخصص تعمیرات حرفه‌ای در حوزه موبایل است.\n این دوره برای افرادی طراحی شده که علاقه‌مند به یادگیری مهارت‌های تعمیر و نگهداری انواع گوشی‌های موبایل هستند.\n در این دوره، مهارت آموزان اصول و مبانی تعمیرات موبایل، ابزارهای مورد نیاز، تشخیص و رفع عیوب سخت‌افزاری و نرم‌افزاری گوشی‌های موبایل را بصورت کامل و کاربردی آموزش می بینند. دوره تعمیرات موبایل فرصتی مناسب برای کسانی است که می‌خواهند با کسب مهارت‌های تخصصی، به بازار کار وارد شده و به عنوان یک تکنسین ماهر و حرفه‌ای در این حوزه فعالیت نمایند.  ",
    logos: [
     "/assets/images/icb-quality-logo.png",
     "/assets/images/irantvto-logo.png",
    ],
   },
   {
    id: 2,
    name: "سرفصل ها",
    title: "سرفصل ها",
    icon: <ClipboardListIcon className="size-[inherit]" />,
    type: CourseTabsName.CHAPTERS,
   },
   {
    id: 3,
    name: "اساتید",
    title: "اساتید",
    icon: <UsersIcon className="size-[inherit]" />,
    type: CourseTabsName.TEACHERS,
   },
   {
    id: 4,
    name: "سوالات متداول",
    title: "سوالات متداول",
    icon: <CircleHelpIcon className="size-[inherit]" />,
    type: CourseTabsName.FAQ,
    items: [
     {
      question: "1روزها و ساعات کاری در سی تلکام آکادمی به چه صورت است؟",
      answer: "همه روزه به جز روزهای تعطیل از ساعت 9 الی 17 میباشد",
     },
     {
      question:
       "2ردر دوره های آموزشی تعمیرات موبایل چه گوش هایی آموزش داده می شوند؟",
      answer:
       "در دوره های آموزش تعمیرات موبایل از گوشی های دکمه ای تا اندروید و آی او اس به طور کامل آموزش داده می شود.",
     },
     {
      question: "3آیا اساتید دارای تجربه، دانش و سابقه حرفه ای می باشند؟",
      answer:
       "بله، تمامی استاد های سی تلکام آکادمی دارای تجارب و سوابق بالایی در حوزه تعمیرات و تدریس هستند و تمامی استاد ها مدارک متعدد بین المللی و داخلی را کسب کرده اند.",
     },
     {
      question:
       "4در دوره های آموزشی تعمیرات لپ تاپ چه برندهایی آموزش داده می شوند؟",
      answer:
       "در دوره های آموزش تعمیرات لپ تاپ، تعمیرات تمامی برندها و انواع مختلف لپ تاپ آموزش داده می شود.",
     },
     {
      question: "5آیا امکان ثبت نام برای تمامی شهر ها و استان ها وجود دارد؟",
      answer:
       "بلی، امکان ثبت نام برای تمامی افراد ساکن در سایر شهرها و استان های کشور فراهم شده است.",
     },
     {
      question: "6آیا اساتید دارای تجربه، دانش و سابقه حرفه ای می باشند؟",
      answer:
       "بله، تمامی استاد های سی تلکام آکادمی دارای تجارب و سوابق بالایی در حوزه تعمیرات و تدریس هستند و تمامی استاد ها مدارک متعدد بین المللی و داخلی را کسب کرده اند.",
     },
     {
      question:
       "7ردر دوره های آموزشی تعمیرات موبایل چه گوش هایی آموزش داده می شوند؟",
      answer:
       "در دوره های آموزش تعمیرات موبایل از گوشی های دکمه ای تا اندروید و آی او اس به طور کامل آموزش داده می شود.",
     },
    ],
   },
  ],
  price: 10_000_000,
  discount: 1,
 },
 {
  id: "f9e3542d-26f9-4bbe-8c8f-48d731e5aaab",
  name: "تعمیرات لپ تاپ",
  icon: <LaptopIcon />,
  tabs: [
   {
    id: 1,
    name: "معرفی",
    title: "آموزش تعمیرات لپ تاپ",
    icon: <BookOpenIcon className="size-[inherit]" />,
    type: CourseTabsName.INTRODUCTION,
    body:
     "دوره تعمیرات موبایل آموزشگاه سی تلکام (سی تلکام آکادمی) یک دوره‌ تربیت متخصص تعمیرات حرفه‌ای در حوزه موبایل است.\n این دوره برای افرادی طراحی شده که علاقه‌مند به یادگیری مهارت‌های تعمیر و نگهداری انواع گوشی‌های موبایل هستند.\n در این دوره، مهارت آموزان اصول و مبانی تعمیرات موبایل، ابزارهای مورد نیاز، تشخیص و رفع عیوب سخت‌افزاری و نرم‌افزاری گوشی‌های موبایل را بصورت کامل و کاربردی آموزش می بینند. دوره تعمیرات موبایل فرصتی مناسب برای کسانی است که می‌خواهند با کسب مهارت‌های تخصصی، به بازار کار وارد شده و به عنوان یک تکنسین ماهر و حرفه‌ای در این حوزه فعالیت نمایند.  ",
    logos: [
     "/assets/images/icb-quality-logo.png",
     "/assets/images/irantvto-logo.png",
    ],
   },
   {
    id: 2,
    name: "سرفصل ها",
    title: "سرفصل ها",
    icon: <ClipboardListIcon className="size-[inherit]" />,
    type: CourseTabsName.CHAPTERS,
   },
   {
    id: 3,
    name: "اساتید",
    title: "اساتید",
    icon: <UsersIcon className="size-[inherit]" />,
    type: CourseTabsName.TEACHERS,
   },
   {
    id: 4,
    name: "سوالات متداول",
    title: "سوالات متداول",
    icon: <CircleHelpIcon className="size-[inherit]" />,
    type: CourseTabsName.FAQ,
    items: [{ question: "", answer: "" }],
   },
  ],
  details: [
   { name: "startingDate", value: "2024/6/29" },
   { name: "courseDuration", value: 30 },
   { name: "daysOfHolding", value: "شنبه تا چهار شنبه" },
   { name: "courseCapacity", value: 120 },
   {
    name: "degreeAwarded",
    value: ["مدرک فنی حرفه ای", "مدرک آموزشگاه سی تلکام", "مدرک ICB ایتالیا"],
   },
   {
    name: "location",
    value: "خیابان مطهری نرسیده به سهروردی پلاک ۱۰۲",
   },
  ],
  price: 10_000_000,
  discount: 1,
 },
];

export const COURSE_DETAIL_ATTRIBUTES = new Map<
 CourseDetailNames,
 { icon: ReactNode; title: string; formatter?: (value: any) => ReactNode }
>([
 [
  "startingDate",
  {
   title: "تاریخ شروع",
   icon: <CalendarClockIcon className="size-[inherit]" />,
   formatter: (value) =>
    new Date(value).toLocaleDateString("fa-IR", {
     day: "2-digit",
     month: "long",
     year: "numeric",
    }),
  },
 ],
 [
  "courseDuration",
  {
   title: "مدت زمان دوره",
   icon: <Clock5Icon className="size-[inherit]" />,
   formatter: (value) => `${value} ساعت`,
  },
 ],
 [
  "location",
  {
   title: "محل برگزاری",
   icon: <MapPinIcon className="size-[inherit]" />,
  },
 ],
 [
  "degreeAwarded",
  {
   title: "مدرک اعطایی",
   icon: <GraduationCapIcon className="size-[inherit]" />,
   formatter: (value) => value.join("\n"),
  },
 ],
 [
  "daysOfHolding",
  {
   title: "روز های برگزاری",
   icon: <CalendarDaysIcon className="size-[inherit]" />,
  },
 ],
 [
  "courseCapacity",
  {
   title: "ظرفیت دوره",
   icon: <UsersIcon className="size-[inherit]" />,
   formatter: (value) => `${value} نفر منتخب`,
  },
 ],
]);
