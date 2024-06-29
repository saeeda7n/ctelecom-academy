"use client";
import React, {
 CSSProperties,
 useEffect,
 useMemo,
 useRef,
 useState,
} from "react";
import { cn } from "@/libs/utils";
import { ScrollableArea } from "@/components/scrollableArea";
import {
 COURSE_DETAIL_ATTRIBUTES,
 CourseProps,
 COURSES,
 CourseTabsName,
} from "@/data/courses";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
 ChevronDownIcon,
 ChevronUpIcon,
 GraduationCapIcon,
 HistoryIcon,
 UserIcon,
} from "lucide-react";

export function Courses() {
 const [activeTab, setActiveTab] = useState(0);
 const [previousTab, setPreviousTab] = useState(0);
 const activeCourse = COURSES[activeTab];

 const variant: Variants = {
  exit: ({ activeTab, previousTab }) => ({
   opacity: 0,
   x: activeTab > previousTab ? "-100%" : "100%",
  }),
  animate: () => ({ x: 0, opacity: 1 }),
 };

 function handleSwitchTab(index: number) {
  setPreviousTab(activeTab);
  setActiveTab(index);
 }

 return (
  <section id="courses" className="relative flex flex-col overflow-hidden">
   <div className="container flex flex-col gap-8">
    <div className="mx-auto max-w-full rounded-full bg-gray-900 p-3 text-gray-50 sm:max-w-96">
     <ScrollableArea className="select-none rounded-full">
      <div className="mx-auto flex w-max gap-2">
       {COURSES.map((course, index) => (
        <button
         onClick={() => handleSwitchTab(index)}
         key={course.id}
         className={cn("relative flex h-12 rounded-full px-5")}
        >
         {activeTab === index && (
          <motion.div
           className="absolute inset-0 bg-primary"
           layoutId="courseTitle"
           style={{ borderRadius: 50 }}
           transition={{ duration: 0.7, type: "spring" }}
          />
         )}
         <div className="relative flex h-full items-center gap-2">
          {course.icon}
          {course.name}
         </div>
        </button>
       ))}
      </div>
     </ScrollableArea>
    </div>
    <AnimatePresence initial={false} mode="popLayout">
     <motion.div
      variants={variant}
      custom={{ activeTab, previousTab }}
      key={activeCourse.id}
      transition={{ duration: 1, ease: "easeInOut" }}
      initial={"exit"}
      exit={"exit"}
      animate={"animate"}
      className="w-full"
     >
      <CourseContainer course={activeCourse} />
     </motion.div>
    </AnimatePresence>
   </div>
  </section>
 );
}

function CourseContainer({ course }: CourseDetailsProps) {
 const [activeTab, setActiveTab] = useState(0);
 const activeTabProps = course.tabs[activeTab];

 function CurrentTab() {
  switch (activeTabProps.type) {
   case CourseTabsName.INTRODUCTION: {
    return (
     <CourseIntroduction
      body={activeTabProps.body}
      logos={activeTabProps.logos}
     />
    );
   }
   case CourseTabsName.TEACHERS: {
    return <CourseTeachers teacher={activeTabProps.teacher} />;
   }
   case CourseTabsName.CHAPTERS: {
    return <CourseChapters chapters={activeTabProps.chapters} />;
   }
   case CourseTabsName.FAQ: {
    return <CourseFAQ items={activeTabProps.items} />;
   }
  }
 }

 return (
  <div className="flex w-full flex-col justify-between gap-10 overflow-hidden rounded-5xl bg-gray-100 p-5 md:flex-row lg:rounded-7xl lg:p-10">
   <div className="flex flex-1 flex-col gap-8">
    <div className="me-auto h-14 max-w-[calc(100vw-theme(spacing.24))] rounded-full bg-gray-900 p-1.5 text-gray-50 sm:max-w-xl">
     <ScrollableArea className="h-full rounded-full">
      <div className="mx-auto flex h-full w-max">
       {course.tabs.map((tab, index) => (
        <button
         onClick={() => setActiveTab(index)}
         key={tab.id}
         className={cn(
          "relative flex items-center justify-center gap-2 rounded-full px-5",
         )}
        >
         {activeTabProps.id === tab.id && (
          <motion.div
           className="absolute inset-0 bg-primary"
           layoutId="root"
           style={{ borderRadius: 50 }}
           transition={{ duration: 0.7, type: "spring" }}
          />
         )}
         <span className="relative">{tab.name}</span>
        </button>
       ))}
      </div>
     </ScrollableArea>
    </div>
    <div className="flex flex-1 flex-col overflow-hidden">
     <div className="mb-2 flex items-center gap-2 text-xl font-medium">
      <div className="relative size-7">
       <AnimatePresence initial={false} mode="popLayout">
        <motion.div
         className="size-7"
         initial={{ scaleX: 0 }}
         animate={{ scaleX: 1 }}
         exit={{ scaleX: 0 }}
         key={activeTab}
        >
         {activeTabProps.icon}
        </motion.div>
       </AnimatePresence>
      </div>
      <div className="relative flex-1">
       <AnimatePresence mode="popLayout">
        <motion.h3
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         key={activeTab}
         className="text-lg font-medium lg:text-2xl"
        >
         {activeTabProps.title}
        </motion.h3>
       </AnimatePresence>
      </div>
     </div>
     <div className="mt-2 flex flex-1">
      <AnimatePresence mode="popLayout">
       <motion.div
        className="flex max-w-2xl flex-1"
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        key={activeTabProps.id}
       >
        <CurrentTab />
       </motion.div>
      </AnimatePresence>
     </div>
    </div>
   </div>

   <CourseDetails course={course} />
  </div>
 );
}

