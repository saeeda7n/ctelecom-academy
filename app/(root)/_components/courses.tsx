"use client";
import React, {
 CSSProperties,
 HTMLAttributes,
 PropsWithChildren,
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
 CourseTabProps,
 CourseTabsName,
} from "@/data/courses";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/libs/gsap";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

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
  <section className="relative flex flex-col overflow-x-hidden">
   <div className="container flex flex-col gap-8">
    <div className="mx-auto max-w-96 rounded-full bg-gray-900 p-3 text-gray-50">
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
           className="bg-primary absolute inset-0"
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
     >
      <CourseContainer course={activeCourse} />
     </motion.div>
    </AnimatePresence>
   </div>
  </section>
 );
}

function CourseTabSelector({
 course,
 onChange,
 activeTab,
}: {
 course: CourseProps;
 onChange: (index: number) => void;
 activeTab: CourseTabProps;
}) {
 return (
  <div className="me-auto h-14 max-w-xl rounded-full bg-gray-900 p-1.5 text-gray-50">
   <ScrollableArea className="h-full rounded-full">
    <div className="mx-auto flex h-full w-max">
     {course.tabs.map((tab, index) => (
      <button
       onClick={() => onChange(index)}
       key={tab.id}
       className={cn(
        "relative flex items-center justify-center gap-2 rounded-full px-5",
       )}
      >
       {activeTab.id === tab.id && (
        <motion.div
         className="bg-primary absolute inset-0"
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
 );
}

function CourseContainer({ course }: CourseDetailsProps) {
 const [activeTab, setActiveTab] = useState(0);
 const [previousTab, setPreviousTab] = useState(0);
 const activeTabProps = course.tabs[activeTab];

 function switchTab(tabIndex: number) {
  if (tabIndex === activeTab) return;
  setActiveTab(() => tabIndex);
  setPreviousTab(() => activeTab);
 }

 return (
  <div className="rounded-7xl flex w-full gap-10 overflow-hidden bg-gray-100 p-10">
   <div className="flex flex-1 flex-col gap-8">
    <CourseTabSelector
     activeTab={activeTabProps}
     onChange={switchTab}
     course={course}
    />
    <div className="flex w-[37rem] flex-1 flex-col overflow-hidden">
     <CourseTabs
      course={course}
      previousTab={previousTab}
      activeTab={activeTab}
     />
    </div>
   </div>
   <CourseDetails course={course} />
  </div>
 );
}

type CourseTabsProps = {
 course: CourseProps;
 activeTab: number;
 previousTab: number;
};

function CourseTabs({ course, activeTab, previousTab }: CourseTabsProps) {
 const scope = useRef(null);
 const { contextSafe } = useGSAP(() => {}, { scope });
 const activeTabProps = course.tabs[activeTab];
 const animateOutIn = contextSafe(() => {
  //@ts-ignore
  gsap.fromTo(
   ".tab",
   {
    opacity: (index) => (index === previousTab ? 1 : 0),
    y: (index) => (index === previousTab ? 0 : 50),
    xPercent: (index, target) =>
     index === activeTab ? index * 100 : +gsap.getProperty(target, "x"),
   },
   {
    y: (index) => (index === activeTab ? 0 : 50),
    opacity: (index) => (index === activeTab ? 1 : 0),
   },
  );
 });

 useEffect(() => {
  animateOutIn();
 }, [activeTab]);

 return (
  <>
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
      >
       {activeTabProps.title}
      </motion.h3>
     </AnimatePresence>
    </div>
   </div>
   <div className="flex w-max flex-1" ref={scope}>
    {course.tabs.map((tab, index) => {
     switch (tab.type) {
      case CourseTabsName.INTRODUCTION:
       return (
        <CourseCaseContainer
         key={tab.id}
         className={cn("tab", { "pointer-events-none": index !== activeTab })}
        >
         <CourseIntroduction body={tab.body} logos={tab.logos} />
        </CourseCaseContainer>
       );
      case CourseTabsName.FAQ:
       return (
        <CourseCaseContainer
         key={tab.id}
         className={cn("tab", { "pointer-events-none": index !== activeTab })}
        >
         <CourseFAQ items={tab.items} />
        </CourseCaseContainer>
       );
      case CourseTabsName.TEACHERS:
       return (
        <CourseCaseContainer
         key={tab.id}
         className={cn("tab", { "pointer-events-none": index !== activeTab })}
        >
         <CourseTeachers />
        </CourseCaseContainer>
       );
      case CourseTabsName.CHAPTERS:
       return (
        <CourseCaseContainer
         key={tab.id}
         className={cn("tab", { "pointer-events-none": index !== activeTab })}
        >
         <CourseChapters />
        </CourseCaseContainer>
       );
     }
    })}
   </div>
  </>
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
  <div className="rounded-5xl relative flex-1 bg-gray-200 py-8">
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
    className="hidden-scrollbar scroll-area-mask absolute inset-10 flex flex-col gap-5 overflow-auto"
   >
    {items.map((item) => (
     <div key={item.question}>
      <div className="font-medium">{item.question}</div>
      <p className="text-sm font-light text-gray-500">{item.answer}</p>
     </div>
    ))}
   </div>
  </div>
 );
}

function CourseTeachers() {
 return "<CourseCaseContainer>CourseTeachers</CourseCaseContainer>";
}

function CourseChapters() {
 return "<CourseCaseContainer>CourseChapters</CourseCaseContainer>";
}

function CourseCaseContainer({
 children,
 className,
 ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
 return (
  <div {...props} className={cn("flex w-[37rem]", className)}>
   {children}
  </div>
 );
}

type CourseDetailsProps = {
 course: CourseProps;
};

function CourseDetails({ course }: CourseDetailsProps) {
 const priceWithDiscount = course.price * course.discount - course.price;
 return (
  <div className="flex w-96 flex-shrink-0 flex-col gap-5">
   {course.details.map((value) => (
    <div className="flex w-full items-start" key={value.name}>
     <div className="flex w-48 flex-shrink-0 items-center gap-3 text-sm font-medium text-blue-950">
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
    <div className="flex h-16 items-center justify-between rounded-full border-2 border-gray-200 px-8 font-medium">
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
    <a className="bg-primary flex h-16 items-center justify-center rounded-full font-medium text-gray-50">
     ثبت نام کنید
    </a>
   </div>
  </div>
 );
}
