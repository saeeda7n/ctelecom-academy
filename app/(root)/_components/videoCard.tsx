"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PlayIcon, VideoIcon } from "lucide-react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

export function VideoCard() {
 let [isOpen, setIsOpen] = useState(false);

 return (
  <section className="container lg:-mb-24">
   <div className="relative overflow-hidden rounded-[min(5rem,5vw)]">
    <Image
     className="relative z-20 w-full"
     src="/assets/images/mobile-frame.png"
     width={1200}
     height={800}
     draggable={false}
     alt="mobile frame"
    />

    <div className="absolute inset-[1vw] overflow-hidden rounded-[min(4rem,6vw)] 2xl:inset-[min(1rem,0.6vw)] 2xl:rounded-[min(5rem,5vw)]">
     <div className="absolute inset-0 z-10 rounded-[6vw] bg-black/70 2xl:inset-[min(0.1rem,0.6vw)] 2xl:rounded-[min(5rem,2vw)]" />

     <div className="absolute inset-0 z-30 flex flex-col items-center justify-center sm:pt-[calc(min(3rem,3vw)+theme(spacing.20))]">
      <button
       onClick={() => setIsOpen(true)}
       className="rounded-full border-2 border-transparent p-3 transition duration-300 hover:border-gray-50 sm:mt-auto"
      >
       <PlayIcon className="me-1 size-[clamp(3rem,5vw,8rem)] fill-gray-50 text-gray-50" />
      </button>
      <div className="mt-auto flex w-full flex-col gap-1 px-[min(3rem,3vw)] pb-[4vw] text-gray-50 max-sm:hidden md:pb-[min(3rem,3vw)]">
       <span className="text-sm font-light max-sm:hidden">
        فیلم آموزشگاه سی تلکام
       </span>
       <h3 className="text-lg font-bold md:text-xl">
        آشنایی با کلاس ها و تجهیزات پیشرفته
       </h3>
       <span className="mt-1 font-medium tracking-wider">02:00</span>
      </div>
     </div>

     <Image
      src={"/assets/images/video-cover.png"}
      alt="کاور ویدیو معرفی سی آکادمی سی تلکام"
      width={1300}
      height={900}
      draggable={false}
      className="h-full w-full object-cover object-center"
     />
    </div>
   </div>
   <VideoDialog isOpen={isOpen} onClose={setIsOpen} />
  </section>
 );
}

function VideoDialog({
 isOpen,
 onClose,
}: {
 isOpen: boolean;
 onClose: (closed: boolean) => void;
}) {
 return (
  <AnimatePresence>
   {isOpen && (
    <Dialog
     static
     open={isOpen}
     onClose={() => onClose(false)}
     className="relative z-50"
    >
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black"
     />
     <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
      <DialogPanel className="w-full max-w-7xl">
       <motion.div
        initial={{ opacity: 0, scale: 0.98, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 50 }}
        className="space-y-6"
       >
        <div className="flex items-center justify-between">
         <DialogTitle
          as="h3"
          className="flex items-center gap-3 text-base font-medium text-white lg:text-xl/7"
         >
          <VideoIcon className="size-10" />
          آموزش تعمیرات سخت افزار لپ تاپ
         </DialogTitle>
         <button className="text-gray-50" onClick={() => onClose(false)}>
          <CloseIcon />
         </button>
        </div>

        <video className="w-full rounded-3xl" controls autoPlay={true}>
         <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
         />
         {/*<source src="movie.ogg" type="video/ogg" />*/}
         مرورگر شما مناسب پش ویدیو نمیباشد!
        </video>
       </motion.div>
      </DialogPanel>
     </div>
    </Dialog>
   )}
  </AnimatePresence>
 );
}
