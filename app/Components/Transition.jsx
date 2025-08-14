import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Transition() {
   const leftRef = useRef(null);
   const rightRef = useRef(null);

   useEffect(() => {
      // Animate the doors opening
      gsap.to(leftRef.current, {
         x: "-100%", // move left
         duration: 1.5,
         ease: "power2.inOut",
      });
      gsap.to(rightRef.current, {
         x: "100%", // move right
         duration: 1.5,
         ease: "power2.inOut",
      });
   }, []);

   return (
      <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
         {/* Left Image */}
         <div
            ref={leftRef}
            style={{
               position: "absolute",
               left: 0,
               top: 0,
               width: "50%",
               height: "100%",
               backgroundImage: "url('/left-image.jpg')",
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
         ></div>

         {/* Right Image */}
         <div
            ref={rightRef}
            style={{
               position: "absolute",
               right: 0,
               top: 0,
               width: "50%",
               height: "100%",
               backgroundImage: "url('/right-image.jpg')",
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
         ></div>
      </div>
   );
}

export default Transition;
