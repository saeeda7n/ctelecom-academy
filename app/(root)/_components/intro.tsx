"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/libs/gsap";
import colors from "tailwindcss/colors";

const Intro = () => {
 const scope = useRef(null);
 const counterId = useId();
 const [counter, setCounter] = useState(5069);
 const { contextSafe } = useGSAP({ scope });
 const animateOut = contextSafe(() => {
  gsap
   .timeline()
   .to("span", { delay: 1, opacity: 1 })
   .to(".counter", {
    delay: 1,
    scale: 20,
    duration: 0.7,
    background: colors.gray["50"],
    ease: "expo.inOut",
   })
   .to(scope.current, { delay: 0.3, opacity: 0, pointerEvents: "none" });
 });
 useEffect(() => {
  const id = setTimeout(() => setCounter((p) => p + 1), 2000);
  return () => clearTimeout(id);
 }, []);

 return (
  <div
   ref={scope}
   className="fixed inset-0 z-[66] flex min-h-lvh items-center justify-center overflow-hidden bg-[#141f78]"
  >
   <div className="flex flex-col">
    <span className="text-center text-lg font-medium text-gray-50 opacity-0">
     متخصص
    </span>
    <div
     dir="ltr"
     className="counter flex text-[clamp(5rem,15vw,64rem)] font-bold leading-none text-gray-50"
    >
     {counter
      .toString()
      .split("")
      .map((number, index, array) => (
       <AnimatePresence
        onExitComplete={() => animateOut()}
        initial={false}
        mode="popLayout"
        key={index}
       >
        <motion.div
         transition={{
          duration: 0.6,
          type: "spring",
         }}
         exit={{ y: "-50%", opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         initial={{ y: "50%", opacity: 0 }}
         key={number}
        >
         {number}
        </motion.div>
       </AnimatePresence>
      ))}
    </div>
   </div>
  </div>
 );
};

export default Intro;
