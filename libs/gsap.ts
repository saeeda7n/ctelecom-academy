"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

if (typeof window === "object") {
 gsap.registerPlugin(ScrollTrigger);
}
export { gsap };
