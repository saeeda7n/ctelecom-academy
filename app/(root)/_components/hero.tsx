"use client";
import React, {
 HTMLAttributes,
 PropsWithChildren,
 useEffect,
 useRef,
 useState,
} from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/libs/gsap";
import { SparkleIcon } from "lucide-react";
import { cn } from "@/libs/utils";

const Hero = () => {
 const scope = useRef(null);
 const front = useRef(null);
 const back = useRef(null);
 const laptop = useRef(null);
 const phoneContainer = useRef(null);

 useGSAP(
  () => {
   const mm = gsap.matchMedia(scope);
   mm.add(
    {
     isMobile: `(max-width: 1023px)`,
     isDesktop: `(min-width: 1024px)`,
    },
    (context) => {
     const { isMobile, isDesktop } = context.conditions as {
      [key: string]: boolean;
     };

     const laptopWidth = Number(gsap.getProperty(laptop.current, "width"));
     const phoneContainerWidth = Number(
      gsap.getProperty(phoneContainer.current, "width"),
     );

     if (isDesktop) {
      gsap.set(phoneContainer.current, {
       x: laptopWidth / 2 + (phoneContainerWidth / 2) * 0.5,
       scale: 1.5,
      });
      gsap.set(laptop.current, {
       x: laptopWidth / 2 + (phoneContainerWidth / 2) * 0.5,
       opacity: 0,
      });
     }

     if (isMobile) {
      gsap.set(laptop.current, {
       x: laptopWidth / 2 + phoneContainerWidth / 2,
       opacity: 0,
      });
      gsap.set(phoneContainer.current, {
       transformOrigin: "bottom left",
      });
     }

     gsap.set(front.current, { height: "100%" });
     gsap
      .timeline({
       scrollTrigger: {
        trigger: scope.current,
        pin: true,
        scrub: 1,
        end: () => "+=1500",
        pinSpacing: true,
       },
      })
      .to(front.current, { height: "0%", duration: 1 }, 0)
      .to(laptop.current, { x: 0, opacity: 1, duration: 1 }, 1)
      .to(
       phoneContainer.current,
       {
        duration: 1,
        x: isMobile
         ? -Math.abs(laptopWidth / 2 - phoneContainerWidth / 2) -
           phoneContainerWidth / 10
         : 0,
        scale: isMobile ? 0.65 : 1,
       },
       1,
      );
    },
   );
  },
  { scope, dependencies: [front] },
 );

 return (
  <section
   ref={scope}
   className="flex min-h-[max(100lvh,44rem)] overflow-hidden py-20"
  >
   <div className="flex flex-1 flex-col items-center justify-center gap-10">
    <div className="relative w-full max-w-[100vw]">
     <div className="flex items-end justify-center gap-5 max-lg:min-h-[max(calc(100lvh-theme(spacing.96)),42rem)]">
      <div className="w-[44rem] flex-shrink-0 lg:w-[max(40vw,48rem)]">
       <Image
        ref={laptop}
        src={"/assets/images/laptop.png"}
        width={825}
        height={526}
        alt={"لپ تاپ"}
        loading="eager"
        draggable={false}
        className=""
       />
      </div>

      <div
       ref={phoneContainer}
       className="w-[max(30vw,30vh)] flex-shrink-0 origin-bottom-right max-lg:absolute lg:w-[max(10vw,12rem)]"
      >
       <Image
        className="w-full object-center"
        ref={back}
        src={"/assets/images/phone-back.png"}
        alt={"پشت گوشی موبایل"}
        height={610}
        width={296}
        loading="eager"
       />
       <div ref={front} className="absolute left-0 top-0 flex w-full">
        <div className="w-full overflow-hidden">
         <Image
          src={"/assets/images/phone-front.png"}
          alt={"جلوی گوشی"}
          height={610}
          width={296}
          className="w-full"
          loading="eager"
         />
        </div>
       </div>
      </div>
     </div>
    </div>
    <div className="space-y-2 text-center">
     <h2 className="space-x-2 text-[clamp(1rem,1vw,5rem)] font-medium">
      برگزاری دوره رایگان تعمیرات موبایل و{" "}
      <SparkleArea className="text-primary">
       <strong>لپ تاپ</strong>
      </SparkleArea>
     </h2>
     <p className="text-[clamp(0.75rem,0.7vw,3rem)] font-light">
      توسط مجرب ترین اساتید فعال در حوزه تعمیرات موبایل ویژه دبیرستان و هنرستان
     </p>
    </div>
   </div>
  </section>
 );
};

export default Hero;

function SparkleArea({
 children,
 className,
 ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
 const scope = useRef<HTMLDivElement | null>(null);
 const [area, setArea] = useState({ width: 0, height: 0 });

 useEffect(() => {
  if (!scope.current) return;
  const { width, height } = scope.current?.getBoundingClientRect!();
  setArea({ width, height });
 }, [scope.current]);
 return (
  <div className={cn("relative inline", className)} {...props} ref={scope}>
   {children}
   <AnimatedSparkle area={area} />
   <AnimatedSparkle area={area} />
   <AnimatedSparkle area={area} />
   <AnimatedSparkle area={area} />
   <AnimatedSparkle area={area} />
  </div>
 );
}

function AnimatedSparkle({
 area,
}: {
 area: { width: number; height: number };
}) {
 function createRandomConfigs() {
  //@ts-ignore
  return {
   speed: gsap.utils.random(0.6, 2.5),
   rotate: gsap.utils.random(-360, 360),
   delay: gsap.utils.random(0.1, 0.3),
   scale: gsap.utils.random(0.1, 1.2),
   to: {
    left: gsap.utils.random(area.width / 2 - area.width, area.width * 1.5),
    top: gsap.utils.random(area.height / 2 - area.height, area.height * 1.5),
   },
   from: {
    left: gsap.utils.random(0, area.width),
    top: gsap.utils.random(0, area.height),
   },
  };
 }

 const object = useRef(null);
 const [configs, setConfigs] = useState(createRandomConfigs);

 useGSAP(
  () => {
   const { scale, rotate, speed, delay, to, from } = configs;
   gsap.set(object.current, { scale: 0, top: from.top, left: from.left });

   gsap.to(object.current, {
    duration: speed,
    scale,
    delay,
    rotate,
    top: to.top,
    left: to.left,
    onComplete: () => {
     setConfigs(createRandomConfigs);
    },
   });
  },
  { scope: object, dependencies: [configs] },
 );

 return (
  <SparkleIcon
   ref={object}
   className="text-primary fill-primary absolute size-4"
  />
 );
}
