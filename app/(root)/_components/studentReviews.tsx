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
import Image from "next/image";

const comments: ReviewCardProps[] = [
 {
  id: "78f485ff-1179-45ff-824a-f92683c30c2a",
  content: {
   body:
    "من دوره تعمیرات موبایل شرکت کردم، این دوره واقعا خوب و کاربردی بود و توانستم از سی تلکام وارد بازار کار شوم",
   rate: 5,
  },
  author: {
   image: "/assets/profiles/memoji-1.jpg",
   name: "آیدین مظفری",
  },
 },
 {
  id: "9c8d789f-e62b-4a32-8a59-4508d0fa0e54",
  content: {
   body:
    "تجهیزات و محیط آموزشی بسیار به روز و حرفه ای بود که آموزش رو برای من بسیار جذاب کرده بود",
   rate: 3,
  },
  author: {
   image: "/assets/profiles/memoji-2.jpg",
   name: "فرزاد سیگارچی",
  },
 },

 {
  id: "580f80e6-512e-4937-8a02-2e8577174088",
  content: {
   body:
    "بخاطر اینکه با موارد واقعی تعمیرات دستگاه ها مواجه بودیم دوره آموزشی و یادگیری برای من بسیار خوب بود",
   rate: 4,
  },
  author: {
   image: "/assets/profiles/memoji-women-2.jpg",
   name: "فاطمه ابراهیمی",
  },
 },

 {
  id: "78f485ff-1179-45ff-824a-f92683c30c2c",
  content: {
   body:
    "من قبلا توی حوزه تعمیرات فعال بودم ولی با این دوره خیلی سطح اطلاعاتم بالاتر رفت و بسیار ضررهای مالی جلوگیری شد",
   rate: 2,
  },
  author: {
   image: "/assets/profiles/memoji-3.jpg",
   name: "خشایار قهرمانی",
  },
 },
 {
  id: "78f485ff-1179-45ff-824a-f92683c30c2d",
  content: {
   body:
    "سطح دوره تعمیرات به حدی بالا و خوب بود که من سریعا بعد اتمام دوره مشغول به فعالیت شدم",
   rate: 4,
  },
  author: {
   image: "/assets/profiles/memoji-4.jpg",
   name: "ناصر حمیدیان",
  },
 },
 {
  id: "78f485ff-1179-45ff-824a-f92683c30c2a",
  content: {
   body:
    "بهترین اتفاق برای من آشنایی با آموزشگاه سی تلکام بود، چون تونستم با گذارندن دوره تعمیرات موبایل به درآمد خوبی از طریق تعمیرات موبایل برسم.",
   rate: 4,
  },
  author: {
   image: "/assets/profiles/memoji-women-1.jpg",
   name: "نیلوفر خیابانی تبریزی",
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
   <div className="rounded-5xl lg:rounded-7xl space-y-6 bg-gray-100 px-5 py-4 lg:px-10 lg:py-8">
    <div className="flex items-center gap-2">
     <MessageCircleMore />
     <h3 className="text-lg font-medium lg:text-2xl">نظرات دانشجویان</h3>
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
      className="flex size-12 items-center justify-center rounded-full bg-white lg:size-14"
     >
      <ChevronRightIcon />
     </button>
     <button
      onClick={() => slideBy(-1)}
      className="flex size-12 items-center justify-center rounded-full bg-white lg:size-14"
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
    <Image
     width={128}
     height={128}
     draggable={false}
     src={author.image}
     alt={author.name}
     className="size-16 rounded-xl object-cover object-center"
    />
    <div className="flex flex-col justify-center gap-2">
     <h1 className="text-sm font-medium lg:text-base">{author.name}</h1>
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
