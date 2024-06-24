import React from "react";
import AboutUs from "@/app/(root)/_components/aboutUs";
import CourseBenefits from "@/app/(root)/_components/courseBenefits";
import { StudentReviews } from "@/app/(root)/_components/studentReviews";
import { VideoCard } from "@/app/(root)/_components/videoCard";
import { Courses } from "@/app/(root)/_components/courses";
import Intro from "@/app/(root)/_components/intro";
import Hero from "@/app/(root)/_components/hero";

const LandingPage = () => {
 return (
  <main className="flex flex-col gap-32 pb-16">
   <Intro />
   <Hero />
   <Courses />
   <VideoCard />
   <StudentReviews />
   <CourseBenefits />
   <AboutUs />
  </main>
 );
};

export default LandingPage;
