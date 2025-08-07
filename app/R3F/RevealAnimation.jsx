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

   useEffect(() => {
      gsap.set(Y.current, { x: 90 }); // Y starts to the right
      gsap.set(Dot.current, { x: -90 }); // Dot starts to the left

      gsap.set([E.current, S.current, C.current, A.current], {
         scale: 0,
         opacity: 0,
      });

      const tl = gsap.timeline();

      tl.to(Y.current, {
         x: 0,
         duration: 0.9,
         ease: "power1.inOut",
      })
         .to(
            Dot.current,
            {
               x: 0,
               duration: 0.9,
               ease: "power1.inOut",
            },
            "<" // Starts at the same time as Y.current animation
         )
         // Reveal ESCA *while* Y and Dot are still moving or just finishing
         .to(
            [S.current, C.current],
            {
               scale: 1,
               opacity: 1,
               duration: 0.3,
               ease: "power1.inOut",
               // stagger: 0.1,
            },
            "-=0.6"
         ) // This starts the S and C animation 0.6 seconds *before* the previous animations end
         .to(
            [E.current, A.current],
            {
               scale: 1,
               opacity: 1,
               duration: 0.3,
               ease: "power1.inOut",
               // stagger: 0.1,
            },
            "<+=0.1"
         ); // This starts E and A 0.1 seconds after S and C start
   }, []);

   return (
      <>
         <div className="reveal-animation bg-transparent  flex items-center  justify-start">
            <img ref={Y} src="/LattersSvg/Y.svg" alt="img1" className="w-10 h-auto mx-0.5  " />
            <img ref={E} src="/LattersSvg/E.svg" alt="img2" className="w-8 h-auto mx-0.5" />
            <img ref={S} src="/LattersSvg/S.svg" alt="img3" className="w-9 h-auto mx-0.5" />
            <img ref={C} src="/LattersSvg/C.svg" alt="img4" className="w-10 h-auto mx-0.5" />
            <img ref={A} src="/LattersSvg/A.svg" alt="img5" className="w-10 h-auto mx-0.5" />
            <img ref={Dot} src="/LattersSvg/Dot.svg" alt="img6" className="w-6 h-auto mx-0 mt-6 " />
         </div>
         {/* <div className="reveal-animation bg-transparent  flex items-center  justify-start">
            <img ref={Y} src="/LattersSvg/Y.svg" alt="img1" className="w-16 h-auto mx-0.5  " />
            <img ref={E} src="/LattersSvg/E.svg" alt="img2" className="w-13 h-auto mx-0.5" />
            <img ref={S} src="/LattersSvg/S.svg" alt="img3" className="w-14 h-auto mx-0.5" />
            <img ref={C} src="/LattersSvg/C.svg" alt="img4" className="w-15 h-auto mx-0.5" />
            <img ref={A} src="/LattersSvg/A.svg" alt="img5" className="w-16 h-auto mx-0.5" />
            <img
               ref={Dot}
               src="/LattersSvg/Dot.svg"
               alt="img6"
               className="w-10 h-auto mx-0 mt-9 "
            />
         </div> */}
         {/* <div className="reveal-animation bg-transparent w-screen h-screen flex items-center  justify-center">
            <img ref={Y} src="/Latters/Y.png" alt="img1" className="w-16 h-auto mx-0.5" />
            <img ref={E} src="/Latters/E.png" alt="img2" className="w-13 h-auto mx-0.5" />
            <img ref={S} src="/Latters/S.png" alt="img3" className="w-14 h-auto mx-0.5" />
            <img ref={C} src="/Latters/C.png" alt="img4" className="w-15 h-auto mx-0.5" />
            <img ref={A} src="/Latters/A.png" alt="img5" className="w-16 h-auto mx-0.5" />
            <img ref={Dot} src="/Latters/Dot.png" alt="img6" className="w-10 h-auto mx-0 mt-9 " />
         </div> */}
      </>
   );
}
