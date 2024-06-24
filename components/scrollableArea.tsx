"use client";
import { useGesture } from "@use-gesture/react";
import { HTMLAttributes, PropsWithChildren, useRef } from "react";
import { cn } from "@/libs/utils";

type ScrollableAreaProps = HTMLAttributes<HTMLDivElement> & PropsWithChildren;
export function ScrollableArea({
 className,
 children,
 ...props
}: ScrollableAreaProps) {
 const target = useRef<HTMLDivElement | null>(null);
 useGesture(
  {
   onDrag: ({ delta }) => {
    const [x] = delta;
    if (target.current) target.current!.scrollLeft += -x;
   },
  },

  { target, eventOptions: { passive: false } },
 );
 return (
  <div ref={target} className={cn("hidden-scrollbar overflow-auto", className)}>
   {children}
  </div>
 );
}