type CourseIntroductionProps = {
 body: string;
 logos: string[];
};

function CourseIntroduction({ body, logos }: CourseIntroductionProps) {
 return (
  <div className="flex flex-col">
   <p className="whitespace-break-spaces text-base/7 text-gray-500">{body}</p>
   <div className="mt-auto flex gap-5 pt-12">
    {logos.map((image) => (
     <Image
      src={image}
      alt="لوگو"
      key={image}
      height={128}
      width={128}
      className="size-28 object-contain object-center"
     />
    ))}
   </div>
  </div>
 );
}

function CourseFAQ({ items }: { items: any[] }) {
 const container = useRef<HTMLDivElement | null>(null);
 const [disabled, setDisabled] = useState({
  top: true,
  bottom: false,
 });

 const isScrollable = useMemo(() => {
  if (!container.current) return false;
  const { height } = container.current!.getBoundingClientRect();
  return height < container.current?.scrollHeight;
 }, [container.current?.scrollHeight]);

 function scrollTo(by: number) {
  container.current!.scrollTo({
   top: container.current!.scrollTop + by,
   behavior: "smooth",
  });
 }

 useEffect(() => {
  if (!container.current) return;
  container.current!.addEventListener("scroll", handleScroll);
  return () => {
   if (!container.current) return;
   container.current!.removeEventListener("scroll", handleScroll);
  };
 }, [container.current]);

 function handleScroll() {
  const { height } = container.current!.getBoundingClientRect();
  setDisabled({
   top: container.current!.scrollTop <= 0,
   bottom:
    container.current!.scrollTop + height >= container.current!.scrollHeight,
  });
 }

 return (
  <div className="relative min-h-96 flex-1 rounded-3xl bg-gray-200 py-8 lg:rounded-5xl">
   {isScrollable && (
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-between py-2">
     <button
      disabled={disabled.top}
      className="pointer-events-auto transition duration-300 disabled:opacity-30"
      onClick={() => scrollTo(-100)}
     >
      <ChevronUpIcon />
     </button>
     <button
      disabled={disabled.bottom}
      className="pointer-events-auto transition duration-300 disabled:opacity-30"
      onClick={() => scrollTo(100)}
     >
      <ChevronDownIcon />
     </button>
    </div>
   )}
   <div
    ref={container}
    style={
     {
      "--top": disabled.top ? 1 : 0,
      "--bottom": disabled.bottom ? 1 : 0,
     } as CSSProperties
    }
    className="hidden-scrollbar scroll-area-mask absolute bottom-8 left-5 right-5 top-8 flex flex-col gap-5 overflow-auto lg:inset-10"
   >
    {items.map((item) => (
     <div className="space-y-1" key={item.question}>
      <div className="font-medium">{item.question}</div>
      <p className="text-sm/5 font-light text-gray-500">{item.answer}</p>
     </div>
    ))}
   </div>
  </div>
 );
}

function CourseTeachers({
 teacher: { name, cv, graduated },
}: {
 teacher: {
  name: string;
  graduated: string;
  cv: string[];
 };
}) {
 return (
  <div className="mt-5 flex flex-col gap-5">
   <div className="flex gap-2">
    <UserIcon />
    <span className="text-gray-500">نام:</span>
    <strong>{name}</strong>
   </div>
   <div className="flex gap-2">
    <GraduationCapIcon />
    <span className="text-gray-500">فارغ التحصیل:</span>
    <strong>{graduated}</strong>
   </div>
   <div className="flex gap-2">
    <HistoryIcon />
    <div>
     <span className="text-gray-500">سابقه فعالیت:</span>
     <ul className="text-sm font-medium">
      {cv.map((item) => (
       <li key={item}>{item}</li>
      ))}
     </ul>
    </div>
   </div>
  </div>
 );
}

