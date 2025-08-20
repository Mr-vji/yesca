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

   // Initial images (white version now)
   const [images, setImages] = useState({
      Y: "/LattersWhiteSVG/Y.svg",
      E: "/LattersWhiteSVG/E.svg",
      S: "/LattersWhiteSVG/S.svg",
      C: "/LattersWhiteSVG/C.svg",
      A: "/LattersWhiteSVG/A.svg",
      Dot: "/LattersWhiteSVG/OpenDot.svg",
   });

   useEffect(() => {
      // Initial positions and scales
      gsap.set(Y.current, { x: 0 });
      gsap.set(Dot.current, { x: -178 });
      gsap.set([E.current, S.current, C.current, A.current], {
         scale: 0,
         opacity: 0,
      });

      // Timeline
      tl.current = gsap.timeline({ paused: true });

      tl.current
         .to(Dot.current, { x: 0, duration: 0.9, ease: "power1.inOut" }, "<")
         .call(
            () => {
               setImages((prev) => ({
                  ...prev,
                  Dot:
                     prev.Dot === "/LattersWhiteSVG/OpenDot.svg"
                        ? "/LattersWhiteSVG/OpenDot.svg"
                        : "/LattersWhiteSVG/OpenDot.svg",
               }));
            },
            null,
            ">-0.45"
         )
         // Reveal E, S, C, A with stagger
         .to(
            [E.current, S.current, C.current, A.current],
            {
               scale: 1,
               opacity: 1,
               duration: 0.1,
               ease: "power1.inOut",
               stagger: 0.15,
            },
            "-=0.7"
         );

      tl.current.play();

      // Scroll-based color change for all letters (inverted)
      const handleScroll = () => {
         if (window.scrollY > 50) {
            // Scroll down → switch all to blue
            setImages({
               Y: "/LattersSvg/Y.svg",
               E: "/LattersSvg/E.svg",
               S: "/LattersSvg/S.svg",
               C: "/LattersSvg/C.svg",
               A: "/LattersSvg/A.svg",
               Dot: "/LattersSvg/Dot.svg",
            });

            if (!tl.current.reversed()) tl.current.reverse();
         } else {
            // Scroll up → switch all back to white
            setImages({
               Y: "/LattersWhiteSVG/Y.svg",
               E: "/LattersWhiteSVG/E.svg",
               S: "/LattersWhiteSVG/S.svg",
               C: "/LattersWhiteSVG/C.svg",
               A: "/LattersWhiteSVG/A.svg",
               Dot: "/LattersWhiteSVG/OpenDot.svg",
            });

            if (tl.current.reversed()) tl.current.play();
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <div className="reveal-animation bg-transparent flex items-center justify-start">
         <img ref={Y} src={images.Y} alt="Y" className="w-10 h-auto mx-0.5" />
         <img ref={E} src={images.E} alt="E" className="w-8 h-auto mx-0.5" />
         <img ref={S} src={images.S} alt="S" className="w-9 h-auto mx-0.5" />
         <img ref={C} src={images.C} alt="C" className="w-10 h-auto mx-0.5" />
         <img ref={A} src={images.A} alt="A" className="w-10 h-auto mx-0.5" />
         <img ref={Dot} src={images.Dot} alt="Dot" className="w-6 h-auto mx-0 mt-6" />
      </div>
   );
}
