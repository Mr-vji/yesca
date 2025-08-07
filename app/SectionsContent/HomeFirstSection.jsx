// components/HomeFirstSection.jsx
import React from "react";

export default function HomeFirstSection() {
   return (
      <section
         id="section1"
         data-gradient="linear-gradient(0deg,rgba(117, 167, 218, 1) 0%, rgba(45, 53, 142, 1) 83%)"
         className="w-full h-screen text-white relative flex items-center justify-center"
      >
         <div className="absolute inset-0 flex items-center justify-end px-4 md:px-12 z-10">
            <div className="text-right">
               <h1
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black italic leading-tight"
                  style={{ color: "#afd3f8" }}
               >
                  WE MAKE TECH <br /> ACCESSIBLE
               </h1>
            </div>
         </div>
      </section>
   );
}
