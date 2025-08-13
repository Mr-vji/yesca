"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition({ children }) {
   const overlayRef = useRef(null);

   // Reveal animation when page loads
   useEffect(() => {
      gsap.to(overlayRef.current, {
         yPercent: -100,
         duration: 1,
         ease: "power4.inOut",
         delay: 0.2,
      });
   }, []);

   return (
      <>
         {/* Overlay */}
         <div
            ref={overlayRef}
            className="page-overlay fixed top-0 left-0 w-full h-full bg-black z-[9999] translate-y-0"
         />
         {children}
      </>
   );
}