function CourseChapters({
 chapters,
}: {
 chapters: { name: string; titles: string[] }[];
}) {
 const container = useRef<HTMLDivElement | null>(null);
 const [disabled, setDisabled] = useState({
  top: true,
  bottom: false,
 });

 const isScrollable = useMemo(() => {
  if (!container.current) return false;
  const { height } = container.current!.getBoundingClientRect();
  return height < container.current?.scrollHeight;
 }, [container.current?.scrollHeight]);

 function scrollTo(by: number) {
  container.current!.scrollTo({
   top: container.current!.scrollTop + by,
   behavior: "smooth",
  });
 }

 useEffect(() => {
  if (!container.current) return;
  container.current!.addEventListener("scroll", handleScroll);
  return () => {
   if (!container.current) return;
   container.current!.removeEventListener("scroll", handleScroll);
  };
 }, [container.current]);

 function handleScroll() {
  const { height } = container.current!.getBoundingClientRect();
  setDisabled({
   top: container.current!.scrollTop <= 0,
   bottom:
    container.current!.scrollTop + height >= container.current!.scrollHeight,
  });
 }

 return (
  <div className="relative min-h-[30rem] flex-1 rounded-3xl bg-gray-200 py-8 lg:rounded-5xl">
   {isScrollable && (
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-between py-2">
     <button
      disabled={disabled.top}
      className="pointer-events-auto transition duration-300 disabled:opacity-30"
      onClick={() => scrollTo(-100)}
     >
      <ChevronUpIcon />
     </button>
     <button
      disabled={disabled.bottom}
      className="pointer-events-auto transition duration-300 disabled:opacity-30"
      onClick={() => scrollTo(100)}
     >
      <ChevronDownIcon />
     </button>
    </div>
   )}
   <div
    ref={container}
    style={
     {
      "--top": disabled.top ? 1 : 0,
      "--bottom": disabled.bottom ? 1 : 0,
     } as CSSProperties
    }
    className="hidden-scrollbar absolute bottom-8 left-5 right-5 top-8 flex flex-col gap-5 overflow-auto lg:inset-10"
   >
    {chapters.map((chapter) => (
     <div className="space-y-1" key={chapter.name}>
      <div className="font-medium">{chapter.name}</div>
      <ul className="text-sm/6 text-gray-500">
       {chapter.titles.map((title) => (
        <li key={title}>
         <span className="font-bold text-black">-</span> {title}
        </li>
       ))}
      </ul>
     </div>
    ))}
   </div>
  </div>
 );
}

type CourseDetailsProps = {
 course: CourseProps;
};

function CourseDetails({ course }: CourseDetailsProps) {
 const priceWithDiscount = course.price * course.discount - course.price;
 return (
  <div className="flex flex-col gap-5 lg:w-96">
   {course.details.map((value) => (
    <div
     className="flex w-full flex-wrap items-start gap-1 sm:flex-row"
     key={value.name}
    >
     <div className="flex w-48 flex-shrink-0 items-center gap-1 text-sm font-medium text-blue-950 sm:gap-3">
      <div className="size-5">
       {COURSE_DETAIL_ATTRIBUTES.get(value.name)?.icon}
      </div>
      {COURSE_DETAIL_ATTRIBUTES.get(value.name)?.title}:
     </div>
     <div className="whitespace-break-spaces text-sm/6 font-light text-gray-400">
      {COURSE_DETAIL_ATTRIBUTES.get(value.name)?.formatter?.(value.value) ||
       value.value}
     </div>
    </div>
   ))}
   <div className="mt-auto flex flex-col space-y-4 pt-16">
    <div className="flex min-h-16 flex-wrap items-center justify-between gap-5 gap-y-2 rounded-5xl border-2 border-gray-200 px-8 py-2 font-medium">
     <span>هزینه دوره:</span>
     <div className="flex flex-col">
      <span
       className={cn({
        "text-[red] line-through": priceWithDiscount < 1,
       })}
      >
       {course.price.toLocaleString()} ت
      </span>
      <span className="text-emerald-500">
       {priceWithDiscount === 0 ? "رایگان" : priceWithDiscount.toLocaleString()}
      </span>
     </div>
    </div>
    <a
     href="https://ctelecom.ir/educationregister"
     target={"_blank"}
     className="flex h-16 items-center justify-center rounded-full bg-primary font-medium text-gray-50"
    >
     ثبت نام کنید
    </a>
   </div>
  </div>
 );
}
