"use client";
import React, { useRef } from "react";
import {
 ChevronLeftIcon,
 ChevronRightIcon,
 MessageCircleMore,
 Star,
} from "lucide-react";
import { cn } from "@/libs/utils";
import { useGesture } from "@use-gesture/react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/libs/gsap";

const comments: ReviewCardProps[] = [
 {
  id: "78f485ff-1179-45ff-824a-f92683c30c2a",
  content: {
   body:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
   rate: 5,
  },
  author: {
   image: "/assets/profiles/486b5e65-423b-4420-a6cb-86fa2549881f.png",
   name: "آرمان الله وردی",
  },
 },
 {
  id: "9c8d789f-e62b-4a32-8a59-4508d0fa0e54",
  content: {
   body:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
   rate: 3,
  },
  author: {
   image: "/assets/profiles/486b5e65-423b-4420-a6cb-86fa2549881f.png",
   name: "آرمان الله وردی",
  },
 },

 {
  id: "580f80e6-512e-4937-8a02-2e8577174088",
  content: {
   body:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
   rate: 4,
  },
  author: {
   image: "/assets/profiles/486b5e65-423b-4420-a6cb-86fa2549881f.png",
   name: "آرمان الله وردی",
  },
 },

 {
  id: "78f485ff-1179-45ff-824a-f92683c30c2c",
  content: {
   body:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
   rate: 2,
  },
  author: {
   image: "/assets/profiles/486b5e65-423b-4420-a6cb-86fa2549881f.png",
   name: "آرمان الله وردی",
  },
 },

 {
  id: "78f485ff-1179-45ff-824a-f92683c30c2d",
  content: {
   body:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
   rate: 4,
  },
  author: {
   image: "/assets/profiles/486b5e65-423b-4420-a6cb-86fa2549881f.png",
   name: "آرمان الله وردی",
  },
 },
];

export function StudentReviews() {
 const target = useRef<HTMLDivElement | null>(null);
 const { contextSafe } = useGSAP();

 const scroll = contextSafe((x: number) => {
  gsap.to(target.current, {
   scrollLeft: x,
   ease: "power3.out",
  });
 });
 useGesture(
  {
   onDrag: ({ delta }) => {
    const [x] = delta;
    if (target.current) target.current!.scrollLeft += -x;
   },
   onDragEnd: ({ velocity, direction }) => {
    const [x] = velocity;
    const [dX] = direction;
    if (!target.current) return;
    scroll(target.current!.scrollLeft + x * 50 * dX * -1);
   },
  },
  { target, eventOptions: { passive: false } },
 );

 function slideBy(sign: number) {
  scroll(target.current!.scrollLeft + target.current!.clientWidth * sign);
 }

 return (
  <section className="container">
   <div className="rounded-7xl space-y-6 bg-gray-100 px-10 py-8">
    <div className="flex items-center gap-2">
     <MessageCircleMore />
     <h3 className="text-2xl font-medium">نظرات دانشجویان</h3>
    </div>

    <div className="hidden-scrollbar overflow-auto rounded-2xl" ref={target}>
     <div className="flex w-max gap-5">
      {comments.map((comment) => (
       <ReviewCard {...comment} key={comment.id} />
      ))}
     </div>
    </div>
    <div className="flex justify-end gap-2">
     <button
      onClick={() => slideBy(1)}
      className="flex size-14 items-center justify-center rounded-full bg-white"
     >
      <ChevronRightIcon />
     </button>
     <button
      onClick={() => slideBy(-1)}
      className="flex size-14 items-center justify-center rounded-full bg-white"
     >
      <ChevronLeftIcon />
     </button>
    </div>
   </div>
  </section>
 );
}

type ReviewCardProps = {
 id: string;
 author: {
  image: string;
  name: string;
 };
 content: { body: string; rate: number };
};

function RatesStart({ rate }: { rate: number }) {
 return (
  <div className="flex">
   {[...new Array(5)].map((_, index) => (
    <Star
     className={cn("size-3.5 text-[#F54029]", {
      "fill-[#F54029]": rate > index,
     })}
     key={index}
    />
   ))}
  </div>
 );
}

function ReviewCard({ author, id, content }: ReviewCardProps) {
 return (
  <article className="flex w-96 select-none flex-col gap-4 rounded-2xl bg-gray-200 p-3 pb-5">
   <header className="flex gap-2">
    <img
     width={128}
     height={128}
     draggable={false}
     src={author.image}
     alt={author.name}
     className="size-16 rounded-xl object-cover object-center"
    />
    <div className="flex flex-col justify-center gap-2">
     <h1 className="text-base font-medium">{author.name}</h1>
     <RatesStart rate={content.rate} />
    </div>
   </header>
   <div>
    <p className="--ps-[4.5rem] line-clamp-4 text-sm/6 text-gray-700">
     {content.body}
    </p>
   </div>
  </article>
 );
}
