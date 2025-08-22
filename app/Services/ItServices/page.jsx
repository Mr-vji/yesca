"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ItServices() {
   const headingRef = useRef(null);
   const paragraphRef = useRef(null);

   useEffect(() => {
      const headingLetters = headingRef.current.querySelectorAll("span");
      const paragraphLetters = paragraphRef.current.querySelectorAll("span");

      // Animate heading first, then paragraph
      gsap.fromTo(
         headingLetters,
         { opacity: 0, y: 20 },
         {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.04,
            ease: "power3.out",
            onComplete: () => {
               gsap.fromTo(
                  paragraphLetters,
                  { opacity: 0, y: 20 },
                  { opacity: 1, y: 0, duration: 0.6, stagger: 0.04, ease: "power3.out" }
               );
            },
         }
      );
   }, []);

   const heading = "It Services Page";
   const paragraph = "This is the about page of our Next.js application.";

   return (
      <main className="flex h-screen flex-col items-center justify-center bg-pink-500">
         <h1 ref={headingRef} className="text-9xl font-bold text-white-800 ">
            {heading.split("").map((char, index) => (
               <span key={`h-${index}`} style={{ display: "inline-block", whiteSpace: "pre" }}>
                  {char}
               </span>
            ))}
         </h1>
         <p ref={paragraphRef} className="mt-4 text-lg">
            {paragraph.split("").map((char, index) => (
               <span key={`p-${index}`} style={{ display: "inline-block", whiteSpace: "pre" }}>
                  {char}
               </span>
            ))}
         </p>
      </main>
   );
}
