import React, { PropsWithChildren } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

type LandingLayout = Readonly<PropsWithChildren>;
const LandingLayout = ({ children }: LandingLayout) => {
 return (
  <>
   <Header />
   {children}
   <Footer />
  </>
 );
};

export default LandingLayout;
