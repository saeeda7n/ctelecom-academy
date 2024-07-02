"use client";
import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { cn } from "@/libs/utils";

const HeaderItem = ({
 children,
 className,
}: PropsWithChildren & { className?: string }) => {
 const breakingLines = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
 };
 return (
  <motion.li
   initial="initial"
   whileHover="animate"
   className={cn("space-y-0.5 pt-2", className)}
  >
   {children}
   <div className="w-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.874 16.713">
     <motion.path
      className="line"
      data-name="Path 1"
      d="M9.157,17.506C115.811,15.082,88.542,15.89,115,15.89s-71.1,6.868-94.8,9.157,60.4,0,80.529,0-60.6,6.464-60.6,6.464"
      transform="translate(-9.146 -15.297)"
      fill="none"
      stroke="#f54029"
      strokeLinecap="round"
      strokeWidth="2"
      variants={breakingLines}
     />
    </svg>
   </div>
  </motion.li>
 );
};

export default HeaderItem;
