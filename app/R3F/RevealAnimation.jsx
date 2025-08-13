"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function RevealAnimation() {
   const Y = useRef();
   const E = useRef();
   const S = useRef();
   const C = useRef();
   const A = useRef();
   const Dot = useRef();
   const tl = useRef();

   const [dotImage, setDotImage] = useState("/LattersSvg/Dot.svg");

   useEffect(() => {
      gsap.set(Y.current, { x: 0 });
      gsap.set(Dot.current, { x: -178 });
      gsap.set([E.current, S.current, C.current, A.current], {
         scale: 0,
         opacity: 0,
      });

      tl.current = gsap.timeline({ paused: true });

      tl.current;

      tl.current
         .to(Dot.current, { x: 0, duration: 0.9, ease: "power1.inOut" }, "<")
         .call(
            () => {
               setDotImage((prev) =>
                  // prev === "/LattersSvg/Dot.svg" ? "/LattersSvg/DotOpen.svg" : "/LattersSvg/Dot.svg"
                  prev === "/LattersSvg/DotOpen.svg"
                     ? "/LattersSvg/Dot.svg"
                     : "/LattersSvg/DotOpen.svg"
               );
            },
            null,
            ">-0.45"
         )
         // 🔹 Reveal E, S, C, A one-by-one with stagger
         .to(
            [E.current, S.current, C.current, A.current],
            {
               scale: 1,
               opacity: 1,
               duration: 0.1,
               ease: "power1.inOut",
               stagger: 0.15, // delay between each letter
            },
            "-=0.7" // starts slightly before dot finishes
         );

      tl.current.play();

      const handleScroll = () => {
         if (window.scrollY > 50) {
            if (!tl.current.reversed()) {
               tl.current.reverse();
            }
         } else {
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
         <img ref={Dot} src={dotImage} alt="Dot" className="w-6 h-auto mx-0 mt-6" />
      </div>
   );
}
