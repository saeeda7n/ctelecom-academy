"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

ScrollTrigger.defaults({ markers: !process.env.production });
if (typeof window === "object") {
 gsap.registerPlugin(ScrollTrigger);
}
export { gsap };
