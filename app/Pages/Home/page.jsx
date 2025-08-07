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
   const gradientOverlayRef = useRef(null);

   useEffect(() => {
      const sections = document.querySelectorAll("section");
      const overlay = gradientOverlayRef.current;

      const handleScroll = () => {
         sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;

            if (
               sectionTop <= window.innerHeight / 2 &&
               sectionTop + sectionHeight > window.innerHeight / 2
            ) {
               const gradient = section.getAttribute("data-gradient");
               if (gradient && overlay) {
                  gsap.to(overlay, {
                     backgroundImage: gradient,
                     duration: 0.6,
                     ease: "power2.out",
                  });
               }
            }
         });
      };

      handleScroll(); // Set initial gradient on load
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <main ref={mainRef} className="relative w-full min-h-screen overflow-y-auto scroll-smooth">
         {/* Gradient Overlay */}
         <div
            ref={gradientOverlayRef}
            className="fixed top-0 left-0 w-full h-full -z-10 transition-all duration-500"
            style={{
               backgroundImage:
                  "linear-gradient(0deg,rgba(30, 30, 30, 1) 0%, rgba(0, 0, 0, 1) 100%)",
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundAttachment: "fixed",
            }}
         />

         {/* Section 1 */}
         <section
            id="section1"
            data-gradient="linear-gradient(0deg,rgba(117, 167, 218, 1) 0%, rgba(45, 53, 142, 1) 83%)"
            className="w-full h-screen text-white relative flex items-center justify-center"
         >
            <div className="absolute inset-0 flex items-center justify-end px-4 md:px-12 z-10">
               {/* <div className="text-right">
                  <h1
                     className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black italic leading-tight"
                     style={{ color: "#afd3f8" }}
                  >
                     WE MAKE TECH <br /> ACCESSIBLE
                  </h1>
               </div> */}
               <HomeFirstSection />
            </div>
            <HomePage />
         </section>

         <section
            id="section2"
            data-gradient="linear-gradient(0deg,rgba(255, 255, 255, 1) 0%, rgba(117, 167, 218, 1) 24%)"
            className="w-100vw h-100vh relative"
         >
            <div className="absolute inset-0 z-1">{/* <SecondSection /> */}</div>
            <div className="relative -z-1 w-full h-full flex items-center justify-center px-4 md:px-12">
               <HomeSecondSection />
            </div>
         </section>

         {/* Section 3 */}
         <section
            id="section3"
            data-gradient="linear-gradient(180deg,rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 83%)"
            className="w-full h-screen text-white relative flex items-center justify-center"
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
