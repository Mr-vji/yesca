// // components/HomeFirstSection.jsx
// import React from "react";

// export default function HomeFirstSection() {
//    return (
//       <section
//          id="section1"
//          data-gradient="linear-gradient(0deg,rgba(117, 167, 218, 1) 0%, rgba(45, 53, 142, 1) 83%)"
//          className="w-full h-screen text-white relative flex items-center justify-center"
//       >
//          <div className="absolute inset-0 flex items-center justify-end px-4 md:px-12 z-10">
//             <div className="text-right">
//                <h1
//                   className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black italic leading-tight"
//                   style={{ color: "#afd3f8" }}
//                >
//                   WE MAKE TECH <br /> ACCESSIBLE
//                </h1>
//             </div>
//          </div>
//       </section>
//    );
// }
// components/HomeFirstSection.jsx"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HomeFirstSection() {
   const textRef = useRef(null);

   useEffect(() => {
      const letters = textRef.current.querySelectorAll("span");
      gsap.fromTo(
         letters,
         { opacity: 0, y: 20 },
         {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.04, // 0.002s between letters
            ease: "power3.out",
         }
      );
   }, []);

   return (
      <section
         id="section1"
         // className="w-full h-screen text-white relative flex items-center justify-center"
      >
         <div
            className="
               absolute inset-0
               flex items-end md:items-center
               justify-end
               px-4 md:px-12
               pb-6 md:pb-0
               z-10
            "
         >
            <div className="text-right">
               <h1
                  ref={textRef}
                  className="
                     text-5xl md:text-6xl lg:text-5xl xl:text-8xl
                     font-black italic leading-tight
                  "
                  style={{ color: "#afd3f8" }}
               >
                  {"WE MAKE TECH ".split("").map((char, index) => (
                     <span key={index} style={{ display: "inline-block", whiteSpace: "pre" }}>
                        {char}
                     </span>
                  ))}
                  <br />
                  {"ACCESSIBLE".split("").map((char, index) => (
                     <span key={index} style={{ display: "inline-block", whiteSpace: "pre" }}>
                        {char}
                     </span>
                  ))}
               </h1>
            </div>
         </div>
      </section>
   );
}
