"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import HomePage from "@/app/Components/HomePage/page";
import SecondSection from "@/app/Components/SecondSection/page";
import HomeFirstSection from "@/app/SectionsContent/HomeFirstSection";
import HomeSecondSection from "@/app/SectionsContent/HomeSecondSection";
import HomeThirdSection from "@/app/SectionsContent/HomeThirdSection";

export default function HomeMain() {
   const mainRef = useRef(null);

   return (
      <main ref={mainRef} className="relative w-full min-h-screen overflow-y-auto scroll-smooth">
         {/* Gradient Overlay */}
         <div className="fixed top-0 left-0 w-full h-full -z-10 transition-all duration-500" />

         {/* Section 1 */}
         <section
            id="section1"
            className="w-full h-screen text-white relative flex items-center justify-center"
            style={{
               background:
                  "linear-gradient(180deg,rgba(45, 53, 142, 1) 0%, rgba(117, 167, 218, 1) 85%, rgba(117, 167, 218, 1) 100%)",
            }}
         >
            <HomePage />
            <div className="absolute inset-0 flex items-center justify-end px-4 md:px-12 z-0"></div>
            <HomeFirstSection />
         </section>

         <section
            id="section2"
            className="w-100vw h-100vh relative"
            style={{
               background:
                  // "linear-gradient(180deg,rgba(117, 167, 218, 1) 0%, rgba(169, 211, 252, 1) 70%, rgba(255, 255, 255, 1) 100%);",
                  "linear-gradient(180deg,rgba(118, 168, 229, 1) 0%, rgba(184, 220, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)",
               zIndex: -2,
            }}
         >
            <div className="absolute inset-0 z-1">{/* <SecondSection /> */}</div>
            <div className="relative -z-1 w-full h-full flex items-center justify-center px-4 md:px-12">
               <HomeSecondSection />
            </div>
         </section>

         {/* Section 3 */}
         <section
            id="section3"
            className="w-full h-screen text-white relative flex items-center justify-center"
            style={{
               background:
                  " linear-gradient(180deg,rgba(252, 253, 255, 1) 0%, rgba(255, 255, 255, 1) 33%, rgba(255, 255, 255, 1) 100%)",
               zIndex: -2,
            }}
         >
            <div className="absolute inset-0 flex items-center justify-end px-4 md:px-12 z-10">
               <HomeThirdSection />
            </div>
            {/* <HomePage /> */}
            {/* <SecondSection /> */}
         </section>
      </main>
   );
}
