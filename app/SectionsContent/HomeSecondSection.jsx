import React from "react";
import Image from "next/image";
import farmDosthLogo from "@/public/images/FD.png";

export default function HomeSecondSection() {
   return (
      <section className="w-full h-screen flex flex-col items-center justify-center px-4 md:px-12 text-black">
         {/* Top Title */}
         <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold italic tracking-wide mb-12 uppercase text-center font-sans text-[#2d358e]">
            OUR PRODUCTS
         </h2>

         {/* Content Block */}
         <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-14">
            {/* Left: Logo */}
            <div className="w-full md:w-1/2 flex justify-center">
               <Image
                  src={farmDosthLogo}
                  alt="Farm Dosth Logo"
                  className="w-auto h-auto max-w-[360px]"
               />
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-1/2 flex flex-col space-y-6 font-mono text-base md:text-lg leading-relaxed">
               <p>
                  🌾<span className="font-bold">COMING SOON</span>
               </p>

               <p>One platform. Every step. Every harvest.</p>

               <p>
                  From the first seed to the final sale — something game-changing is sprouting for
                  farmers. <br />
                  Tools, support, and smart solutions — all in one place.
               </p>

               <p>🌱Stay tuned. The future of farming is almost here.</p>

               {/* Buttons */}
               <div className="w-full max-w-md p-1 bg-[#2942fa] rounded-xl flex items-center justify-between">
                  <p className="text-white text-sm font-mono px-4 py-2">
                     subscribe to get notified.
                  </p>
                  <button className="bg-[#2ecc40] hover:bg-[#28b737] text-white font-mono text-sm px-6 py-2 rounded-md transition">
                     KNOW MORE
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
}
