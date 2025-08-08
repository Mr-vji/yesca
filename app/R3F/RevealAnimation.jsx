"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function RevealAnimation() {
   const Y = useRef();
   const E = useRef();
   const S = useRef();
   const C = useRef();
   const A = useRef();
   const Dot = useRef();
   const tl = useRef(); // store the timeline

   useEffect(() => {
      // Set starting positions
      gsap.set(Y.current, { x: 90 });
      gsap.set(Dot.current, { x: -88 });
      gsap.set([E.current, S.current, C.current, A.current], {
         scale: 0,
         opacity: 0,
      });

      // Create the timeline and store it
      tl.current = gsap.timeline({ paused: true });

      tl.current
         .to(Y.current, { x: 0, duration: 0.9, ease: "power1.inOut" })
         .to(Dot.current, { x: 0, duration: 0.9, ease: "power1.inOut" }, "<")
         .to(
            [S.current, C.current],
            { scale: 1, opacity: 1, duration: 0.3, ease: "power1.inOut" },
            "-=0.6"
         )
         .to(
            [E.current, A.current],
            { scale: 1, opacity: 1, duration: 0.3, ease: "power1.inOut" },
            "<+=0.1"
         );

      // Play animation when loaded
      tl.current.play();

      // Scroll listener
      const handleScroll = () => {
         if (window.scrollY > 50) {
            // scroll down -> reverse back
            if (!tl.current.reversed()) {
               tl.current.reverse();
            }
         } else {
            // back to top -> play again
            if (tl.current.reversed()) {
               tl.current.play();
            }
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <div className="reveal-animation bg-transparent flex items-center justify-start">
         <img ref={Y} src="/LattersSvg/Y.svg" alt="Y" className="w-10 h-auto mx-0.5" />
         <img ref={E} src="/LattersSvg/E.svg" alt="E" className="w-8 h-auto mx-0.5" />
         <img ref={S} src="/LattersSvg/S.svg" alt="S" className="w-9 h-auto mx-0.5" />
         <img ref={C} src="/LattersSvg/C.svg" alt="C" className="w-10 h-auto mx-0.5" />
         <img ref={A} src="/LattersSvg/A.svg" alt="A" className="w-10 h-auto mx-0.5" />
         <img ref={Dot} src="/LattersSvg/Dot.svg" alt="Dot" className="w-6 h-auto mx-0 mt-6" />
      </div>
   );
}
